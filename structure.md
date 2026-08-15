Haan — **frontend only** rakhte hain abhi. Tumhare Astro project ke andar main structure ko simple rakhenge.

### Frontend folder structure

```text
astro-frontend/
│
├── public/
│   ├── favicon.ico
│   └── favicon.svg
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── VideoCard.astro
│   │   ├── VideoGrid.astro
│   │   ├── CategoryFilter.astro
│   │   ├── SearchBar.astro
│   │   └── Footer.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── videos/
│   │   │   └── index.astro
│   │   └── watch/
│   │       └── [slug].astro
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   └── lib/
│       └── sanity.ts
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

### Abhi kis file ka kya kaam hai?

**`src/pages/index.astro`**
→ Tumhara **main homepage**.

Example flow:

```text
Header
   ↓
Hero / Featured Video
   ↓
Search
   ↓
Categories
   ↓
Latest Videos
   ↓
Video Cards
   ↓
Footer
```

**`src/pages/videos/index.astro`**
→ Saari videos ki gallery.

```text
Videos
├── Search
├── Categories
└── Video Grid
    ├── Video Card
    ├── Video Card
    ├── Video Card
    └── ...
```

**`src/pages/watch/[slug].astro`**
→ Individual video page.

```text
Video Player
     ↓
Title
     ↓
Description
     ↓
Category / Tags
     ↓
Related Videos
```

Yahan later **Sanity se video URL** aayega aur player us URL ko play karega.

---

### Components

`VideoCard.astro`

Ek individual video ka card:

```text
┌─────────────────────┐
│                     │
│    Thumbnail        │
│                     │
├─────────────────────┤
│ Video Title         │
│ Category            │
└─────────────────────┘
```

`VideoGrid.astro`

Multiple `VideoCard` ko arrange karega.

`Header.astro`

Navbar:

```text
LOGO       Home  Videos  Categories    🔍
```

`SearchBar.astro`

Later Sanity ke data ko search/filter karne ke kaam aayega.

---

### `src/lib/sanity.ts`

**Ye important hai.**

Yahi frontend ka Sanity connection/helper hoga.

Conceptually:

```text
Astro Frontend
      │
      ▼
sanity.ts
      │
      ▼
Sanity API
      │
      ▼
Videos
```

Lekin **abhi Sanity backend ko frontend ke andar mix nahi karna**.

Tumhara architecture:

```text
                    ┌────────────────────┐
                    │   Sanity Backend   │
                    │                    │
                    │  Video documents   │
                    │  Title             │
                    │  Description       │
                    │  Video URL         │
                    │  Thumbnail         │
                    │  Category          │
                    └─────────┬──────────┘
                              │
                         Sanity API
                              │
                              ▼
┌─────────────────────────────────────────────┐
│              Astro Frontend                 │
│                                             │
│  Header                                     │
│  Homepage                                   │
│  Video Gallery                              │
│  Video Player                               │
│                                             │
└─────────────────────────────────────────────┘
```

### Isliye abhi tumhare existing project mein

Tumhare current:

```text
src/
```

ke andar **ye folders create karo:**

```text
src/
├── components/
├── layouts/
├── pages/
├── styles/
└── lib/
```

Aur **abhi actual files ek saath banane ki zarurat nahi**. Pehle folders bana lo.

Phir hum **`Layout.astro` → `index.astro` → UI components → video page → Sanity connection** isi order mein banayenge.

Aur haan, tumhare case mein **Astro + Sanity** ka choice bilkul sensible hai: Astro frontend ko lightweight rakhega, while Sanity video metadata/content management handle karega.
