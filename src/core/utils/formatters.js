/**
 * PURPOSE: Utility functions for formatting data
 * 
 * LOGIC:
 * - formatDate(date): Convert date to readable format
 *   - Input: "2024-01-15T10:30:00Z"
 *   - Output: "Jan 15, 2024" or "15/01/2024"
 *   - Use toLocaleDateString with locale and options
 * - formatCurrency(amount): Format number as Indian currency
 *   - Input: 15999
 *   - Output: "₹15,999"
 *   - Use toLocaleString('en-IN') for comma separation
 * - formatTime(date): Format time as "10:30 AM"
 * - formatDateTime(date): Format as "Jan 15, 2024 10:30 AM"
 * - formatPercentage(value): Format as "25.5%"
 * - truncateText(text, length): Truncate long text with "..."
 * 
 * EXAMPLE:
 * formatCurrency(15999) -> "₹15,999"
 * formatDate("2024-01-15") -> "Jan 15, 2024"
 */
