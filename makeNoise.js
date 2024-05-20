const merge = [...new Set(a.concat(b))];
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const isArray = (arr) => Array.isArray(arr);