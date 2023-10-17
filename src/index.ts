import { initRouter } from "./router";

function main() {
  const root: any = document.querySelector(".root");
  console.log(root);
  initRouter(root);
}

main();
