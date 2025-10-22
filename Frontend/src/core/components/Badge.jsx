/**
 * PURPOSE: Reusable badge component for status indicators
 * 
 * LOGIC:
 * - Accept props: status (string), children (text to display)
 * - Define color mapping object:
 *   - active: green background, green text
 *   - inactive: gray background, gray text
 *   - banned: red background, red text
 *   - pending: yellow background, yellow text
 *   - approved: blue background, blue text
 * - Render span with:
 *   - Tailwind classes: px-2 py-1 rounded text-xs
 *   - Dynamic color based on status prop
 *   - Display children text inside
 * 
 * EXAMPLE:
 * <Badge status="active">Active</Badge> -> Green badge with "Active" text
 * <Badge status="banned">Banned</Badge> -> Red badge with "Banned" text
 */
