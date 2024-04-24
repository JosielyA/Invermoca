export function encode(mensaje) {
  const url = `https://wa.me/584246729349?text=${mensaje}`;
  const encoded = encodeURI(url);
  return encoded;
}
