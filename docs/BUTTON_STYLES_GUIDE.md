# AAC Exports - UI Button Design System Guide

This document outlines the standard button styles for AAC Exports, reflecting our "Nature & Luxury" brand identity. The styles leverage Tailwind CSS classes and our defined CSS variables for consistency and maintainability.

---

## 1. Core Brand Colors (from `app/globals.css`)

Our design system is built upon a specific color palette, referenced via CSS variables in `app/globals.css` and mapped to Tailwind's utility classes.

-   **Brand Gold:** `var(--brand-gold)` (used for `primary` and `ring`) - `#EAB308`
-   **Brand Green:** `var(--brand-green)` (used for `secondary`, `foreground` in light mode, and various backgrounds/borders) - `#303F2D`
-   **Brand White:** `var(--brand-white)` (used for `primary-foreground` in light mode, `secondary-foreground`) - `#FFFFFF`
-   **Dark Background:** `var(--background)` in dark mode - `#0A0F0D`

---

## 2. Typography (from `app/globals.css`)

We use distinct fonts for different elements to convey our brand's character.

-   **Sans-serif (Body Text):** `var(--font-sans)` - `Inter, system-ui, sans-serif`
-   **Serif (Headings/Titles):** `var(--font-serif)` - `Source Serif 4, serif`

---

## 3. Button Styles

We have defined three primary button styles to cover common interaction patterns, designed to work harmoniously across both light and dark themes.

### 3.1. Solid Primary (Gold)

**Usage:** High-priority actions, main Call-to-Action (CTA) buttons. This is our flagship brand button, designed to stand out.

**Appearance:**

| State    | Property       | Tailwind Classes        | Value / Description                                   |
| :------- | :------------- | :---------------------- | :---------------------------------------------------- |
| **Rest** | Background     | `bg-primary`            | `var(--brand-gold)` (`#EAB308`)                      |
|          | Text Color     | `text-primary-foreground` | `var(--brand-white)` (`#FFFFFF`) - *Note: `primary-foreground` is white as per `globals.css`* |
|          | Border         | `None`                  |                                                       |
|          | Shadow         | `shadow-md`             |                                                       |
|          | Font Weight    | `font-bold`             |                                                       |
|          | Padding        | `px-6 py-3`             |                                                       |
|          | Border Radius  | `rounded-lg`            |                                                       |
|          | Transition     | `transition-all duration-300` |                                                       |
| **Hover**| Background     | `hover:bg-primary/90`   | `rgba(234, 179, 8, 0.9)` (Slightly darker gold)       |
|          | Shadow         | `hover:shadow-lg`       |                                                       |
|          | Transform      | `hover:translate-y-[-1px]` | Slight lift for interaction feedback                  |

**Example (JSX/HTML):**
```jsx
<button className="bg-primary text-primary-foreground font-bold shadow-md px-6 py-3 rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:translate-y-[-1px]">
  Get in Touch
</button>
```

**Contextual Use:**
-   **Dark Theme:** Appears vibrant and luxurious against the `var(--background)` (`#0A0F0D`).
-   **Light Theme:** Provides a strong, high-contrast CTA on `var(--background)` (`#FFFFFF`).

---

### 3.2. Solid Secondary (Green)

**Usage:** Alternative primary actions, particularly effective on light backgrounds. Conveys stability and nature.

**Appearance:**

| State    | Property       | Tailwind Classes        | Value / Description                                   |
| :------- | :------------- | :---------------------- | :---------------------------------------------------- |
| **Rest** | Background     | `bg-secondary`          | `var(--brand-green)` (`#303F2D`)                     |
|          | Text Color     | `text-secondary-foreground` | `var(--brand-white)` (`#FFFFFF`)                      |
|          | Border         | `None`                  |                                                       |
|          | Shadow         | `shadow-md`             |                                                       |
|          | Font Weight    | `font-medium`           |                                                       |
|          | Padding        | `px-6 py-3`             |                                                       |
|          | Border Radius  | `rounded-lg`            |                                                       |
|          | Transition     | `transition-all duration-300` |                                                       |
| **Hover**| Background     | `hover:bg-secondary/90` | `rgba(48, 63, 45, 0.9)` (Slightly lighter green)      |
|          | Shadow         | `hover:shadow-lg`       |                                                       |
|          | Transform      | `hover:translate-y-[-1px]` | Slight lift for interaction feedback                  |

