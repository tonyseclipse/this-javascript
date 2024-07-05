const isTabInView = () => !document.hidden;
const isEmptyObject = obj => Object.keys(obj).length === 0;
const channel = getChannel(computedAppVersion);