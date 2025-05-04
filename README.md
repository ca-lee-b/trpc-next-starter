# TRPC / Next / Tailwind / Turborepo starter

## Inside

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app
- `@app/ui`: a React component library
- `@app/db`: for databases
- `@app/trpc`: for TRPC definitions
- `@app/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@app/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Biome](https://biomejs.dev/) for code formatting and additional linting

### Build

To build all apps and packages, run the following command:

```
bun build
```

### Develop

To develop all apps and packages, run the following command:

```
bun dev
```
