const isEmptyArray = arr => !arr.length;
const resultingPromises = urls.map((url) => makHttpRequest(url));
const results = await Promise.all(resultingPromises);
const goToTop = () => window.scrollTo(0, 0);