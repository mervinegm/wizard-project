import "../../components/body/body";
import "../../components/body-container/body-container";
import "../../components/button/button";
import "../../components/footer/footer";
import "../../components/form/form";
import "../../components/header/header";
import "../../components/input/input";
import "../../components/large/large";
import "../../components/select/select";
import "../../components/subtitulo/subtitulo";
import "../../components/titulo/titulo";
import "../../components/titulo2/titulo2";

export function initWelcome(params) {
  const welcomeEl = document.createElement("div");

  welcomeEl.innerHTML = `
    <my-header>
      <my-large label="Header"></my-large>
    </my-header>
  
    <my-bodycontainer class="bodyContainer">
      <my-title label="Te damos la bienvenida a esta página"></my-title>
  
      <my-large label="Para continuar ingresá tu nombre"></my-large>
  
      <my-form></my-form>
    </my-bodycontainer>
  
    <my-footer label="Footer">
      <my-large label="Footer"></my-large>
    </my-footer>
    `;

  const bodycontainerEl: any = welcomeEl.querySelector(".bodyContainer");

  const shadowBodycontainerEl: any =
    bodycontainerEl.shadowRoot.querySelector(".bodyContainer");

  const formEL: any = shadowBodycontainerEl.childNodes[2];

  formEL.addEventListener("submit", function () {
    params.goTo("/form");
  });

  return welcomeEl;
}
