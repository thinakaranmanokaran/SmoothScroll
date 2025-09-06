import { useEffect } from "react";
import Lenis from "lenis";

const UseSmoothScroll = ({ speed = 1 }) => {
    useEffect(() => {
        // Map speed to duration (inverse relation: higher speed → smaller duration)
        const duration = Math.max(0.5, 2 / speed);

        const lenis = new Lenis({
            duration,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            smooth: true,
            direction: "vertical",
            gestureDirection: "vertical",
            smoothTouch: true,
            touchMultiplier: 1.2,
        });

        const animate = (time) => {
            lenis.raf(time);
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        return () => {
            lenis.destroy();
        };
    }, [speed]);

    return null;
};

export default UseSmoothScroll;
