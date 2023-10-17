class Subtitulo extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const textoOriginal = this.getAttribute("label");

    var subtituloEl = document.createElement("h1");
    subtituloEl.classList.add("subtitulo");
    subtituloEl.textContent = textoOriginal;
    this.shadow.appendChild(subtituloEl);

    var style = document.createElement("style");
    style.textContent = `
                        .subtitulo{
                            font-family: "Roboto";
                            font-size: 38px;
                            font-weight: 700;
                            color: #000000;
                            margin: 10px;
                            padding: 0;
                            margin-top: 40px;
                        }
                        `;
    this.shadow.appendChild(style);
  }
}

customElements.get("my-subtitle") ||
  customElements.define("my-subtitle", Subtitulo);
