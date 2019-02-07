import { LitElement, html } from 'lit-element';
import sampleImage from '../../images/sample-image.jpg';

class XImage extends LitElement {
  render() {
    return html`
      <img src=${sampleImage} />
    `;
  }
}

customElements.define('x-image', XImage);
