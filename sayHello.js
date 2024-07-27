const timeFromDate = date => date.toTimeString().slice(0, 8);
const randomString = () => Math.random().toString(36).slice(2);
const merge = [...new Set([...a, ...b])];