const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);