const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const removeDuplicates = (arr) => [...new Set(arr)];