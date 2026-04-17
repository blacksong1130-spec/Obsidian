# Design System Specification: Clinical Vitality

## 1. Overview & Creative North Star
**The Creative North Star: "The Digital Laboratory Gallery"**

This design system is a collision of two worlds: the raw, visceral beauty of biological macro-photography and the cold, surgical precision of high-end data visualization. We are moving away from the "app" paradigm and toward an "immersive exhibition" experience. 

To break the template look, the system rejects standard UI scaffolding. There are no headers, no footers, and no structural "boxes." Content is anchored by **intentional asymmetry**—large-scale typographic elements juxtaposed with microscopic data callouts. Movement is fluid; elements should feel as though they are floating in a deep, pressurized void, held in place by invisible gravitational forces rather than rigid grids.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the "Studio Black" void, punctuated by the high-chroma vitality of pomegranate and ruby.

### The Palette (Material Design Mapping)
*   **Background:** `#131313` (The Deep Void)
*   **Primary (Accent):** `#C00000` (Pomegranate Red) — Used for critical data and life-force elements.
*   **Secondary (Glow):** `#E0115F` (Vibrant Ruby) — Used for interactive highlights and "living" pulses.
*   **Surface Hierarchy:**
    *   `surface_container_lowest`: `#0E0E0E` (Receding background)
    *   `surface_container_high`: `#2A2A2A` (Elevated interactive zones)
    *   `on_surface_variant`: `#E7BDB6` (Desaturated flesh tones for secondary text)

### The "No-Line" Rule
Sectioning must never be achieved with 1px solid borders. Boundaries are defined by:
1.  **Background Shifts:** Transitioning from `surface` to `surface_container_low`.
2.  **Negative Space:** Using expansive gaps to imply a change in context.
3.  **The "Ghost Border":** If a boundary is vital, use the `outline_variant` token at **10% opacity**. It should be felt, not seen.

### The "Glass & Gradient" Rule
To mimic laboratory glass, floating elements should utilize **Glassmorphism**:
*   Background: `surface_bright` at 15% opacity.
*   Effect: `backdrop-blur` at 20px–40px.
*   **Signature Texture:** Use a subtle radial gradient on hero sections, transitioning from `primary_container` (#C00000) at 10% opacity to a transparent center to create a "biological bloom" effect behind macro imagery.

---

## 3. Typography
We utilize **Inter** across the board, but its personality is dictated by weight and tracking.

*   **Display (L/M/S):** Thin (100) or Extra Light (200) weights. Tracking: -0.02em. These function as architectural elements, often overlapping macro imagery.
*   **Headline (L/M/S):** Light (300). Used for exhibit titles.
*   **Body (L/M/S):** Regular (400). Tight leading to maintain a "data-block" feel.
*   **Label (M/S):** Medium (500). All-caps with +0.1em tracking. These are the "Clinical Tags" used for data points and callouts.

**Hierarchy Strategy:** Brand identity is conveyed through the tension between the massive, thin-weight Display text (The Art) and the tiny, high-contrast Labels (The Data).

---

## 4. Elevation & Depth
In this system, depth is a measure of "biological focus."

*   **The Layering Principle:** Stack `surface-container-lowest` for the base and `surface-container-highest` for active interactive modules. Avoid shadows where possible; let the tonal shift create the lift.
*   **Ambient Shadows:** When a card must float, use a shadow color tinted with `#C00000` at 5% opacity, with a blur radius of 60px. This mimics the way light bleeds through organic tissue.
*   **Ultra-Thin Glowing Lines:** To connect data points to imagery, use 0.5pt lines using the `secondary` (#FFB2BE) token with a 2px outer glow. These represent precision digital instruments scanning organic matter.

---

## 5. Components

### Buttons (The "Pulse" Interaction)
*   **Primary:** No background. 1px "Ghost Border" (15% opacity). Text in `primary` (#FFB4A8). On hover, the border glows slightly and text weight shifts from Light to Regular.
*   **Tertiary:** Pure text with a "living" underscore—a 1px line that expands from the center outward on hover.

### Data Callouts (Specialty Component)
Instead of standard cards, use **Floating Callouts**:
*   A thin `secondary` vertical line connecting a piece of photography to a text block.
*   Text is `label-sm` in `on_surface_variant`. No container.

### Input Fields
*   **Style:** A single ultra-thin bottom line. Labels float above in `label-sm` and use the `primary` color when active.
*   **Error State:** Text shifts to `error` (#FFB4AB), and the bottom line gains a subtle "vibration" animation.

### Lists
*   **Rule:** Forbid all divider lines.
*   **Separation:** Use `surface_container_low` for even rows and `surface` for odd rows, or simply use 32px of vertical white space between items.

### Selection Chips
*   **Style:** Sharp 0px corners. Unselected: `surface_container_high`. Selected: `primary_container` with `on_primary_container` text.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Place text in the corners of the screen, leaving the center for high-detail imagery.
*   **Use Thin Weights:** Keep the "Laboratory" feel by staying between 100–300 weight for headings.
*   **Macro Focus:** Use imagery that is so close up it becomes abstract. The UI should feel like it is analyzing these textures.

### Don't:
*   **No Rounded Corners:** Every element must have a 0px radius. Curves are for biology; the UI is the precision instrument.
*   **No Standard App Bars:** Do not pin a navigation bar to the top. Use a floating "Menu" label in a corner or a gesture-based reveal.
*   **No Heavy Shadows:** Avoid "Material" style shadows that make objects look like they are sitting on a table. Elements should feel suspended in liquid.
*   **No High-Contrast Borders:** Never use a 100% opaque border. It breaks the "floating" illusion.