# Design tokens — home page redesign

Source of truth for the new home page. Values marked **[VERIFY]** are proposed
from the design brief's descriptions because the reference prototype at
`shanica-ux-leadership-portfolio.shanicaroy.chatgpt.site` is unreachable from
the build sandbox (network egress policy). They will be corrected against the
prototype's real CSS the moment its HTML file is supplied.

## Typography

Fonts stay exactly as the repo defines them — nothing from the prototype is
loaded:

- **Display**: `"Times New Roman", Times, Georgia, serif` (the `.display` voice)
- **Body / labels / nav**: `"Inter"` variable (300–700), self-hosted

Scale (desktop → mobile via `clamp()`; rem base 16px):

| Token | Size | Line-height | Letter-spacing | Font / weight |
| --- | --- | --- | --- | --- |
| `--type-hero` | `clamp(2.5rem, 5.6vw, 4.5rem)` [VERIFY] | 1.04 | `-0.025em` | Times 400 |
| `--type-section` | `clamp(1.9rem, 3.6vw, 2.9rem)` [VERIFY] | 1.08 | `-0.02em` | Times 400 |
| `--type-statement` | `clamp(1.6rem, 3vw, 2.5rem)` [VERIFY] | 1.18 | `-0.015em` | Times 400 |
| `--type-card-title` | `1.3rem` [VERIFY] | 1.3 | `-0.01em` | Inter 500 |
| `--type-lead` | `1.1875rem` [VERIFY] | 1.6 | `0` | Inter 400 |
| `--type-body` | `1.0625rem` [VERIFY] | 1.65 | `0` | Inter 400 |
| `--type-eyebrow` | `0.75rem` | 1.2 | `0.08em` (existing `tracking-label`) | Inter 500, uppercase |
| `--type-nav` | `0.8125rem` (existing) | 1 | `0.08em`, uppercase | Inter 400 |

Display-font note: Times New Roman is lighter and narrower than the grotesque
the prototype presumably uses, so hero tracking is tightened from the site's
default `-0.015em` to `-0.025em` at hero size, and the hero cap held at 4.5rem
rather than larger. To be eyeballed at 1440/375 during build and adjusted;
final values recorded here.

## Color

| Token | Value | Status |
| --- | --- | --- |
| `--c-ground` (cream page bg) | `#FBFAF8` | existing, keep |
| `--c-ink` (near-black) | `#1A1A17` | existing, keep |
| `--c-charcoal` (About section bg) | `#1B1B18` | [VERIFY] |
| `--c-navy` (Applied AI section bg) | `#0E2233` | [VERIFY] |
| `--c-lime` (accent) | `#CDF463` | [VERIFY] |
| `--c-blue` (accent) | `#2E5CE6` | [VERIFY] |
| `--c-muted` (secondary text on light) | `#5C5C55` | existing, keep |
| `--c-muted-dark` (secondary text on dark) | `#A3A399` | [VERIFY] |
| `--c-rule` (hairlines on light) | `#E3E1DB` | existing, keep |
| `--c-rule-dark` (hairlines on charcoal/navy) | `rgba(251,250,248,0.16)` | [VERIFY] |

## Layout

| Token | Value | Status |
| --- | --- | --- |
| Container max-width | `1440px` (existing `max-w-shell`) | [VERIFY] against prototype |
| Horizontal padding | `24px / 48px (sm) / 64px (lg)` (existing Shell) | [VERIFY] |
| Radius | `0` on every element, globally | brief override, final |
| Fixed nav | solid cream, 1px `--c-rule` hairline below, no shadow/blur | brief override, final |
