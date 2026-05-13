import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: { canonical: `https://veaseo.fr/blog/${params.slug}` },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      {/* Article hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container-custom relative z-10 max-w-4xl">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-dark-400 hover:text-orange-400 text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="badge">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="text-dark-400 text-sm flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} de lecture
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-dark-300 text-lg leading-relaxed mb-8">{post.description}</p>

            <div className="flex items-center gap-4 pb-8 border-b border-white/5">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                <span className="text-orange-400 font-bold text-sm">V</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{post.author}</div>
                <div className="text-dark-400 text-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article content */}
      <section className="pb-20">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-invert prose-orange max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-dark-200 prose-p:leading-relaxed
            prose-a:text-orange-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-code:text-orange-300 prose-code:bg-dark-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-dark-800 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl
            prose-blockquote:border-orange-500 prose-blockquote:text-dark-300
            prose-ul:text-dark-200 prose-li:marker:text-orange-400
            prose-hr:border-white/10">
            <MDXRemote source={post.content} />
          </div>

          {/* In-article CTA */}
          <AnimatedSection className="mt-12">
            <div className="bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-2">
                Vous voulez ces résultats pour votre entreprise ?
              </h3>
              <p className="text-dark-300 mb-4">
                Obtenez un audit SEO gratuit et un plan d&apos;action personnalisé.
              </p>
              <Link href="/contact" className="btn-primary">
                Audit gratuit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl font-bold text-white mb-8">Articles similaires</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <AnimatedSection key={p.slug} delay={i * 100}>
                  <Link href={`/blog/${p.slug}`} className="card-glow group block">
                    <div className="aspect-video bg-gradient-to-br from-orange-500/10 to-dark-700 rounded-xl mb-4 flex items-center justify-center">
                      <span className="text-orange-400/20 text-4xl font-bold">
                        {p.category.substring(0, 3)}
                      </span>
                    </div>
                    <span className="badge text-xs mb-2 inline-flex">{p.category}</span>
                    <h3 className="text-white font-bold text-sm group-hover:text-orange-400 transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            author: { "@type": "Person", name: post.author },
            datePublished: post.date,
            publisher: {
              "@type": "Organization",
              name: "Veaseo",
              url: "https://veaseo.fr",
            },
          }),
        }}
      />

      <CTABanner />
    </>
  );
}
