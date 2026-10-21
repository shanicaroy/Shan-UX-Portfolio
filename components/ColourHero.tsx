"use client";

import { useEffect, useRef } from "react";

/**
 * Pixel-exact port of the locked Figma hero (frame 2197:15), rendered at the
 * design's native 1728px canvas and scaled to the viewport. The band paints
 * only on hover/drag with the design's predefined gradient; strokes hold then
 * dissolve on a cycle. Everything is scoped under `.ch` so it cannot affect
 * the rest of the site. This section is locked — do not alter its measurements.
 */
// The scaled frame now holds only the locked hero (nav, band, headline,
// clients, experience). Selected Work lives in its own responsive section
// below, so the cards can carry real video, details, and the password dialog.
const FRAME_H = 761;

const CSS = `
.ch{--ink:#1a1a1d;--text:#171714;--sub:#7c7c7c;--rule:#f0eeeb;--nav-ink:#1a1a1d;--accent:#7a5ab2;--serif:"Times New Roman",Times,Georgia,serif;--sora:"Sora","Helvetica Neue",Arial,sans-serif;--roboto:"Roboto","Helvetica Neue",Arial,sans-serif;--mono:"Roboto Mono",ui-monospace,monospace;--inter:"Inter","Helvetica Neue",Arial,sans-serif;position:relative;background:#fff;color:var(--text)}
.ch *{box-sizing:border-box}
.ch .scaleWrap{position:relative;width:100%;overflow:hidden;height:calc(100vw * ${FRAME_H} / 1728)}
.ch .frame{position:relative;left:0;width:1728px;height:${FRAME_H}px;transform-origin:top left;background:#fff}
.ch .navlinks{position:absolute;top:48px;left:0;width:1728px;display:flex;justify-content:center;gap:47px;font-family:var(--sora);font-weight:600;font-size:17px;color:#4f4f5d}
.ch .navlinks a{color:inherit;text-decoration:none;cursor:pointer}
.ch .navlinks a.active{color:var(--accent)}
.ch .resume{position:absolute;top:30px;left:1430px;width:204px;height:64px;display:inline-flex;align-items:center;justify-content:center;background:var(--accent);color:#fff;font-family:var(--inter);font-weight:600;font-size:20.4px;line-height:1;text-transform:uppercase;text-decoration:none;border-radius:2px}
.ch .resume::after{content:"Download resume";position:absolute;top:calc(100% + 14px);left:50%;transform:translateX(-50%) translateY(4px) scale(.96);background:var(--accent);color:#fff;font-family:var(--inter);font-weight:600;font-size:15px;letter-spacing:.2px;text-transform:none;padding:10px 16px;border-radius:10px;white-space:nowrap;opacity:0;pointer-events:none;box-shadow:0 12px 32px rgba(122,90,178,.34);transition:opacity .24s cubic-bezier(.22,1,.36,1),transform .24s cubic-bezier(.22,1,.36,1)}
.ch .resume::before{content:"";position:absolute;top:calc(100% + 8px);left:50%;transform:translateX(-50%) rotate(45deg);width:13px;height:13px;background:var(--accent);border-radius:3px;opacity:0;pointer-events:none;transition:opacity .24s cubic-bezier(.22,1,.36,1)}
.ch .resume:hover::after{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}
.ch .resume:hover::before{opacity:1}
.ch .band{position:absolute;top:114px;left:0;width:1728px;height:200px;overflow:hidden}
.ch #bandCanvas{position:absolute;inset:0;width:1728px;height:200px;display:block}
.ch .hero{position:absolute;left:118px;top:213px;width:1517px;height:547.827px;display:flex;align-items:flex-end;gap:122px}
.ch .hleft{width:718px;display:flex;flex-direction:column;gap:48px;align-items:flex-start}
.ch .hgroup{display:flex;flex-direction:column;gap:41px;align-items:flex-start;width:100%}
.ch .avatar{width:156px;height:156px;border-radius:50%;object-fit:cover;display:block}
.ch h1{margin:0;font-family:var(--serif);font-weight:400;font-size:70px;line-height:.94;letter-spacing:-2.8px;color:#42444d;width:718px}
.ch .sgroup{display:flex;flex-direction:column;gap:33.027px;align-items:flex-start}
.ch .subline{margin:0;font-family:var(--roboto);font-size:24px;color:var(--text)}
.ch .clients{display:flex;gap:7px;align-items:center;width:709px;margin-bottom:14.73px}
.ch .client{display:flex;gap:7.862px;align-items:center;padding-left:1.632px}
.ch .client img{display:block;flex:none}
.ch .client span{font-family:var(--roboto);font-size:25.293px;color:var(--text);white-space:nowrap}
.ch .client.vm{width:170px}.ch .client.vm img{width:40.806px;height:39.786px;border-radius:2.04px}
.ch .client.dl{width:138.139px}.ch .client.dl img{width:43.8px;height:43.8px}
.ch .client.or{width:157.231px}.ch .client.or img{width:41.554px;height:38.185px;border-radius:3.562px}
.ch .client.bg{width:175.2px}.ch .client.bg img{width:42.677px;height:39.308px;border-radius:3px}
.ch .hright{width:677px;display:flex;flex-direction:column;gap:29.985px}
.ch .explabel{margin:0;font-family:var(--sora);font-weight:600;font-size:20.24px;line-height:26.987px;color:#42444d;text-transform:uppercase}
.ch .carhist{display:flex;flex-direction:column}
.ch .exprow{display:grid;grid-template-columns:301.35px 304.39px 71.96px;align-items:center;height:73.26px;border-bottom:1.499px solid var(--rule)}
.ch .exprow:last-child{border-bottom:none}
.ch .expco{display:flex;align-items:center;gap:14.993px}
.ch .expco img{object-fit:contain;flex:none}
.ch .expco b{font-family:var(--roboto);font-weight:400;font-size:23.238px;color:var(--text);white-space:nowrap}
.ch .exprole{font-family:var(--roboto);font-size:23.238px;color:var(--sub);white-space:nowrap}
.ch .expyear{font-family:var(--roboto);font-size:23.238px;color:var(--sub);text-align:right;font-variant-numeric:tabular-nums}
@keyframes ch-rise{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
.ch .anim{opacity:0;animation:ch-rise 1.05s cubic-bezier(.22,1,.36,1) both}
.ch .d0{animation-delay:.08s}.ch .d1{animation-delay:.24s}.ch .d2{animation-delay:.40s}.ch .d3{animation-delay:.58s}
@media (prefers-reduced-motion:reduce){.ch .anim{opacity:1;animation:none;transform:none}}

/* ---- Tablet & phone: the fixed frame reflows into a fluid, stacked hero.
   Below 900px the scaled desktop frame would make type microscopic, so we
   hide it and show a native layout with a hamburger menu. ---- */
.ch .mhero{display:none}
@media (max-width:899px){
  .ch .scaleWrap{display:none}
  .ch .mhero{display:block;padding:0 clamp(20px,5.5vw,40px) 8px}
}
.ch .mtop{display:flex;align-items:center;justify-content:space-between;height:64px}
.ch .brand{font-family:var(--serif);font-size:clamp(19px,5.4vw,23px);color:#42444d;text-decoration:none;letter-spacing:-.01em}
.ch .burger{appearance:none;-webkit-appearance:none;border:0;background:none;width:42px;height:42px;margin-right:-8px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;cursor:pointer;padding:0}
.ch .burger span{display:block;height:2px;width:24px;background:#4f4f5d;border-radius:2px;transition:transform .3s cubic-bezier(.22,1,.36,1),opacity .2s}
.ch .burger[aria-expanded="true"] span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.ch .burger[aria-expanded="true"] span:nth-child(2){opacity:0}
.ch .burger[aria-expanded="true"] span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
.ch .mmenu{overflow:hidden;max-height:0;transition:max-height .42s cubic-bezier(.22,1,.36,1)}
.ch .mmenu.open{max-height:520px}
.ch .mmenu nav{display:flex;flex-direction:column;padding:4px 0 10px}
.ch .mmenu a:not(.mresume){font-family:var(--sora);font-weight:600;font-size:16px;color:#4f4f5d;text-decoration:none;padding:14px 2px;border-bottom:1px solid var(--rule)}
.ch .mmenu a.active{color:var(--accent)}
.ch .mresume{margin-top:16px;display:inline-flex;align-items:center;justify-content:center;gap:9px;width:100%;background:var(--accent);color:#fff;font-family:var(--inter);font-weight:600;font-size:15px;text-transform:uppercase;letter-spacing:.3px;padding:15px;border-radius:9px;text-decoration:none}
.ch .mresume svg{width:19px;height:19px}
.ch .mband{position:relative;margin-top:14px;width:100%;height:clamp(118px,33vw,180px);border-radius:14px;overflow:hidden;border:1px solid var(--rule)}
.ch #bandCanvasM{position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none}
.ch .mavatar{width:clamp(84px,23vw,116px);height:clamp(84px,23vw,116px);border-radius:50%;object-fit:cover;display:block;margin-top:clamp(-52px,-13vw,-40px);border:4px solid #fff;position:relative;z-index:1}
.ch .mh1{margin:20px 0 0;font-family:var(--serif);font-weight:400;font-size:clamp(31px,8.6vw,50px);line-height:1.02;letter-spacing:-.02em;color:#42444d}
.ch .msub{margin:22px 0 0;font-family:var(--roboto);font-size:clamp(15px,4vw,18px);color:var(--text)}
.ch .mclients{margin:16px 0 0;display:flex;flex-wrap:wrap;gap:12px 22px;align-items:center}
.ch .mclients .mcl{display:flex;gap:8px;align-items:center}
.ch .mclients .mcl img{width:26px;height:26px;object-fit:contain;flex:none}
.ch .mclients .mcl span{font-family:var(--roboto);font-size:clamp(15px,4vw,18px);color:var(--text)}
.ch .mexp{margin:36px 0 0}
.ch .mexp .mlabel{margin:0 0 4px;font-family:var(--sora);font-weight:600;font-size:13px;letter-spacing:.04em;color:#42444d;text-transform:uppercase}
.ch .mrow{display:grid;grid-template-columns:36px 1fr auto;align-items:center;gap:14px;padding:16px 0;border-bottom:1px solid var(--rule)}
.ch .mrow:last-child{border-bottom:none}
.ch .mrow .mlg{width:34px;height:34px;object-fit:contain;flex:none}
.ch .mrow .mco{font-family:var(--roboto);font-size:clamp(15px,4.2vw,18px);color:var(--text);line-height:1.25}
.ch .mrow .mro{font-family:var(--roboto);font-size:clamp(12.5px,3.4vw,15px);color:var(--sub);line-height:1.3;margin-top:2px}
.ch .mrow .myr{font-family:var(--roboto);font-size:clamp(13px,3.6vw,16px);color:var(--sub);text-align:right;font-variant-numeric:tabular-nums}
@media (max-width:899px){
  .ch .mhero .anim{opacity:0;animation:ch-rise 1.05s cubic-bezier(.22,1,.36,1) both}
}
`;

