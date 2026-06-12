"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 350, damping: 28, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 350, damping: 28, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); setVisible(true); };
    const down = () => setClicking(true);
    const up   = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [mx, my]);

  if (!visible) return null;

  return (
    <>
      {/* Dot — instant */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-accent"
        style={{
          x: mx, y: my,
          translateX: "-50%", translateY: "-50%",
          width:  clicking ? 6 : 5,
          height: clicking ? 6 : 5,
        }}
      />
      {/* Ring — spring lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-accent/50"
        style={{
          x: sx, y: sy,
          translateX: "-50%", translateY: "-50%",
          width:  clicking ? 28 : 36,
          height: clicking ? 28 : 36,
          transition: "width 150ms, height 150ms",
        }}
      />
    </>
  );
}
