/**
 * PURPOSE: Custom hook to access toast notification functions
 * 
 * LOGIC:
 * - Import showToast utility from Toast component
 * - Return showToast object with methods: success, error, warning, info
 * - This hook provides convenient access to toast functions in components
 * - Alternative to directly importing showToast
 * 
 * EXAMPLE:
 * const toast = useToast();
 * toast.success('Saved successfully!');
 * toast.error('Failed to save');
 */
