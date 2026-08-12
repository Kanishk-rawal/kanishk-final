"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface ScrollyCanvasProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
  frameCount?: number;
  folderPath?: string;
  children?: React.ReactNode;
}

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({
  containerRef: externalContainerRef,
  children,
}) => {
  const internalContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = externalContainerRef || internalContainerRef;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [heroImage, setHeroImage] = useState<HTMLImageElement | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);
  const currentProgressRef = useRef<number>(0);

  // Scroll progress (0 to 1) over the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload ONLY the primary single hero portrait photo (pose-1.jpg)
  useEffect(() => {
    let isMounted = true;
    const img = new Image();
    img.src = "/hero-poses/pose-1.jpg";
    img.onload = () => {
      if (!isMounted) return;
      setHeroImage(img);
      setIsReady(true);
    };
    img.onerror = () => {
      if (!isMounted) return;
      setIsReady(true);
    };

    return () => {
      isMounted = false;
    };
  }, []);

  // Draw single primary hero portrait image with subtle parallax zoom on scroll
  const drawCanvas = useCallback(
    (progress: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // Base dark hex
      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      if (heroImage && heroImage.complete && heroImage.naturalWidth > 0) {
        const imgRatio = heroImage.naturalWidth / heroImage.naturalHeight;
        const canvasRatio = displayWidth / displayHeight;

        let renderWidth = displayWidth;
        let renderHeight = displayHeight;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > canvasRatio) {
          renderHeight = displayHeight;
          renderWidth = displayHeight * imgRatio;
          offsetX = (displayWidth - renderWidth) / 2;
        } else {
          renderWidth = displayWidth;
          renderHeight = displayWidth / imgRatio;
          offsetY = (displayHeight - renderHeight) / 2;
        }

        // Subtle scale parallax on scroll (1.0 -> 1.1)
        const scale = 1.0 + progress * 0.1;
        const scaledW = renderWidth * scale;
        const scaledH = renderHeight * scale;
        const scaledX = offsetX - (scaledW - renderWidth) / 2;
        const scaledY = offsetY - (scaledH - renderHeight) / 2;

        ctx.globalAlpha = 1.0;
        ctx.drawImage(heroImage, scaledX, scaledY, scaledW, scaledH);
      }

      ctx.restore();
    },
    [heroImage]
  );

  // Initial draw & resize listener
  useEffect(() => {
    const handleResize = () => {
      drawCanvas(currentProgressRef.current);
    };

    drawCanvas(currentProgressRef.current);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [drawCanvas]);

  // Scroll event listener
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    currentProgressRef.current = latest;
    requestAnimationFrame(() => {
      drawCanvas(latest);
    });
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#121212]">
        {/* Fullscreen Canvas with single primary hero portrait image */}
        <canvas
          ref={canvasRef}
          className="block w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: isReady ? 1 : 0 }}
        />

        {/* Text / Overlay children floating on top */}
        {children}

        {/* Top and Bottom Vignette Fades */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#121212]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-transparent z-10" />
      </div>
    </div>
  );
};
