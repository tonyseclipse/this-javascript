const resultingPromises = urls.map((url) => makHttpRequest(url));
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());