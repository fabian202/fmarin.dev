# Spec: rebrand famarin.dev (8-bit / developer)

Estado: v1 implementada en branch `cursor/rebrand-8bit-v1-01a7`.
Sitio actual: portfolio Astro (`fmarin.dev`), EN/ES, una sola página.
Objetivo: sacar el look genérico de "senior portfolio dark mode" y dejar una identidad clara, desarrollador primero, con vibe clásico 8-bit.

---

## 1. Diagnóstico del sitio actual

### Qué hay hoy

- Stack: Astro 6, content collections (skills, experience, education, highlights), i18n EN/ES.
- Marca débil: `FM.dev` solo en nav. El hero abre con el nombre en Playfair Display, no con la marca.
- Tipografía: Playfair Display + DM Sans + DM Mono. Combo muy usado en portfolios "premium".
- Color: dark `#0a0a0a` + accent lima `#c8f03c`. También genérico en portfolios tech.
- Hero saturado: tagline genérica, bio genérica, dos CTAs, y un grid de 4 stats (`19+`, `10+`, `100%`, `∞ café`).
- Secciones: Skills (cards), Experience (lista), Highlights (cards), Education + Languages, Footer contacto.
- Copy: "Building digital experiences" / "construyendo aplicaciones web escalables". Podría ser cualquier freelancer.
- Visual: ruido SVG, blur en nav, bordes hairline, hover underline. Sin imagen real del producto, lugar o identidad.
- Light mode por `prefers-color-scheme`. Diluye la marca.

### Por qué se siente genérico

1. Tipografía editorial + accent neón = plantilla de portfolio 2023–2025.
2. El hero parece un dashboard de credenciales, no una composición de marca.
3. Las skills/highlights son cards con tags. Quitar borde/fondo y el layout se cae.
4. No hay metáfora visual. No hay sprites, CRT, terminal, ni nada que diga "este sitio es de un developer con onda retro".
5. La marca no sobrevive al test: si quitas el nav, el first viewport podría ser de otra persona.

### Qué sí vale la pena conservar

- Content collections + i18n (estructura de datos sólida).
- Experiencia real (NEORIS/Home Depot, GAP CoE Node, etc.).
- Bilingüe EN/ES.
- Analytics de scroll/resume (se adaptan al nuevo UI).
- Dominio y nombre: `famarin.dev` / Fabián Marín.

---

## 2. Dirección creativa

### Concepto

**"Boot sequence de un ingeniero."**

El sitio se siente como encender una consola o un CRT de finales de los 80 / principios de los 90: scanlines, tipografía pixel, paleta limitada, UI como HUD de juego o terminal. No es un homenaje kitsch a Mario. Es un portfolio de software que usa el lenguaje visual del 8-bit como sistema de diseño.

Metáfora principal: **save file / player select**, no "landing SaaS".

### Posicionamiento

| Antes | Después |
| --- | --- |
| Senior Full-Stack que "construye experiencias digitales" | Ingeniero de software que construye sistemas, migra stacks y lidera estándares (Node CoE, testing, fullstack) |
| Portfolio dark premium | Portfolio 8-bit / CRT, developer-first |
| Marca = iniciales en nav | Marca = `FAMARIN.DEV` como señal hero |

### Tono de voz

- Directo, técnico, seco con humor leve tipo arcade (`PRESS START`, `CONTINUE?`).
- Sin buzzwords vacíos ("experiencias digitales", "soluciones innovadoras").
- Hablar de lo que hizo: CoE Node, migraciones, testing, React/Node, Medellín.
- ES y EN con la misma personalidad, no traducción literal fría.

### Lo que no somos

- No Game Boy verde pastel "cute".
- No vaporwave / neon purple / glow stacked.
- No newspaper / broadsheet.
- No cream + serif + terracotta.
- No pixel art infantil que opaque la legibilidad del CV.
- No dark mode genérico con lima.

---

## 3. Sistema visual

### Paleta (CRT amber + 1 accent arcade)

Inspiración: monitores ámbar + un color de "power-up", no lima portfolio.

```css
:root {
  --bg:        #0c0a08;   /* CRT casi negro cálido */
  --surface:   #16120e;
  --panel:     #1c1712;
  --border:    #3a2e22;
  --text:      #f0d9a8;   /* ámbar claro legible */
  --muted:     #9a7f55;
  --accent:    #ff6b2d;   /* naranja arcade (CTA / marca) */
  --accent-2:  #3dff9a;   /* verde fosforito solo para estados OK / "online" */
  --danger:    #ff3d5a;   /* raro, errores / alertas UI */
  --scanline:  rgba(0, 0, 0, 0.18);
}
```

