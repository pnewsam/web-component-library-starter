import template from './template';

class XCarouselPage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    // Assign child elements
    this.$header = shadowRoot.querySelector('h3');
    this.$body = shadowRoot.querySelector('p');
  }

  // Get/set properties
  get headerText() {
    return this.getAttribute('header-text');
  }

  set headerText(newHeaderText) {
    this.setAttribute('header-text', newHeaderText);
  }

  get bodyText() {
    return this.getAttribute('body-text');
  }

  set bodyText(newBodyText) {
    this.setAttribute('body-text', newBodyText);
  }

  // "Lifecycle" callbacks
  connectedCallback() {
    this.$header.innerHTML = this.headerText;
    this.$body.innerHTML = this.bodyText;
  }
}

customElements.define('x-carousel-page', XCarouselPage);
