# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

Deploy commands are below

Haan 👍 **tum sahi yaad kar rahe ho** — Sanity mein 2 alag concepts hain, aur unko mix nahi karna chahiye.

### 1. Schema deploy

Ye tumhare **schema/types** ko Sanity backend mein deploy karta hai:

```bash
npx sanity schema deploy
```

Isse `video`, `category`, `tags` etc. ke schema definitions deploy hoti hain.

### 2. Sanity Studio deploy

Ye tumhara **Admin Studio UI** deploy karta hai:

```bash
npx sanity deploy
```

Isse Studio online hota hai jahan tum videos add/edit karte ho.

### 3. Production dataset

Agar tum **development dataset se production dataset mein content migrate** karne ki baat kar rahe ho, wo Studio deploy se alag hai.

For example dataset export:

```bash
npx sanity dataset export development backup.tar.gz
```

Production mein import:

```bash
npx sanity dataset import backup.tar.gz production
```

So simple yaad rakho:

```text
SCHEMA
  ↓
npx sanity schema deploy

STUDIO
  ↓
npx sanity deploy

CONTENT / DATASET
  ↓
sanity dataset export/import
```

**Lekin ek clarification:** agar tum “Sanity ki production deploy” se **production dataset/schema ko initialize ya migrate karna** mean kar rahe ho, mujhe tumhara `sanity.cli.ts` / `sanity.config.ts` aur current datasets (`development`, `production`) ka setup dikha do. Main exact commands bata dunga, taaki galti se production content overwrite na ho.

npm run build

use this command to build package.json and then push to main branch if u want to deploy the chngesni browser and remembed to use cdn set as false if u want to see changes really fast and then deisable it in production

hmne ye build kiya algolia search using

npm install algoliasearch
we created new file in scripts/index-videos.ts

Sabse simple option agar tumhare Astro project mein tsx nahi hai:

npm install -D tsx

Phir:

explicitly load karni hogi.

Step 1 — dotenv install karo

Terminal mein:

npm install dotenv

npx tsx scripts/index-videos.ts

Expected output:


Found 25 videos in Sanity.
✅ Successfully indexed 25 videos into Algolia index "videos".
Step 4 — Algolia Dashboard check
