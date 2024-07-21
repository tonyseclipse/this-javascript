const flattenedArray = arr => [].concat(...arr);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);