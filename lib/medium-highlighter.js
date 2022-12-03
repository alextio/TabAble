const highlightColor = "rgb(255, 255, 0)";
// test
const template = `
  <template id="highlightTemplate">
    <span class="highlight" style="background-color: ${highlightColor}; display: inline"></span>
  </template>

  <button id="mediumHighlighter">
    <svg background-color: white; xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.001 512.001" xml:space="preserve">
<polygon style="fill:#EEBA7D;" points="46.578,507.251 0,479.67 43.075,436.595 80.154,473.675 "/>
<g>
	<polygon style="fill:#E68D2C;" points="46.578,507.251 23.288,493.461 61.615,455.135 80.154,473.675  "/>
	<path style="fill:#E68D2C;" d="M54.542,462.208l31.732,31.732l24.002-24.002l93.176-22.663L499.587,151.14   c16.552-16.552,16.552-43.386,0-59.938l-37.019-37.019L425.55,17.164c-16.552-16.552-43.386-16.552-59.939,0L69.474,313.298   l-22.663,93.176L22.81,430.476L54.542,462.208z"/>
</g>
<path style="fill:#E06B34;" d="M54.542,462.208l31.732,31.732l24.002-24.002l93.176-22.663L499.587,151.14  c16.552-16.552,16.552-43.386,0-59.938l-37.019-37.019L54.542,462.208z"/>
<rect x="273.637" y="129.753" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 358.521 582.2773)" style="fill:#A8EAEF;" width="52.435" height="174.268"/>
<rect x="296.019" y="139.027" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 367.7948 604.6673)" style="fill:#80CDD8;" width="26.219" height="174.268"/>
<polygon style="fill:#E06B34;" points="69.474,313.298 46.812,406.474 22.811,430.476 54.542,462.208 86.273,493.939   110.275,469.938 203.451,447.275 69.475,313.298 "/>
<polygon style="fill:#D1393C;" points="136.462,380.287 54.542,462.208 86.273,493.939 110.275,469.938 203.451,447.275   69.475,313.298 "/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
  </button>
`;

const styled = ({ display = "none", left = 0, top = 0 }) => `
  #mediumHighlighter {
    align-items: center;
    background-color: black;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    display: ${display};
    justify-content: center;
    left: ${left}px;
    padding: 5px 10px;
    position: fixed;
    top: ${top}px;
    width: 70px;
    z-index: 9999;
  }
  .text-marker {
    fill: white;
  }
  .text-marker:hover {
    fill: ${highlightColor};
  }
`;

class MediumHighlighter extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  get markerPosition() {
    return JSON.parse(this.getAttribute("markerPosition") || "{}");
  }

  get styleElement() {
    return this.shadowRoot.querySelector("style");
  }

  get highlightTemplate() {
    return this.shadowRoot.getElementById("highlightTemplate");
  }

  static get observedAttributes() {
    return ["markerPosition"];
  }

  render() {
    this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = styled({});
    this.shadowRoot.appendChild(style);
    this.shadowRoot.innerHTML += template;
    this.shadowRoot
      .getElementById("mediumHighlighter")
      .addEventListener("click", () => this.highlightSelection());
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "markerPosition") {
      this.styleElement.textContent = styled(this.markerPosition);
    }
  }

  highlightSelection() {
    var userSelection = window.getSelection();
    for (let i = 0; i < userSelection.rangeCount; i++) {
      this.highlightRange(userSelection.getRangeAt(i));
    }
    var browser = chrome || browser;
    browser.runtime.sendMessage({
      from: "content",
      result: userSelection.toString(),
      url: document.querySelector("a").href
    })
    window.getSelection().empty();
  }

  highlightRange(range) {
    const clone =
      this.highlightTemplate.cloneNode(true).content.firstElementChild;
    clone.appendChild(range.extractContents());
    range.insertNode(clone);
  }
}

window.customElements.define("medium-highlighter", MediumHighlighter);