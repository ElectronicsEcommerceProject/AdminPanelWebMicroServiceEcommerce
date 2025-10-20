/**
 * PURPOSE: Reusable form input component with label and error display
 * 
 * LOGIC:
 * - Accept props: label, type (text/email/password/number), name, value, onChange, error, ...props
 * - Render wrapper div with mb-4 margin
 * - Render label element with text from label prop
 * - Render input element with:
 *   - type, name, value, onChange from props
 *   - Tailwind classes: w-full px-3 py-2 border rounded
 *   - Focus styles: focus:outline-none focus:ring-2 focus:ring-blue-500
 *   - Spread remaining props (placeholder, required, disabled, etc.)
 * - If error prop exists, show error message in red text below input
 * - Can be used with react-hook-form for validation
 * 
 * EXAMPLE:
 * <FormInput label="Email" type="email" value={email} onChange={handleChange} error="Invalid email" />
 * Shows labeled input with error message
 */
