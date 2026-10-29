/**
 * TEMPORARY mechanism test (STEP 2). Proves the scaling canvas is the ONLY
 * thing controlling width: no inherited wrapper, no max-width, no side padding.
 * Delete once the checkpoint is approved.
 */
export default function CanvasTest() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root { --u: min(100vw / 1728, 1px); }
          .cst-note{ font:600 13px Arial; color:#333; padding:12px 16px; }
          .cst-canvas{ width: calc(1728 * var(--u)); margin-inline:auto; position:relative; height:380px; background:#f3f3f6; }
          .cst-edge{ position:absolute; top:0; bottom:0; width:2px; background:#e0245e; z-index:2; }
          .cst-edge.l{ left:0; } .cst-edge.r{ right:0; }
          .cst-edge-tag{ position:absolute; top:4px; font:600 11px Arial; color:#e0245e; }
          .cst-edge-tag.l{ left:6px; } .cst-edge-tag.r{ right:6px; }
          .cst-block{ position:absolute; top: calc(60 * var(--u)); left: calc(369 * var(--u)); width: calc(1058 * var(--u)); height: calc(260 * var(--u)); background:#7a5ab2; color:#fff; font:600 15px Arial; display:flex; align-items:center; justify-content:center; text-align:center; }
          .cst-gap{ position:absolute; top: calc(60 * var(--u)); right:0; width: calc(301 * var(--u)); height: calc(260 * var(--u)); background:repeating-linear-gradient(45deg,#ffd6e0,#ffd6e0 8px,#fff 8px,#fff 16px); }
        `,
        }}
      />
      <div className="cst-note">Canvas mechanism test — canvas is the only width control (no wrapper, no max-width, no side padding).</div>
      <div className="cst-canvas">
        <div className="cst-edge l" />
        <div className="cst-edge-tag l">canvas left</div>
        <div className="cst-edge r" />
        <div className="cst-edge-tag r">canvas right</div>
        <div className="cst-gap" />
        <div className="cst-block">
          left&nbsp;369·u&nbsp;&nbsp;|&nbsp;&nbsp;width&nbsp;1058·u&nbsp;&nbsp;|&nbsp;&nbsp;ends&nbsp;1427
        </div>
      </div>
    </>
  );
}
