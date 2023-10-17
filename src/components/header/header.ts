class Header extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    var headerDivEl = document.createElement("div");
    headerDivEl.classList.add("header");
    this.shadow.appendChild(headerDivEl);

    var style = document.createElement("style");
    style.textContent = `
                  .header{
                    width: auto;
                    height: 60px;
                    background-color: pink;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  `;
    this.shadow.appendChild(style);

    if (this.children[0]) {
      headerDivEl.appendChild(this.children[0]);
    }
  }
}

customElements.get("my-header") || customElements.define("my-header", Header);
