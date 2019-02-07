import { LitElement, html } from 'lit-element';
import baseStyles from './styles';

class XHeader extends LitElement {
  static get styles() {
    return [baseStyles];
  }

  render() {
    return html`
      <h1>
        This is a title.
      </h1>
    `;
  }
}

customElements.define('x-header', XHeader);
