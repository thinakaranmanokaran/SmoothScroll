import { useEffect } from "react";
import Lenis, { LenisOptions } from "lenis";

export type UseSmoothScrollProps = {
    speed?: number; // user controls scroll speed
};

const UseSmoothScroll: React.FC<UseSmoothScrollProps> = ({ speed = 1 }) => {
    useEffect(() => {
        // Map speed to duration (inverse: higher speed → smaller duration)
        const duration = Math.max(0.5, 2 / speed);

        const options: LenisOptions = {
            duration,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
            // ✅ valid options in latest Lenis:
            // duration?: number
            // easing?: (t: number) => number
            // lerp?: number
            // direction?: "vertical" | "horizontal"
            // gestureDirection?: "vertical" | "horizontal"
            // wheelMultiplier?: number
            // touchMultiplier?: number
            // infinite?: boolean
        };

        const lenis = new Lenis(options);

        const animate = (time: number) => {
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
