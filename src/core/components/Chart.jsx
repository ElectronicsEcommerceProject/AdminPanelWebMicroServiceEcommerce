/**
 * PURPOSE: Reusable chart component wrapper for Recharts
 * 
 * LOGIC:
 * - Import Recharts components: LineChart, BarChart, PieChart, AreaChart
 * - Accept props: type (line/bar/pie/area), data (array of data points), config (chart options)
 * - Based on type prop, render appropriate chart:
 *   - line: LineChart with Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
 *   - bar: BarChart with Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
 *   - pie: PieChart with Pie, Cell, Tooltip, Legend
 *   - area: AreaChart with Area, XAxis, YAxis, CartesianGrid, Tooltip
 * - Apply responsive container for mobile compatibility
 * - Use config prop for colors, labels, axis names
 * 
 * EXAMPLE:
 * <Chart type="line" data={salesData} config={{xKey: 'date', yKey: 'sales'}} />
 * Renders line chart showing sales over time
 */
