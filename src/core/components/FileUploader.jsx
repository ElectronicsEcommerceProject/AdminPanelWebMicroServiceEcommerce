/**
 * PURPOSE: File upload component with drag-and-drop support
 * 
 * LOGIC:
 * - Accept props: onFileSelect (callback), accept (file types), multiple (boolean)
 * - Render dashed border box for drop zone
 * - Hide default file input, show custom label
 * - On file select: Call onFileSelect(file) with selected file
 * - Add drag-and-drop handlers:
 *   - onDragOver: Prevent default, highlight drop zone
 *   - onDragLeave: Remove highlight
 *   - onDrop: Get files from event, call onFileSelect
 * - Show file preview after selection (image thumbnail or file name)
 * - Add file validation: Check file size, type
 * - Support multiple files if multiple prop is true
 * 
 * EXAMPLE:
 * <FileUploader onFileSelect={handleFile} accept="image/*" />
 * Shows upload box, user clicks or drags image, calls handleFile(file)
 */
