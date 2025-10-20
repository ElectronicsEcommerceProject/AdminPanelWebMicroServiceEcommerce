/**
 * PURPOSE: Date range picker for filtering reports and analytics
 * 
 * LOGIC:
 * - Accept props: startDate, endDate, onStartChange, onEndChange
 * - Render two date input fields side by side
 * - First input: Start date with value={startDate}, onChange={onStartChange}
 * - Second input: End date with value={endDate}, onChange={onEndChange}
 * - Display "to" text between inputs
 * - Style with Tailwind: flex gap-2, px-3 py-2 border rounded
 * - Can be enhanced with date library like react-datepicker for better UX
 * - Add validation: End date should be after start date
 * 
 * EXAMPLE:
 * <DateRangePicker startDate="2024-01-01" endDate="2024-01-31" onStartChange={...} onEndChange={...} />
 * Shows two date inputs for selecting date range
 */
