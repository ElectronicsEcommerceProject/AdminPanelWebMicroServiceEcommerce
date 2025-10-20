/**
 * PURPOSE: Reusable button component with different variants
 * 
 * LOGIC:
 * - Accept props: children (button text), variant (style type), onClick (handler), ...props (other attributes)
 * - Define variant styles:
 *   - primary: blue background, hover darker blue, white text
 *   - danger: red background, hover darker red, white text
 *   - success: green background, hover darker green, white text
 *   - secondary: gray background, hover darker gray, white text
 * - Render button element with:
 *   - onClick handler
 *   - Tailwind classes: px-4 py-2 rounded
 *   - Dynamic variant class
 *   - Spread remaining props (type, disabled, etc.)
 * 
 * EXAMPLE:
 * <Button variant="primary" onClick={handleSave}>Save</Button> -> Blue button
 * <Button variant="danger" onClick={handleDelete}>Delete</Button> -> Red button
 */
