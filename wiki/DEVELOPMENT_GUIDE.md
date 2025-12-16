# Development Guide

This guide covers how to run the Next.js project locally and how to work with the codebase.

## Prerequisites

*   **Node.js**: Version 18.17 or later.
*   **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`.
*   **Git**: For version control.

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone <your-repo-url>
    cd <repo-name>
    ```

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

3.  **Run the development server**:
    ```bash
    pnpm run dev
    ```

4.  **Open your browser**:
    Navigate to `http://localhost:3000` to see the site live.
    The server supports Fast Refresh—edits to `page.tsx`, components, or styles will update instantly.

## Project Structure

*   `app/`: Contains the routes/pages of the application (App Router).
    *   `page.tsx`: The home page.
    *   `stones/page.tsx`, `produce/page.tsx`, etc.: Sub-pages.
    *   `globals.css`: Global styles and Tailwind imports.
*   `components/`: React components.
    *   `ui/`: Reusable UI elements (Buttons, Cards, Animations).
    *   `landing-client.tsx`: Client-side components specific to the landing page.
*   `public/`: Static assets (images, fonts, PDFs).
    *   **Note**: Do not delete `.nojekyll`. It is required for GitHub Pages.

## Working with Magic UI & Tailwind

This project uses Tailwind CSS for styling and Magic UI for animations.

*   **Tailwind**: Utility classes (e.g., `text-xl`, `p-4`, `flex`). Configured in `tailwind.config.js`.
*   **Magic UI**: Components in `components/ui/` use Framer Motion (`motion/react`) for animations.
    *   To add new icons: Import from `lucide-react`.
    *   To tweak animations: Edit the `motion` props in the component files.

## Verification

Before committing, it's good practice to run a build check to ensure no type errors or build failures:

```bash
pnpm run build && npx tsc --noEmit
```

## Deployment

Refer to [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md) for detailed deployment instructions.
