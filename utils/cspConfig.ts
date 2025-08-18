const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
const cspHeader = `
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;
// Replace newline characters and spaces
const contentSecurityPolicyHeaderValue = cspHeader
  .replace(/\s{2,}/g, " ")
  .trim();

export {nonce, contentSecurityPolicyHeaderValue};
