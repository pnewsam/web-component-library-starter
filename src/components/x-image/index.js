import { LitElement, customElement, html } from 'lit-element';
import sampleImage from '../../images/sample-image.jpg';

@customElement('x-image')
class XImage extends LitElement {
  render() {
    return html`
      <img src=${sampleImage} />
    `;
  }
}