const RESUME = "https://drive.google.com/file/d/1zGPlamzV_6P_B7D8OPNq-CXjuq-McGtJ/view";

const HTML = `
<div class="scaleWrap"><div class="frame">
<nav class="navlinks anim d0" aria-label="Main"><a href="/" class="worklink active" aria-current="page">WORK</a><a href="/ai-lab">APPLIED AI</a><a href="/about">ABOUT</a><a href="/writing">WRITING</a></nav>
<a class="resume anim d0" href="${RESUME}" target="_blank" rel="noopener noreferrer">Resume</a>
<div class="band" aria-hidden="true"><canvas id="bandCanvas" width="1728" height="200"></canvas></div>
<div class="hero">
  <div class="hleft">
    <div class="hgroup">
      <img class="avatar anim d1" src="/hero/shanica.png" alt="Shanica Roy">
      <h1 class="anim d2">Hi, it&rsquo;s Shanica Roy. I design enterprise products &amp; build systems.</h1>
    </div>
    <div class="sgroup anim d3">
      <p class="subline">Enterprise client work at EY, 2023 - 2025</p>
      <div class="clients">
        <span class="client vm"><img src="/hero/vmware.svg" alt=""><span>VMware</span></span>
        <span class="client dl"><img src="/hero/dell.svg" alt=""><span>Dell</span></span>
        <span class="client or"><img src="/hero/oracle.svg" alt=""><span>Oracle</span></span>
        <span class="client bg"><img src="/hero/bunge.svg" alt=""><span>Bunge</span></span>
      </div>
    </div>
  </div>
  <div class="hright anim d3">
    <p class="explabel">EXPERIENCE</p>
    <div class="carhist">
      <div class="exprow"><span class="expco"><img src="/hero/ey.svg" alt="" style="width:41.37px;height:41.769px"><b>Ernst &amp; Young</b></span><span class="exprole">UX Design Lead</span><span class="expyear">2025</span></div>
      <div class="exprow"><span class="expco"><img src="/hero/ey.svg" alt="" style="width:41.37px;height:41.769px"><b>Ernst &amp; Young</b></span><span class="exprole">Senior UX Designer</span><span class="expyear">2023</span></div>
      <div class="exprow"><span class="expco"><img src="/hero/bhanzu.svg" alt="" style="width:37.852px;height:37.852px;border-radius:4.921px"><b>Bhanzu</b></span><span class="exprole">UX Designer</span><span class="expyear">2021</span></div>
      <div class="exprow"><span class="expco"><img src="/hero/virtubox.svg" alt="" style="width:43.337px;height:43.337px"><b>Virtubox Infotech</b></span><span class="exprole">UI/UX Designer</span><span class="expyear">2020</span></div>
      <div class="exprow"><span class="expco"><img src="/hero/unschool.svg" alt="" style="width:40.242px;height:46.433px"><b>Unschool</b></span><span class="exprole">Senior Design Instructor</span><span class="expyear">2019</span></div>
    </div>
  </div>
</div>
</div></div>

<div class="mhero">
  <div class="mtop">
    <a class="brand worklink" href="/">Shanica Roy</a>
    <button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="ch-mmenu"><span></span><span></span><span></span></button>
  </div>
  <div class="mmenu" id="ch-mmenu">
    <nav aria-label="Mobile">
      <a href="/" class="worklink active" aria-current="page">Work</a>
      <a href="/ai-lab">Applied AI</a>
      <a href="/about">About</a>
      <a href="/writing">Writing</a>
      <a class="mresume" href="${RESUME}" target="_blank" rel="noopener noreferrer">Resume <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 4v15M6 13l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </nav>
  </div>
  <div class="mband anim d0" aria-hidden="true"><canvas id="bandCanvasM"></canvas></div>
  <img class="mavatar anim d1" src="/hero/shanica.png" alt="Shanica Roy">
  <h1 class="mh1 anim d2">Hi, it&rsquo;s Shanica Roy. I design enterprise products &amp; build systems.</h1>
  <div class="anim d3">
    <p class="msub">Enterprise client work at EY, 2023 - 2025</p>
    <div class="mclients">
      <span class="mcl"><img src="/hero/vmware.svg" alt=""><span>VMware</span></span>
      <span class="mcl"><img src="/hero/dell.svg" alt=""><span>Dell</span></span>
      <span class="mcl"><img src="/hero/oracle.svg" alt=""><span>Oracle</span></span>
      <span class="mcl"><img src="/hero/bunge.svg" alt=""><span>Bunge</span></span>
    </div>
  </div>
  <div class="mexp anim d3">
    <p class="mlabel">Experience</p>
    <div class="mrow"><img class="mlg" src="/hero/ey.svg" alt=""><div><div class="mco">Ernst &amp; Young</div><div class="mro">UX Design Lead</div></div><div class="myr">2025</div></div>
    <div class="mrow"><img class="mlg" src="/hero/ey.svg" alt=""><div><div class="mco">Ernst &amp; Young</div><div class="mro">Senior UX Designer</div></div><div class="myr">2023</div></div>
    <div class="mrow"><img class="mlg" src="/hero/bhanzu.svg" alt="" style="border-radius:6px"><div><div class="mco">Bhanzu</div><div class="mro">UX Designer</div></div><div class="myr">2021</div></div>
    <div class="mrow"><img class="mlg" src="/hero/virtubox.svg" alt=""><div><div class="mco">Virtubox Infotech</div><div class="mro">UI/UX Designer</div></div><div class="myr">2020</div></div>
    <div class="mrow"><img class="mlg" src="/hero/unschool.svg" alt=""><div><div class="mco">Unschool</div><div class="mro">Senior Design Instructor</div></div><div class="myr">2019</div></div>
  </div>
</div>
`;

