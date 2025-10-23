import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  CircularProgress,
  Alert,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EntityCard from "../components/layout/EntityCard";
import EditModal from "../components/ui/EditModal";
import { mockData, getApi, updateApiById, deleteApiByCondition } from "../utils/constants";

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
              target_role: p.target_role,
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
          throw new Error("Failed to load data");
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
        toast.success(`${entityType} updated successfully`);
      } else {
        throw new Error("Update failed");
      }
    } catch (e) {
      toast.error(e.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (entityType, id) => {
    if (!window.confirm(`Are you sure you want to delete this ${entityType}?`)) return;
    setLoading(true);
    try {
      const res = await deleteApiByCondition("/api/products", id, entityType);
      if (res?.success) {
        const key = entityType.toLowerCase() + "s";
        setData((prev) => ({
          ...prev,
          [key]: prev[key].filter((i) => i.id !== id),
        }));
        toast.success(`${entityType} deleted successfully`);
      } else {
        throw new Error("Delete failed");
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
      { field: "base_price", headerName: "Price", width: 100, type: "number", renderCell: (params) => `₹${params.value}` },
      { field: "rating_average", headerName: "Rating", width: 100, type: "number", renderCell: (params) => `${params.value} ⭐` },
    ],
    variants: [
      { field: "sku", headerName: "Variant", flex: 1 },
      { field: "product_name", headerName: "Product", flex: 1 },
      { field: "price", headerName: "Price", width: 100, type: "number", renderCell: (params) => `₹${params.value}` },
      { field: "stock_quantity", headerName: "Stock", width: 100, type: "number" },
      { field: "discount_percentage", headerName: "Disc %", width: 100, type: "number", renderCell: (params) => `${params.value}%` },
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
        <Typography variant="h5" className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Product Dashboard
        </Typography>
        <div className="flex gap-2">
          <Button 
            variant="contained" 
            onClick={() => navigate("/products/create")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
          >
            Add New Product
          </Button>
          <Button 
            variant="outlined" 
            onClick={resetAll}
            className="rounded-lg"
          >
            Reset Filters
          </Button>
        </div>
      </div>

      {error && (
        <Alert severity="error" className="mb-4 rounded-lg">
          {error}
        </Alert>
      )}

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" my={8}>
          <CircularProgress size={60} />
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
