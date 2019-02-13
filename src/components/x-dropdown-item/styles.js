import { css } from 'lit-element';

export default css`
  * {
    box-sizing: border-box;
  }

  :host(x-dropdown-item) {
    font-family: sans-serif;
    height: 40px;
    display: flex;
    align-items: center;
  }

  :host(x-dropdown-item:hover) {
    color: white;
    background-color: purple;
  }

  a {
    align-items: center;
    align-self: stretch;
    color: inherit;
    display: flex;
    text-decoration: none;
    text-transform: capitalize;
    width: 100%;
    padding: 0px 10px;
  }
`;
