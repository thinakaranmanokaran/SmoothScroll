import React, { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export type SmoothScrollProps = {
    children: ReactNode;
    stiffness?: number;
    damping?: number;
    mass?: number;
};

const SmoothScroll: React.FC<SmoothScrollProps> = ({
    children,
    stiffness = 100,
    damping = 30,
    mass = 1,
}) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const { scrollY } = useScroll();
    const [pageHeight, setPageHeight] = useState(0);

    const smoothY = useSpring(scrollY, { stiffness, damping, mass });
    const y = useTransform(smoothY, (val) => -val);

    useEffect(() => {
        if (!scrollRef.current) return;
        const node = scrollRef.current;

        const setHeight = () => setPageHeight(node.scrollHeight);
        setHeight();

        const resizeObserver = new ResizeObserver(setHeight);
        resizeObserver.observe(node);
        window.addEventListener("resize", setHeight);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", setHeight);
        };
    }, []);

    return (
        <>
            <div style={{ height: pageHeight }} />
            <motion.div
                ref={scrollRef}
                style={{ y }}
                className="fixed top-0 left-0 w-full will-change-transform"
            >
                {children}
            </motion.div>
        </>
    );
};

export default SmoothScroll;