export default function ColourHero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = root.current;
    if (!host) return;

    // Shared gradient of the band (same stops on desktop and mobile).
    const STOPS: [number, number[]][] = [
      [0, [206, 223, 254]],
      [0.4856, [238, 211, 255]],
      [1, [255, 198, 198]],
    ];
    function sample(t: number) {
      t = Math.max(0, Math.min(1, t));
      for (let i = 1; i < STOPS.length; i++) {
        if (t <= STOPS[i][0]) {
          const a = STOPS[i - 1], b = STOPS[i], f = (t - a[0]) / (b[0] - a[0]);
          return [a[1][0] + (b[1][0] - a[1][0]) * f, a[1][1] + (b[1][1] - a[1][1]) * f, a[1][2] + (b[1][2] - a[1][2]) * f];
        }
      }
      return STOPS[2][1];
    }

    type Dab = { x: number; y: number; s: number; t: number };
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const MAX = 2600, HOLD = 4500, FADE = 3200, NS = 28;

    // Wire one band canvas. `fixed` carries the desktop design's coordinate
    // space (1728×197); when omitted the canvas is fluid and its coordinate
    // space follows its rendered CSS size (mobile), reconfiguring on resize.
    function setupBand(canvas: HTMLCanvasElement, R: number, fixed?: { w: number; h: number }) {
      const ctx = canvas.getContext("2d");
      if (!ctx) return () => {};
      let Wd = 1, Hd = 1;
      const configure = () => {
        Wd = fixed ? fixed.w : Math.max(1, canvas.clientWidth);
        Hd = fixed ? fixed.h : Math.max(1, canvas.clientHeight);
        canvas.width = Math.round(Wd * dpr);
        canvas.height = Math.round(Hd * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      configure();

      const sprites: HTMLCanvasElement[] = [];
      for (let s = 0; s < NS; s++) {
        const c = sample(s / (NS - 1));
        const cv = document.createElement("canvas");
        cv.width = cv.height = R * 2;
        const sc = cv.getContext("2d")!;
        const g = sc.createRadialGradient(R, R, 0, R, R, R);
        const rgb = Math.round(c[0]) + "," + Math.round(c[1]) + "," + Math.round(c[2]);
        g.addColorStop(0, "rgba(" + rgb + ",0.85)");
        g.addColorStop(0.55, "rgba(" + rgb + ",0.42)");
        g.addColorStop(1, "rgba(" + rgb + ",0)");
        sc.fillStyle = g;
        sc.fillRect(0, 0, R * 2, R * 2);
        sprites.push(cv);
      }

      let dabs: Dab[] = [];
      let last: { x: number; y: number } | null = null;
      const add = (x: number, y: number) => {
        const idx = Math.min(NS - 1, Math.max(0, Math.round((x / Wd) * (NS - 1))));
        dabs.push({ x, y, s: idx, t: performance.now() });
        if (dabs.length > MAX) dabs.shift();
      };
      const paint = (x: number, y: number) => {
        if (last) {
          const dx = x - last.x, dy = y - last.y, d = Math.hypot(dx, dy), n = Math.max(1, Math.floor(d / 9));
          for (let i = 0; i < n; i++) add(last.x + (dx * i) / n, last.y + (dy * i) / n);
        } else add(x, y);
        last = { x, y };
      };
      const toLocal = (cx: number, cy: number): [number, number] | null => {
        const r = canvas.getBoundingClientRect();
        if (r.width === 0 || cx < r.left || cx > r.right || cy < r.top || cy > r.bottom) { last = null; return null; }
        return [(cx - r.left) * (Wd / r.width), (cy - r.top) * (Hd / r.height)];
      };

      const onMove = (e: PointerEvent) => {
        if (e.pointerType === "touch") return;
        const p = toLocal(e.clientX, e.clientY);
        if (p) paint(p[0], p[1]);
      };
      const onTouch = (e: TouchEvent) => {
        const t = e.touches[0];
        if (!t) return;
        const p = toLocal(t.clientX, t.clientY);
        if (p) { paint(p[0], p[1]); e.preventDefault(); }
      };
      const onTouchEnd = () => { last = null; };
      window.addEventListener("pointermove", onMove, { passive: true });
      canvas.addEventListener("touchmove", onTouch, { passive: false });
      canvas.addEventListener("touchend", onTouchEnd);

      let raf = 0;
      const render = () => {
        const now = performance.now();
        ctx.clearRect(0, 0, Wd, Hd);
        let write = 0;
        for (let i = 0; i < dabs.length; i++) {
          const d = dabs[i], age = now - d.t;
          let a: number;
          if (age < HOLD) a = 1;
          else if (age < HOLD + FADE) a = 1 - (age - HOLD) / FADE;
          else continue;
          dabs[write++] = d;
          ctx.globalAlpha = a;
          ctx.drawImage(sprites[d.s], d.x - R, d.y - R);
        }
        dabs.length = write;
        ctx.globalAlpha = 1;
        raf = requestAnimationFrame(render);
      };
      raf = requestAnimationFrame(render);

      const onResize = fixed ? null : () => { dabs = []; last = null; configure(); };
      if (onResize) window.addEventListener("resize", onResize);

      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("pointermove", onMove);
        canvas.removeEventListener("touchmove", onTouch);
        canvas.removeEventListener("touchend", onTouchEnd);
        if (onResize) window.removeEventListener("resize", onResize);
      };
    }

    const cleanups: Array<() => void> = [];
    const canvasD = host.querySelector<HTMLCanvasElement>("#bandCanvas");
    if (canvasD) cleanups.push(setupBand(canvasD, 46, { w: 1728, h: 200 }));
    const canvasM = host.querySelector<HTMLCanvasElement>("#bandCanvasM");
    if (canvasM) cleanups.push(setupBand(canvasM, 30));

    // Scale the desktop frame to the viewport (capped at 1:1, centred).
    const frame = host.querySelector<HTMLDivElement>(".frame");
    const wrap = host.querySelector<HTMLDivElement>(".scaleWrap");
    const fit = () => {
      if (!frame || !wrap) return;
      const vw = document.documentElement.clientWidth;
      const sc = Math.min(1, vw / 1728);
      const tx = (vw - 1728 * sc) / 2;
      frame.style.transform = "translate(" + tx + "px,0) scale(" + sc + ")";
      wrap.style.height = FRAME_H * sc + "px";
    };
    window.addEventListener("resize", fit);
    fit();

    // WORK is the home page itself, not a jump link: on the home page it must
    // do nothing (no scroll, no reload) since we are already here. There are
    // two WORK links now — the desktop nav and the mobile menu.
    const works = Array.from(host.querySelectorAll<HTMLAnchorElement>(".worklink"));
    const onWork = (e: MouseEvent) => {
      if (window.location.pathname === "/") e.preventDefault();
    };
    works.forEach((w) => w.addEventListener("click", onWork));

    // Mobile hamburger menu.
    const burger = host.querySelector<HTMLButtonElement>(".burger");
    const menu = host.querySelector<HTMLDivElement>(".mmenu");
    const setMenu = (open: boolean) => {
      burger?.setAttribute("aria-expanded", String(open));
      burger?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menu?.classList.toggle("open", open);
    };
    const onBurger = () => setMenu(burger?.getAttribute("aria-expanded") !== "true");
    burger?.addEventListener("click", onBurger);
    const menuLinks = menu ? Array.from(menu.querySelectorAll("a")) : [];
    const onMenuLink = () => setMenu(false);
    menuLinks.forEach((a) => a.addEventListener("click", onMenuLink));

    return () => {
      cleanups.forEach((fn) => fn());
      window.removeEventListener("resize", fit);
      works.forEach((w) => w.removeEventListener("click", onWork));
      burger?.removeEventListener("click", onBurger);
      menuLinks.forEach((a) => a.removeEventListener("click", onMenuLink));
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="ch" ref={root} dangerouslySetInnerHTML={{ __html: HTML }} />
    </>
  );
}
