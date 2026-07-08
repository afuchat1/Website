import { useEffect, useRef } from 'react';

// AfuChat brand accent colours — nodes and particles draw from this palette
const ACCENT_COLORS = [
  '#1F7AFF', // AfuChat blue
  '#6C63FF', // AfuMail purple
  '#00B8D4', // AfuCloud cyan
  '#16C784', // AfuAI green
  '#EC4899', // AfuMovies pink
  '#F59E0B', // AfuMall amber
  '#14B8A6', // AfuNews teal
];

interface FlowNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  colorIdx: number;
  pulse: number;
  pulseDir: number;
}

interface FlowParticle {
  a: number;
  b: number;
  t: number;
  speed: number;
  colorIdx: number;
}

interface Props {
  /** Hex background colour of the section above */
  topColor?: string;
  /** Hex background colour of the section below */
  bottomColor?: string;
  /** Divider height in px — default 160 */
  height?: number;
  className?: string;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const n = parseInt(hex.replace('#', ''), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export default function DigitalFlowDivider({
  topColor = '#040c1e',
  bottomColor = '#07091e',
  height = 160,
  className = '',
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let nodes: FlowNode[] = [];
    let particles: FlowParticle[] = [];
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      init();
    }

    function init() {
      const W = canvas!.width;
      const H = canvas!.height;
      const count = Math.max(14, Math.floor(W / (70 * dpr)));

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.5 * dpr,
        vy: (Math.random() - 0.5) * 0.35 * dpr,
        r: (Math.random() * 1.8 + 1.2) * dpr,
        colorIdx: Math.floor(Math.random() * ACCENT_COLORS.length),
        pulse: Math.random(),
        pulseDir: Math.random() > 0.5 ? 1 : -1,
      }));

      particles = [];
      for (let i = 0; i < count * 2; i++) spawnParticle();
    }

    function spawnParticle() {
      if (!nodes.length) return;
      const W = canvas!.width;
      const maxDist = W * 0.30;
      const a = Math.floor(Math.random() * nodes.length);
      // prefer a nearby node
      for (let attempt = 0; attempt < 8; attempt++) {
        const b = Math.floor(Math.random() * nodes.length);
        if (b === a) continue;
        const dx = nodes[a].x - nodes[b].x;
        const dy = nodes[a].y - nodes[b].y;
        if (Math.sqrt(dx * dx + dy * dy) <= maxDist) {
          particles.push({
            a, b,
            t: Math.random(),
            speed: (0.0025 + Math.random() * 0.004),
            colorIdx: Math.floor(Math.random() * ACCENT_COLORS.length),
          });
          return;
        }
      }
    }

    function draw() {
      const W = canvas!.width;
      const H = canvas!.height;
      const maxDist = W * 0.30;

      ctx!.clearRect(0, 0, W, H);

      // ── Background: smooth vertical gradient between section colours ──
      const bg = ctx!.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0,   topColor);
      bg.addColorStop(0.42, topColor);
      bg.addColorStop(0.58, bottomColor);
      bg.addColorStop(1,   bottomColor);
      ctx!.fillStyle = bg;
      ctx!.fillRect(0, 0, W, H);

      // ── Update nodes ──
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) { n.vx *= -1; n.x = Math.max(0, Math.min(W, n.x)); }
        if (n.y < 0 || n.y > H) { n.vy *= -1; n.y = Math.max(0, Math.min(H, n.y)); }
        n.pulse += n.pulseDir * 0.012;
        if (n.pulse > 1 || n.pulse < 0) n.pulseDir *= -1;
      }

      // ── Draw connections ──
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > maxDist) continue;
          const alpha = (1 - dist / maxDist) * 0.28;
          const { r, g, b } = hexToRgb(ACCENT_COLORS[nodes[i].colorIdx]);
          ctx!.beginPath();
          ctx!.moveTo(nodes[i].x, nodes[i].y);
          ctx!.lineTo(nodes[j].x, nodes[j].y);
          ctx!.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
          ctx!.lineWidth = 0.9 * dpr;
          ctx!.stroke();
        }
      }

      // ── Update & draw particles ──
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.t += p.speed;
        if (p.t >= 1) {
          particles.splice(i, 1);
          spawnParticle();
          continue;
        }
        const na = nodes[p.a];
        const nb = nodes[p.b];
        if (!na || !nb) { particles.splice(i, 1); continue; }

        const px = na.x + (nb.x - na.x) * p.t;
        const py = na.y + (nb.y - na.y) * p.t;
        const { r, g, b } = hexToRgb(ACCENT_COLORS[p.colorIdx]);

        // outer glow
        const glowR = 9 * dpr;
        const grd = ctx!.createRadialGradient(px, py, 0, px, py, glowR);
        grd.addColorStop(0, `rgba(${r},${g},${b},0.75)`);
        grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx!.beginPath();
        ctx!.arc(px, py, glowR, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.fill();

        // bright core
        ctx!.beginPath();
        ctx!.arc(px, py, 2.2 * dpr, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${r},${g},${b},1)`;
        ctx!.fill();
      }

      // ── Draw nodes ──
      for (const n of nodes) {
        const { r, g, b } = hexToRgb(ACCENT_COLORS[n.colorIdx]);
        const glowR = (n.r + 5 + n.pulse * 4);

        // aura
        const grd = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR * 2.8);
        grd.addColorStop(0, `rgba(${r},${g},${b},${0.35 + n.pulse * 0.2})`);
        grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, glowR * 2.8, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.fill();

        // core dot
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${r},${g},${b},${0.9 + n.pulse * 0.1})`;
        ctx!.fill();
      }

      // ── Edge fade masks — blends smoothly into adjacent sections ──
      const topRgb = hexToRgb(topColor);
      const fadeH = H * 0.28;

      const fadeTop = ctx!.createLinearGradient(0, 0, 0, fadeH);
      fadeTop.addColorStop(0, `rgba(${topRgb.r},${topRgb.g},${topRgb.b},1)`);
      fadeTop.addColorStop(1, `rgba(${topRgb.r},${topRgb.g},${topRgb.b},0)`);
      ctx!.fillStyle = fadeTop;
      ctx!.fillRect(0, 0, W, fadeH);

      const botRgb = hexToRgb(bottomColor);
      const fadeBot = ctx!.createLinearGradient(0, H - fadeH, 0, H);
      fadeBot.addColorStop(0, `rgba(${botRgb.r},${botRgb.g},${botRgb.b},0)`);
      fadeBot.addColorStop(1, `rgba(${botRgb.r},${botRgb.g},${botRgb.b},1)`);
      ctx!.fillStyle = fadeBot;
      ctx!.fillRect(0, H - fadeH, W, fadeH);

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [topColor, bottomColor]);

  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}
      style={{ height, marginTop: -1, marginBottom: -1 }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
