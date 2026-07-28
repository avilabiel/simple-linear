# Simple Linear

This app is a simple linear using no AI and no libraries, bringing back the fun part of coding: coding!

If you want to understand more about requirements and technical decisions, please read this [document](https://docs.google.com/document/d/1upFruEOgCUIiuLwlROuEnUjlpPHtc0y0G4_q2QGj1OE/edit?usp=sharing).

# Commands

These are all the commands you will need in this project:

Start the app:

```bash
cp .env.example .env
npm install
npm run dev
```

Automated tests:

```bash
npm tests
```

# Layers

This app will have the following layers:

- ui: components dealing with the UI
- app: high order components dealing with the logic
- services: different services like logic, API or 3rd party libraries (future). All 3rd parties will be implemented with Facade Design Pattern
- assets: general assets like images, videos, icons, svgs
- types: primary types (aka entities)

# Next steps

- Clean up things from the boilerplate (e.g. unused assets)
- Improve the MockAPI to have all items (instead of just compiled into users entity)
- Finish the app including the tasks attachments and comments
- Improve the UI
- Improve the exceptions. Getting fetch.ok (200-299 range) as assign it as App Connection Error is too generic and not useful for the app/catches

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
