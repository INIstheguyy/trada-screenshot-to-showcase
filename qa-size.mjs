const pages = await fetch("http://127.0.0.1:9224/json").then((response) => response.json());
const page = pages.find((candidate) => candidate.type === "page");
const socket = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve) => socket.addEventListener("open", resolve, { once: true }));
let id = 0;
const pending = new Map();
socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (!pending.has(message.id)) return;
  pending.get(message.id)(message.result);
  pending.delete(message.id);
});
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const messageId = ++id;
    pending.set(messageId, resolve);
    socket.send(JSON.stringify({ id: messageId, method, params }));
  });
await send("Emulation.setDeviceMetricsOverride", {
  width: 390,
  height: 844,
  deviceScaleFactor: 1,
  mobile: true,
});
await send("Page.navigate", { url: "http://127.0.0.1:4173" });
await new Promise((resolve) => setTimeout(resolve, 1800));
const result = await send("Runtime.evaluate", {
  expression: `(() => {
    const challenge = document.querySelector('.challenge-mobile-image').getBoundingClientRect();
    const value = document.querySelector('.value-mobile-image').getBoundingClientRect();
    return { challenge: [challenge.width, challenge.height], value: [value.width, value.height], overflow: document.documentElement.scrollWidth - innerWidth };
  })()`,
  returnByValue: true,
});
console.log(JSON.stringify(result.result.value));
socket.close();
