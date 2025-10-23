// // Hardcoded stock data
// export const STOCK_DATA = [
//   { id: 'd88392d5-1058-429d-97a6-cab0445aec0d', product: '44W flash charge', brand: 'Vivo', variant: 'White variants', category: 'Charger', price: 1000, stock: 50, carts: 0, available: 50, sold: 0, status: 'In Stock' },
//   { id: 'a77492d5-2158-529d-87a6-dab0545bec1e', product: '45W', brand: 'Vivo', variant: 'White variants', category: 'Charger', price: 1000, stock: 50, carts: 0, available: 50, sold: 0, status: 'In Stock' },
//   { id: 'b66382c4-3268-639e-98b7-ebc1656ced2f', product: '55w ultra fast usb charger', brand: 'mi', variant: 'White variants', category: 'Charger', price: 1000, stock: 50, carts: 0, available: 50, sold: 0, status: 'In Stock' },
//   { id: 'c55271b3-4378-741f-19c8-fcd2767dfe3g', product: '85W dash charger', brand: 'OnePlus', variant: 'White variants', category: 'Charger', price: 1000, stock: 50, carts: 0, available: 50, sold: 0, status: 'In Stock' },
//   { id: 'd44160a2-5489-852g-21d9-gde3878egd4h', product: 'Airdopes141X', brand: 'Airpods', variant: 'Black variants', category: 'Earphones', price: 999, stock: 50, carts: 0, available: 50, sold: 0, status: 'In Stock' },
//   { id: 'e33059z1-6591-963h-32e1-hef4989fhe5i', product: 'Beat expectation', brand: 'Earphones', variant: 'Black variants', category: 'Earphones', price: 150, stock: 50, carts: 0, available: 50, sold: 0, status: 'In Stock' },
//   { id: 'f22948y0-7612-174i-43f2-ifg5191gif6j', product: 'Boat blastpods', brand: 'Boat', variant: 'Black variants', category: 'Earphones', price: 999, stock: 50, carts: 0, available: 50, sold: 0, status: 'In Stock' },
//   { id: 'g11837x9-8723-285j-54g3-jgh6212hjg7k', product: 'Boat earphone', brand: 'Boat', variant: 'Black variant', category: 'Earphones', price: 100, stock: 50, carts: 0, available: 50, sold: 0, status: 'In Stock' },
//   { id: 'h00726w8-9834-396k-65h4-khi7323ikh8l', product: 'Boat killer', brand: 'Boat', variant: 'Red variant', category: 'Earphones', price: 200, stock: 50, carts: 0, available: 50, sold: 0, status: 'In Stock' },
//   { id: 'i99615v7-1945-417l-76i5-lij8434jli9m', product: 'Boat wires earphones', brand: 'Boat', variant: 'Best product', category: 'Earphones', price: 250, stock: 50, carts: 0, available: 50, sold: 0, status: 'In Stock' },
//   { id: 'j88504u6-2156-528m-87j6-mjk9545kmj1n', product: 'Travel chargers', brand: 'Rivano', variant: 'White variants', category: 'Charger', price: 800, stock: 12, carts: 2, available: 10, sold: 0, status: 'Low Stock' },
//   { id: 'k77493t5-3267-639n-98k7-nkl1656lnk2o', product: 'Fast charger 65W', brand: 'Nikutex', variant: 'Black variants', category: 'Charger', price: 1500, stock: 0, carts: 5, available: 0, sold: 15, status: 'Out of Stock' },
//   { id: 'l66382s4-4378-741o-19l8-oml2767mol3p', product: 'Wireless earbuds', brand: 'Battery', variant: 'Blue variants', category: 'Earphones', price: 2500, stock: 0, carts: 3, available: 0, sold: 20, status: 'Out of Stock' },
//   { id: 'm55271r3-5489-852p-21m9-pnm3878npm4q', product: 'Type-C Cable', brand: 'Samsung', variant: 'Black variants', category: 'Data cable', price: 500, stock: 100, carts: 10, available: 90, sold: 50, status: 'In Stock' },
//   { id: 'n44160q2-6591-963q-32n1-qon4989oqn5r', product: 'Lightning Cable', brand: 'Apple', variant: 'White variants', category: 'Data cable', price: 1999, stock: 8, carts: 2, available: 6, sold: 30, status: 'Low Stock' },
//   { id: 'o33059p1-7612-174r-43o2-rpo5191pro6s', product: 'Bluetooth Speaker', brand: 'JBL', variant: 'Red variant', category: 'Speaker', price: 3500, stock: 25, carts: 5, available: 20, sold: 15, status: 'In Stock' },
//   { id: 'p22948o0-8723-285s-54p3-sqp6212qsp7t', product: 'Power Bank 10000mAh', brand: 'mi', variant: 'Black variants', category: 'Power bank', price: 1200, stock: 30, carts: 8, available: 22, sold: 25, status: 'In Stock' },
//   { id: 'q11837n9-9834-396t-65q4-trq7323rtq8u', product: 'Overhead Headphones', brand: 'Sony', variant: 'Black variants', category: 'Headphones', price: 5000, stock: 5, carts: 1, available: 4, sold: 10, status: 'Low Stock' },
//   // Add more items to reach 42 total
//   ...Array.from({ length: 24 }, (_, i) => ({
//     id: `mock-id-${i + 19}`,
//     product: `Product ${i + 19}`,
//     brand: ['Vivo', 'mi', 'OnePlus', 'Boat', 'Samsung'][i % 5],
//     variant: ['White variants', 'Black variants', 'Red variant'][i % 3],
//     category: ['Charger', 'Earphones', 'Data cable', 'Speaker', 'Power bank', 'Headphones'][i % 6],
//     price: 500 + (i * 100),
//     stock: i % 3 === 0 ? 0 : i % 2 === 0 ? 10 : 50,
//     carts: i % 4,
//     available: Math.max(0, (i % 3 === 0 ? 0 : i % 2 === 0 ? 10 : 50) - (i % 4)),
//     sold: i * 2,
//     status: i % 3 === 0 ? 'Out of Stock' : i % 2 === 0 ? 'Low Stock' : 'In Stock'
//   }))
// ];

// export const CATEGORIES = ['Charger', 'Earphones', 'Buttonphone', 'Data cable', 'Speaker', 'Power bank', 'Headphones'];
// export const BRANDS = ['Vivo', 'mi', 'OnePlus', 'Airpods', 'Boat', 'Earphones', 'Rivano', 'Nikutex', 'Battery', 'Samsung', 'Apple', 'JBL', 'Sony'];
// export const PRODUCTS = STOCK_DATA.map(item => item.product).filter((v, i, a) => a.indexOf(v) === i);
// export const VARIANTS = ['White variants', 'Black variants', 'Red variant', 'Best product', 'Blue variants'];
// export const STATUSES = ['In Stock', 'Low Stock', 'Out of Stock'];
