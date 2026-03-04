"use client";

import React, { useEffect, useRef } from "react";

export function StarryBackground() {
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX - innerWidth / 2) / innerWidth; // ~-0.5 .. 0.5
      const y = (event.clientY - innerHeight / 2) / innerHeight;

      // Parallax đủ mạnh nhưng vẫn trong vùng an toàn (không lộ viền)
      const translateX = x * -60;
      const translateY = y * -40;

      if (layerRef.current) {
        layerRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block overflow-hidden bg-black">
      {/* Phóng to nhiều để luôn phủ kín khi di chuyển */}
      <div
        ref={layerRef}
        className="starry-bg w-[200%] h-[200%] will-change-transform"
        style={{ transform: "translate3d(-25%, -25%, 0)" }}
      />
    </div>
  );
}
