const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
var pattern = {};