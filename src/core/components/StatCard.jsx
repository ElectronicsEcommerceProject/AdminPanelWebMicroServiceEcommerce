/**
 * PURPOSE: Statistics card component for dashboard metrics
 * 
 * LOGIC:
 * - Accept props: title (string), value (number/string), icon (React element), color (optional)
 * - Render white card with shadow and rounded corners
 * - Layout: Flex container with space-between
 * - Left side:
 *   - Display title in small gray text
 *   - Display value in large bold text (2xl font)
 * - Right side:
 *   - Display icon if provided (3xl size)
 * - Optional: Add trend indicator (up/down arrow with percentage)
 * - Optional: Add color prop to customize card background
 * 
 * EXAMPLE:
 * <StatCard title="Total Users" value="1,234" icon={<UserIcon />} />
 * Shows white card with "Total Users" label, "1,234" value, and user icon
 */
