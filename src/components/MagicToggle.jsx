import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const MagicToggle = ({ size = "md", onToggle }) => {
    const [active, setActive] = useState(false);
    const toggleRef = useRef(null);
    const handleRef = useRef(null);

    const sizes = {
        sm: { width: 50, height: 25, handle: 20 },
        md: { width: 70, height: 35, handle: 30 },
        lg: { width: 100, height: 50, handle: 40 },
    };

    const { width, height, handle } = sizes[size] || sizes.md;

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power2.out" } });
        if (active) {
            tl.to(handleRef.current, { x: width - handle - 4, backgroundColor: "#ec4899", boxShadow: "0 0 15px #ec489980" })
                .to(toggleRef.current, { backgroundColor: "rgba(236,72,153,0.25)" }, 0);
        } else {
            tl.to(handleRef.current, { x: 2, backgroundColor: "#8b5cf6", boxShadow: "0 0 10px #8b5cf680" })
                .to(toggleRef.current, { backgroundColor: "rgba(139,92,246,0.25)" }, 0);
        }
    }, [active, width, handle]);

    const handleClick = () => {
        setActive(!active);
        if (onToggle) onToggle(!active);
    };

    return (
        <div
            ref={toggleRef}
            onClick={handleClick}
            className="relative rounded-full transition-colors duration-300"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                background: "rgba(139,92,246,0.25)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 15px rgba(139,92,246,0.4)",
            }}
        >
            <div
                ref={handleRef}
                className="absolute top-1/2 -translate-y-1/2 rounded-full"
                style={{
                    width: `${handle}px`,
                    height: `${handle}px`,
                    background: "#8b5cf6",
                    left: "2px",
                    boxShadow: "0 0 10px #8b5cf680",
                }} />
        </div>
    );
};

export default MagicToggle;