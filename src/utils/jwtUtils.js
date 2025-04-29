export function isTokenExpired(token) {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log('Decoded payload:', payload); // Debugging log
    const expiry = payload.exp;
    console.log('Token expiry time:', expiry, 'Current time:', Date.now() / 1000); // Debugging log
    return Date.now() >= expiry * 1000;
  } catch (e) {
    console.error('Error decoding token:', e); // Debugging log
    return true; // If there's an error parsing the token, consider it expired
  }
}
