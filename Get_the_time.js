console.log("0 && 1 = "+(0 && 1));
const buildOutputPath = path.join(repositoryRootPath, 'out');
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};