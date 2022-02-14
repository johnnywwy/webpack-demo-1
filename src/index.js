import x from "./x.js";
import png from "./assets/1.png";
console.log(png);

console.log("x: ", x);
const div = document.querySelector("#app");
// div.innerHTML = `
// <img src='${png}'></img>
// `;

const btn = document.createElement("button");
btn.innerHTML = `懒加载`;
btn.onclick = () => {
  const promise = import("./lazy.js");
  promise.then(
    (module) => {
      const fn = module.default;
      fn();
    },
    () => {}
  );
};
div.appendChild(btn);
