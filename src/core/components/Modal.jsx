/**
 * PURPOSE: Reusable modal/dialog component for popups
 * 
 * LOGIC:
 * - Accept props: isOpen (boolean), onClose (handler), title (string), children (content)
 * - If isOpen is false, return null (don't render)
 * - Render overlay: Fixed full-screen dark background (bg-black bg-opacity-50)
 * - Render modal box: White rounded box centered on screen
 * - Modal header:
 *   - Display title text
 *   - Close button (X) that calls onClose
 * - Modal body: Render children content
 * - Add z-50 for proper layering above other content
 * - Click overlay to close (optional)
 * - Prevent body scroll when modal is open
 * 
 * EXAMPLE:
 * <Modal isOpen={showModal} onClose={handleClose} title="Delete Product">
 *   <p>Are you sure?</p>
 *   <Button onClick={handleDelete}>Confirm</Button>
 * </Modal>
 */
