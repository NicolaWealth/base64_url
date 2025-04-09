export const base64UrlToBase64 = (msg: string) => {
  const n = (msg.length % 4 === 0) ? 0 : 4 - (msg.length % 4);
  return msg.replaceAll('_', '/').replaceAll('-', '+').concat("=".repeat(n));
};

export const base64ToBase64Url = (msg: string) => {
  return msg.replaceAll('/', '_').replaceAll('+', '-').replaceAll('=', '');
};
