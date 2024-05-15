const symbolsPath = path.join(buildOutputPath, 'symbols');
const uniqueArr = (arr) => [...new Set(arr)];
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);