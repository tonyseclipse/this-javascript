const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);