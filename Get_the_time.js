const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const isArray = (arr) => Array.isArray(arr);