export default (msg) => {
  return msg
    .replace(/&#39;/g,  `'`)
    .replace(/&amp;/g,  '&')
    .replace(/&lt;/g,   '<')
    .replace(/&gt;/g,   '>')
    .replace(/&quot;/g, '"')
    .replace(/&#40;/g,  '(')
    .replace(/&#41;/g,  ')')
    .replace(/(<([^>]+)>)/ig, '')
    .replace(/^[ \t]+/g, '')
    .trim()
}