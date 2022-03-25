/* @refresh reload */
import { render } from "solid-js/web";
import { registerSW } from "virtual:pwa-register";

import "./index.css";
import App from "./App";

if (typeof global === "undefined") {
  window.global = window;
}

render(() => <App />, document.getElementById("root"));

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});

if (typeof window !== "undefined") {
  import("./sw");
}
