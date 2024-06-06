const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const appName = getAppName(channel);
const isWeekday = (date) => date.getDay() % 6 !== 0;