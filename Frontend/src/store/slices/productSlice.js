/**
 * PURPOSE: Redux slice for product state management
 * 
 * LOGIC:
 * - Create productSlice with:
 *   - name: 'product'
 *   - initialState: { products: [], categories: [], brands: [], selectedProduct: null, loading: false }
 *   - reducers:
 *     - setProducts: Update products array
 *     - setCategories: Update categories array
 *     - setBrands: Update brands array
 *     - setSelectedProduct: Set currently viewed product
 *     - updateProduct: Update specific product in array
 *     - deleteProduct: Remove product from array
 * - Export actions: setProducts, setCategories, setBrands, setSelectedProduct, updateProduct, deleteProduct
 * - Export reducer as default
 * 
 * EXAMPLE:
 * dispatch(setProducts([{id: 1, name: 'iPhone 15', price: 79999}]))
 * dispatch(updateProduct({id: 1, price: 75999}))
 */