Reglas:

- Máximo 4 colores activos en viewport (bg, text, accent, muted).
- Sin light mode automático. Una sola identidad.
- Accent naranja para CTAs y marca. Verde solo para "status online / available".
- Bordes 2px sólidos, no hairlines 1px fancy.

### Tipografía

| Rol | Fuente | Uso |
| --- | --- | --- |
| Display / marca | `Press Start 2P` (o `Pixelify Sans` si Press Start es demasiado agresiva en mobile) | Logo, H1, labels de sección tipo `STAGE 01` |
| Body | `IBM Plex Mono` | Bio, experiencia, párrafos. Mono = developer, legible |
| UI micro | misma mono, uppercase tracking amplio | Nav, tags, meta |

No usar Playfair, DM Sans, Inter, Roboto, Arial, system-ui como voice de marca.

Escalas:

- Marca hero: grande, pixel, puede wrapear (`FAMA` / `RIN.DEV` o una sola línea según viewport).
- Body: 15–16px mono, line-height 1.7. Pixel fonts solo en títulos cortos (Press Start es ancha; títulos largos se parten o bajan de peso visual).

### Textura y atmósfera

- Fondo: CRT warm dark + scanlines CSS (repeating-linear-gradient) + vignette suave.
- Opcional: grid de puntos 8px o dither sutil. No noise SVG genérico actual.
- Sin blur glassmorphism en nav.
- Sin sombras multi-capa. Si hay profundidad, es offset pixel (sombra dura 4px 4px 0).

### Iconografía / visual anchor

El first viewport necesita un ancla visual real, no solo gradiente.

Opciones (elegir una en implementación; default A):

**A. Sprite terminal (preferida).** Panel derecho del hero = pseudo-terminal o "character sheet" ASCII/pixel con:

```
> PLAYER: FABIAN_MARIN
> CLASS:  FULLSTACK_ENG
> LOC:    MEDELLIN_CO
> STATUS: ONLINE
> XP:     19Y
```

Renderizado en mono, cursor parpadeante, boot lines animadas.

**B. Cartucho / save slot.** Ilustración SVG pixel del "cartucho" `FAMARIN.DEV` como marca gráfica dominante full-bleed detrás o al lado.

No: foto stock, collage de logos tech, badges flotantes sobre el hero.

### Motion (mínimo 2–3 intencionales)

1. **Boot sequence** al load (1–1.2s): líneas de terminal escriben marca + status, luego revela el hero. Respetar `prefers-reduced-motion: reduce` (saltar a estado final).
2. **Cursor blink** en el prompt del hero / terminal.
3. **Hover pixel-shift**: botones y filas de experiencia se desplazan 2–4px con sombra dura, no `translateY` suave genérico.
4. Opcional: scanline drift muy lento en el fondo.

Evitar: fadeUp staggered en todo, parallax, glow pulses.

### Layout principles (alineados a branding fuerte)

- First viewport = **una composición**: marca, un headline, una frase, un grupo CTA, un ancla visual (terminal/sprite).
- Sin stats grid en el hero. Los números viven en Experience / Highlights o en el character sheet del terminal (máximo 2 datos, no 4 vanity metrics).
- Sin cards en el hero. En secciones posteriores: preferir listas / tablas / "inventory slots" con borde 2px. Si quitar fondo/borde no duele, no es card.
- Una job por sección: un título, una línea de apoyo, contenido.
- Marca hero-level. El nombre completo puede ser secundario bajo la marca o dentro del terminal.

---

## 4. Arquitectura de información

Orden propuesto de la página:

1. **Nav** — marca + anclas + lang switch (estilo botón arcade).
2. **Hero / boot** — marca + headline + CTA + terminal sheet.
3. **Loadout (Skills)** — inventario de stack, no cards marketing.
4. **Quest log (Experience)** — timeline/lista densa, monospaced meta.
5. **Achievements (Highlights)** — logros como trofeos/unlocked, sin vanity.
6. **Training + Languages** — educación + idiomas (puede quedar en dos columnas).
7. **Continue? (Footer / contact)** — CTA fuerte + links.

