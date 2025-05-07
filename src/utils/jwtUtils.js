export function isTokenExpired(token) {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    // console.log('Decoded payload:', payload); // Debugging log
    const expiry = payload.exp;
    // console.log('Token expiry time:', expiry, 'Current time:', Date.now() / 1000); // Debugging log
    return Date.now() >= expiry * 1000;
  } catch (e) {
    console.error('Error decoding token:', e); // Debugging log
    return true; // If there's an error parsing the token, consider it expired
  }
}

export function extractUserIdFromToken(token) {
  if (!token) {
    console.error('Token is undefined or null');
    return null;
  }
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.id || null; // Return the user ID if it exists, otherwise null
  } catch (e) {
    console.error('Error extracting user ID from token:', e);
    return null; // Return null if there's an error
  }
}
