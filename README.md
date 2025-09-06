# smooth-motion

[![npm version](https://img.shields.io/npm/v/smooth-motion.svg)](https://www.npmjs.com/package/smooth-motion)
[![npm downloads](https://img.shields.io/npm/dm/smooth-motion.svg)](https://www.npmjs.com/package/smooth-motion)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Author:** Thinakaran Manokaran · [https://thinakaran.dev](https://thinakaran.dev)

A minimal, high-performance **React Smooth Scroll** component powered by **Framer Motion**.  
Designed to bring silky-smooth transitions to your app — works perfectly for both **JavaScript (JSX)** and **TypeScript (TSX)** developers.

---

## ✨ Features

- Smooth spring-based scrolling with **Framer Motion**
- Lightweight and dependency-friendly
- Out-of-the-box support for **JS** and **TS**
- Customizable props: `stiffness`, `damping`, `mass`
- Zero external CSS — just clean, declarative React

---

## 📦 Installation

```bash
npm install smooth-motion
# or
yarn add smooth-motion
# or
pnpm add smooth-motion
````

---

## 🚀 Usage Examples

### JavaScript (JSX)

```jsx
import React from "react";
import { SmoothScroll } from "smooth-motion";

export default function App() {
  return (
    <SmoothScroll>
      <div style={{ height: 2000 }}>
        <h1>Hello from SmoothScroll (JSX)</h1>
      </div>
    </SmoothScroll>
  );
}
```

### TypeScript (TSX)

```tsx
import React from "react";
import { SmoothScroll, SmoothScrollProps } from "smooth-motion";

export default function App(): JSX.Element {
  return (
    <SmoothScroll stiffness={120} damping={32} mass={1.2}>
      <div style={{ height: 2000 }}>
        <h1>Hello from SmoothScroll (TSX)</h1>
      </div>
    </SmoothScroll>
  );
}
```

---

## ⚙️ Props

| Prop        | Type        | Default | Description                          |
| ----------- | ----------- | ------- | ------------------------------------ |
| `children`  | `ReactNode` | —       | Your scrollable content              |
| `stiffness` | `number`    | `100`   | Controls the stiffness of the spring |
| `damping`   | `number`    | `30`    | Controls spring damping (smoothness) |
| `mass`      | `number`    | `1`     | Mass of the spring (momentum feel)   |

---

## 💡 Why This Works for Everyone

No forcing users to choose between JSX and TSX:

* **JSX users** → Just import the prebuilt JS, no setup required
* **TSX users** → Automatically benefit from included `.d.ts` typings

✅ One package, dual compatibility, zero friction.

---

## 🛠️ Development & Contribution

1. Clone the repo
2. Install dependencies: `npm install`
3. Build: `npm run build`
4. Test locally via `npm link` or `npm pack`
5. See something to improve? Open an issue or submit a PR!

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

**Crafted by** Thinakaran Manokaran — building elegant, functional solutions with **quality**, **consistency**, and **perfection**.
🌐 Visit: [https://thinakaran.dev](https://thinakaran.dev)

---

👉 With this, your package will look **professional, SEO-friendly, and beginner-friendly** on npm and GitHub.  

Do you also want me to make a **short SEO tagline** (one-liner) for the npm search results (the “description” under your package name)?