**Example (JSX/HTML):**
```jsx
<button className="bg-secondary text-secondary-foreground font-medium shadow-md px-6 py-3 rounded-lg transition-all duration-300 hover:bg-secondary/90 hover:shadow-lg hover:translate-y-[-1px]">
  View Portfolio
</button>
```

**Contextual Use:**
-   **Dark Theme:** Generally avoided as the dark green can blend too much with the dark background, reducing visibility.
-   **Light Theme:** Ideal for content pages or sections where a robust, yet earthy, secondary action is needed.

---

### 3.3. Outline Primary (Gold Border)

**Usage:** Secondary actions that complement a solid button, or for less aggressive calls-to-action where elegance is paramount.

**Appearance:**

| State    | Property       | Tailwind Classes        | Value / Description                                   |
| :------- | :------------- | :---------------------- | :---------------------------------------------------- |
| **Rest** | Background     | `bg-transparent`        |                                                       |
|          | Text Color     | `text-primary`          | `var(--brand-gold)` (`#EAB308`)                      |
|          | Border         | `border-2 border-primary` | 2px solid `var(--brand-gold)` (`#EAB308`)            |
|          | Shadow         | `None`                  |                                                       |
|          | Font Weight    | `font-medium`           |                                                       |
|          | Padding        | `px-6 py-3`             |                                                       |
|          | Border Radius  | `rounded-lg`            |                                                       |
|          | Transition     | `transition-all duration-300` |                                                       |
| **Hover**| Background     | `hover:bg-primary`      | `var(--brand-gold)` (`#EAB308`) (Fills with gold)     |
|          | Text Color     | `hover:text-primary-foreground` | `var(--brand-white)` (`#FFFFFF`)                      |
|          | Shadow         | `hover:shadow-md`       |                                                       |
|          | Transform      | `hover:translate-y-[-1px]` | Slight lift for interaction feedback                  |

**Example (JSX/HTML):**
```jsx
<button className="bg-transparent text-primary border-2 border-primary font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:translate-y-[-1px]">
  Learn More
</button>
```

**Contextual Use:**
-   **Dark Theme:** Excellent for providing a visible but non-dominant secondary option, allowing the primary gold solid button to take precedence.
-   **Light Theme:** A refined option for linking to further information without overwhelming the content.

---

### 3.4. Icon / Ghost Button (Example)

**Usage:** Small, interactive elements like navigation arrows, social media links, or toggle buttons.

**Appearance:**

| State    | Property       | Tailwind Classes        | Value / Description                                   |
| :------- | :------------- | :---------------------- | :---------------------------------------------------- |
| **Rest** | Background     | `bg-white/5`            | `rgba(255, 255, 255, 0.05)` (Subtle transparency on dark backgrounds) |
|          | Text Color     | `text-gray-300`         |                                                       |
|          | Border         | `border border-white/10`|                                                       |
|          | Shape          | `rounded-full w-12 h-12 flex items-center justify-center` |                                                       |
|          | Transition     | `transition-all duration-300` |                                                       |
| **Hover**| Background     | `hover:bg-primary`      | `var(--brand-gold)` (`#EAB308`)                      |
|          | Text Color     | `hover:text-white`      |                                                       |
|          | Border         | `hover:border-primary`  | `var(--brand-gold)` (`#EAB308`)                      |

**Example (JSX/HTML):**
```jsx
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
  </svg>
</button>
```
**Contextual Use:**
-   Best suited for dark backgrounds where the subtle initial state transitions to a prominent gold on hover.
-   For light backgrounds, consider `text-brand-green` initially and `hover:text-white` on `hover:bg-brand-green`.

---

This guide provides a comprehensive overview of our button system, designed to empower developers and designers to maintain a consistent and branded user experience. All styles are derived from the project's `tailwind.config.js` and `app/globals.css` to ensure brand consistency.
