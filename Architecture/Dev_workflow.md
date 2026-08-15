Haan, ab tum **`astro-frontend`** mein ho, aur jo structure tumne dikhaya hai woh normal Astro project hai.

Abhi hum frontend ko clean rakhenge. **Page design `src/` ke andar hoga.**

### 📁 Abhi kis folder mein kya rakhenge?

Main tumhare project ko initially aise structure karunga:

```text
astro-frontend/
│
├── public/
│   ├── favicon.ico
│   └── favicon.svg
│
├── src/
│   │
│   ├── components/          ← Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── VideoCard.astro
│   │   ├── VideoGrid.astro
│   │   └── VideoPlayer.astro
│   │
│   ├── layouts/             ← Common page layout
│   │   └── Layout.astro
│   │
│   ├── pages/               ← ⭐ Actual webpages
│   │   ├── index.astro      ← Home page
│   │   ├── videos/
│   │   │   └── index.astro  ← Video gallery
│   │   └── video/
│   │       └── [slug].astro ← Individual video page
│   │
│   ├── lib/                 ← Sanity/API related code
│   │   └── sanity.ts
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## ⭐ Sabse important: `src/pages`

**Tumhare webpages yahin banenge.**

For example:

```text
src/pages/index.astro
```

= homepage

```text
src/pages/videos/index.astro
```

= video gallery

```text
src/pages/video/[slug].astro
```

= individual video page

Astro automatically routing create karega.

So:

```text
src/pages/index.astro
        ↓
https://your-site.com/

src/pages/videos/index.astro
        ↓
https://your-site.com/videos/

src/pages/video/[slug].astro
        ↓
https://your-site.com/video/my-video
```

---

# 🎨 UI kaise banayenge?

Main recommend karunga ki **pehle Sanity integration na karein**.

Pehle frontend ka UI banaate hain:

```text
                 VIDEO GALLERY
─────────────────────────────────────────────

[ Logo ]       Home   Videos   Categories   🔍

─────────────────────────────────────────────

              Discover Videos

      Search videos... 🔍

 [ All ] [ Movies ] [ Anime ] [ Shows ] ...

┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│             │ │             │ │             │
│  Thumbnail  │ │  Thumbnail  │ │  Thumbnail  │
│      ▶      │ │      ▶      │ │      ▶      │
│             │ │             │ │             │
├─────────────┤ ├─────────────┤ ├─────────────┤
│ Video Name  │ │ Video Name  │ │ Video Name  │
│ Category    │ │ Category    │ │ Category    │
└─────────────┘ └─────────────┘ └─────────────┘

                 Load More
```

Phir jab UI perfect ho jayega:

```text
Dummy videos
     ↓
Sanity API
     ↓
Real videos
```

Isse development easy rahega.

---

# 🔄 Complete workflow

Tumhara actual system kuch aisa hoga:

```text
                  ┌──────────────────┐
                  │   SANITY STUDIO  │
                  │                  │
                  │ Add Video        │
                  │ Title            │
                  │ Thumbnail        │
                  │ Video URL        │
                  │ Category         │
                  └────────┬─────────┘
                           │
                         Publish
                           │
                           ▼
                  ┌──────────────────┐
                  │    SANITY API    │
                  └────────┬─────────┘
                           │
                           │ GROQ
                           ▼
                  ┌──────────────────┐
                  │      ASTRO       │
                  │                  │
                  │ Fetch videos     │
                  │ Generate cards   │
                  └────────┬─────────┘
                           │
                           ▼
                  ┌──────────────────┐
                  │   VIDEO GALLERY  │
                  └────────┬─────────┘
                           │
                         Click
                           │
                           ▼
                  ┌──────────────────┐
                  │   VIDEO PLAYER   │
                  │                  │
                  │      ▶          │
                  │                  │
                  └──────────────────┘
```

### Admin workflow

Tumhare liye:

```text
Sanity Studio
     ↓
Create Video
     ↓
Paste video URL
     ↓
Upload/select thumbnail
     ↓
Choose category
     ↓
Publish
```

### User workflow

User ke liye:

```text
Website
   ↓
Homepage
   ↓
Browse videos
   ↓
Search / Category
   ↓
Click video
   ↓
Video page
   ↓
▶ Play
```

---

# 📄 README.md

Tumhare project ke liye main README bhi abhi se properly define karunga. Isko root **`astro-frontend/README.md`** mein rakho:

# Video Gallery

A modern video gallery website built with **Astro** and **Sanity CMS**.

The frontend is responsible for the website UI, routing, video browsing, and playback, while Sanity is used as the content management system for storing video information.

---

## 🏗️ Architecture

```text
Video Gallery
│
├── sanity-backend/
│   └── Sanity Studio / CMS
│
└── astro-frontend/
    └── Astro Website
```

### Content Flow

```text
Sanity Studio
      │
      │ Publish
      ▼
 Sanity API
      │
      │ GROQ
      ▼
 Astro Frontend
      │
      ├── Homepage
      ├── Video Gallery
      ├── Categories
      └── Video Pages
             │
             ▼
        Video Player
