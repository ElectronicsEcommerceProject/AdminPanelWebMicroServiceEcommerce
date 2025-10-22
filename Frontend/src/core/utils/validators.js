/**
 * PURPOSE: Validation functions for form inputs
 * 
 * LOGIC:
 * - isValidEmail(email): Validate email format using regex
 *   - Pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 *   - Returns true if valid, false otherwise
 * - isRequired(value): Check if field is not empty
 *   - Returns true if value exists and has length > 0 after trim
 * - isValidPhone(phone): Validate 10-digit Indian phone number
 *   - Pattern: /^[0-9]{10}$/
 * - isValidURL(url): Validate URL format
 * - minLength(value, min): Check if value length >= min
 * - maxLength(value, max): Check if value length <= max
 * - isNumeric(value): Check if value contains only numbers
 * - isValidPassword(password): Check password strength (min 8 chars, uppercase, lowercase, number)
 * 
 * EXAMPLE:
 * isValidEmail("admin@example.com") -> true
 * isValidPhone("9876543210") -> true
 */
