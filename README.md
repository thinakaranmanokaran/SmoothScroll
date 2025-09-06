# smooth-motion

[![npm version](https://img.shields.io/npm/v/smooth-motion.svg)](https://www.npmjs.com/package/smooth-motion)
[![npm downloads](https://img.shields.io/npm/dm/smooth-motion.svg)](https://www.npmjs.com/package/smooth-motion)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Author:** Thinakaran Manokaran · [https://thinakaran.dev](https://thinakaran.dev)

---

## 🌟 Overview

**smooth-motion** is a **lightweight React smooth scroll and animation component** powered by **Framer Motion**.  
It enables **fluid, spring-based scroll effects** with zero external CSS, working seamlessly in both **JavaScript (JSX)** and **TypeScript (TSX)** projects.  

Ideal for **modern UI/UX**, landing pages, portfolios, and apps that need **silky smooth scrolling animations** with minimal setup.

---

## ✨ Features

- 🚀 Smooth **Framer Motion-powered scroll animations**
- ⚡ **Lightweight** and dependency-friendly
- 🔧 Fully **customizable** via props (`stiffness`, `damping`, `mass`)
- 📦 Out-of-the-box support for **JSX & TSX**
- 🎨 No extra CSS — just clean, declarative **React**
- 🛡️ TypeScript typings included

---

## 📦 Installation

Install with your favorite package manager:

```bash
npm install smooth-motion
# or
yarn add smooth-motion
# or
pnpm add smooth-motion
```

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

## 💡 Why Choose smooth-motion?

- Works with **React 17+ and React 19**
- **TypeScript-ready** — zero config required
- Minimal footprint, fast performance
- Perfect for **landing pages, portfolios, and apps**
- Designed for **developers who love smooth UI animations**

✅ One package, dual compatibility, zero friction.

---

## 🛠️ Development & Contribution

1. Clone the repo
2. Install dependencies: `npm install`
3. Build the package: `npm run build`
4. Test locally via `npm link` or `npm pack`
5. Open an issue or PR to contribute 🚀

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file.

---

## 🔗 Links

- 🌐 Author Website: [https://thinakaran.dev](https://thinakaran.dev)  
- 📦 npm: [smooth-motion](https://www.npmjs.com/package/smooth-motion)  
- 💻 GitHub Repo: [SmoothScroll](https://github.com/thinakaranmanokaran/SmoothScroll)
