class Button extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const textoOriginal = this.getAttribute("label");

    var buttonEL = document.createElement("button");
    buttonEL.classList.add("button");
    buttonEL.textContent = textoOriginal;
    this.shadow.appendChild(buttonEL);

    var style = document.createElement("style");
    style.textContent = `
                        .button{
                          Width: calc(100% - 10px);
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
    this.shadow.appendChild(style);
  }
}

customElements.get("my-button") || customElements.define("my-button", Button);
