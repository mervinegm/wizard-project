import { state } from "../../state";

class Form extends HTMLElement {
  shadow: ShadowRoot;
  nombre: string;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.nombre = state.getState().nombre;

    state.subscribe(() => {
      this.nombre = state.getState().nombre;
      /* this.render(); */
    });

    this.render();
  }

  render() {
    var formEl = document.createElement("form");
    formEl.classList.add("form");
    this.shadow.appendChild(formEl);

    formEl.innerHTML = `
      <label class="label">Nombre</label>
      <input class="input" type="text" name="nombre" />
      <button class="button">Comenzar</button>
     
    `;

    const form = this.shadow.querySelector(".form")!;

    form.addEventListener("submit", (e: any) => {
      e.preventDefault();
      state.setState({
        ...state.getState(),
        nombre: e.target.nombre.value,
      });
    });

    var style = document.createElement("style");
    this.shadow.appendChild(style);
    style.textContent = `
                      .form{
                        display: flex;
                        flex-direction: column;
                        Width: calc(100% - 40px);
                        Height: 200px;
                        margin-top: 20px;
                      }

                      .label{
                        font-size: 18px;
                        font-family: "Roboto";
                        font-weight: 400;
                      }

                      .input{
                        width: 100%;
                        height: 22px;
                        padding: 17px 13px;
                        font-size: 18px;
                        font-family: "Roboto";
                        font-weight: 400;
                        margin-top: 4px;
                        border: solid 2px;
                        border-radius: 4px;
                      }

                      .button{
                        Width: calc(100% + 30px);
                        Height: 55px;
                        background-color: turquoise;
                        margin-top: 20px;
                        border: none;
                        font-family: "Roboto";
                        font-size: 22px;
                        font-weight: 500;
                        color: #000000;
                      }
                      `;
  }
}

customElements.get("my-form") || customElements.define("my-form", Form);
