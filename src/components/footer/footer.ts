class Footer extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    var footerDivEl = document.createElement("div");
    footerDivEl.classList.add("footer");
    this.shadow.appendChild(footerDivEl);

    var style = document.createElement("style");
    style.textContent = `
                    .footer{
                      width: auto;
                      min-height: 233px;
                      max-height: 100vmax;
                      background-color: cadetblue;
                      margin: 0;
                      padding: 0;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      margin-top:50px
                    }
                    `;
    this.shadow.appendChild(style);

    if (this.children[0]) {
      footerDivEl.appendChild(this.children[0]);
    }
  }
}

customElements.get("my-footer") || customElements.define("my-footer", Footer);
