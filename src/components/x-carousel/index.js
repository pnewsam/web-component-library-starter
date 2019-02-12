import { html, LitElement, customElement, property } from 'lit-element';
import styles from './styles';

@customElement('x-carousel')
class XCarousel extends LitElement {
  @property({ type: Number }) currentPage = 0;

  static get styles() {
    return [styles];
  }

  firstUpdated() {
    this.$slot = this.shadowRoot.querySelector('slot');
    this.$assignedElements = this.$slot.assignedElements();
    this.$nav = this.shadowRoot.querySelector('.nav');

    this._createDots();
  }

  _createDots() {
    this.$assignedElements.forEach((_, idx) => {
      const el = document.createElement('div');
      el.setAttribute('class', 'dot');
      el.setAttribute('id', `dot-${idx}`);
      el.addEventListener('click', e => {
        this.currentPage = idx;
        this.requestUpdate();
      });
      this.$nav.appendChild(el);
    });
  }

  _showCorrectPage() {
    if (this.$assignedElements) {
      this.$assignedElements.forEach(el => {
        el.classList.add('hidden');
      });
      this.$assignedElements[this.currentPage].classList.remove('hidden');
      this._fillCorrectDot();
    }
  }

  _fillCorrectDot() {
    this.$dots = this.shadowRoot.querySelectorAll('.dot');
    this.$dots.forEach(dot => {
      dot.classList.remove('filled');
    });
    const currentDot = this.shadowRoot.querySelector(
      `#dot-${this.currentPage}`,
    );
    currentDot.classList.add('filled');
  }

  updated() {
    this._showCorrectPage();
  }

  render() {
    return html`
      <div class="content">
        <slot></slot>
      </div>
      <div class="nav"></div>
    `;
  }
}
