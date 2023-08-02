// import "./index.html"
// console.log("test");
import "./style.sass";
import "./fireworks.css";
import "./snackbar.css";
import "./index.html";
import "./index_ua.html";
import "./index_pl.html";

import ClipboardJS from "clipboard";

const clipboard = new ClipboardJS(".btn-copy");
clipboard.on("success", () => {
  const snackbar = document.getElementById("snackbar");
  snackbar.classList.add("show")
  setTimeout(() => {
    snackbar.classList.remove("show")
  }, 2500);
});
