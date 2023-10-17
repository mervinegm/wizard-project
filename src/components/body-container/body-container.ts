class BodyContainer extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    var bodyContainerEl = document.createElement("div");
    bodyContainerEl.classList.add("bodyContainer");
    this.shadow.appendChild(bodyContainerEl);

    var style = document.createElement("style");
    style.textContent = `
                          .bodyContainer{
                              width: auto;
                              max-width: 600px;
                              margin: 0 20px;
                          }
                        
                          @media (min-width: 600px){
                            .bodyContainer{
                              margin: 0 auto;
                          }
                          }
                          `;
    this.shadow.appendChild(style);

    if (this.children) {
      for (var i of this.children) {
        bodyContainerEl.appendChild(i.cloneNode(true));
      }
    }
  }
}

customElements.get("my-bodycontainer") ||
  customElements.define("my-bodycontainer", BodyContainer);