Renombrar labels de UI al vibe (i18n):

| Key actual | EN propuesto | ES propuesto |
| --- | --- | --- |
| available | `STATUS: ONLINE` | `ESTADO: EN LINEA` |
| skills | `LOADOUT` | `EQUIPO` |
| experience | `QUEST LOG` | `MISIONES` |
| highlights | `ACHIEVEMENTS` | `LOGROS` |
| education | `TRAINING` | `ENTRENAMIENTO` |
| langs | `LANGUAGES` | `IDIOMAS` |
| cta | `SEND PING` / `PRESS START` | `ENVIAR PING` / `PULSA START` |
| resume | `DOWNLOAD SAVE` | `DESCARGAR SAVE` |
| together | `CONTINUE?` | `¿CONTINUAR?` |

Los labels arcade no deben volver ilegible el CV. En Experience, company/role/fechas siguen claros. El flavor es skin, no ofuscación.

### Hero copy (borrador)

EN:

- Brand: `FAMARIN.DEV`
- Headline: `Software engineer. 19 years in production.`
- Support: `Full-stack systems, Node standards, migrations, and tests that survive release day. Based in Medellín.`
- CTA primary: `PRESS START` → `#contact`
- CTA secondary: `DOWNLOAD SAVE` → resume.pdf

ES:

- Brand: `FAMARIN.DEV`
- Headline: `Ingeniero de software. 19 años en producción.`
- Support: `Sistemas fullstack, estándares Node, migraciones y pruebas que aguantan el release. Desde Medellín.`
- CTA primary: `PULSA START`
- CTA secondary: `DESCARGAR SAVE`

Tirar: "Building digital experiences", stats de café, "100% commitment".

### Contenido a tocar en implementación

- `src/i18n/en.json`, `src/i18n/es.json` (copy + labels).
- Meta title/description en `Portfolio.astro` (hoy hardcodeados en inglés genérico).
- Fix tipográfico ES footer: `miente` → `mente` (bug actual) al reescribir.
- Highlights/experience: no hace falta reescribir todo el markdown en v1; sí alinear títulos de sección y tono del hero.

---

## 5. Rediseño por componente

### `Nav.astro`

- Logo: `FAMARIN.DEV` o `FM` pixel + `.DEV` accent.
- Links uppercase mono. Active state = bloque sólido accent, no underline.
- Lang switch: botón con borde 2px, texto `EN`/`ES`, hover pixel-shift.
- Fondo sólido `--surface`, borde inferior 2px. Sin backdrop-filter.

### `Hero.astro`

- Layout: full-bleed atmósfera CRT. Composición split o stacked mobile.
- Izquierda: brand, headline, support, CTAs.
- Derecha (o debajo en mobile): terminal / character sheet (ancla visual).
- Quitar `.hero-stats` vanity grid.
- Quitar location vertical flotante; location vive en el terminal (`LOC: MEDELLIN_CO`).

### `Skills.astro` → Loadout

- Grid de "slots" con borde 2px. Category como `SLOT 01 // FRONTEND`.
- Tags como chips cuadrados (0 radius o 2px max), no pills.
- Hover: borde accent + sombra dura, no fill suave.

### `Experience.astro` → Quest log

- Mantener lista. Meta en mono (`NEORIS · THE HOME DEPOT` / fechas).
- Role en mono bold o pixel pequeño, no serif Display.
- Separadores 2px. Hover: shift de contenido 4px, no padding animado genérico.

### `Highlights.astro` → Achievements

- Cada logro: prefijo `[UNLOCKED]` o icono sprite 16×16 + título + descripción.
- Evitar card marketing. Preferir filas o grid de celdas con el mismo lenguaje de borde.

### `Education.astro` + `Languages.astro`

- Misma tipografía del sistema. Language level como barra de "XP" pixel (4 bloques) en vez de pill suave actual.

### `Footer.astro`

- Headline flavor: `CONTINUE?` / `¿CONTINUAR?`
- Contact rows como menú de juego (`EMAIL`, `LINKEDIN`, `GITHUB` si aplica).
- Copyright mono pequeño.

### Global CSS

- Reemplazar `portfolio.css` tokens y tipografías.
- Matar light-mode `@media (prefers-color-scheme: light)`.
- Añadir utilidades: `.pixel-border`, `.scanlines`, `.crt-vignette`, `.btn-arcade`.
- Responsive: en &lt;900px, hero apila; terminal debajo; nav links pueden colapsar a menú `SELECT` simple (o hamburguesa pixel, sin animaciones exageradas).

