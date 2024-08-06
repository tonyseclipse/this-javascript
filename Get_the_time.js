const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const merge = [...new Set(a.concat(b))];
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);