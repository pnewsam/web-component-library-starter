const template = document.createElement('template');

template.innerHTML = `
  <style>
    :host {
      background-color: yellow;
      display: block;
    }
  </style>
  <h3></h3>
  <p></p>
  <slot />
`;

export default template;
