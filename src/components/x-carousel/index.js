import template from './template';

class XCarousel extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    const slot = shadowRoot.querySelector('slot');
    this.$assignedElements = slot.assignedElements();
  }

  connectedCallback() {
    const [first, ...rest] = this.$assignedElements;
    rest.forEach(el => {
      el.setAttribute('style', 'display:none');
    });
  }
}

customElements.define('x-carousel', XCarousel);
