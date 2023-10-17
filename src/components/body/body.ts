class Body extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const textoOriginal = this.getAttribute("label");

    var bodyEl = document.createElement("p");
    bodyEl.classList.add("body");
    bodyEl.textContent = textoOriginal;
    this.shadow.appendChild(bodyEl);

    var style = document.createElement("style");
    style.textContent = `
                        .body{
                            font-family: "Roboto";
                            font-size: 18px;
                            font-weight: 400;
                            color: #000000;
                            margin: 10px;
                            padding: 0;
                            margin-bottom: 30px;
                        }
                        `;
    this.shadow.appendChild(style);
  }
}

customElements.get("my-body") || customElements.define("my-body", Body);
