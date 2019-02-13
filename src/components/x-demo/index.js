import { html, css, LitElement} from 'lit-element';
import styles from './styles';
import { dropdownItems } from '../../sample-data/dropdown.js';

class XDemo extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`
    <div>
      <x-dropdown .items=${dropdownItems} text="Switch accounts">
      </x-dropdown>
    </div>
    `;
  }
}

window.customElements.define('x-demo', XDemo);
