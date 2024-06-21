const channelName = getChannelName(channel);
var c = new Counter(); c.add(); c.add(); c.add();
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);