# Veaseo – Site Vitrine Next.js 14

Site web vitrine complet pour Veaseo, webdesigner spécialisé SEO pour entreprises locales.

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS + Typography plugin
- **Blog** : MDX via `next-mdx-remote`
- **Animations** : CSS natif (IntersectionObserver)
- **Typo** : Inter (Google Fonts)
- **Icons** : Lucide React
- **Déploiement** : Vercel

## Structure du projet

```
/app
  layout.tsx          ← Layout global (Navbar, Footer, SEO, Schema.org)
  page.tsx            ← Accueil (Hero, Services, Témoignages, FAQ, CTA)
  sitemap.ts          ← Sitemap.xml automatique
  robots.ts           ← Robots.txt
  not-found.tsx       ← Page 404 personnalisée
  /services           ← Page index + 4 sous-pages
  /a-propos           ← Page À propos
  /realisations       ← Portfolio
  /blog               ← Blog index + [slug] (MDX)
  /contact            ← Formulaire de contact
  /mentions-legales   ← Mentions légales

/components
  Navbar.tsx          ← Navigation sticky responsive
  Footer.tsx          ← Pied de page avec CTA
  ContactForm.tsx     ← Formulaire de contact (client)
  /ui
    AnimatedSection   ← Animations au scroll (IntersectionObserver)
    AstronautIllustration ← Illustration SVG astronaute
    CTABanner         ← Bannière CTA réutilisable
    SectionHeader     ← En-tête de section réutilisable

/content/blog         ← Articles au format MDX
/lib
  blog.ts             ← Helpers lecture des fichiers MDX
```

## Installation locale

```bash
cd veaseo
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

## Ajouter un article de blog

Créer un fichier `.mdx` dans `/content/blog/` :

```mdx
---
title: "Titre de l'article"
description: "Description SEO de l'article (max 160 caractères)"
date: "2024-03-15"
category: "SEO Local"
readTime: "8 min"
author: "Veaseo"
featured: false
---

Contenu MDX ici...
```

## Déploiement sur Vercel

### Option 1 : Via l'interface Vercel (recommandé)

1. Pushez votre code sur GitHub
2. Connectez-vous sur [vercel.com](https://vercel.com)
3. Cliquez **Add New Project** → importez votre dépôt
4. Vercel détecte automatiquement Next.js
5. Cliquez **Deploy**

### Option 2 : Via la CLI Vercel

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Variables d'environnement

Aucune variable requise pour la version de base. Pour les intégrations futures :

```env
# .env.local (ne jamais commiter)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxx
```

## Checklist avant lancement

- [ ] Remplacer `veaseo.fr` par votre domaine réel dans `app/layout.tsx` et `app/sitemap.ts`
- [ ] Ajouter votre token Google Search Console dans `metadata.verification.google`
- [ ] Compléter le SIRET dans `app/mentions-legales/page.tsx`
- [ ] Ajouter l'image OG réelle (`/public/og-image.jpg`, 1200×630px)
- [ ] Connecter un service email pour le formulaire de contact (Resend.com recommandé)
- [ ] Configurer Google Analytics 4
- [ ] Soumettre le sitemap dans Google Search Console
- [ ] Vérifier les Core Web Vitals sur PageSpeed Insights