```

---

## 🎯 Project Goal

The goal is to create a simple and fast video gallery where videos can be managed from Sanity without manually editing the website code.

The administrator should only need to:

1. Open Sanity Studio.
2. Create a video.
3. Enter the video title.
4. Add a thumbnail.
5. Paste the video URL.
6. Select a category.
7. Publish the video.

The Astro website will then retrieve the published content from Sanity and display it automatically.

---

## 🖥️ Frontend

The frontend is built with:

* Astro
* TypeScript
* CSS / Tailwind CSS
* React components where interactive UI is required

Astro handles the main website structure and routing.

React can be used selectively for interactive components such as:

* Search
* Filters
* Video player controls
* Modals
* Other client-side interactions

---

## 📁 Frontend Structure

```text
src/
│
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── VideoCard.astro
│   ├── VideoGrid.astro
│   └── VideoPlayer.astro
│
├── layouts/
│   └── Layout.astro
│
├── pages/
│   ├── index.astro
│   │
│   ├── videos/
│   │   └── index.astro
│   │
│   └── video/
│       └── [slug].astro
│
├── lib/
│   └── sanity.ts
│
└── styles/
    └── global.css
```

---

## 🌐 Website Pages

### Home

```text
/
```

The homepage will contain:

* Header/navigation
* Featured videos
* Latest videos
* Categories
* Search
* Video cards

---

### Video Gallery

```text
/videos/
```

The gallery will display all published videos.

Users will be able to:

* Browse videos
* Search videos
* Filter by category
* Open individual videos

---

### Video Page

```text
/video/[slug]/
```

Each video gets its own page.

The page will contain:

* Video player
* Video title
* Description
* Category
* Tags
* Related videos

---

## 🗄️ Sanity Content Model

Each video will contain information similar to:

```text
Video
├── title
├── slug
├── thumbnail
├── videoUrl
├── description
├── category
├── tags
└── publishedAt
```

The actual video file does not necessarily need to be stored inside Sanity.

Sanity can store the video URL while the actual video is hosted by a separate video/file hosting service.

---

## 🔄 Publishing Workflow

```text
Administrator
      │
      ▼
Sanity Studio
      │
      ├── Title
      ├── Thumbnail
      ├── Video URL
      ├── Category
      └── Description
      │
      ▼
    Publish
      │
      ▼
  Sanity Dataset
      │
      ▼
   Sanity API
      │
      ▼
 Astro Frontend
      │
      ▼
  Video Gallery
```

---

## 👤 User Workflow

```text
User opens website
        │
        ▼
     Homepage
        │
        ├──────────────┐
        ▼              ▼
   Browse Videos    Search
        │              │
        └──────┬───────┘
               ▼
          Video Card
               │
             Click
               │
               ▼
          Video Page
               │
               ▼
          Video Player
               │
               ▼
             Play
```

---

## 🚀 Development Plan

Development will be done in stages.

### Phase 1 — UI

Build the complete frontend using dummy video data.

```text
Astro
  ↓
Homepage
  ↓
Video Gallery
  ↓
Video Cards
  ↓
Video Page
  ↓
Video Player
```

### Phase 2 — Responsive Design

Make the website work properly on:

* Desktop
* Tablet
* Mobile

### Phase 3 — Sanity Integration

Connect Astro with Sanity.

```text
Dummy Data
     ↓
Sanity API
```

Replace the hardcoded video data with real Sanity content.

### Phase 4 — Search & Categories

Add:

* Search
* Categories
* Tags
* Filtering
* Related videos

### Phase 5 — Production

Optimize:

* SEO
* Images
* Performance
* Caching
* Error handling
* Loading states
* 404 pages

---

## 🧑‍💻 Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🔐 Environment Variables

Sanity configuration will be stored using environment variables rather than hardcoding project credentials.

Example:

```env
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
```

Only values that are safe to expose publicly should use the `PUBLIC_` prefix.

---

## 📌 Current Status

### Frontend

* [ ] Project setup
* [ ] Global layout
* [ ] Header
* [ ] Homepage
* [ ] Video cards
* [ ] Video gallery
* [ ] Video page
* [ ] Video player
* [ ] Responsive design
* [ ] Search
* [ ] Categories

### Sanity

* [ ] Sanity project
* [ ] Video schema
* [ ] Category schema
* [ ] Sample videos
* [ ] Astro integration
* [ ] GROQ queries

### Production

* [ ] SEO
* [ ] Performance optimization
* [ ] Error handling
* [ ] Deployment
* [ ] Domain configuration

---

## 🛠️ Tech Stack

| Technology     | Purpose                   |
| -------------- | ------------------------- |
| Astro          | Frontend framework        |
| TypeScript     | Type safety               |
| Sanity         | Headless CMS              |
| GROQ           | Sanity queries            |
| React          | Interactive UI components |
| CSS / Tailwind | Styling                   |

---

## 📜 Development Philosophy

The frontend and CMS are intentionally separated.

```text
Sanity
  = Content

Astro
  = Presentation

Video Host
  = Video Files
```

This allows the website UI to be changed without modifying the content stored in Sanity, and allows videos to be managed without changing frontend code.

**Abhi next step:** `src/pages/index.astro` se **homepage UI** banana start karte hain. Sanity ko abhi touch mat karo—pehle dummy data ke saath poora frontend UI ready karna best rahega.
