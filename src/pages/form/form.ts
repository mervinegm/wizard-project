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

export function initForm(params) {
  const formEl = document.createElement("div");

  formEl.innerHTML = `
    <my-header>
      <my-large label="Header"></my-large>
    </my-header>
  
    <my-bodycontainer class="bodyContainer">
      <my-title2></my-title2>

      <my-large label="Necesitamos algunos datos más"></my-large>
  
      <my-input label="Email"></my-input>
  
      <my-input label="Comida favorita"></my-input>
  
      <my-select label="Alguna de estas tres opciones"></my-select>
  
      <my-button class="button" label="Enviar"></my-button>
      
    </my-bodycontainer>
  
    <my-footer>
       <my-large label="Footer"></my-large>
    </my-footer>
    `;

  const bodycontainerEl: any = formEl.querySelector(".bodyContainer");

  const shadowBodycontainerEl: any =
    bodycontainerEl.shadowRoot.querySelector(".bodyContainer");

  const buttonEL: any = shadowBodycontainerEl.childNodes[5];

  buttonEL.addEventListener("click", function () {
    params.goTo("/welcome");
  });

  return formEl;
}