### Assets

- Nuevo `favicon.svg` pixel (bloque `F` o cartucho).
- Nuevo `og-image` alineado a paleta CRT (no el actual).
- Valorar sprite SVG inline en Hero (sin dependencia de PNG pesados).

---

## 6. Plan técnico de implementación

### Alcance v1 (este rebrand)

1. Design tokens + tipografías + atmósfera CRT en CSS.
2. Reescribir Hero (copy + terminal sheet + CTAs).
3. Restyle Nav, Skills, Experience, Highlights, Education, Languages, Footer.
4. Actualizar i18n EN/ES + meta tags.
5. Favicon + OG.
6. `prefers-reduced-motion` para boot/cursor.
7. QA mobile + desktop, EN y ES.

### Fuera de v1

- Blog / case studies.
- Página de proyectos separada.
- CMS.
- Sound FX (posible v2: click 8-bit opt-in).
- Animaciones canvas/WebGL.
- Cambiar content model de collections (salvo campos de copy UI).

### Constraints del repo

- Astro estático, sin framework UI. Preferir CSS + poco JS inline (boot + reduced motion).
- Content collections se quedan.
- Routing i18n actual (`/` EN, `/es` ES) se queda.
- No introducir librerías de UI. Fonts vía Google Fonts o self-host si queremos evitar FOUT en pixel fonts (self-host preferible en v1.1).

### Archivos principales a tocar

```
src/styles/portfolio.css
src/layouts/Portfolio.astro
src/components/Nav.astro
src/components/Hero.astro
src/components/Skills.astro
src/components/Experience.astro
src/components/Highlights.astro
src/components/Education.astro
src/components/Languages.astro
src/components/Footer.astro
src/i18n/en.json
src/i18n/es.json
public/favicon.svg
public/og-image.svg (+ export png si se mantiene)
```

`Welcome.astro` y assets Astro starter sobran; limpiar si no se usan.

### Criterios de aceptación

- [ ] First viewport pasa el brand test: sin nav, sigue siendo claramente `FAMARIN.DEV`.
- [ ] No hay grid de stats vanity en el hero.
- [ ] Tipografía pixel + mono únicamente (sin Playfair/DM Sans).
- [ ] Paleta CRT amber + accent naranja aplicada; sin lima actual; sin light mode auto.
- [ ] Hay ancla visual terminal/sprite en el hero.
- [ ] Al menos 2 motions intencionales con fallback reduced-motion.
- [ ] EN y ES coherentes en tono arcade/dev.
- [ ] Legible en mobile: Press Start no rompe layout; títulos cortos o font-size adaptativo.
- [ ] Secciones siguen siendo scaneables por un recruiter en &lt;30s (roles, fechas, stack visibles).
- [ ] `astro build` pasa.

### Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Press Start 2P ilegible en títulos largos | Limitar pixel font a marca + labels cortos; body siempre Plex Mono |
| Se ve "tema gamer" y no senior | Copy serio en bio/experience; flavor solo en chrome UI |
| Scanlines cansan | Opacidad baja; disable en reduced-motion; no animar agresivo |
| Recruiters no entienden `LOADOUT` | Labels duales posibles: `LOADOUT // SKILLS` si en QA confunde |

---

## 7. Decisiones abiertas (defaults si no hay feedback)

1. **Ancla visual:** A (terminal character sheet).
2. **Display font:** Press Start 2P en desktop; si en mobile el brand wrappea mal, bajar a Pixelify Sans solo &lt;600px.
3. **CTA primary label:** `PRESS START` / `PULSA START`.
4. **Sound:** no en v1.
5. **Projects section:** no en v1.
6. **Accent:** naranja arcade `#ff6b2d` (no lima, no púrpura).

---

## 8. Secuencia de implementación sugerida

1. Tokens + fonts + reset de atmósfera (CSS).
2. Hero + Nav (marca y first viewport).
3. Resto de secciones skin + i18n.
4. Assets (favicon, OG).
5. Motion + reduced-motion.
6. Pass de copy EN/ES.
7. Build + revisión visual mobile/desktop.

Este documento es la fuente de verdad del rebrand hasta que se marque implementado o se enmiende por feedback.
