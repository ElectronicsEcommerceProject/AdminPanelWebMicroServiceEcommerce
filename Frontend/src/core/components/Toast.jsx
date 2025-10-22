/**
 * PURPOSE: Toast notification utility for user feedback
 * 
 * LOGIC:
 * - Import toast from react-toastify library
 * - Export showToast object with methods:
 *   - success(message): Show green success toast
 *   - error(message): Show red error toast
 *   - warning(message): Show yellow warning toast
 *   - info(message): Show blue info toast
 * - Each method calls corresponding toast function with message
 * - ToastContainer must be added in App.js to display toasts
 * - Used throughout app for user feedback after actions
 * 
 * EXAMPLE:
 * showToast.success('Product created successfully!')
 * showToast.error('Failed to delete user')
 * Shows notification at top-right corner with auto-close after 3 seconds
 */
