import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/ui/CTABanner";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog SEO – Conseils pour améliorer votre visibilité Google",
  description:
    "Articles experts sur le SEO local, la création de sites web et l'optimisation des conversions. Conseils pratiques pour les entreprises locales.",
  alternates: { canonical: "https://veaseo.fr/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <span className="badge mb-6">Blog</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Conseils SEO pour{" "}
              <span className="text-gradient">passer devant vos concurrents</span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Des articles pratiques sur le SEO local, la performance web et la conversion. Pas de théorie vide — uniquement des stratégies que j&apos;applique pour mes clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding">
        <div className="container-custom">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-dark-400">Les articles arrivent bientôt...</p>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {posts.filter((p) => p.featured)[0] && (
                <AnimatedSection className="mb-12">
                  <Link
                    href={`/blog/${posts.filter((p) => p.featured)[0].slug}`}
                    className="card-glow group block"
                  >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-dark-700 rounded-2xl flex items-center justify-center">
                        <span className="text-orange-400/30 text-8xl font-bold">SEO</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="badge">Article vedette</span>
                          <span className="bg-dark-700 text-dark-300 text-xs px-3 py-1 rounded-full border border-white/5">
                            {posts.filter((p) => p.featured)[0].category}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                          {posts.filter((p) => p.featured)[0].title}
                        </h2>
                        <p className="text-dark-300 mb-6 leading-relaxed">
                          {posts.filter((p) => p.featured)[0].description}
                        </p>
                        <div className="flex items-center gap-4 text-dark-400 text-sm mb-6">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(posts.filter((p) => p.featured)[0].date).toLocaleDateString("fr-FR", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {posts.filter((p) => p.featured)[0].readTime} de lecture
                          </span>
                        </div>
                        <span className="text-orange-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                          Lire l&apos;article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              )}

              {/* All posts grid */}
              <SectionHeader
                badge="Tous les articles"
                title="Ressources pour"
                titleHighlight="progresser"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, i) => (
                  <AnimatedSection key={post.slug} delay={i * 100}>
                    <Link href={`/blog/${post.slug}`} className="card-glow group block h-full flex flex-col">
                      <div className="aspect-video bg-gradient-to-br from-orange-500/10 to-dark-700 rounded-xl mb-5 flex items-center justify-center overflow-hidden">
                        <span className="text-orange-400/20 text-5xl font-bold uppercase">
                          {post.category.substring(0, 3)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-dark-700 text-dark-300 text-xs px-2 py-1 rounded-full border border-white/5 flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                        <span className="text-dark-500 text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-white font-bold mb-3 group-hover:text-orange-400 transition-colors flex-1">
                        {post.title}
                      </h3>
                      <p className="text-dark-400 text-sm mb-4 line-clamp-2">{post.description}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                        <span className="text-dark-400 text-xs">
                          {new Date(post.date).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="text-orange-400 text-xs font-medium flex items-center gap-1">
                          Lire <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CTABanner
        title="Vous voulez que je l'applique pour vous ?"
        description="Ces stratégies, je les mets en œuvre pour mes clients tous les jours. Obtenez votre audit gratuit."
        primaryLabel="Audit SEO gratuit"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  );
}
