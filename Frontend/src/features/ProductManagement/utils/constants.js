export const mockData = {
  categories: [
    { category_id: 1, name: "Electronics", slug: "electronics", target_role: "both", product_ids: [1, 2] },
    { category_id: 2, name: "Accessories", slug: "accessories", target_role: "customer", product_ids: [3] },
  ],
  brands: [
    { brand_id: 1, name: "Samsung", slug: "samsung", product_ids: [1, 2] },
    { brand_id: 2, name: "Apple", slug: "apple", product_ids: [3] },
  ],
  products: [
    { product_id: 1, name: "Galaxy S23", slug: "galaxy-s23", description: "Flagship phone with advanced camera and performance", base_price: 999, rating_average: 4.5, category_name: "Electronics", brand_name: "Samsung", category_id: 1, brand_id: 1, target_role: "both", created_at: "2024-01-15", updated_at: "2024-01-20" },
    { product_id: 2, name: "Galaxy Tab", slug: "galaxy-tab", description: "Powerful tablet for work and entertainment", base_price: 599, rating_average: 4.2, category_name: "Electronics", brand_name: "Samsung", category_id: 1, brand_id: 1, target_role: "both", created_at: "2024-01-10", updated_at: "2024-01-18" },
    { product_id: 3, name: "AirPods Pro", slug: "airpods-pro", description: "Wireless earbuds with noise cancellation", base_price: 249, rating_average: 4.8, category_name: "Accessories", brand_name: "Apple", category_id: 2, brand_id: 2, target_role: "customer", created_at: "2024-01-05", updated_at: "2024-01-12" },
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

// Mock API functions
export const getApi = async () => {
  return { success: true, data: mockData };
};

export const updateApiById = async (route, entityType, data) => {
  return { success: true, data };
};

export const deleteApiByCondition = async (route, id, entityType) => {
  return { success: true };
};
