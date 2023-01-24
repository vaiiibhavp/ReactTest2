<h1 align="center">
  React Test with Vite and TypeScript
</h1>

## Folder Structure

No configuration or complicated folder structures, just the files you need to build your app:

```
car-makers
├── node_modules
├── public
│   ├── favicon.svg
└── src
    └── @types
        └── state
            └── index.d.ts
        ├── index.d.ts
    ├── assets
        └── cars.json
    ├── components
        └── Cars
            └── index.tsx
        ├── index.ts
    ├── styles
        └── index.css
    ├── App.tsx
    ├── bootstrap.tsx
    ├── index.tsx
    └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── README.md
├── vite.config.js
└── yarn.lock

```

## Development

To get a local copy of the code, clone it using git:

```
git clone https://github.com/vaiiibhavp/ReactTest2
cd ReactTest2
```

Install dependencies:

```
yarn
```

Now, you can start a local web server by running:

```
yarn start
```

And then open http://localhost:5173 to view it in the browser.

#### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| yarn start   | Runs the app in the development mode.               |
| yarn run build | Builds the app for production to the `dist` folder. |
| yarn run preview | Serves the production build from the `dist` folder. |
