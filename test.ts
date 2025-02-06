import { Configured } from "./configured.js";

const configured = new Configured("alpha", {
  type: "object",
  properties: {
    name: { type: "string" },
  },
});

await configured.init();

console.log(configured.get());
