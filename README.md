# smooth-scroll

**Author:** Thinakaran Manokaran 
[https://thinakaran.dev](https://thinakaran.dev)

A minimal, high-performance React component for smooth scrolling using **Framer Motion**. Designed to bring silky transitions to your content — user-friendly for both **JavaScript (JSX)** and **TypeScript (TSX)** developers.

---

##  Features

- Smooth spring scrolling powered by **Framer Motion**
- Lightweight and dependency-friendly
- Works out-of-the-box for both JS and TS users
- Customizable with props: `stiffness`, `damping`, `mass`
- No external CSS — only functional, declarative code

---

##  Installation

```bash
npm install smooth-scroll framer-motion
# or
yarn add smooth-scroll framer-motion
# or
pnpm add smooth-scroll framer-motion
````

---

## Usage Examples

### JavaScript (JSX)

```jsx
import React from "react";
import { SmoothScroll } from "smooth-scroll";

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
import { SmoothScroll, SmoothScrollProps } from "smooth-scroll";

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

## Props

| Prop        | Type        | Default | Description                          |
| ----------- | ----------- | ------- | ------------------------------------ |
| `children`  | `ReactNode` | —       | Your scrollable content              |
| `stiffness` | `number`    | `100`   | Controls the stiffness of the spring |
| `damping`   | `number`    | `30`    | Controls spring damping (smoothness) |
| `mass`      | `number`    | `1`     | Mass of the spring (momentum feel)   |

---

## Why This Works for Everyone

No forcing your consumers to pick between JSX or TSX. With this package:

* **JSX users** just import the prebuilt JS — no config needed.
* **TSX users** will seamlessly benefit from included `.d.ts` typings.

One package, dual-format compatibility, zero friction.

---

## Development & Contribution

1. Clone the repo
2. Install dependencies: `npm install`
3. Build: `npm run build`
4. Test in a demo app via `npm link` or `npm pack`
5. See something to improve? Open an issue or submit a PR!

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

**Inspired by** Thinakaran Manokaran — crafting elegant, functional solutions with **quality**, **consistency**, and **perfection**.
Visit: [https://thinakaran.dev](https://thinakaran.dev)

---