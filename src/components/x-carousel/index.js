import { html, LitElement, customElement, property } from 'lit-element';
import styles from './styles';

@customElement('x-carousel')
class XCarousel extends LitElement {
  @property({ type: Number }) currentPage = 0;

  static get styles() {
    return [styles];
  }

  // Lifecycle Methods
  firstUpdated() {
    this.$slot = this.shadowRoot.querySelector('slot');
    this.$assignedElements = this.$slot.assignedElements();
    this.$nav = this.shadowRoot.querySelector('.nav');
    this.requestUpdate();
  }

  updated() {
    if (this.$assignedElements) this._showCurrentPage();
  }

  // Private Methods
  _showCurrentPage() {
    this.$assignedElements.forEach(el => {
      el.classList.add('hidden');
    });
    this.$assignedElements[this.currentPage].classList.remove('hidden');
  }

  _dotTemplate(n) {
    const classes = n == this.currentPage ? 'dot filled' : 'dot';
    return html`
      <div
        class=${classes}
        id="dot-${n}"
        @click="${_ => {
          this.currentPage = n;
          this.requestUpdate();
        }}"
      ></div>
    `;
  }

  render() {
    return html`
      <div class="content">
        <slot></slot>
      </div>
      <div class="nav">
        ${this.$assignedElements &&
          this.$assignedElements.map((_, idx) => this._dotTemplate(idx))}
      </div>
    `;
  }
}
