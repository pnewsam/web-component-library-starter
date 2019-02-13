import { html, LitElement} from 'lit-element';
import styles from './styles';

class XDropdownItem extends LitElement {
  static get properties() {
    return {
      text: {
        type: String,
        reflect: true
      },
      link: {
        type: String,
        reflect: true
      }
    }
  }

  constructor() {
    super();
    this.text = '';
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`
    <a @click=${this._handleClick}>
      ${this.text}
    </a>
    `;
  }

  _handleClick = (e) => {
    console.log('link clicked')
  }
}

window.customElements.define('x-dropdown-item', XDropdownItem);
