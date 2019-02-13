import { html, LitElement} from 'lit-element';
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
      },
      items: {
        type: Array,
        reflect: true
      }
    }
  }

  constructor() {
    super();
    this.text = '';
    this.active = true;
    this.items = []

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
    ${this.items.map((item, index) => html`
      <x-dropdown-item
        text=${item.text}
        link="https://google.com">
      </x-dropdown-item>`
    )}
    </div>
    `;
  }

  _toggleButton = (e) => {
    e.stopPropagation();
    this.active = !this.active;
  }

  handleClickOutside = (e) => {
    if(e.target !== this) {
      this.active = false;
    }
  }
}

window.customElements.define('x-dropdown', XDropdown);
