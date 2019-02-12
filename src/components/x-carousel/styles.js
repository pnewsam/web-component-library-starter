import { css } from 'lit-element';

export default css`
  :host {
    background-color: #fff;
    border-radius: 4px;
    border: solid 1px lightgrey;
    box-shadow: 4px 4px 4px lightgrey;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    max-width: 600px;
  }
  .content {
    padding: 16px;
  }
  ::slotted(.hidden) {
    display: none;
  }
  .nav {
    align-items: center;
    border-top: solid 1px lightgrey;
    box-sizing: border-box;
    display: flex;
    height: 40px;
    justify-content: center;
    padding: 16px;
    width: 100%;
  }
  .dot {
    border-radius: 12px;
    border: solid 1px lightgrey;
    height: 12px;
    width: 12px;
  }
  .dot:not(:last-child) {
    margin-right: 6px;
  }
  .dot.filled {
    background-color: grey;
  }
`;
