/**
 * PURPOSE: Reusable dropdown/select component
 * 
 * LOGIC:
 * - Accept props: options (array), value (selected value), onChange (handler), label (optional)
 * - options format: [{ value: 'active', label: 'Active' }, { value: 'inactive', label: 'Inactive' }]
 * - Render label if provided
 * - Render select element with:
 *   - value prop bound to selected value
 *   - onChange handler
 *   - Map options array to option elements
 * - Style with Tailwind: w-full px-3 py-2 border rounded
 * - Add optional placeholder option: <option value="">Select...</option>
 * 
 * EXAMPLE:
 * <Dropdown label="Status" options={[{value:'active', label:'Active'}]} value={status} onChange={handleChange} />
 * Shows dropdown with label "Status" and options
 */
