import { state } from "../../state";

class Title2 extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  nombre: string = "";

  constructor() {
    super();
    this.render();
    state.subscribe(() => {
      this.syncWithState();
    });
    this.syncWithState();
  }

  syncWithState() {
    const lastState = state.getState();
    this.nombre = lastState.nombre || "";
    /* this.render(); */
  }

  render() {
    var titulo2El = document.createElement("h1");
    titulo2El.classList.add("titulo2");
    this.shadow.appendChild(titulo2El);

    titulo2El.innerHTML = `
        Hola ${this.nombre}
    `;

    var style = document.createElement("style");
    style.textContent = `
                  .titulo2{
                      font-family: "Roboto";
                      font-size: 52px;
                      font-weight: 700;
                      color: #000000;
                      margin: 0;
                      padding: 10px;
                  }
                  `;
    this.shadow.appendChild(style);
  }
}

customElements.get("my-title2") || customElements.define("my-title2", Title2);
