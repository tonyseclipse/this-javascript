const randomBoolean = () => Math.random() >= 0.5;
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const isEmptyArray = arr => !arr.length;