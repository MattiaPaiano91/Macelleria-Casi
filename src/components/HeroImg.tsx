"use client";

import { useEffect } from "react";
import heroImage from "../../public/heroImg.webp";

const HeroImg = () => {
    useEffect(() => {
        const heroImg = document.getElementById("hero-image");
        if (heroImg) {
            setTimeout(() => {
                heroImg.style.transform = "translateY(50%)";
            }, 300);
        }
    }, []);

    return (
        <div
            className="relative w-full h-[50vh] overflow-visible"
            style={{
                backgroundImage: `url(${heroImage.src})`,
                backgroundPosition: "top",
                backgroundSize: "cover",
                transform: "translateY(150%)",
                transition: "transform .8s ease-out",
            }}
            id="hero-image"
        ></div>
    );
};

export default HeroImg;
