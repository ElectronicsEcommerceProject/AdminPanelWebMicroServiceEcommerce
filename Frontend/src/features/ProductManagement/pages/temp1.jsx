import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Chip,
  Avatar,
  LinearProgress,
  Alert,
  IconButton,
  Paper,
} from "@mui/material";
import {
  ArrowBack as ArrowLeft,
  ArrowForward as ArrowRight,
  Check,
  CloudUpload as Upload,
  Close as X,
  ExpandMore,
} from "@mui/icons-material";
import {
  Search as LucideSearch,
  Plus as LucidePlus,
  ChevronDown as LucideChevronDown,
  X as LucideX,
} from "lucide-react";
import { useDropzone } from "react-dropzone";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";

const createApi = async (route, data) => {
  return { success: true, data };
};
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/* -------------------------------------------------------------------------- */
/*                               HELPERS                                      */
/* -------------------------------------------------------------------------- */
const generateSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const getFilePreview = (file) => URL.createObjectURL(file);

/* -------------------------------------------------------------------------- */
/*                               SEARCHABLE DROPDOWN                           */
/* -------------------------------------------------------------------------- */
const SearchableDropdown = ({
  label,
  value,
  onChange,
  options = [],
  placeholder,
  required,
  allowCreate = false,
  disabled,
  displayKey = "name",
  valueKey = "id",
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const selected = options.find((o) => o[valueKey] === value);

  const filtered = useMemo(() => {
    if (!search) return options;
    return options.filter((o) =>
      o[displayKey].toLowerCase().includes(search.toLowerCase())
    );
  }, [options, search]);

  const handleCreate = () => {
    if (!search.trim()) return;
    const newId = `new-${Date.now()}`;
    onChange({
      target: { value: newId, newItem: { [valueKey]: newId, [displayKey]: search } },
    });
    setSearch("");
    setOpen(false);
  };

  return (
    <FormControl fullWidth required={required} disabled={disabled}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value || ""}
        onChange={onChange}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        displayEmpty
        renderValue={(selected) => {
          if (!selected) return <em>{placeholder}</em>;
          const opt = options.find((o) => o[valueKey] === selected);
          return opt?.[displayKey] || selected;
        }}
        MenuProps={{
          PaperProps: { style: { maxHeight: 300 } },
        }}
        IconComponent={ExpandMore}
      >
        <div className="p-2 sticky top-0 bg-white border-b">
          <TextField
            fullWidth
            size="small"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            InputProps={{
              startAdornment: <LucideSearch className="w-4 h-4 text-gray-500 mr-2" />,
            }}
          />
        </div>

        {filtered.map((opt) => (
          <MenuItem key={opt[valueKey]} value={opt[valueKey]}>
            {opt[displayKey]}
          </MenuItem>
        ))}

        {allowCreate && search.trim() && filtered.length === 0 && (
          <MenuItem onClick={handleCreate} className="italic text-blue-600">
            <LucidePlus className="w-4 h-4 mr-2" />
            Create "{search}"
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

/* -------------------------------------------------------------------------- */
/*                               FILE DROPZONE                                 */
/* -------------------------------------------------------------------------- */
const FileDropzone = ({ onFile, label, accept, required, preview }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    maxFiles: 1,
    onDrop: (files) => files[0] && onFile(files[0]),
  });

  return (
    <div>
      <Typography variant="subtitle2" gutterBottom>
        {label} {required && <span className="text-red-500">*</span>}
      </Typography>
      <div
        {...getRootProps()}
        className={twMerge(
          "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        )}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto mb-2 text-gray-400" />
        <p className="text-sm text-gray-600">
          {isDragActive ? "Drop file here" : "Drag & drop or click to upload"}
        </p>
      </div>
      {preview && (
        <Box mt={2} textAlign="center">
          <img
            src={preview}
            alt="Preview"
            className="max-h-40 mx-auto rounded border"
          />
        </Box>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               STEP FORM COMPONENT                           */
/* -------------------------------------------------------------------------- */
const StepForm = ({
  config,
  localData,
  setLocalData,
  relatedSelections,
  setRelatedSelections,
  formData,
  onNext,
  onPrev,
  isFirst,
  isLast,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: localData,
  });

  const watched = watch();

  useEffect(() => {
    setLocalData(watched);
  }, [watched, setLocalData]);

  const handleRelatedSelect = (entity, value) => {
    const selected = formData[entity].find(
      (item) => item.id === value || item[`${entity.slice(0, -1)}_id`] === value
    );
    if (selected) {
      setRelatedSelections((prev) => ({ ...prev, [entity]: selected }));
    }
  };

  const onSubmit = (data) => {
    const finalData = { ...data };
    config.relatedEntities.forEach((e) => {
      if (relatedSelections[e]) {
        const idField = `${e.slice(0, -1)}_id`;
        finalData[idField] = relatedSelections[e].id || relatedSelections[e][idField];
      }
    });
    onNext(finalData);
  };

  return (
    <Card raised>
      <CardHeader
        title={<Typography variant="h6">{config.title}</Typography>}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Related Entities */}
          {config.relatedEntities.map((entity) => {
            const options = formData[entity].map((item) => ({
              id: item.id || item[`${entity.slice(0, -1)}_id`],
              name: item.name || item.sku || item.value,
            }));
            return (
              <SearchableDropdown
                key={entity}
                label={`Select ${entity.slice(0, -1)}`}
                value={
                  relatedSelections[entity]?.id ||
                  relatedSelections[entity]?.[`${entity.slice(0, -1)}_id`] ||
                  ""
                }
                onChange={(e) => handleRelatedSelect(entity, e.target.value)}
                options={options}
                placeholder={`Select ${entity.slice(0, -1)}`}
                required
                allowCreate
              />
            );
          })}

          {/* Fields */}
          {config.fields.map((field) => {
            if (field.type === "file") {
              return (
                <FileDropzone
                  key={field.name}
                  label={field.label}
                  onFile={(file) => setValue(field.name, file)}
                  accept={{ "image/*": [], "video/*": [] }}
                  required={field.required}
                  preview={watched[field.name] ? getFilePreview(watched[field.name]) : null}
                />
              );
            }

            if (field.type === "select") {
              return (
                <FormControl fullWidth key={field.name} error={!!errors[field.name]}>
                  <InputLabel>{field.label}</InputLabel>
                  <Controller
                    name={field.name}
                    control={control}
                    render={({ field: ctrl }) => (
                      <Select {...ctrl} label={field.label}>
                        {field.options.map((opt) => (
                          <MenuItem key={opt.id} value={opt.id}>
                            {opt.name}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl>
              );
            }

            return (
              <Controller
                key={field.name}
                name={field.name}
                control={control}
                render={({ field: ctrl }) => (
                  <TextField
                    {...ctrl}
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                    fullWidth
                    required={field.required}
                    error={!!errors[field.name]}
                    helperText={errors[field.name]?.message}
                    onChange={(e) => {
                      ctrl.onChange(e);
                      if (field.name === "name" && ["name"].includes(field.name)) {
                        setValue("slug", generateSlug(e.target.value));
                      }
                    }}
                  />
                )}
              />
            );
          })}

          <Box display="flex" justifyContent="space-between" mt={4}>
            {!isFirst && (
              <Button startIcon={<ArrowLeft />} onClick={onPrev}>
                Back
              </Button>
            )}
            <Button
              type="submit"
              variant="contained"
              endIcon={isLast ? <Check /> : <ArrowRight />}
              disabled={!isValid}
              className="ml-auto"
            >
              {isLast ? "Review" : "Next"}
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

/* -------------------------------------------------------------------------- */
/*                               REVIEW STEP                                   */
/* -------------------------------------------------------------------------- */
const ReviewStep = ({ stepData, onBack, onSave }) => {
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      const formData = new FormData();
      Object.entries(stepData).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        } else if (value && typeof value === "object") {
          formData.append(key, JSON.stringify(value));
        }
      });

      const res = await createApi("/api/products", formData);
      if (res?.success) {
        toast.success("Product saved successfully!");
        onBack();
      } else {
        throw new Error(res?.message || "Save failed");
      }
    } catch (err) {
      toast.error(err.message || "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card raised>
      <CardHeader title="Review & Submit" className="bg-gradient-to-r from-green-600 to-teal-600 text-white" />
      <CardContent>
        <Grid container spacing={3}>
          {Object.entries(stepData).map(([key, value]) => {
            if (!value || (Array.isArray(value) && value.length === 0)) return null;
            return (
              <Grid item xs={12} md={6} key={key}>
                <Paper variant="outlined" className="p-4">
                  <Typography variant="subtitle2" className="capitalize font-semibold">
                    {key.replace(/_/g, " ")}
                  </Typography>
                  {value instanceof File ? (
                    <img src={getFilePreview(value)} alt="" className="mt-2 max-h-32 rounded" />
                  ) : typeof value === "object" ? (
                    <pre className="text-xs mt-1">{JSON.stringify(value, null, 2)}</pre>
                  ) : (
                    <Typography variant="body2" className="mt-1">
                      {value}
                    </Typography>
                  )}
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        <Box mt={4} display="flex" justifyContent="space-between">
          <Button startIcon={<ArrowLeft />} onClick={onBack}>
            Back
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Product"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */
const ProductCatalogManagement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dashboardData = location.state?.dashboardData;
  const initialEntity = location.state?.entityType;

  const [step, setStep] = useState(1);
  const [stepData, setStepData] = useState({});
  const [relatedSelections, setRelatedSelections] = useState({});

  const stepsConfig = [
    {
      title: "Category",
      fields: [
        { name: "name", label: "Category Name", type: "text", required: true },
        { name: "slug", label: "Slug", type: "text", required: true },
        {
          name: "target_role",
          label: "Target Role",
          type: "select",
          required: true,
          options: [
            { id: "customer", name: "Customer" },
            { id: "retailer", name: "Retailer" },
            { id: "both", name: "Both" },
          ],
        },
      ],
      relatedEntities: [],
    },
    {
      title: "Brand",
      fields: [
        { name: "name", label: "Brand Name", type: "text", required: true },
        { name: "slug", label: "Slug", type: "text", required: true },
      ],
      relatedEntities: ["categories"],
    },
    {
      title: "Product",
      fields: [
        { name: "name", label: "Product Name", type: "text", required: true },
        { name: "slug", label: "Slug", type: "text", required: true },
        { name: "base_price", label: "Base Price", type: "number", required: true },
        { name: "description", label: "Description", type: "text" },
        { name: "average_rating", label: "Rating (1-5)", type: "number" },
        {
          name: "media_type",
          label: "Media Type",
          type: "select",
          required: true,
          options: [
            { id: "image", name: "Image" },
            { id: "video", name: "Video" },
          ],
        },
        { name: "media_file", label: "Upload Media", type: "file", required: true },
      ],
      relatedEntities: ["categories", "brands"],
    },
    {
      title: "Variant",
      fields: [
        { name: "sku", label: "SKU", type: "text", required: true },
        { name: "price", label: "Price", type: "number", required: true },
        { name: "stock_quantity", label: "Stock", type: "number", required: true },
        { name: "min_retailer_quantity", label: "Min Order Qty", type: "number" },
        { name: "discount_quantity", label: "Discount Qty", type: "number" },
        { name: "discount_percentage", label: "Discount %", type: "number" },
        { name: "bulk_discount_quantity", label: "Bulk Qty", type: "number" },
        { name: "bulk_discount_percentage", label: "Bulk %", type: "number" },
        {
          name: "variant_media_type",
          label: "Media Type",
          type: "select",
          required: true,
          options: [
            { id: "image", name: "Image" },
            { id: "video", name: "Video" },
          ],
        },
        { name: "variant_media_file", label: "Upload Variant Media", type: "file", required: true },
      ],
      relatedEntities: ["categories", "brands", "products"],
    },
    {
      title: "Attribute Value",
      fields: [
        { name: "attribute_name", label: "Attribute", type: "text", required: true },
        {
          name: "type",
          label: "Type",
          type: "select",
          required: true,
          options: [
            { id: "string", name: "String" },
            { id: "select", name: "Select" },
            { id: "integer", name: "Integer" },
            { id: "float", name: "Float" },
            { id: "enum", name: "Enum" },
          ],
        },
        { name: "value", label: "Value", type: "text", required: true },
      ],
      relatedEntities: ["categories", "brands", "products", "variants"],
    },
  ];

  const formData = useMemo(() => {
    if (!dashboardData) return {};
    return {
      categories: dashboardData.categories || [],
      brands: dashboardData.brands || [],
      products: dashboardData.products || [],
      variants: dashboardData.variants || [],
      attributeValues: dashboardData.attributeValues || [],
    };
  }, [dashboardData]);

  useEffect(() => {
    if (initialEntity) {
      const map = { category: 1, brand: 2, product: 3, variant: 4, attributevalue: 5 };
      setStep(map[initialEntity.toLowerCase()] || 1);
    }
  }, [initialEntity]);

  const handleNext = (data) => {
    setStepData((prev) => ({ ...prev, [step]: data }));
    setStep((s) => s + 1);
  };

  const handlePrev = () => setStep((s) => s - 1);

  const currentConfig = stepsConfig[step - 1];
  const isLastStep = step === stepsConfig.length;

  return (
    <Box className="p-4 md:p-8">
      <Box maxWidth="lg" mx="auto">
        <Typography variant="h4" className="text-center mb-6 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Product Catalog Management
        </Typography>

        <Stepper activeStep={step - 1} alternativeLabel className="mb-8">
          {stepsConfig.map((s, i) => (
            <Step key={i}>
              <StepLabel>{s.title}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {isLastStep ? (
          <ReviewStep
            stepData={stepData}
            onBack={() => setStep(stepsConfig.length)}
            onSave={() => navigate("/admin")}
          />
        ) : (
          <StepForm
            config={currentConfig}
            localData={stepData[step] || {}}
            setLocalData={(data) => setStepData((prev) => ({ ...prev, [step]: data }))}
            relatedSelections={relatedSelections}
            setRelatedSelections={setRelatedSelections}
            formData={formData}
            onNext={handleNext}
            onPrev={handlePrev}
            isFirst={step === 1}
            isLast={isLastStep}
          />
        )}
      </Box>
    </Box>
  );
};

export default ProductCatalogManagement;