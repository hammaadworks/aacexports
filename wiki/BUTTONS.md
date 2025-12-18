# Button Styles Guide

This document outlines the standard button styles used across the application to ensure consistency and brand alignment.

## 1. Solid CTA (Primary Action)
**Usage:** High-priority actions like the "Get in Touch" button in the App Header.

### Rest State
- **Background:** `bg-primary` (Brand Gold: #EAB308)
- **Text:** `text-primary-foreground` (Brand Green: #1F2A22)
- **Border:** None / Implicit
- **Shadow:** `shadow-md`
- **Typography:** `font-bold`

### Hover State
- **Background:** `hover:bg-primary/90` (Slightly darker gold/opacity change) or `hover:bg-[#EAB308]` with shadow increase.
- **Shadow:** `hover:shadow-lg`
- **Transition:** `transition-all duration-300`

---

## 2. Hover (Secondary Action)
**Usage:** Secondary actions like "Explore Products" in the Hero section.

### Rest State
- **Background:** Transparent / `bg-transparent`
- **Text:** `text-foreground` (or specific context color)
- **Border:** `border border-input` (or `border-border`)
- **Shadow:** None (or `shadow-sm` depending on variant)

### Hover State
- **Background:** `hover:bg-accent` (Light Yellow: #FFF7D1) or `hover:bg-secondary/10` depending on theme context.
- **Text:** `hover:text-accent-foreground` (Brand Green)
- **Border:** `hover:text-accent-foreground` (Implicitly matches text if current color)

---

## 3. Hover Solid (Icon/Social Button)
**Usage:** Small, interactive elements like the "Follow Us" social icons in the App Footer.

### Rest State
- **Background:** `bg-white/5` (Semi-transparent white on dark background)
- **Text:** Inherited (White/Grey)
- **Border:** `border border-white/10`
- **Shape:** `rounded-full`

### Hover State
- **Background:** `hover:bg-primary` (Brand Gold: #EAB308)
- **Text:** `hover:text-secondary` (Brand Green: #303F2D)
- **Border:** `hover:border-primary`
- **Transition:** `transition-all duration-300`
