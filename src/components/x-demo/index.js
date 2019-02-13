import { html, css, LitElement, property, customElement } from 'lit-element';
import styles from './styles';

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
      <x-dropdown text="Switch accounts">
        <x-dropdown-item text="All Messages" link="https://google.com"></x-dropdown-item>
        <x-dropdown-item text="Unread" link="https://google.com"></x-dropdown-item>
        <x-dropdown-item text="Starred" link="https://google.com"></x-dropdown-item>
      </x-dropdown>
    </div>
    `;
  }
}

window.customElements.define('x-demo', XDemo);
