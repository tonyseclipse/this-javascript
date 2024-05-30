const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();