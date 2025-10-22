/**
 * PURPOSE: Helper utility functions for common operations
 * 
 * LOGIC:
 * - generateId(): Generate random unique ID
 *   - Use Math.random().toString(36).substr(2, 9)
 *   - Returns string like "k3j5h7g2m"
 * - slugify(text): Convert text to URL-friendly slug
 *   - Input: "iPhone 15 Pro Max"
 *   - Output: "iphone-15-pro-max"
 *   - Convert to lowercase, replace spaces with hyphens, remove special chars
 * - deepClone(obj): Deep clone object using JSON.parse(JSON.stringify())
 * - isEmpty(value): Check if value is empty (null, undefined, "", [], {})
 * - getFileExtension(filename): Extract file extension from filename
 * - capitalizeFirst(text): Capitalize first letter of string
 * 
 * EXAMPLE:
 * slugify("iPhone 15 Pro") -> "iphone-15-pro"
 * generateId() -> "k3j5h7g2m"
 */
