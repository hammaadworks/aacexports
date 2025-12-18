# Button Styles Guide

This document outlines the standard button styles used across the application to ensure consistency and brand alignment.

## 1. Solid Primary (Gold)
**Usage:** High-priority actions like "Get in Touch" or main CTAs. The flagship brand button.

### Rest State
- **Background:** `bg-primary` (Brand Gold: #EAB308)
- **Text:** `text-primary-foreground` (Brand Green/White)
- **Border:** None
- **Shadow:** `shadow-md`
- **Typography:** `font-bold`

### Hover State
- **Background:** `hover:bg-primary/90`
- **Shadow:** `hover:shadow-lg`
- **Transition:** `transition-all duration-300`

---

## 2. Solid Secondary (Green)
**Usage:** Alternative primary actions, or for use on light backgrounds where a dark button provides better contrast. Also good for "Nature" themed sections.

### Rest State
- **Background:** `bg-secondary` (Brand Green: #303F2D)
- **Text:** `text-secondary-foreground` (White)
- **Border:** None
- **Shadow:** `shadow-md`
- **Typography:** `font-medium`

### Hover State
- **Background:** `hover:bg-secondary/90` (Slightly lighter/opacity change)
- **Shadow:** `hover:shadow-lg`
- **Transition:** `transition-all duration-300`

---

## 3. Outline Primary (Gold Border)
**Usage:** Secondary actions that sit alongside a Solid button (e.g., "Learn More" next to "Buy Now"). Elegant and less aggressive.

### Rest State
- **Background:** `bg-transparent`
- **Text:** `text-primary` (Brand Gold)
- **Border:** `border-2 border-primary`
- **Shadow:** None

### Hover State
- **Background:** `hover:bg-primary` (Fills with Gold)
- **Text:** `hover:text-primary-foreground` (Changes to text color of Solid Primary)
- **Shadow:** `hover:shadow-md`
- **Transition:** `transition-all duration-300`
