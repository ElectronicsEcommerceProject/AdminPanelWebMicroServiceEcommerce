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
    { product_id: 1, name: "Galaxy S23", slug: "galaxy-s23", description: "Flagship phone with advanced camera", base_price: 999, rating_average: 4.5, category_name: "Electronics", brand_name: "Samsung", category_id: 1, brand_id: 1, target_role: "both", created_at: "2024-01-15", updated_at: "2024-01-20" },
    { product_id: 2, name: "Galaxy Tab", slug: "galaxy-tab", description: "Powerful tablet for work", base_price: 599, rating_average: 4.2, category_name: "Electronics", brand_name: "Samsung", category_id: 1, brand_id: 1, target_role: "both", created_at: "2024-01-10", updated_at: "2024-01-18" },
    { product_id: 3, name: "AirPods Pro", slug: "airpods-pro", description: "Wireless earbuds with noise cancellation", base_price: 249, rating_average: 4.8, category_name: "Accessories", brand_name: "Apple", category_id: 2, brand_id: 2, target_role: "customer", created_at: "2024-01-05", updated_at: "2024-01-12" },
    { product_id: 4, name: "iPhone 15 Pro", slug: "iphone-15-pro", description: "Latest iPhone with A17 chip", base_price: 1299, rating_average: 4.9, category_name: "Electronics", brand_name: "Apple", category_id: 1, brand_id: 2, target_role: "both", created_at: "2024-02-01", updated_at: "2024-02-05" },
    { product_id: 5, name: "MacBook Pro", slug: "macbook-pro", description: "Professional laptop with M3 chip", base_price: 2499, rating_average: 4.7, category_name: "Electronics", brand_name: "Apple", category_id: 1, brand_id: 2, target_role: "retailer", created_at: "2024-02-10", updated_at: "2024-02-15" },
    { product_id: 6, name: "Galaxy Watch 6", slug: "galaxy-watch-6", description: "Smartwatch with health tracking", base_price: 399, rating_average: 4.3, category_name: "Accessories", brand_name: "Samsung", category_id: 2, brand_id: 1, target_role: "both", created_at: "2024-02-20", updated_at: "2024-02-25" },
    { product_id: 7, name: "iPad Air", slug: "ipad-air", description: "Lightweight tablet for creativity", base_price: 799, rating_average: 4.6, category_name: "Electronics", brand_name: "Apple", category_id: 1, brand_id: 2, target_role: "customer", created_at: "2024-03-01", updated_at: "2024-03-05" },
    { product_id: 8, name: "Galaxy Buds Pro", slug: "galaxy-buds-pro", description: "Premium wireless earbuds", base_price: 199, rating_average: 4.4, category_name: "Accessories", brand_name: "Samsung", category_id: 2, brand_id: 1, target_role: "both", created_at: "2024-03-10", updated_at: "2024-03-15" },
    { product_id: 9, name: "Apple Watch Ultra", slug: "apple-watch-ultra", description: "Rugged smartwatch for adventures", base_price: 899, rating_average: 4.8, category_name: "Accessories", brand_name: "Apple", category_id: 2, brand_id: 2, target_role: "retailer", created_at: "2024-03-20", updated_at: "2024-03-25" },
    { product_id: 10, name: "Galaxy Z Fold 5", slug: "galaxy-z-fold-5", description: "Foldable smartphone innovation", base_price: 1799, rating_average: 4.5, category_name: "Electronics", brand_name: "Samsung", category_id: 1, brand_id: 1, target_role: "both", created_at: "2024-04-01", updated_at: "2024-04-05" },
    { product_id: 11, name: "Magic Keyboard", slug: "magic-keyboard", description: "Wireless keyboard for Mac", base_price: 149, rating_average: 4.2, category_name: "Accessories", brand_name: "Apple", category_id: 2, brand_id: 2, target_role: "customer", created_at: "2024-04-10", updated_at: "2024-04-15" },
    { product_id: 12, name: "Galaxy Book 3", slug: "galaxy-book-3", description: "Powerful Windows laptop", base_price: 1499, rating_average: 4.3, category_name: "Electronics", brand_name: "Samsung", category_id: 1, brand_id: 1, target_role: "retailer", created_at: "2024-04-20", updated_at: "2024-04-25" },
    { product_id: 13, name: "AirTag 4 Pack", slug: "airtag-4-pack", description: "Item trackers for your belongings", base_price: 99, rating_average: 4.7, category_name: "Accessories", brand_name: "Apple", category_id: 2, brand_id: 2, target_role: "both", created_at: "2024-05-01", updated_at: "2024-05-05" },
    { product_id: 14, name: "Galaxy S23 Ultra", slug: "galaxy-s23-ultra", description: "Ultimate flagship with S Pen", base_price: 1399, rating_average: 4.9, category_name: "Electronics", brand_name: "Samsung", category_id: 1, brand_id: 1, target_role: "both", created_at: "2024-05-10", updated_at: "2024-05-15" },
    { product_id: 15, name: "HomePod Mini", slug: "homepod-mini", description: "Smart speaker with Siri", base_price: 99, rating_average: 4.1, category_name: "Accessories", brand_name: "Apple", category_id: 2, brand_id: 2, target_role: "customer", created_at: "2024-05-20", updated_at: "2024-05-25" },
    { product_id: 16, name: "Galaxy Tab S9", slug: "galaxy-tab-s9", description: "Premium Android tablet", base_price: 899, rating_average: 4.6, category_name: "Electronics", brand_name: "Samsung", category_id: 1, brand_id: 1, target_role: "retailer", created_at: "2024-06-01", updated_at: "2024-06-05" },
    { product_id: 17, name: "iPhone 15", slug: "iphone-15", description: "Standard iPhone with great features", base_price: 999, rating_average: 4.5, category_name: "Electronics", brand_name: "Apple", category_id: 1, brand_id: 2, target_role: "both", created_at: "2024-06-10", updated_at: "2024-06-15" },
    { product_id: 18, name: "Galaxy Ring", slug: "galaxy-ring", description: "Smart ring for health tracking", base_price: 299, rating_average: 4.0, category_name: "Accessories", brand_name: "Samsung", category_id: 2, brand_id: 1, target_role: "customer", created_at: "2024-06-20", updated_at: "2024-06-25" },
    { product_id: 19, name: "Mac Mini", slug: "mac-mini", description: "Compact desktop with M2 chip", base_price: 699, rating_average: 4.4, category_name: "Electronics", brand_name: "Apple", category_id: 1, brand_id: 2, target_role: "retailer", created_at: "2024-07-01", updated_at: "2024-07-05" },
    { product_id: 20, name: "Galaxy Fit 3", slug: "galaxy-fit-3", description: "Fitness tracker band", base_price: 79, rating_average: 4.2, category_name: "Accessories", brand_name: "Samsung", category_id: 2, brand_id: 1, target_role: "both", created_at: "2024-07-10", updated_at: "2024-07-15" },
    { product_id: 21, name: "iPad Pro 12.9", slug: "ipad-pro-12-9", description: "Professional tablet with M2", base_price: 1299, rating_average: 4.8, category_name: "Electronics", brand_name: "Apple", category_id: 1, brand_id: 2, target_role: "customer", created_at: "2024-07-20", updated_at: "2024-07-25" },
    { product_id: 22, name: "Galaxy A54", slug: "galaxy-a54", description: "Mid-range phone with great value", base_price: 449, rating_average: 4.3, category_name: "Electronics", brand_name: "Samsung", category_id: 1, brand_id: 1, target_role: "both", created_at: "2024-08-01", updated_at: "2024-08-05" },
    { product_id: 23, name: "Apple Pencil 2", slug: "apple-pencil-2", description: "Precision stylus for iPad", base_price: 129, rating_average: 4.7, category_name: "Accessories", brand_name: "Apple", category_id: 2, brand_id: 2, target_role: "retailer", created_at: "2024-08-10", updated_at: "2024-08-15" },
    { product_id: 24, name: "Galaxy Chromebook", slug: "galaxy-chromebook", description: "Lightweight Chrome OS laptop", base_price: 699, rating_average: 4.1, category_name: "Electronics", brand_name: "Samsung", category_id: 1, brand_id: 1, target_role: "customer", created_at: "2024-08-20", updated_at: "2024-08-25" },
    { product_id: 25, name: "iPhone SE", slug: "iphone-se", description: "Affordable iPhone with power", base_price: 429, rating_average: 4.4, category_name: "Electronics", brand_name: "Apple", category_id: 1, brand_id: 2, target_role: "both", created_at: "2024-09-01", updated_at: "2024-09-05" },
    { product_id: 26, name: "Galaxy SmartTag 2", slug: "galaxy-smarttag-2", description: "Bluetooth tracker for items", base_price: 29, rating_average: 4.0, category_name: "Accessories", brand_name: "Samsung", category_id: 2, brand_id: 1, target_role: "retailer", created_at: "2024-09-10", updated_at: "2024-09-15" },
    { product_id: 27, name: "Mac Studio", slug: "mac-studio", description: "High-performance desktop", base_price: 1999, rating_average: 4.9, category_name: "Electronics", brand_name: "Apple", category_id: 1, brand_id: 2, target_role: "customer", created_at: "2024-09-20", updated_at: "2024-09-25" },
    { product_id: 28, name: "Galaxy Z Flip 5", slug: "galaxy-z-flip-5", description: "Compact foldable phone", base_price: 999, rating_average: 4.5, category_name: "Electronics", brand_name: "Samsung", category_id: 1, brand_id: 1, target_role: "both", created_at: "2024-10-01", updated_at: "2024-10-05" },
    { product_id: 29, name: "MagSafe Charger", slug: "magsafe-charger", description: "Wireless charging for iPhone", base_price: 39, rating_average: 4.3, category_name: "Accessories", brand_name: "Apple", category_id: 2, brand_id: 2, target_role: "retailer", created_at: "2024-10-10", updated_at: "2024-10-15" },
    { product_id: 30, name: "Galaxy M34", slug: "galaxy-m34", description: "Budget-friendly smartphone", base_price: 299, rating_average: 4.1, category_name: "Electronics", brand_name: "Samsung", category_id: 1, brand_id: 1, target_role: "customer", created_at: "2024-10-20", updated_at: "2024-10-25" },
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
