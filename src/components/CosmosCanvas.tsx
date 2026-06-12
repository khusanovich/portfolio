"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number; y: number;
  size: number; opacity: number;
  speed: number;
  twinkleSpeed: number; twinklePhase: number;
  r: number; g: number; b: number;
}

interface Comet {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
}

function makeLayer(
  count: number,
  minSize: number,
  maxSize: number,
  speed: number,
  w: number,
  h: number,
): Star[] {
  return Array.from({ length: count }, () => {
    const t = Math.random();
    const [r, g, b] =
      t < 0.55 ? [180, 200, 255]  // blue-white
      : t < 0.75 ? [230, 230, 255] // pure white
      : t < 0.88 ? [168, 148, 255] // violet
      : [150, 230, 255];            // cyan

    return {
      x: Math.random() * w,
      y: Math.random() * h,
      size: minSize + Math.random() * (maxSize - minSize),
      opacity: 0.35 + Math.random() * 0.65,
      speed,
      twinkleSpeed: 0.3 + Math.random() * 0.9,
      twinklePhase: Math.random() * Math.PI * 2,
      r, g, b,
    };
  });
}

export default function CosmosCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;
    let stars: Star[] = [];
    let comets: Comet[] = [];
    let cometTimer = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      stars = [
        ...makeLayer(200, 0.2, 0.7, 0.08, canvas.width, canvas.height),
        ...makeLayer(90,  0.7, 1.3, 0.25, canvas.width, canvas.height),
        ...makeLayer(40,  1.3, 2.5, 0.6,  canvas.width, canvas.height),
      ];
    };

    const spawnComet = () => {
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.4;
      comets.push({
        x: Math.random() * canvas.width * 0.6,
        y: Math.random() * canvas.height * 0.4,
        vx: Math.cos(angle) * 14,
        vy: Math.sin(angle) * 14,
        life: 0,
        maxLife: 55 + Math.random() * 35,
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = {
        x: e.clientX / window.innerWidth  - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      };
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const draw = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      cometTimer++;
      if (cometTimer > 220 + Math.random() * 280) {
        if (comets.length < 3) spawnComet();
        cometTimer = 0;
      }

      for (const s of stars) {
        const px = mouse.current.x * s.speed * 70;
        const py = mouse.current.y * s.speed * 70;
        const x = ((s.x + px) % canvas.width + canvas.width)   % canvas.width;
        const y = ((s.y + py) % canvas.height + canvas.height) % canvas.height;

        const tw = Math.sin(t * 0.016 * s.twinkleSpeed + s.twinklePhase) * 0.28 + 0.72;
        const a  = s.opacity * tw;

        ctx.beginPath();
        ctx.arc(x, y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.r},${s.g},${s.b},${a})`;
        ctx.fill();

        if (s.size > 1.6) {
          const gr = ctx.createRadialGradient(x, y, 0, x, y, s.size * 6);
          gr.addColorStop(0, `rgba(${s.r},${s.g},${s.b},${a * 0.35})`);
          gr.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(x, y, s.size * 6, 0, Math.PI * 2);
          ctx.fillStyle = gr;
          ctx.fill();
        }
      }

      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        c.life++;
        c.x += c.vx;
        c.y += c.vy;

        if (c.life > c.maxLife || c.x > canvas.width + 100 || c.y > canvas.height + 100) {
          comets.splice(i, 1);
          continue;
        }

        const p = c.life / c.maxLife;
        const a = p < 0.25 ? p / 0.25 : 1 - (p - 0.25) / 0.75;
        const tailSteps = 10;

        for (let s = tailSteps; s > 0; s--) {
          const tx = c.x - c.vx * s * 0.8;
          const ty = c.y - c.vy * s * 0.8;
          const ta = a * (1 - s / tailSteps) * 0.7;
          ctx.beginPath();
          ctx.arc(tx, ty, 0.8 + (1 - s / tailSteps), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,212,255,${ta})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(c.x, c.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,248,255,${a})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}
