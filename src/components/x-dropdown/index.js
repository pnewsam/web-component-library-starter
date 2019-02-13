import { html, css, LitElement, property, customElement } from 'lit-element';
import styles from './styles';

class XDropdown extends LitElement {
  static get properties() {
    return {
      text: {
        type: String,
        reflect: true
      },
      active: {
        type: Boolean,
        reflect: true
      }
    }
  }

  constructor() {
    super();
    this.text = '';
    this.active = true;

    window.addEventListener('click', (e) => {
      this.handleClickOutside(e);
    });
  }

  static get styles() {
    return [styles]
  }

  render() {
    return html`
    <div class="button" @click=${this._toggleButton}>
      <span>${this.text}</span>
      <div class="down-arrow">▾</div>
    </div>
    <div class=${this.active ? 'dropdown-content active' : 'dropdown-content'}>
      <slot></slot>
    </div>
    `;
  }

  _toggleButton = (e) => {
    console.log('toggle')
    this.active = !this.active;
  }

  handleClickOutside = (e) => {
    e.preventDefault();

    if(e.target !== this) {
      this.active = false;
    }
  }
}

window.customElements.define('x-dropdown', XDropdown);
