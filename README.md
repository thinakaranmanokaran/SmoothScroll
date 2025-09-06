# smooth-motion

[![npm version](https://img.shields.io/npm/v/smooth-motion.svg)](https://www.npmjs.com/package/smooth-motion)
[![npm downloads](https://img.shields.io/npm/dm/smooth-motion.svg)](https://www.npmjs.com/package/smooth-motion)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Author:** Thinakaran Manokaran · [https://thinakaran.dev](https://thinakaran.dev)

---

## 🌟 Overview

**smooth-motion** is a **lightweight React smooth scroll component** powered by **Lenis**.
It enables **fluid, speed-controllable scroll effects** with zero external CSS, working seamlessly in both **JavaScript (JSX)** and **TypeScript (TSX)** projects.

Ideal for **modern UI/UX**, landing pages, portfolios, and apps that need **silky smooth scrolling animations** with minimal setup.

---

## ✨ Features

* 🚀 Smooth **Lenis-powered scroll animations**
* ⚡ **Lightweight** and dependency-friendly
* 🔧 Fully **customizable** via props (`speed`)
* 📦 Out-of-the-box support for **JSX & TSX**
* 🎨 No extra CSS — just clean, declarative **React**
* 🛡️ TypeScript typings included

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
import { UseSmoothScroll } from "smooth-motion";

export default function App() {
  return (
    <>
      <UseSmoothScroll speed={1.5} />
      <div style={{ height: 3000 }}>
        <h1>Hello from UseSmoothScroll (JSX)</h1>
      </div>
    </>
  );
}
```

### TypeScript (TSX)

```tsx
import React from "react";
import { UseSmoothScroll } from "smooth-motion";

const App: React.FC = () => {
  return (
    <>
      <UseSmoothScroll speed={2} />
      <div style={{ height: 3000 }}>
        <h1>Hello from UseSmoothScroll (TSX)</h1>
      </div>
    </>
  );
};

export default App;
```

---

## ⚙️ Props

| Prop    | Type     | Default | Description                             |
| ------- | -------- | ------- | --------------------------------------- |
| `speed` | `number` | `1`     | Controls scroll speed (higher = faster) |

---

## 💡 Why Choose smooth-motion?

* Works with **React 17+ and React 19**
* **TypeScript-ready** — zero config required
* Minimal footprint, fast performance
* Perfect for **landing pages, portfolios, and apps**
* Designed for **developers who love smooth UI animations**

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

* 🌐 Author Website: [https://thinakaran.dev](https://thinakaran.dev)
* 📦 npm: [smooth-motion](https://www.npmjs.com/package/smooth-motion)
* 💻 GitHub Repo: [UseSmoothScroll](https://github.com/thinakaranmanokaran/SmoothScroll)
