const shuffledArray = array.sort(() => Math.random() - 0.5); 
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const resultingPromises = urls.map((url) => makHttpRequest(url));
const goToTop = () => window.scrollTo(0, 0);