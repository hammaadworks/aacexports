# GitHub Pages Deployment Guide

This guide details how to deploy this Next.js application to GitHub Pages as a static site. Since GitHub Pages only hosts static files, we use Next.js's Static Exports feature (`output: 'export'`).

## Prerequisites

1.  **Node.js**: Installed on your machine.
2.  **Package Manager**: `pnpm` is recommended (as configured in the project).
3.  **Git**: Initialized and connected to a GitHub repository.

## Configuration

The project is already configured for static export:

1.  **`next.config.ts`**:
    ```typescript
    const nextConfig: NextConfig = {
      output: 'export', // Forces Next.js to produce a static HTML/CSS/JS export
      images: {
        unoptimized: true, // Required because Next.js Image Optimization needs a server
      },
      // ...
    };
    ```

2.  **`package.json`**:
    Includes a deployment script using the `gh-pages` package:
    ```json
    "scripts": {
      // ...
      "deploy": "gh-pages -d out"
    }
    ```

3.  **`.nojekyll`**:
    A file located in `public/.nojekyll`. This is crucial because Next.js generates files starting with `_` (like `_next`), which GitHub Pages (Jekyll) ignores by default. This empty file disables Jekyll processing.

## Deployment Methods

### Option A: Manual Deployment (Fastest for Solo Devs)

This method builds the project locally and pushes the `out` folder to a `gh-pages` branch on your repository.

1.  **Install Dependencies** (if not already done):
    ```bash
    pnpm install
    ```

2.  **Build and Deploy**:
    Run the following command in your terminal:
    ```bash
    pnpm run build && pnpm run deploy
    ```
    *   `pnpm run build`: Generates the static site in the `out/` directory.
    *   `pnpm run deploy`: Uses the `gh-pages` tool to push the contents of `out/` to the `gh-pages` branch on GitHub.

3.  **Configure GitHub Repo**:
    *   Go to your repository on GitHub.
    *   Navigate to **Settings** > **Pages**.
    *   Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
    *   Under **Branch**, select **`gh-pages`** and folder **`/ (root)`**.
    *   Click **Save**.

Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Option B: GitHub Actions (Recommended for Teams/CI)

This method automates deployment whenever you push to the `main` branch.

1.  Create a file `.github/workflows/deploy.yml`:

    ```yaml
    name: Deploy to GitHub Pages

    on:
      push:
        branches: ["main"]
      workflow_dispatch:

    permissions:
      contents: read
      pages: write
      id-token: write

    concurrency:
      group: "pages"
      cancel-in-progress: false

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout
            uses: actions/checkout@v4
          - name: Setup Node
            uses: actions/setup-node@v4
            with:
              node-version: "20"
              cache: "pnpm"
          - name: Setup pnpm
            uses: pnpm/action-setup@v3
            with:
              version: 8
          - name: Install dependencies
            run: pnpm install
          - name: Build
            run: pnpm run build
          - name: Upload artifact
            uses: actions/upload-pages-artifact@v3
            with:
              path: ./out

      deploy:
        environment:
          name: github-pages
          url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        needs: build
        steps:
          - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v4
    ```

2.  **Configure GitHub Repo**:
    *   Go to **Settings** > **Pages**.
    *   Under **Build and deployment** -> **Source**, select **GitHub Actions**.

## Troubleshooting

### Images Not Loading / 404 Errors
If your site is hosted at a subpath (e.g., `github.io/repo-name`), you might need to configure the `basePath` in `next.config.ts` if absolute links are broken.
However, for pure static sites, relative paths usually work fine. If you see broken images:
1.  Ensure you are using the `<Image />` component or `<img>` with paths starting with `/`.
2.  If deployed to a subdirectory, consider adding `basePath: '/repo-name'` to `next.config.ts`.

### Styling Missing
Ensure `public/.nojekyll` exists. If files in `_next` are 404ing, GitHub is likely filtering them out because it thinks it's a Jekyll site.

### "Route /... not found" on Refresh
GitHub Pages is a static host. If you navigate to `/stones` and hit refresh, GitHub looks for `stones.html` or `stones/index.html`.
Next.js Export generates `stones.html`.
*   Ensure your build output contains `stones.html` (check the `out` folder locally).
*   Our configuration `output: 'export'` handles this correctly by generating HTML files for each route.
