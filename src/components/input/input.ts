class Input extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const label = this.getAttribute("label");

    var fieldsetInputEl = document.createElement("div");
    fieldsetInputEl.classList.add("fieldsetInput");
    this.shadow.appendChild(fieldsetInputEl);

    fieldsetInputEl.innerHTML = `
          <label class="label" for="Nombre">${label}</label>
          <input class="input" type="text" placeholder="Ingrese su ${label}">
          `;

    var style = document.createElement("style");
    this.shadow.appendChild(style);
    style.textContent = `
                          .fieldsetInput{
                            display: flex;
                            flex-direction: column;
                            Width: calc(100% - 40px);
                            Height: 80px;
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
                          `;
  }
}

customElements.get("my-input") || customElements.define("my-input", Input);
