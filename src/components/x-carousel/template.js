const template = document.createElement('template');

template.innerHTML = `
  <style>
    :host {
      background-color: #fff;
      border-radius: 16px;
      border: solid 1px lightgrey;
      display: block;
      max-width: 600px;
      padding: 16px;
    }
  </style>
  <div>
    <slot />
  </div>
`;

export default template;
