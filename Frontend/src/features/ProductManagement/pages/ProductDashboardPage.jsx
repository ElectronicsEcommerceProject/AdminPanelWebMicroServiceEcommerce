import React, { useEffect, useMemo, useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Chip,
  Box,
  CircularProgress,
  Alert,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  Clear as ClearIcon,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import {
  Search as LucideSearch,
  Plus as LucidePlus,
  Filter as LucideFilter,
  X as LucideX,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";

const mockData = {
  categories: [
    { category_id: 1, name: "Electronics", slug: "electronics", target_role: "both", product_ids: [1, 2] },
    { category_id: 2, name: "Accessories", slug: "accessories", target_role: "customer", product_ids: [3] },
  ],
  brands: [
    { brand_id: 1, name: "Samsung", slug: "samsung", product_ids: [1, 2] },
    { brand_id: 2, name: "Apple", slug: "apple", product_ids: [3] },
  ],
  products: [
    { product_id: 1, name: "Galaxy S23", slug: "galaxy-s23", description: "Flagship phone", base_price: 999, rating_average: 4.5, category_name: "Electronics", brand_name: "Samsung", category_id: 1, brand_id: 1 },
    { product_id: 2, name: "Galaxy Tab", slug: "galaxy-tab", description: "Tablet", base_price: 599, rating_average: 4.2, category_name: "Electronics", brand_name: "Samsung", category_id: 1, brand_id: 1 },
    { product_id: 3, name: "AirPods Pro", slug: "airpods-pro", description: "Wireless earbuds", base_price: 249, rating_average: 4.8, category_name: "Accessories", brand_name: "Apple", category_id: 2, brand_id: 2 },
  ],
  variants: [
    { product_variant_id: 1, product_id: 1, product_name: "Galaxy S23", sku: "GS23-BLK-128", price: 999, description: "Black 128GB", stock_quantity: 50, discount_percentage: 10, discount_quantity: 5, min_retailer_quantity: 10, bulk_discount_percentage: 15, bulk_discount_quantity: 20 },
    { product_variant_id: 2, product_id: 1, product_name: "Galaxy S23", sku: "GS23-WHT-256", price: 1099, description: "White 256GB", stock_quantity: 30, discount_percentage: 10, discount_quantity: 5, min_retailer_quantity: 10, bulk_discount_percentage: 15, bulk_discount_quantity: 20 },
    { product_variant_id: 3, product_id: 3, product_name: "AirPods Pro", sku: "APP-WHT", price: 249, description: "White", stock_quantity: 100, discount_percentage: 5, discount_quantity: 3, min_retailer_quantity: 5, bulk_discount_percentage: 10, bulk_discount_quantity: 10 },
  ],
  attributeValues: [
    { product_attribute_value_id: 1, attribute_name: "Color", value: "Black", product_ids: [1] },
    { product_attribute_value_id: 2, attribute_name: "Storage", value: "128GB", product_ids: [1, 2] },
    { product_attribute_value_id: 3, attribute_name: "Color", value: "White", product_ids: [3] },
  ],
};

const getApi = async () => {
  return { success: true, data: mockData };
};

const updateApiById = async (route, entityType, data) => {
  return { success: true, data };
};

const deleteApiByCondition = async (route, id, entityType) => {
  return { success: true };
};

const EntityCard = ({
  title,
  rows,
  columns,
  onAdd,
  onEdit,
  onDelete,
  onRowClick,
  activeFilter,
  onClearFilter,
  selectedRow,
  searchPlaceholder,
}) => {
  const [search, setSearch] = useState("");

  const filteredRows = useMemo(() => {
    if (!search) return rows;
    const term = search.toLowerCase();
    return rows.filter((r) =>
      Object.values(r).some(
        (v) => v && v.toString().toLowerCase().includes(term)
      )
    );
  }, [rows, search]);

  return (
    <Card raised className="h-full flex flex-col">
      <CardHeader
        title={
          <div className="flex items-center justify-between">
            <Typography
              variant="h6"
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              {title}
            </Typography>
            <div className="flex items-center gap-2">
              {activeFilter && (
                <Chip
                  label="Filtered"
                  size="small"
                  color="primary"
                  onDelete={onClearFilter}
                  deleteIcon={<LucideX className="w-4 h-4" />}
                />
              )}
              <Tooltip title={`Add ${title.toLowerCase()}`}>
                <IconButton
                  onClick={onAdd}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  <LucidePlus className="w-5 h-5" />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        }
      />
      <CardContent className="flex flex-col flex-1 gap-3 pb-3">
        <TextField
          fullWidth
          size="small"
          placeholder={searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LucideSearch className="w-5 h-5 text-gray-500" />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />

        <Box sx={{ flexGrow: 1, minHeight: 260 }}>
          <DataGrid
            rows={filteredRows}
            columns={[
              ...columns,
              {
                field: "actions",
                headerName: "Actions",
                width: 110,
                sortable: false,
                renderCell: (params) => (
                  <div className="flex gap-1">
                    <Tooltip title="Edit">
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          onEdit(params.row.id, params.row);
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        size="small"
                        color="error"
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(params.row.id);
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </div>
                ),
              },
            ]}
            getRowId={(row) => row.id}
            onRowClick={(params) => onRowClick(params.row)}
            rowSelectionModel={selectedRow ? [selectedRow.id] : []}
            disableRowSelectionOnClick={false}
            sx={{
              "& .MuiDataGrid-row:hover": { bgcolor: "action.hover" },
              "& .MuiDataGrid-row.Mui-selected": {
                bgcolor: "primary.50",
                borderLeft: "4px solid",
                borderColor: "primary.main",
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

const EditModal = ({ open, onClose, entityType, item, onSave }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: item || {},
  });

  useEffect(() => {
    reset(item || {});
  }, [item, reset]);

  const onSubmit = (data) => {
    onSave(entityType, { ...item, ...data });
    onClose();
  };

  if (!open) return null;

  const fields = Object.keys(item || {}).filter(
    (k) => !["_id", "id", "product_ids"].includes(k)
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit {entityType}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          {fields.map((key) => {
            const label = key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
            const isSelect = key === "target_role";

            return (
              <Controller
                key={key}
                name={key}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select={isSelect}
                    label={label}
                    fullWidth
                    margin="dense"
                    error={!!errors[key]}
                    helperText={errors[key]?.message}
                    SelectProps={{ native: true }}
                  >
                    {isSelect && (
                      <>
                        <option value="customer">Customer</option>
                        <option value="retailer">Retailer</option>
                        <option value="both">Both</option>
                      </>
                    )}
                  </TextField>
                )}
              />
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const ProductDashboardPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    categories: [],
    brands: [],
    products: [],
    variants: [],
    attributeValues: [],
  });
  const [filtered, setFiltered] = useState({ ...data });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editModal, setEditModal] = useState({
    open: false,
    entityType: "",
    item: null,
  });
  const [activeFilters, setActiveFilters] = useState({});
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const res = await getApi();
        if (res?.success) {
          const transformed = {
            categories: res.data.categories.map((c) => ({
              id: c.category_id,
              name: c.name,
              slug: c.slug,
              target_role: c.target_role,
              product_ids: c.product_ids || [],
            })),
            brands: res.data.brands.map((b) => ({
              id: b.brand_id,
              name: b.name,
              slug: b.slug,
              product_ids: b.product_ids || [],
            })),
            products: res.data.products.map((p) => ({
              id: p.product_id,
              name: p.name,
              slug: p.slug,
              description: p.description,
              base_price: p.base_price,
              rating_average: p.rating_average,
              category_name: p.category_name,
              brand_name: p.brand_name,
              category_id: p.category_id,
              brand_id: p.brand_id,
            })),
            variants: res.data.variants.map((v) => ({
              id: v.product_variant_id,
              product_id: v.product_id,
              product_name: v.product_name,
              sku: v.sku,
              price: v.price,
              description: v.description,
              stock_quantity: v.stock_quantity,
              discount_percentage: v.discount_percentage,
              discount_quantity: v.discount_quantity,
              min_retailer_quantity: v.min_retailer_quantity,
              bulk_discount_percentage: v.bulk_discount_percentage,
              bulk_discount_quantity: v.bulk_discount_quantity,
            })),
            attributeValues: res.data.attributeValues.map((a) => ({
              id: a.product_attribute_value_id,
              attribute: a.attribute_name,
              value: a.value,
              product_ids: a.product_ids || [],
            })),
          };
          setData(transformed);
          setFiltered(transformed);
        } else {
          throw new Error("API error");
        }
      } catch (err) {
        setError("Failed to load data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const applyFilters = (entity, item) => {
    const newFilters = { ...activeFilters, [entity]: item };
    const newSelected = { ...selected, [entity]: item };
    setActiveFilters(newFilters);
    setSelected(newSelected);

    const filterMap = {
      categories: () => {
        const ids = item.product_ids || [];
        setFiltered((prev) => ({
          ...prev,
          products: data.products.filter((p) => ids.includes(p.id)),
          variants: data.variants.filter((v) => ids.includes(v.product_id)),
          attributeValues: data.attributeValues.filter((a) =>
            a.product_ids.some((pid) => ids.includes(pid))
          ),
          brands: data.brands.filter((b) =>
            b.product_ids.some((pid) => ids.includes(pid))
          ),
        }));
      },
      brands: () => {
        const ids = item.product_ids || [];
        setFiltered((prev) => ({
          ...prev,
          products: data.products.filter((p) => ids.includes(p.id)),
          variants: data.variants.filter((v) => ids.includes(v.product_id)),
          attributeValues: data.attributeValues.filter((a) =>
            a.product_ids.some((pid) => ids.includes(pid))
          ),
          categories: data.categories.filter((c) =>
            c.product_ids.some((pid) => ids.includes(pid))
          ),
        }));
      },
      products: () => {
        const cat = data.categories.find((c) => c.id === item.category_id);
        const brand = data.brands.find((b) => b.id === item.brand_id);
        setFiltered((prev) => ({
          ...prev,
          variants: data.variants.filter((v) => v.product_id === item.id),
          attributeValues: data.attributeValues.filter((a) =>
            a.product_ids.includes(item.id)
          ),
          categories: cat ? [cat] : [],
          brands: brand ? [brand] : [],
        }));
      },
      variants: () => {
        const prod = data.products.find((p) => p.id === item.product_id);
        if (prod) applyFilters("products", prod);
      },
      attributeValues: () => {
        const prodIds = item.product_ids || [];
        const prods = data.products.filter((p) => prodIds.includes(p.id));
        setFiltered((prev) => ({
          ...prev,
          products: prods,
          variants: data.variants.filter((v) =>
            prodIds.includes(v.product_id)
          ),
          categories: [
            ...new Set(
              prods.map((p) => data.categories.find((c) => c.id === p.category_id)).filter(Boolean)
            ),
          ],
          brands: [
            ...new Set(
              prods.map((p) => data.brands.find((b) => b.id === p.brand_id)).filter(Boolean)
            ),
          ],
        }));
      },
    };

    (filterMap[entity] || (() => {}))();
  };

  const clearFilter = (entity) => {
    const newFilters = { ...activeFilters };
    delete newFilters[entity];
    setActiveFilters(newFilters);
    const newSel = { ...selected };
    delete newSel[entity];
    setSelected(newSel);

    if (Object.keys(newFilters).length === 0) {
      setFiltered(data);
    } else {
      const remaining = Object.keys(newFilters)[0];
      applyFilters(remaining, newFilters[remaining]);
    }
  };

  const resetAll = () => {
    setActiveFilters({});
    setSelected({});
    setFiltered(data);
  };

  const handleAdd = (type) => {
    const map = {
      category: "categories",
      brand: "brands",
      product: "products",
      variant: "variants",
      "attribute-value": "attributeValues",
    };
    const entity = map[type];
    if (!entity) return;

    const required = {
      categories: null,
      brands: ["categories"],
      products: ["brands"],
      variants: ["products"],
      attributeValues: ["products", "variants"],
    };

    const missing = required[entity]?.find((e) => !activeFilters[e]);
    if (missing) {
      toast.info(`Select a ${missing} first`);
      return;
    }

    navigate("/products/create", {
      state: { entityType: type, selectedItems: selected, dashboardData: data },
    });
  };

  const handleEdit = (entityType, id, row) => {
    setEditModal({ open: true, entityType, item: row });
  };

  const handleSave = async (entityType, updated) => {
    setLoading(true);
    try {
      const res = await updateApiById("/api/products", entityType, updated);
      if (res?.success) {
        const key = entityType.toLowerCase() + "s";
        setData((prev) => ({
          ...prev,
          [key]: prev[key].map((i) => (i.id === updated.id ? { ...i, ...updated } : i)),
        }));
        toast.success(`${entityType} updated`);
      } else {
        throw new Error(res?.message || "Update failed");
      }
    } catch (e) {
      toast.error(e.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (entityType, id) => {
    if (!window.confirm(`Delete this ${entityType}?`)) return;
    setLoading(true);
    try {
      const res = await deleteApiByCondition("/api/products", id, entityType);
      if (res?.success) {
        const key = entityType.toLowerCase() + "s";
        setData((prev) => ({
          ...prev,
          [key]: prev[key].filter((i) => i.id !== id),
        }));
        toast.success(`${entityType} deleted`);
      } else {
        throw new Error(res?.message || "Delete failed");
      }
    } catch (e) {
      toast.error(e.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  const columnDefs = {
    categories: [
      { field: "name", headerName: "Name", flex: 1 },
      { field: "slug", headerName: "Slug", flex: 1 },
      { field: "target_role", headerName: "Target", width: 120 },
    ],
    brands: [
      { field: "name", headerName: "Name", flex: 1 },
      { field: "slug", headerName: "Slug", flex: 1 },
    ],
    products: [
      { field: "name", headerName: "Name", flex: 1 },
      { field: "slug", headerName: "Slug", flex: 1 },
      { field: "base_price", headerName: "Price", width: 100, type: "number" },
      { field: "rating_average", headerName: "Rating", width: 100, type: "number" },
    ],
    variants: [
      { field: "sku", headerName: "Variant", flex: 1 },
      { field: "product_name", headerName: "Product", flex: 1 },
      { field: "price", headerName: "Price", width: 100, type: "number" },
      { field: "stock_quantity", headerName: "Stock", width: 100, type: "number" },
      { field: "discount_percentage", headerName: "Disc %", width: 100, type: "number" },
      { field: "min_retailer_quantity", headerName: "Min Qty", width: 100, type: "number" },
    ],
    attributeValues: [
      { field: "attribute", headerName: "Attribute", flex: 1 },
      { field: "value", headerName: "Value", flex: 1 },
    ],
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <Typography variant="h5" className="font-bold">
          Product Management
        </Typography>
        <div className="flex gap-2">
          <Button variant="contained" onClick={() => navigate("/products/create")}>
            Add New Product
          </Button>
          <Button variant="outlined" onClick={resetAll}>
            Reset Filters
          </Button>
        </div>
      </div>

      {error && <Alert severity="error" className="mb-4">{error}</Alert>}

      {loading ? (
        <Box display="flex" justifyContent="center" my={8}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <EntityCard
              title="Categories"
              rows={filtered.categories}
              columns={columnDefs.categories}
              searchPlaceholder="Search categories..."
              onAdd={() => handleAdd("category")}
              onEdit={(id, row) => handleEdit("Categories", id, row)}
              onDelete={(id) => handleDelete("Categories", id)}
              onRowClick={(row) => applyFilters("categories", row)}
              activeFilter={activeFilters.categories}
              onClearFilter={() => clearFilter("categories")}
              selectedRow={selected.categories}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EntityCard
              title="Brands"
              rows={filtered.brands}
              columns={columnDefs.brands}
              searchPlaceholder="Search brands..."
              onAdd={() => handleAdd("brand")}
              onEdit={(id, row) => handleEdit("Brands", id, row)}
              onDelete={(id) => handleDelete("Brands", id)}
              onRowClick={(row) => applyFilters("brands", row)}
              activeFilter={activeFilters.brands}
              onClearFilter={() => clearFilter("brands")}
              selectedRow={selected.brands}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EntityCard
              title="Products"
              rows={filtered.products}
              columns={columnDefs.products}
              searchPlaceholder="Search products..."
              onAdd={() => handleAdd("product")}
              onEdit={(id, row) => handleEdit("Products", id, row)}
              onDelete={(id) => handleDelete("Products", id)}
              onRowClick={(row) => applyFilters("products", row)}
              activeFilter={activeFilters.products}
              onClearFilter={() => clearFilter("products")}
              selectedRow={selected.products}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EntityCard
              title="Product Variants"
              rows={filtered.variants}
              columns={columnDefs.variants}
              searchPlaceholder="Search variants..."
              onAdd={() => handleAdd("variant")}
              onEdit={(id, row) => handleEdit("Variants", id, row)}
              onDelete={(id) => handleDelete("Variants", id)}
              onRowClick={(row) => applyFilters("variants", row)}
              activeFilter={activeFilters.variants}
              onClearFilter={() => clearFilter("variants")}
              selectedRow={selected.variants}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EntityCard
              title="Attribute Values"
              rows={filtered.attributeValues}
              columns={columnDefs.attributeValues}
              searchPlaceholder="Search attribute values..."
              onAdd={() => handleAdd("attribute-value")}
              onEdit={(id, row) => handleEdit("AttributeValues", id, row)}
              onDelete={(id) => handleDelete("AttributeValues", id)}
              onRowClick={(row) => applyFilters("attributeValues", row)}
              activeFilter={activeFilters.attributeValues}
              onClearFilter={() => clearFilter("attributeValues")}
              selectedRow={selected.attributeValues}
            />
          </Grid>
        </Grid>
      )}

      <EditModal
        open={editModal.open}
        onClose={() => setEditModal({ open: false, entityType: "", item: null })}
        entityType={editModal.entityType}
        item={editModal.item}
        onSave={handleSave}
      />
    </div>
  );
};

export default ProductDashboardPage;
