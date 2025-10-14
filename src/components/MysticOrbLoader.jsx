import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MysticOrbLoader = ({ size = 150, color1 = "#a855f7", color2 = "#ec4899" }) => {
    const orbRef = useRef(null);
    const ring1Ref = useRef(null);
    const ring2Ref = useRef(null);
    const sparksRef = useRef([]);

    useEffect(() => {
        gsap.to(orbRef.current, {
            scale: 1.05,
            repeat: -1,
            yoyo: true,
            duration: 1.6,
            ease: "power1.inOut",
        });

        gsap.to(ring1Ref.current, {
            rotate: 360,
            repeat: -1,
            duration: 10,
            ease: "none",
        });

        sparksRef.current.forEach((spark) => {
            gsap.to(spark, {
                opacity: 0,
                repeat: -1,
                yoyo: true,
                duration: gsap.utils.random(0.6, 1.4),
                delay: gsap.utils.random(0, 1),
            });
        });
    }, []);

    return (
        <div className="relative flex items-center justify-center">
            {/* Orb Glow */}
            <div
                ref={orbRef}
                className="rounded-full blur-2xl opacity-60"
                style={{
                    width: size,
                    height: size,
                    background: `radial-gradient(circle at center, ${color1}, ${color2}, transparent 70%)`,
                    boxShadow:  `0 0 40px ${color1}80, 0 0 80px ${color2}50`,
                }}
            />

            {/* Rotating Rings */}
            <div
                ref={ring1Ref}
                className="absolute rounded-full border-[2px] border-dashed opacity-70"
                style={{
                    width: size + 30,
                    height: size + 30,
                    borderColor: color1,
                }}
            ></div>

            <div
                ref={ring2Ref}
                className="absolute rounded-full borde-[2px] border-dashed opacity-60"
                style={{
                    width: size + 60,
                    height: size + 60,
                    borderColor: color2,
                }}
            ></div>

            {/* Sparks */}
            {[...Array(10)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (sparksRef.current[i] = el)}
                    className="absolute rounded-full"
                    style={{
                        width: 6,
                        height: 6,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        background: i % 2 === 0 ? color1 : color2,
                        filter: "blur(1px)",
                        opacity: 0.5,
                    }}
                />
            ))}
        </div>
    );
};

export default MysticOrbLoader;