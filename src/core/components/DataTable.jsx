/**
 * PURPOSE: Reusable data table component with sorting, filtering, pagination
 * 
 * LOGIC:
 * - Accept props: columns (array of column definitions), data (array of row objects), onSort, onFilter
 * - columns format: [{ key: 'id', label: 'ID', sortable: true, render: (value) => ... }]
 * - Render table structure:
 *   - thead: Map columns to th elements with labels
 *   - tbody: Map data rows to tr elements
 *   - For each row, map columns to td elements using row[col.key]
 * - Add sorting: Click column header to sort by that column (asc/desc)
 * - Add custom render: If column has render function, use it to format cell value
 * - Add row actions: Optional actions column with edit/delete buttons
 * - Wrap in overflow-x-auto div for horizontal scrolling on mobile
 * 
 * EXAMPLE:
 * <DataTable columns={[{key:'id', label:'ID'}, {key:'name', label:'Name'}]} data={users} />
 * Renders table with ID and Name columns showing user data
 */
