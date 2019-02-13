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
    <!-- passing a data set -->
    <x-dropdown .items=${dropdownItems} text="Switch accounts"></x-dropdown>

    <!-- component composition -->
    <!-- <x-dropdown text="Switch accounts">
      <x-dropdown-item text="All Messages" link="https://google.com"></x-dropdown-item>
      <x-dropdown-item text="Unread" link="https://google.com"></x-dropdown-item>
      <x-dropdown-item text="Starred" link="https://google.com"></x-dropdown-item>
    </x-dropdown> -->
    `;
  }
}

window.customElements.define('x-demo', XDemo);
