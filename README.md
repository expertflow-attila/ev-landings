# EV-Landings

Astro 5 landing site az **EV-Alap** és **EV-AIOS** termékekhez. A meglévő [expert-flow-agents](https://expert-flow-agents.vercel.app) site design rendszerét követi (Premium Dark Library + Hermes effects), Inter + Instrument Serif + JetBrains Mono tipográfiával, per-product accent színekkel.

## Oldalak

- `/` — Áttekintés, választó a két termék között
- `/alap` — EV-Alap (márka discovery kurzus kezdő vállalkozóknak)
- `/aios` — EV-AIOS (AI operációs rendszer szóló vállalkozóknak)

## Fejlesztés

```bash
npm install
npm run dev
```

Megnyílik a `http://localhost:4321` címen.

## Build & Deploy

```bash
npm run build      # statikus build a `dist/`-be
npm run preview    # preview a buildelt site-ot
vercel --prod      # Vercel-re deploy (külön projekt)
```

## Design

- **Háttér**: `#0a0a0c` (mély fekete)
- **Tipográfia**: Inter (sans), Instrument Serif (italic em), JetBrains Mono (label/code)
- **Accent színek**:
  - Áttekintés: `#e0c884` (cream gold)
  - EV-Alap: `#e8b4a0` (warm peach)
  - EV-AIOS: `#9bc4c4` (cool teal)
- **Layout**: Hermes-féle 1px bordered grid, `max-width: 1600px`

## Struktúra

```
src/
├── styles/
│   └── global.css           # design tokenek + Hermes layout
├── layouts/
│   └── LandingLayout.astro  # közös shell: header, tabs, BG effektek, footer
├── data/
│   └── products.json        # mindkét termék: tagline, lede, features, terminal script
└── pages/
    ├── index.astro          # áttekintés
    ├── alap.astro           # EV-Alap landing
    └── aios.astro           # EV-AIOS landing
```

## License

MIT © 2026 Expert Flow
