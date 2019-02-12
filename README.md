# Web Component Library Starter

A starter kit for bootstrapping a library of native Web Components to be reused across web projects. This kit uses `LitElement`, and includes polyfills necessary to support all evergreen browsers, as well as IE11.

To learn more about Web Components, check out [MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components) or [Google](https://developers.google.com/web/fundamentals/web-components/). [LitElement](https://lit-element.polymer-project.org/) is created and distributed by the Polymer team at Google.

## Get Started

1. Clone the repository.

```
git clone git@github.com:pnewsam/web-component-library-starter.git
```

2. Install the dependencies.

```
yarn install
```

3. Run the dev server.

```
yarn start
```

Build your components in the `components/` directory, and be sure to import them in the entrypoint at `src/index.js`. When you are finished developing, you can run `yarn build` and simply clone the `build/` folder into any project.
