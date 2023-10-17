class Select extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const label = this.getAttribute("label");

    var fieldsetSelectEl = document.createElement("div");
    fieldsetSelectEl.classList.add("fieldsetSelect");
    this.shadow.appendChild(fieldsetSelectEl);

    fieldsetSelectEl.innerHTML = `
            <label class="label" for="Nombre">${label}</label>
            <select class="select" type="text">
              <option value="value1">Piedra</option>
              <option value="value2" selected>Papel</option>
              <option value="value3">Tijera</option>
            </select>
            `;

    var style = document.createElement("style");
    style.textContent = `
                            .fieldsetSelect{
                              display: flex;
                              flex-direction: column;
                              Width: calc(100% - 10px);
                              Height: 80px;
                              margin-top: 20px;
                            }
      
                            .label{
                              font-size: 18px;
                              font-family: "Roboto";
                              font-weight: 400;
                            }
      
                            .select{
                              width: 100%;
                              height: 55px;
                              padding: 13px 13px;
                              font-size: 18px;
                              font-family: "Roboto";
                              font-weight: 400;
                              margin-top: 4px;
                              border: solid 2px;
                              border-radius: 4px;
                            }
                            `;
    this.shadow.appendChild(style);
  }
}

customElements.get("my-select") || customElements.define("my-select", Select);
