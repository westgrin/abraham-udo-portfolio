# Abraham Udo — Cloud & DevOps Portfolio

This repository contains the source code for Abraham Udo’s portfolio site. It is configured to deploy automatically to **GitHub Pages** whenever changes are pushed to the `main` branch.

## Publish through GitHub Pages

1. Create a new empty repository under the `westgrin` GitHub account. A suitable name is `abraham-udo-portfolio`.
2. Extract this ZIP archive and upload its **contents** to the root of that repository, including the hidden `.github` folder.
3. Commit and push the files to the `main` branch.
4. In the repository, open **Settings → Pages** and select **GitHub Actions** as the source.
5. Open the **Actions** tab and wait for the “Deploy portfolio to GitHub Pages” workflow to complete.

With a repository named `abraham-udo-portfolio` under `westgrin`, the expected address is:

`https://westgrin.github.io/abraham-udo-portfolio/`

The deployment configuration automatically uses the repository name as the base path, so it also works if you select a different repository name.

## Local development

Install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

To create a production build locally, run:

```bash
pnpm build
```

The output is written to `dist/`.

## Project structure

The site source lives in `client/`. The professional portrait and visual assets are self-contained in `client/public/assets/`, so the GitHub Pages deployment does not depend on platform-hosted images.
