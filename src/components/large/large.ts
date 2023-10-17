class Large extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const textoOriginal = this.getAttribute("label");

    var largeTextpEl = document.createElement("div");
    largeTextpEl.classList.add("large");
    largeTextpEl.textContent = textoOriginal;
    this.shadow.appendChild(largeTextpEl);

    var style = document.createElement("style");
    style.textContent = `
                    .large{
                        font-family: "Roboto";
                        font-size: 22px;
                        font-weight: 500;
                        color: #000000;
                        margin: 0;
                        padding: 0;
                    }
                    `;
    this.shadow.appendChild(style);

    const clase = this.getAttribute("class");

    if (clase == "lt2") {
      largeTextpEl.style.margin = "50px 30px 50px 30px";
    }
  }
}

customElements.get("my-large") || customElements.define("my-large", Large);
