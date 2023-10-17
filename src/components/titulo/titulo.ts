class Titulo extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const textoOriginal = this.getAttribute("label");

    var tituloEl = document.createElement("h1");
    tituloEl.classList.add("titulo");
    tituloEl.textContent = textoOriginal;
    this.shadow.appendChild(tituloEl);

    var style = document.createElement("style");
    style.textContent = `
                      .titulo{
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

customElements.get("my-title") || customElements.define("my-title", Titulo);
