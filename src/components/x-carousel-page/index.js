import { html, LitElement, property, customElement } from 'lit-element';
import styles from './styles';

@customElement('x-carousel-page')
class XCarouselPage extends LitElement {
  @property({ type: String }) headerText = 'Default Header';
  @property({ type: String }) bodyText = 'Default Body Text';

  constructor() {
    super();
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <h3>${this.headerText}</h3>
      <p>${this.bodyText}</p>
    `;
  }
}
