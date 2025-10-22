/**
 * PURPOSE: Header component with user info and logout button
 * 
 * LOGIC:
 * - Import useAuth hook to access user and logout function
 * - Render header element with:
 *   - White background, shadow
 *   - Flex layout with space-between
 *   - Padding: px-6 py-4
 * - Left side: Display welcome message with user name ("Welcome, Admin" or "Welcome, {user.name}")
 * - Right side: Render logout button
 *   - Red background, white text
 *   - onClick calls logout function
 *   - Hover effect: darker red
 * - Can be enhanced with notifications icon, profile dropdown, search bar
 * 
 * EXAMPLE:
 * <Header />
 * Shows: "Welcome, Admin" on left, "Logout" button on right
 */
