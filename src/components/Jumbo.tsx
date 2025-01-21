'use client';
import Image from 'next/image';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

export default function Jumbo() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: 100 },
        { x: 0, duration: 2, ease: "power4.inOut" }
      );
    }, imageRef);

    return () => ctx.revert(); // Cleanup GSAP context on unmount
  }, []);

  return (
    <div ref={imageRef} className="h-96 w-1/2 overflow-hidden">
      <Image
        className="rounded-xl"
        src="/Entrata.webp"
        alt="Macelleria Paiano"
        layout="fill" // Adatta l'immagine al contenitore
        objectFit="cover" // Adatta l'immagine mantenendo le proporzioni
      />
    </div>
  );
}
