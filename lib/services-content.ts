/**
 * Rich content for each service page.
 * The dynamic route /services/[slug] consumes this map to render fully custom pages.
 * Note: `creation-site-web` is a static page and is NOT in this map.
 */

export interface ServiceContent {
  // HERO
  heroSubtitle: string;
  heroDescription: string;
  stats: { value: string; label: string }[];

  // PROBLEM SECTION
  problemTitle: string;
  problemHighlight: string;
  problemDescription: string;
  problemStats: { value: string; text: string }[];
  problemConclusion: string;

  // FEATURES
  featuresIntro: string;
  features: { icon: string; title: string; desc: string }[];

  // PROCESS
  process: { step: string; icon: string; title: string; desc: string }[];

  // INCLUDED
  included: { title: string; items: string[] }[];

  // TARGETS
  targetTitle: string;
  targetIntro: string;
  targets: string[];

  // FAQ
  faqs: { q: string; a: string }[];

  // FINAL CTA
  finalCtaTitle: string;
}

export const servicesContent: Record<string, ServiceContent> = {
  /* ─────────────────────────────────────────────────────────────
   * SEO LOCAL
   * ───────────────────────────────────────────────────────────── */
  "seo-local": {
    heroSubtitle: "Apparaissez en premier quand vos clients tapent votre métier + votre ville sur Google.",
    heroDescription:
      "Le SEO local, c'est la spécialité qui transforme une entreprise inconnue en référence locale. Stratégie complète : recherche de mots-clés géolocalisés, optimisation technique, contenu localisé et suivi mensuel pour dominer votre zone d'intervention sur Google.",
    stats: [
      { value: "Top 3", label: "objectif Google" },
      { value: "2-3 mois", label: "premiers résultats" },
      { value: "+82%", label: "trafic moyen client" },
    ],

    problemTitle: "Sans SEO local,",
    problemHighlight: "vous êtes invisible",
    problemDescription:
      "Vos prospects cherchent activement votre métier sur Google. Si vous n'apparaissez pas en première page, ils trouvent quelqu'un d'autre.",
    problemStats: [
      { value: "46%", text: "des recherches Google ont une **intention locale** (« plombier près de moi »)." },
      { value: "92%", text: "des internautes ne **dépassent jamais la 1ère page** de Google." },
      { value: "76%", text: "des recherches locales aboutissent à une **visite ou un appel sous 24h**." },
    ],
    problemConclusion:
      "Apparaître en première page sur \"votre métier + votre ville\", c'est littéralement multiplier votre chiffre d'affaires sans dépenser un euro de publicité.",

    featuresIntro:
      "Une stratégie SEO local complète, pensée pour les entreprises qui ont besoin de capter une clientèle géolocalisée.",
    features: [
      {
        icon: "Search",
        title: "Recherche de mots-clés locaux",
        desc: "Cocon sémantique complet : mots-clés principaux, longue traîne, intentions de recherche, opportunités vs concurrents. Tout est validé avant rédaction.",
      },
      {
        icon: "MapPin",
        title: "Stratégie multi-villes",
        desc: "Création de pages dédiées par ville d'intervention (ex: votre-metier-vannes, votre-metier-lorient...) pour capter chaque recherche géolocalisée.",
      },
      {
        icon: "Code2",
        title: "Optimisation technique",
        desc: "Schema.org LocalBusiness, balises hreflang, sitemap.xml priorisé, données structurées FAQ, breadcrumb. Tout ce que Google adore.",
      },
      {
        icon: "PenTool",
        title: "Contenu localisé",
        desc: "Pages services, articles de blog et FAQ rédigés avec les mots-clés locaux ciblés, intégrés naturellement dans un contenu de qualité.",
      },
      {
        icon: "Building2",
        title: "Cohérence NAP + Google Business",
        desc: "Nom, adresse, téléphone cohérents partout (site + GMB + annuaires + réseaux sociaux). Google n'aime pas les incohérences.",
      },
      {
        icon: "BarChart3",
        title: "Suivi & reporting mensuel",
        desc: "Positions trackées sur 20-50 mots-clés, rapport Google Search Console, recommandations actionnables tous les mois.",
      },
    ],

    process: [
      { step: "01", icon: "ClipboardList", title: "Audit SEO local", desc: "Analyse complète : positions actuelles, mots-clés exploités, comparaison avec 3 concurrents directs, opportunités de quick wins." },
      { step: "02", icon: "Users", title: "Stratégie & roadmap", desc: "Visio de validation : choix des mots-clés cibles, villes prioritaires, plan éditorial sur 6 mois. Vous savez exactement ce qui va se passer." },
      { step: "03", icon: "Rocket", title: "Mise en œuvre on-page", desc: "Optimisation technique + création de contenu + maillage interne + Schema.org. Tout est fait par moi, sans outsourcing." },
      { step: "04", icon: "Search", title: "Suivi & itération", desc: "Reporting mensuel, ajustements basés sur les résultats Google, recommandations pour aller chercher plus de positions." },
    ],

    included: [
      {
        title: "Recherche de mots-clés",
        items: [
          "Audit mots-clés actuels du site",
          "Recherche manuelle 30-50 mots-clés cibles",
          "Analyse 3 concurrents directs",
          "Identification des « keyword gaps »",
          "Validation client avant rédaction",
        ],
      },
      {
        title: "Optimisation technique",
        items: [
          "Schema.org LocalBusiness avancé",
          "Sitemap.xml & robots.txt",
          "Vitesse de page > 95% PageSpeed",
          "Optimisation balises (title, meta, H1-H6)",
          "Maillage interne stratégique",
        ],
      },
      {
        title: "Contenu localisé",
        items: [
          "Pages services × villes (cocon topical)",
          "Articles de blog optimisés SEO",
          "FAQ structurée + Schema",
          "Réécriture des pages mal optimisées",
          "Intégration mots-clés naturelle",
        ],
      },
      {
        title: "Suivi & reporting",
        items: [
          "Configuration Google Search Console",
          "Tracking positions 30-50 mots-clés",
          "Rapport mensuel détaillé",
          "Visio de débrief mensuelle",
          "Recommandations actionnables",
        ],
      },
    ],

    targetTitle: "Conçu pour les",
    targetIntro:
      "Le SEO local est l'arme la plus puissante pour les entreprises qui dépendent d'une clientèle géographiquement proche. Si vos clients viennent à pied, en voiture ou en visio depuis votre zone, vous DEVEZ faire du SEO local.",
    targets: [
      "Artisans du bâtiment (couvreurs, plombiers, électriciens...)",
      "Commerces de proximité & restaurants",
      "Professions libérales (avocats, kinés, ostéos...)",
      "Agences immobilières locales",
      "Coachs sportifs & écoles indépendantes",
      "Entreprises de services aux particuliers",
    ],

    faqs: [
      {
        q: "En combien de temps verrai-je les premiers résultats SEO ?",
        a: "Les premiers mouvements de positions sont visibles entre 4 et 8 semaines. Pour atteindre la première page sur vos mots-clés cibles, comptez en moyenne 3 à 6 mois selon la concurrence locale et l'état initial de votre site. C'est un investissement, pas un sprint.",
      },
      {
        q: "Pouvez-vous garantir une position numéro 1 sur Google ?",
        a: "Personne ne peut honnêtement le garantir : c'est l'algorithme de Google qui décide. Ce que je garantis, c'est un travail technique et éditorial irréprochable qui maximise vos chances. Sur mes clients accompagnés en SEO mensuel, 80% sont en top 3 sur leurs mots-clés principaux à 6 mois.",
      },
      {
        q: "Le SEO local fonctionne-t-il aussi sans site web ?",
        a: "Partiellement : vous pouvez optimiser votre fiche Google Business Profile pour apparaître sur Google Maps. Mais sans site, vous limitez énormément votre potentiel. Le combo idéal : site web optimisé + fiche Google Business + SEO local mensuel.",
      },
      {
        q: "Travaillez-vous avec mon site existant ou faut-il le refaire ?",
        a: "Dans 80% des cas, on travaille avec votre site existant. Si votre site est trop vieux ou techniquement bloqué (vitesse, structure, CMS obsolète), je vous proposerai une refonte préalable. C'est validé à l'audit initial.",
      },
      {
        q: "Quelle différence entre SEO local et référencement Google Maps ?",
        a: "Le SEO local englobe l'ensemble (site web + Google Maps). Le référencement Google Maps cible uniquement la fiche Google Business Profile (pack local). Idéalement, on combine les deux. Je propose les deux séparément ou ensemble selon vos besoins.",
      },
      {
        q: "Combien coûte le SEO local ?",
        a: "Le SEO local est un travail mensuel récurrent (suivi, contenu, ajustements). Le tarif dépend du nombre de mots-clés cibles, de la concurrence locale et de l'étendue de votre zone. Je propose un devis personnalisé après un audit gratuit de 30 minutes.",
      },
    ],

    finalCtaTitle: "Prêt à dominer Google localement ?",
  },

  /* ─────────────────────────────────────────────────────────────
   * REFERENCEMENT GOOGLE MAPS
   * ───────────────────────────────────────────────────────────── */
  "referencement-google-maps": {
    heroSubtitle: "Apparaissez dans le pack local Google Maps, le « top 3 » qui capte 70% des clics.",
    heroDescription:
      "Quand un client cherche « votre métier près de moi », Google affiche d'abord 3 fiches Google Business (le pack local) AVANT les sites web classiques. Si vous n'y êtes pas, vous êtes invisible. J'optimise votre fiche pour y entrer.",
    stats: [
      { value: "Top 3", label: "pack local Maps" },
      { value: "70%", label: "des clics captés" },
      { value: "48h", label: "premières optimisations" },
    ],

    problemTitle: "Le pack local Google Maps,",
    problemHighlight: "c'est 70% des clics",
    problemDescription:
      "Sur mobile, les 3 premières fiches Google Maps occupent presque tout l'écran avant qu'un seul site web n'apparaisse. Si vous n'y êtes pas, vous êtes invisible.",
    problemStats: [
      { value: "84%", text: "des recherches mobiles utilisent **Google Maps** pour trouver une entreprise locale." },
      { value: "3x", text: "plus de **clics et d'appels** pour les fiches optimisées vs. les fiches basiques." },
      { value: "5/5", text: "la **note Google idéale** pour apparaître en haut du pack local." },
    ],
    problemConclusion:
      "Votre fiche Google Business est probablement votre canal d'acquisition #1, et vous ne le savez même pas. Il est temps de la traiter comme telle.",

    featuresIntro:
      "Optimisation complète de votre fiche Google Business Profile pour entrer dans le pack local et y rester.",
    features: [
      {
        icon: "Building2",
        title: "Optimisation NAP + catégories",
        desc: "Nom exact, adresse, téléphone, horaires. Choix précis de la catégorie principale et des catégories secondaires (l'erreur n°1 des fiches mal classées).",
      },
      {
        icon: "PenTool",
        title: "Description optimisée SEO",
        desc: "Réécriture complète de votre description (750 caractères) avec mots-clés locaux ciblés, sans spam ni keyword stuffing. Naturel et puissant.",
      },
      {
        icon: "Map",
        title: "Photos optimisées géotaggées",
        desc: "Sélection, retouche et géotag GPS de vos photos. Renommage SEO. Upload progressif (Google déteste les uploads massifs).",
      },
      {
        icon: "Search",
        title: "Posts hebdomadaires programmés",
        desc: "Calendrier éditorial de posts (offres, actualités, événements). Les fiches actives rankent mieux que les fiches dormantes.",
      },
      {
        icon: "CheckCircle2",
        title: "Gestion stratégique des avis",
        desc: "Templates de réponses, script pour collecter des avis 5 étoiles auprès de vos clients satisfaits, gestion des avis négatifs.",
      },
      {
        icon: "BarChart3",
        title: "Suivi des Insights",
        desc: "Tracking mensuel des appels, demandes d'itinéraire et visites du site web générés depuis votre fiche. ROI mesurable.",
      },
    ],

    process: [
      { step: "01", icon: "ClipboardList", title: "Audit de fiche", desc: "Analyse complète : NAP, catégories, photos, posts, avis, position actuelle dans le pack local sur vos mots-clés." },
      { step: "02", icon: "Users", title: "Stratégie d'optimisation", desc: "Validation des catégories cibles, des mots-clés à intégrer, du calendrier de posts et du plan de collecte d'avis." },
      { step: "03", icon: "Rocket", title: "Mise en œuvre 360°", desc: "Optimisation complète de la fiche en 7-10 jours. Première vague de posts publiés, photos retouchées, NAP harmonisé." },
      { step: "04", icon: "Search", title: "Suivi & ajustements", desc: "Reporting mensuel des Insights, ajustements basés sur les résultats, recommandations continues." },
    ],

    included: [
      {
        title: "Optimisation de base",
        items: [
          "NAP harmonisé (site + GMB + annuaires)",
          "Catégories principales/secondaires optimisées",
          "Description 750 caractères SEO",
          "Horaires détaillés + horaires spéciaux",
          "Attributs (livraison, parking, accessibilité...)",
        ],
      },
      {
        title: "Photos & visuel",
        items: [
          "Sélection des 10-15 meilleures photos",
          "Retouche légère et compression",
          "Géotag GPS pour chaque photo",
          "Renommage SEO des fichiers",
          "Upload progressif (anti-spam Google)",
        ],
      },
      {
        title: "Activité continue",
        items: [
          "4-8 posts par mois programmés",
          "Templates de réponses aux avis",
          "Script de collecte d'avis 5★",
          "Création de produits/services GMB",
          "Q&A : questions/réponses anticipées",
        ],
      },
      {
        title: "Suivi & ROI",
        items: [
          "Tracking positions pack local",
          "Suivi appels & itinéraires (Insights)",
          "Comparaison concurrents directs",
          "Reporting mensuel clair",
          "Recommandations actionnables",
        ],
      },
    ],

    targetTitle: "Indispensable pour les",
    targetIntro:
      "Toute entreprise qui reçoit des clients physiquement ou qui intervient dans une zone géographique précise a INTÉRÊT à dominer le pack local Google Maps. C'est gratuit, et c'est le levier ROI le plus rapide en SEO local.",
    targets: [
      "Restaurants, bars, cafés, hôtels",
      "Artisans du bâtiment (intervention zone)",
      "Garages, carrosseries, dépanneurs",
      "Cabinets médicaux & paramédicaux",
      "Agences immobilières & courtiers",
      "Commerces de centre-ville",
    ],

    faqs: [
      {
        q: "Ma fiche Google Business existe déjà, ai-je besoin de ce service ?",
        a: "Oui, si elle n'est pas en top 3 sur vos mots-clés locaux. La création d'une fiche prend 10 minutes, mais l'optimisation pour entrer dans le pack local Google Maps demande une vraie expertise SEO. La différence d'impact est énorme.",
      },
      {
        q: "Combien de temps pour entrer dans le pack local ?",
        a: "Les premiers mouvements sont visibles sous 2-4 semaines. L'entrée stable dans le top 3 prend généralement 2 à 4 mois selon la concurrence locale. C'est beaucoup plus rapide que le SEO sur site web.",
      },
      {
        q: "Et si je n'ai pas d'adresse physique ouverte au public ?",
        a: "Pas de problème. On peut configurer une « Service Area Business » (entreprise sans adresse visible) où vous indiquez les zones que vous couvrez sans afficher votre adresse. C'est typique pour les artisans, plombiers, etc.",
      },
      {
        q: "Les avis Google ont-ils vraiment un impact sur le ranking ?",
        a: "Oui, énormément. Le nombre, la note moyenne, la fréquence et la qualité des réponses sont des signaux forts pour Google. Une fiche avec 50 avis 4.8/5 et des réponses pros battra toujours une fiche avec 5 avis 5/5 sans réponse.",
      },
      {
        q: "Et si je reçois un avis négatif ?",
        a: "Les avis négatifs sont une opportunité. Je fournis un template de réponse pro qui rassure les futurs prospects. Un avis négatif bien géré peut convertir plus qu'un avis positif générique. Et je vous accompagne pour les avis vraiment problématiques (signalement Google).",
      },
      {
        q: "Quelle différence avec la création de fiche Google Business ?",
        a: "Création = on part de zéro et on monte votre fiche (vérification incluse). Référencement = vous avez déjà une fiche et on l'optimise pour entrer dans le pack local. Souvent on combine les deux pour les nouvelles entreprises.",
      },
    ],

    finalCtaTitle: "Prêt à entrer dans le top 3 Google Maps ?",
  },

  /* ─────────────────────────────────────────────────────────────
   * CREATION FICHE GOOGLE BUSINESS
   * ───────────────────────────────────────────────────────────── */
  "creation-fiche-google-business": {
    heroSubtitle: "Soyez visible sur Google Maps en moins de 48h.",
    heroDescription:
      "Vous n'avez pas encore de fiche Google Business Profile ? C'est votre 1er levier de visibilité locale, et c'est 100% gratuit côté Google. Je vous crée et configure votre fiche en mode SEO dès le départ, pour ne pas avoir à la retravailler dans 6 mois.",
    stats: [
      { value: "48h", label: "fiche en ligne" },
      { value: "0€", label: "côté Google" },
      { value: "100%", label: "SEO-ready" },
    ],

    problemTitle: "Sans fiche Google Business,",
    problemHighlight: "vous n'existez pas pour Google Maps",
    problemDescription:
      "Aucune fiche = aucune visibilité dans Google Maps, aucune apparition dans le pack local, aucun appel depuis Google. C'est comme avoir un magasin sans enseigne.",
    problemStats: [
      { value: "5 milliards", text: "de recherches **par jour** sur Google Maps." },
      { value: "78%", text: "des recherches locales sur mobile **convertissent en visite ou en appel**." },
      { value: "0", text: "**c'est ce que coûte** une fiche Google Business (mais elle est mal créée 9 fois sur 10)." },
    ],
    problemConclusion:
      "Créer une fiche prend 10 minutes. La créer pour qu'elle ranke vraiment demande une expertise SEO. Et c'est plus dur à corriger après qu'à bien faire dès le départ.",

    featuresIntro:
      "Création complète, professionnelle et SEO-friendly de votre fiche Google Business Profile, du choix du nom à la vérification finale.",
    features: [
      {
        icon: "Building2",
        title: "Recherche & réservation du nom",
        desc: "Vérification des risques de conflit, des règles Google (pas de mots-clés dans le nom), choix optimal pour la cohérence avec votre marque.",
      },
      {
        icon: "CheckCircle2",
        title: "Vérification & validation Google",
        desc: "Accompagnement complet pour la vérification (carte postale, vidéo ou téléphone selon l'éligibilité). C'est l'étape qui bloque 30% des entreprises.",
      },
      {
        icon: "MapPin",
        title: "Configuration NAP + horaires",
        desc: "Nom, adresse, téléphone, horaires (jours spéciaux inclus), site web, catégorie principale + secondaires. Tout est cohérent avec votre site.",
      },
      {
        icon: "PenTool",
        title: "Description SEO de lancement",
        desc: "Rédaction de votre description 750 caractères avec mots-clés locaux ciblés dès le démarrage. Pas besoin de la réécrire dans 3 mois.",
      },
      {
        icon: "Search",
        title: "Photos & visuel initial",
        desc: "Conseils pour le pack photo de démarrage (logo, couverture, intérieur/extérieur, équipe, produits). 10 minimum pour bien démarrer.",
      },
      {
        icon: "Users",
        title: "Formation à la gestion",
        desc: "Visio de formation (1h) pour vous apprendre à gérer votre fiche au quotidien : posts, avis, photos, statistiques.",
      },
    ],

    process: [
      { step: "01", icon: "ClipboardList", title: "Onboarding NAP", desc: "Je récupère via 1 questionnaire toutes vos infos : nom légal, adresse, horaires, catégorie, photos disponibles, mots-clés cibles." },
      { step: "02", icon: "Rocket", title: "Création + vérification", desc: "Je crée votre fiche et lance la procédure de vérification Google. Selon le mode (carte postale = 5-14 jours, vidéo = 48h)." },
      { step: "03", icon: "PenTool", title: "Optimisation initiale", desc: "Description SEO, catégories optimales, horaires détaillés, attributs (livraison, parking...), liens, premières photos uploadées." },
      { step: "04", icon: "Users", title: "Formation & transfert", desc: "Visio de 1h pour vous transférer la gestion. Vous gardez 100% des droits d'administration de la fiche, vous êtes propriétaire." },
    ],

    included: [
      {
        title: "Configuration de base",
        items: [
          "Création du compte Google Business",
          "Vérification Google (postale/vidéo)",
          "Configuration NAP complète",
          "Horaires standards + horaires spéciaux",
          "Lien vers votre site web",
        ],
      },
      {
        title: "Optimisation SEO de démarrage",
        items: [
          "Choix de la catégorie principale optimale",
          "5 catégories secondaires stratégiques",
          "Description 750 caractères SEO",
          "Attributs pertinents activés",
          "Zone de service configurée si besoin",
        ],
      },
      {
        title: "Visuel & contenu initial",
        items: [
          "Upload logo + photo de couverture",
          "8-12 photos initiales (géotag GPS)",
          "1 premier post de lancement",
          "Création des premiers produits/services",
          "Configuration des messages",
        ],
      },
      {
        title: "Formation & accompagnement",
        items: [
          "Visio formation 1h",
          "Guide PDF de gestion quotidienne",
          "Templates de réponse aux avis",
          "Plan de collecte d'avis 5★",
          "Support email 30 jours",
        ],
      },
    ],

    targetTitle: "Pour toute",
    targetIntro:
      "Toute entreprise qui n'a pas encore de fiche Google Business Profile (ou qui en a une bricolée et qu'elle veut refaire proprement) doit créer la sienne maintenant. C'est le canal d'acquisition gratuit le plus puissant qui existe en local.",
    targets: [
      "Nouvelle entreprise locale en lancement",
      "Entreprise existante sans fiche GMB",
      "Reprise d'activité avec changement de nom",
      "Création d'un nouvel établissement",
      "Service à domicile (Service Area Business)",
      "Profession libérale qui se lance",
    ],

    faqs: [
      {
        q: "Pourquoi payer pour créer une fiche qui est gratuite ?",
        a: "La création est gratuite, l'optimisation SEO ne l'est pas. La plupart des entreprises créent leur fiche en 10 minutes, la laissent vide et ne rankent jamais. Je crée la vôtre AVEC les bons mots-clés, les bonnes catégories et les bons réglages dès le départ. Différence : votre fiche est prête à ranker, pas juste « en ligne ».",
      },
      {
        q: "En combien de temps ma fiche sera-t-elle visible ?",
        a: "Si vous êtes éligible à la vérification vidéo : 48h. Si Google demande une vérification par carte postale : 5 à 14 jours (délai postal). Je vous accompagne tout au long du process.",
      },
      {
        q: "Et si Google refuse ma vérification ?",
        a: "Ça arrive (rare mais possible). On a plusieurs recours : changer le mode de vérification, contacter le support Google, fournir des justificatifs. Je gère tout, vous n'avez pas à vous battre avec Google.",
      },
      {
        q: "Je travaille à domicile, je peux quand même avoir une fiche ?",
        a: "Oui, via le mode « Service Area Business » : votre adresse n'est PAS affichée publiquement, mais vous définissez les zones que vous couvrez. C'est la configuration idéale pour les artisans, dépanneurs, coachs, etc.",
      },
      {
        q: "Combien de temps pour apparaître dans le pack local après création ?",
        a: "Votre fiche est visible sur Google Maps dès la vérification. Mais pour entrer dans le « pack local » (top 3 des recherches métier + ville), comptez 2 à 4 mois d'optimisation continue. C'est pour ça que je propose aussi un service de référencement Google Maps en suivi mensuel.",
      },
      {
        q: "Vous gardez la propriété de la fiche après ?",
        a: "Non, jamais. Vous êtes propriétaire de la fiche dès le départ. J'utilise simplement les accès d'admin pour la configurer. À la fin de la mission, je retire mes accès et vous restez seul propriétaire.",
      },
    ],

    finalCtaTitle: "Prêt à apparaître sur Google Maps ?",
  },

  /* ─────────────────────────────────────────────────────────────
   * REFONTE DE SITE WEB
   * ───────────────────────────────────────────────────────────── */
  "refonte-site-web": {
    heroSubtitle: "Votre site actuel vous fait perdre plus de clients qu'il n'en rapporte ?",
    heroDescription:
      "Refonte complète de votre site existant : design moderne, vitesse optimale, SEO préservé, conversion repensée. Sans casser votre référencement actuel — bien au contraire.",
    stats: [
      { value: "30 j", label: "de refonte" },
      { value: "100%", label: "SEO préservé" },
      { value: "> 95%", label: "PageSpeed après" },
    ],

    problemTitle: "Un vieux site coûte plus cher",
    problemHighlight: "qu'une refonte",
    problemDescription:
      "Vitesse en chute libre, design dépassé, mobile non optimisé, formulaires qui ne convertissent pas : chaque mois passé avec un site obsolète, c'est des dizaines de clients perdus.",
    problemStats: [
      { value: "53%", text: "des visiteurs quittent un site qui met **plus de 3 secondes** à charger." },
      { value: "75%", text: "des internautes **jugent la crédibilité** d'une entreprise sur la base de son site." },
      { value: "-40%", text: "de conversions sur **mobile** vs desktop quand le site n'est pas mobile-first." },
    ],
    problemConclusion:
      "Un site obsolète, c'est un commercial mal habillé qui parle à votre place 24/7. Le pire investissement passif que vous puissiez faire.",

    featuresIntro:
      "Refonte 360° de votre site avec une attention particulière à la conservation et même à l'amélioration de votre SEO existant.",
    features: [
      {
        icon: "Search",
        title: "Audit avant refonte",
        desc: "Audit complet : technique, SEO, UX, contenu, conversion. On garde ce qui marche, on supprime ce qui freine, on améliore le reste.",
      },
      {
        icon: "Globe",
        title: "Migration sans perte SEO",
        desc: "Plan de redirections 301 exhaustif, conservation des URLs stratégiques, transfert des balises Schema. Votre Google Search Console ne décroche pas.",
      },
      {
        icon: "PenTool",
        title: "Design moderne sur-mesure",
        desc: "Aucun template recyclé : design qui reflète votre identité, animations soignées, visuels premium. Votre nouvelle vitrine impressionne dès la 1ère seconde.",
      },
      {
        icon: "Rocket",
        title: "Performance premium",
        desc: "Migration vers Next.js + Vercel. Score PageSpeed > 95% mobile garanti. Vitesse 5 à 10x supérieure à votre site actuel.",
      },
      {
        icon: "Smartphone",
        title: "Mobile-first repensé",
        desc: "Conception d'abord pour le mobile, où viennent 60-70% de vos visiteurs. Sticky CTA, formulaires optimisés, navigation au pouce.",
      },
      {
        icon: "Users",
        title: "Formation incluse",
        desc: "Visio de formation pour gérer votre nouveau site : modifier les textes, ajouter des articles, gérer les images. Autonomie complète.",
      },
    ],

    process: [
      { step: "01", icon: "ClipboardList", title: "Audit & stratégie", desc: "Audit complet de l'existant + 5 questionnaires sur votre activité, vos objectifs et votre cible. Plan de refonte validé ensemble." },
      { step: "02", icon: "PenTool", title: "Conception & maquettes", desc: "Maquettes interactives validées avant un seul ligne de code. Vous voyez exactement ce que vous allez avoir." },
      { step: "03", icon: "Code2", title: "Développement & migration", desc: "Développement du nouveau site en parallèle de l'ancien. Aucune interruption de service pour vos visiteurs actuels." },
      { step: "04", icon: "Rocket", title: "Mise en ligne & suivi", desc: "Bascule du DNS, redirections 301 actives, soumission à Google. Suivi 30 jours pour rassurer le ranking." },
    ],

    included: [
      {
        title: "Audit & stratégie",
        items: [
          "Audit technique complet (Lighthouse, crawl)",
          "Audit SEO (positions, mots-clés, backlinks)",
          "Audit UX & conversion",
          "5 questionnaires d'onboarding",
          "Atelier stratégique visio 1h",
        ],
      },
      {
        title: "Design & développement",
        items: [
          "Design sur-mesure (aucun template)",
          "Maquettes validées avant codage",
          "Développement Next.js / Tailwind",
          "Score PageSpeed > 95%",
          "Animations soignées au scroll",
        ],
      },
      {
        title: "Migration SEO",
        items: [
          "Plan de redirections 301 exhaustif",
          "Conservation des URLs stratégiques",
          "Transfert Schema.org enrichi",
          "Soumission Google Search Console",
          "Suivi 30 jours post-lancement",
        ],
      },
      {
        title: "Formation & transfert",
        items: [
          "Visio formation 1h",
          "Guide PDF de gestion",
          "Transfert GitHub + Vercel à votre nom",
          "Transfert du nom de domaine",
          "Support 30 jours inclus",
        ],
      },
    ],

    targetTitle: "Indispensable pour les",
    targetIntro:
      "Si votre site a plus de 3-4 ans, qu'il est lent, mal classé, ou qu'il ne reflète plus votre niveau de qualité, vous perdez chaque jour des clients potentiels. Une refonte change tout — sans toucher à vos acquis SEO si elle est bien faite.",
    targets: [
      "Sites WordPress lents ou bricolés",
      "Sites Wix / Squarespace limités",
      "Anciens sites HTML/PHP non responsive",
      "Sites au design dépassé (avant 2020)",
      "Sites qui ne convertissent plus",
      "Entreprises en repositionnement",
    ],

    faqs: [
      {
        q: "Vais-je perdre mon référencement Google avec la refonte ?",
        a: "C'est LE risque #1 d'une refonte mal faite. Avec ma méthode (plan de redirections 301 exhaustif, conservation des URLs stratégiques, audit SEO préalable), vous conservez 100% de votre référencement. Mieux : il s'améliore généralement grâce à la vitesse et à l'optimisation technique.",
      },
      {
        q: "Vous travaillez avec mon site WordPress / Wix / Squarespace existant ?",
        a: "Je récupère votre contenu et vos données, mais je le reconstruis en Next.js (la techno la plus rapide et SEO-friendly actuellement). C'est une vraie refonte, pas un rafistolage. Le résultat n'a plus rien à voir.",
      },
      {
        q: "Que devient mon ancien site pendant la refonte ?",
        a: "Il reste en ligne, accessible à vos visiteurs et à Google. Je développe le nouveau en parallèle. La bascule se fait en 1 nuit, avec les redirections 301 prêtes. Aucune interruption visible.",
      },
      {
        q: "Combien de temps prend une refonte ?",
        a: "30 jours, comme une création neuve. Une refonte n'est pas plus rapide qu'une création : il y a en plus l'audit, le plan de migration SEO et les redirections. Mais le résultat est garanti contractuellement.",
      },
      {
        q: "Et mon nom de domaine et mon hébergement actuels ?",
        a: "On garde votre nom de domaine (très important pour le SEO). Côté hébergement, je migre votre site sur Vercel (ultra-rapide, gratuit pour la plupart des cas), ce qui résout 80% des problèmes de vitesse automatiquement.",
      },
      {
        q: "Ai-je accès au nouveau site après la livraison ?",
        a: "Oui, 100%. Comme pour une création neuve : GitHub à votre nom, hébergement Vercel à votre nom, nom de domaine à votre nom. Vous êtes propriétaire à 100%. Aucune dépendance vis-à-vis de moi.",
      },
    ],

    finalCtaTitle: "Prêt à refondre votre site ?",
  },

  /* ─────────────────────────────────────────────────────────────
   * OPTIMISATION SEO ON-PAGE
   * ───────────────────────────────────────────────────────────── */
  "optimisation-seo-on-page": {
    heroSubtitle: "Votre site existe mais ne ranke pas ? On corrige tout, page par page.",
    heroDescription:
      "Audit technique complet + optimisation systématique de chaque page : balises, structure HTML, Schema.org, vitesse, contenu. La méthode la plus rentable quand votre site est techniquement freiné par Google.",
    stats: [
      { value: "30+", label: "points d'audit" },
      { value: "100%", label: "actionnable" },
      { value: "2-3 mois", label: "résultats SEO" },
    ],

    problemTitle: "Votre site",
    problemHighlight: "est freiné par Google",
    problemDescription:
      "Vous avez un site, vous publiez du contenu, mais Google ne vous remonte pas. Le problème est rarement le contenu : c'est l'optimisation technique on-page qui pèche.",
    problemStats: [
      { value: "70%", text: "des sites professionnels ont **des erreurs SEO techniques** que Google pénalise." },
      { value: "5x", text: "plus de chances de ranker pour les pages **correctement structurées**." },
      { value: "30+", text: "points techniques **vérifiables** sur chaque page pour optimiser." },
    ],
    problemConclusion:
      "L'optimisation on-page, c'est le quick win SEO par excellence : pas de création de contenu, pas de netlinking, juste un travail méthodique sur ce qui existe déjà. ROI maximal.",

    featuresIntro:
      "Audit technique complet + optimisation systématique de chaque page de votre site, dans une démarche orientée résultats Google.",
    features: [
      {
        icon: "Search",
        title: "Audit technique Lighthouse",
        desc: "Audit complet Lighthouse + Screaming Frog : performance, accessibilité, SEO, best practices. Liste exhaustive de tous les problèmes à résoudre.",
      },
      {
        icon: "PenTool",
        title: "Optimisation des balises",
        desc: "Réécriture des balises title, meta description, H1-H6 sur l'ensemble des pages stratégiques. Mots-clés ciblés intégrés naturellement.",
      },
      {
        icon: "Code2",
        title: "Schema.org enrichi",
        desc: "Ajout de Schema LocalBusiness, Service, FAQ, Article, BreadcrumbList. Vous gagnez des « rich snippets » dans les résultats Google.",
      },
      {
        icon: "Rocket",
        title: "Vitesse & Core Web Vitals",
        desc: "Optimisation LCP, CLS, INP. Images compressées en WebP, lazy loading, code splitting. Objectif : > 95% PageSpeed mobile.",
      },
      {
        icon: "Globe",
        title: "Maillage interne stratégique",
        desc: "Refonte du maillage interne : chaque page importante reçoit des liens entrants, les pages orphelines sont identifiées et corrigées.",
      },
      {
        icon: "ClipboardList",
        title: "Optimisation des contenus existants",
        desc: "Réécriture des pages mal optimisées (longueur, structure, mots-clés). On garde l'esprit, on muscle la forme.",
      },
    ],

    process: [
      { step: "01", icon: "Search", title: "Audit complet (1 sem)", desc: "Crawl complet du site + audit Lighthouse de toutes les pages stratégiques + analyse Google Search Console. Rapport détaillé." },
      { step: "02", icon: "ClipboardList", title: "Plan de priorisation", desc: "Liste des optimisations classées par ROI : quick wins (impact immédiat), optimisations profondes, refontes ponctuelles." },
      { step: "03", icon: "Rocket", title: "Implémentation", desc: "Mise en œuvre méthodique des optimisations, page par page. Chaque action est documentée et trackée." },
      { step: "04", icon: "BarChart3", title: "Suivi & itération", desc: "Tracking des positions avant/après. Optimisations complémentaires basées sur les premiers résultats à 4-6 semaines." },
    ],

    included: [
      {
        title: "Audit technique",
        items: [
          "Crawl complet (Screaming Frog)",
          "Audit Lighthouse toutes pages clés",
          "Analyse Google Search Console",
          "Test mobile-friendliness",
          "Rapport PDF détaillé",
        ],
      },
      {
        title: "Optimisation balises",
        items: [
          "Réécriture des title (toutes pages)",
          "Réécriture des meta descriptions",
          "Hiérarchie H1-H6 corrigée",
          "Balises alt sur toutes images",
          "Canonical & hreflang",
        ],
      },
      {
        title: "Schema & technique",
        items: [
          "Schema LocalBusiness avancé",
          "Schema Service par page service",
          "Schema FAQ + BreadcrumbList",
          "Sitemap.xml priorisé",
          "Robots.txt + indexation",
        ],
      },
      {
        title: "Performance & maillage",
        items: [
          "Optimisation Core Web Vitals",
          "Images WebP + lazy loading",
          "Refonte maillage interne",
          "Identification pages orphelines",
          "Reporting positions avant/après",
        ],
      },
    ],

    targetTitle: "Recommandé pour les",
    targetIntro:
      "L'optimisation SEO on-page est idéale quand votre site est techniquement décent mais ne ranke pas suffisamment. Avant d'investir dans une refonte ou dans du contenu, optimisons d'abord ce qui existe — c'est presque toujours le meilleur ROI SEO.",
    targets: [
      "Sites récents (< 2 ans) qui ne décollent pas",
      "Sites avec un contenu de qualité mal classé",
      "Sites WordPress mal optimisés techniquement",
      "Entreprises en perte de positions Google",
      "Sites migrés sans plan de redirections",
      "Sites avec PageSpeed inférieur à 70%",
    ],

    faqs: [
      {
        q: "Quelle différence entre SEO on-page et SEO local ?",
        a: "SEO on-page = optimisations techniques + de contenu sur les pages de votre site (universel). SEO local = stratégie complète pour ranker sur les recherches géolocalisées (combine on-page + Google Business + maillage local). Le SEO on-page est inclus dans toute prestation de SEO local, mais peut aussi être vendu seul si c'est votre besoin principal.",
      },
      {
        q: "Vais-je voir une différence sur Google rapidement ?",
        a: "Les quick wins techniques (balises, schema, vitesse) peuvent donner des résultats sous 4-6 semaines. Les optimisations de contenu prennent 2-3 mois. La courbe est progressive mais réelle.",
      },
      {
        q: "Faut-il refaire le site avant d'optimiser ?",
        a: "Pas forcément. Dans 70% des cas, un audit on-page suffit. Je refais l'audit en début de mission, et si le site est trop limité techniquement (CMS obsolète, structure cassée), je vous le dis honnêtement et on bascule sur une refonte. Pas de surfacturation.",
      },
      {
        q: "Travaillez-vous sur WordPress, Shopify, Wix, Webflow ?",
        a: "Oui, sur tous les CMS principaux. WordPress et Webflow sont les plus optimisables. Shopify a ses limites techniques. Wix et Squarespace sont les plus contraints — j'optimise ce qui est optimisable, et je vous oriente honnêtement vers une refonte si c'est trop limité.",
      },
      {
        q: "Combien de pages serez-vous optimisées ?",
        a: "Cela dépend de la taille du site. Pour un site standard de 10-20 pages, toutes les pages stratégiques sont optimisées. Pour un site plus volumineux, on priorise les pages à fort potentiel SEO (basé sur Google Search Console).",
      },
      {
        q: "Combien coûte une optimisation SEO on-page ?",
        a: "Le tarif dépend du nombre de pages à optimiser et de l'état technique initial. Je propose un devis sur-mesure après l'audit gratuit de 30 minutes. C'est souvent la prestation SEO la plus rentable au démarrage.",
      },
    ],

    finalCtaTitle: "Prêt à muscler votre SEO on-page ?",
  },

  /* ─────────────────────────────────────────────────────────────
   * REDACTION CONTENU WEB SEO
   * ───────────────────────────────────────────────────────────── */
  "redaction-contenu-web-seo": {
    heroSubtitle: "Des articles de blog qui rankent ET qui convertissent.",
    heroDescription:
      "Articles de 1 000 à 2 000 mots optimisés SEO local, rédigés par un humain qui comprend votre métier. Pas du contenu IA générique — du contenu qui ranke vraiment et qui fait passer vos lecteurs à l'action.",
    stats: [
      { value: "1000-2000", label: "mots par article" },
      { value: "100%", label: "humain" },
      { value: "SEO + CRO", label: "double optimisé" },
    ],

    problemTitle: "Sans contenu régulier,",
    problemHighlight: "Google vous oublie",
    problemDescription:
      "Google adore les sites actifs. Un blog mis à jour mensuellement booste l'ensemble de votre SEO. Sans contenu, vous laissez l'autorité à vos concurrents qui publient.",
    problemStats: [
      { value: "5x", text: "plus de pages indexées pour les sites qui **publient régulièrement** vs. les sites statiques." },
      { value: "67%", text: "de leads en plus pour les **PME qui publient du contenu** vs. celles qui ne publient pas." },
      { value: "434%", text: "de pages indexées en plus pour les **sites avec blog** (HubSpot)." },
    ],
    problemConclusion:
      "Le blog n'est pas un gadget : c'est l'arme à long terme du SEO. Chaque article publié est un actif qui ramène du trafic pour les années à venir.",

    featuresIntro:
      "Rédaction d'articles de blog 100% humains, optimisés SEO local et structurés pour la conversion.",
    features: [
      {
        icon: "Search",
        title: "Recherche de mots-clés ciblés",
        desc: "Chaque article répond à une vraie recherche Google de votre cible. Volume validé, intention de recherche claire, concurrence analysée.",
      },
      {
        icon: "PenTool",
        title: "Rédaction 100% humaine",
        desc: "Articles écrits à la main, ton naturel, métier compris. Aucun contenu IA générique (Google les détecte et les pénalise).",
      },
      {
        icon: "Code2",
        title: "Optimisation on-page complète",
        desc: "Title, meta, H1-H6, balises alt, FAQ Schema, BreadcrumbList. Chaque article est techniquement parfait.",
      },
      {
        icon: "MapPin",
        title: "Mots-clés locaux intégrés",
        desc: "Vos villes d'intervention sont intégrées naturellement dans les articles pour renforcer votre SEO local.",
      },
      {
        icon: "Globe",
        title: "Maillage interne automatique",
        desc: "Chaque article relie 2-3 pages services et 1-2 autres articles, créant un cocon topical solide. Google adore.",
      },
      {
        icon: "Rocket",
        title: "Publication & indexation",
        desc: "Article publié directement sur votre site, soumis à Google Search Console pour indexation rapide. Aucune action de votre part.",
      },
    ],

    process: [
      { step: "01", icon: "ClipboardList", title: "Calendrier éditorial", desc: "Définition ensemble de 4-12 sujets/mois alignés avec vos services et vos zones cibles. Vous validez chaque sujet avant rédaction." },
      { step: "02", icon: "Search", title: "Recherche & briefing", desc: "Recherche de mots-clés, analyse concurrence sur le sujet, brief de rédaction validé." },
      { step: "03", icon: "PenTool", title: "Rédaction & relecture", desc: "Rédaction de l'article (1000-2000 mots), 2 relectures, ajout des images, balises alt, FAQ. Validation par vous avant publication." },
      { step: "04", icon: "Rocket", title: "Publication & promotion", desc: "Mise en ligne sur votre site, ajout au sitemap, soumission Search Console, partage sur vos réseaux (option)." },
    ],

    included: [
      {
        title: "Stratégie éditoriale",
        items: [
          "Calendrier éditorial mensuel",
          "Recherche de mots-clés ciblés",
          "Analyse concurrentielle par sujet",
          "Briefs de rédaction validés",
          "Plan de cocon topical par service",
        ],
      },
      {
        title: "Rédaction & contenu",
        items: [
          "1000-2000 mots par article (humain)",
          "Ton adapté à votre cible & métier",
          "Structure SEO claire (H1-H6)",
          "FAQ optimisée par article",
          "Images générées + alt SEO",
        ],
      },
      {
        title: "Optimisation SEO",
        items: [
          "Title & meta description optimisés",
          "Schema Article + FAQPage + Breadcrumb",
          "URLs propres et SEO-friendly",
          "Maillage interne stratégique",
          "Lazy loading des images",
        ],
      },
      {
        title: "Publication & suivi",
        items: [
          "Mise en ligne directe sur votre site",
          "Soumission Google Search Console",
          "Tracking positions par article",
          "Rapport de performance mensuel",
          "Recommandations sujets futurs",
        ],
      },
    ],

    targetTitle: "Indispensable pour les",
    targetIntro:
      "Toute entreprise qui veut construire une présence Google durable, gagner en autorité dans son secteur et créer un actif marketing à long terme a besoin de contenu régulier. Le SEO sans contenu, c'est une voiture sans essence.",
    targets: [
      "Entreprises locales en lancement (besoin d'autorité)",
      "Sites établis qui veulent capter plus de trafic",
      "Professions libérales (expert content marketing)",
      "Artisans qui veulent éduquer leur cible",
      "PME en accompagnement SEO mensuel",
      "Sites e-commerce locaux (fiches produits enrichies)",
    ],

    faqs: [
      {
        q: "Vous utilisez l'IA pour rédiger ?",
        a: "Pas pour la rédaction principale. J'utilise des outils (Claude, GPT-4) pour la recherche et la structure, mais l'écriture finale est 100% humaine, retravaillée, avec un ton qui colle à votre métier. Google détecte le contenu IA générique et le déclasse — je ne prends pas ce risque pour vous.",
      },
      {
        q: "Combien d'articles par mois recommandez-vous ?",
        a: "Le sweet spot pour les entreprises locales est de 4 à 8 articles par mois. Moins de 2/mois = peu d'impact SEO. Plus de 12/mois = saturation et baisse de qualité. La régularité prime sur le volume.",
      },
      {
        q: "Combien de temps pour voir des résultats ?",
        a: "Un article bien optimisé met 2 à 6 mois pour atteindre son potentiel SEO (Google a besoin de temps pour évaluer). Mais l'effet cumulé est exponentiel : à 12 mois, votre blog devient un actif énorme.",
      },
      {
        q: "Sur quels sujets allez-vous écrire ?",
        a: "Je définis avec vous un calendrier éditorial basé sur 3 piliers : les questions que se posent vos clients (longue traîne SEO), les sujets pour lesquels vos concurrents rankent (gap content), et les sujets qui mettent en valeur votre expertise (autorité).",
      },
      {
        q: "Je peux relire et modifier les articles avant publication ?",
        a: "Évidemment. Chaque article est envoyé pour validation avant publication. Vous pouvez demander des modifications (illimitées dans la limite du raisonnable). C'est votre site, votre voix, vos clients.",
      },
      {
        q: "Comment combiner ce service avec votre SEO local ?",
        a: "Très bonne question : ces deux services se complètent parfaitement. Le SEO local pose les fondations techniques, la rédaction SEO les active dans le temps. Souvent, je propose les deux en pack mensuel pour un effet maximal.",
      },
    ],

    finalCtaTitle: "Prêt à publier régulièrement ?",
  },
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return servicesContent[slug];
}
