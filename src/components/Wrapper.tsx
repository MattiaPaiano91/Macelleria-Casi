"use client";

import React, { ReactNode, useEffect, useState, useCallback } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  const [scrolling, setScrolling] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const maxScroll = -200; // Massima profondità dello scroll (vh)
  const minScroll = 0; // Posizione iniziale dello scroll (vh)
  const scrollIncrement = 100; // Quantità di scroll (vh)
  const scrollDuration = 500; // Durata dell'animazione in ms

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      if (isScrolling) return; // Blocca lo scroll se già in corso

      setScrolling((prev) => {
        let newScroll = prev;

        if (event.deltaY < 0 && prev < minScroll) {
          newScroll = Math.min(prev + scrollIncrement, minScroll);
        } else if (event.deltaY > 0 && prev > maxScroll) {
          newScroll = Math.max(prev - scrollIncrement, maxScroll);
        }

        if (newScroll !== prev) {
          setIsScrolling(true); // Imposta lo stato di scrolling attivo
          setTimeout(() => setIsScrolling(false), scrollDuration);
        }

        return newScroll;
      });
    },
    [isScrolling]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className="min-h-screen w-full transition-transform duration-500 ease-in-out"
      style={{ transform: `translateY(${scrolling}vh)` }}
    >
      {children}
    </div>
  );
}
