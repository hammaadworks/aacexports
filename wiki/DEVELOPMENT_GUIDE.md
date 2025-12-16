# Development and Deployment Guide

This guide will walk you through setting up your project for development with live reloading and deploying it to GitHub Pages.

## 1. Development Mode with Live Reload

To efficiently develop your static site with instant feedback, you'll combine the Tailwind CSS watcher with a live server.

### Prerequisites:

*   **Node.js and npm:** Ensure you have these installed on your system.
*   **VS Code (Recommended):** Your integrated development environment.
*   **Live Server VS Code Extension:** Install this extension from the VS Code Marketplace (`ritwickdey.liveserver`).

### Steps:

1.  **Start the Tailwind CSS Watcher:**
    *   Open your VS Code Integrated Terminal (View > Terminal).
    *   Navigate to your project's root directory.
    *   Run the following command:
        ```bash
        npm run watch:css
        ```
    *   **Explanation:** This command starts a process that continuously monitors your HTML files, `tailwind.config.js`, and `assets/css/globals.css` (via `assets/css/tailwind.css`). Whenever a relevant file is saved, it automatically rebuilds `assets/css/output.css` with the latest Tailwind styles. Keep this terminal running in the background while you develop.

2.  **Start Live Server:**
    *   In VS Code, open your `index.html` file.
    *   Right-click anywhere in the `index.html` file and select "Open with Live Server", or click the "Go Live" button in the bottom-right corner of the VS Code status bar.
    *   **Explanation:** Live Server will open your `index.html` file in your default web browser. It watches all your HTML, CSS, and JavaScript files. When a change is detected (e.g., `output.css` is rebuilt by the Tailwind watcher, or you edit an HTML/JS file), Live Server automatically reloads your browser, showing you the updates instantly.

### Workflow:

With both `npm run watch:css` and Live Server running:
*   Edit your HTML, `assets/css/globals.css`, or `assets/js/main.js`.
*   Save your changes.
*   Your browser will automatically refresh, displaying the latest version of your site.

## 2. Deployment to GitHub Pages

Once your site is ready for production, you can easily deploy it to GitHub Pages.

### Prerequisites:

*   **Git:** Ensure Git is installed and you've initialized a Git repository for your project (`git init`).
*   **GitHub Repository:** Your project should be pushed to a GitHub repository.

### Steps:

1.  **Build Production CSS:**
    *   Before deploying, generate the optimized and minified production CSS.
    *   Open your VS Code Integrated Terminal.
    *   Run the following command:
        ```bash
        npm run build:css
        ```
    *   **Explanation:** This command compiles `assets/css/tailwind.css` (which includes your `globals.css` theme) into `assets/css/output.css`. For production builds, Tailwind performs optimizations like purging unused CSS, resulting in a much smaller and faster stylesheet.

2.  **Commit and Push Changes:**
    *   Ensure all your project files, including the newly generated `assets/css/output.css`, are committed to your Git repository.
    *   Add any untracked files: `git add .`
    *   Commit your changes: `git commit -m "Prepare for GitHub Pages deployment"`
    *   Push to your GitHub repository: `git push origin main` (replace `main` with your branch name if different).

3.  **Configure GitHub Pages:**
    *   Go to your repository on GitHub in your web browser.
    *   Click on **Settings** (usually near the top of the page).
    *   In the left sidebar, click on **Pages**.
    *   Under "Build and deployment", select **Deploy from a branch**.
    *   Under "Branch", select your primary branch (e.g., `main` or `master`).
    *   For the folder, select **`/ (root)`**.
    *   Click **Save**.

4.  **Verify Deployment:**
    *   GitHub Pages will now build and deploy your site. This usually takes a few minutes.
    *   Once deployed, GitHub will provide a link to your live site (e.g., `https://yourusername.github.io/your-repo-name/`).
    *   Open this link in your browser to verify that your site is working correctly.

### Important Considerations for GitHub Pages:

*   **Relative Paths:** Ensure all your links to CSS, JavaScript, images, and other assets in your HTML files use relative paths (e.g., `assets/css/output.css` or `/assets/img/hero.png`). Absolute paths starting with `/` like `/assets/` are generally recommended if your GitHub Pages site is hosted from the root of your repository (which it is with the `/ (root)` setting). If your site was hosted in a subdirectory (e.g., if you were deploying a project page to `yourusername.github.io/your-repo-name/`), you might need to adjust paths or use the `<base>` tag in your HTML. In this setup, with `/ (root)` chosen, the current paths should work correctly.

By following these steps, you'll have a robust development workflow and a smoothly deployed static site on GitHub Pages.