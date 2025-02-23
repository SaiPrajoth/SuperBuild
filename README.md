# Turbo Tailwind

A sample monorepo setup with [Turborepo](https://turborepo.dev/) and [TailwindCSS](https://tailwindcss.com/).

## Installation

You have two options to get this project files locally on your machine:

Option 1: Create a new repository using the [Template](https://github.com/new?template_name=turbo-tailwind&template_owner=JaleelB) option

Option 2: Clone the Repository

1. To get this project files locally on your machine, you can clone this repository by running the following command on your terminal or command line:

```sh
git clone https://github.com/JaleelB/turbo-tailwind.git
```

2. Install all the dependency packages found in the `package.json` files across the monorepo apps by running `pnpm i` from the project root directory.

3. To start the development servers of all the applications in your monorepo in parrallel, simply run `pnpm run dev`. To start an individual app the monorepo, run:

```sh
   pnpm run dev --filter <app-name>
```

## Apps & Packages

- `apps/docs`: a sample documentation [Next.js](https://nextjs.org/docs) app
- `apps/web`: a sample web [Next.js](https://nextjs.org/docs) app
- `packages/ui`: a stub React component library shared by both `web` and `docs` applications
- `packages/config`: shared `tailwindcss`, `eslint` configurations (includes `eslint-config-next`, `eslint-config-prettier`, `eslint-plugin-prettier` etc..)
- `packages/tsconfig`: `tsconfig.json`s which can be used by extending them throughout the monorepo
- `packages/tailwind-config`: shared `tailwindcss` configurations
