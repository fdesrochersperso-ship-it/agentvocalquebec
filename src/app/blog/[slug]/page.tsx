import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog-posts";
import { absoluteUrl, createPageMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    ogType: "article",
  });
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("fr-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: {
      "@type": "Organization",
      name: "Agent Vocal Québec",
    },
    publisher: {
      "@type": "Organization",
      name: "Agent Vocal Québec",
    },
  };

  const relatedPosts = BLOG_POSTS.filter((candidate) => candidate.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div className="mx-auto max-w-[920px] px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark"
          >
            <ArrowLeft size={16} strokeWidth={1.5} aria-hidden />
            Retour au blog
          </Link>

          <h1 className="mt-6 font-display text-3xl font-normal leading-[1.08] text-primary md:text-[4rem]">
            {post.title}
          </h1>

          <p className="mt-6 max-w-3xl text-[1.125rem] leading-[1.7] text-text-secondary">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-text-secondary">
            <div className="inline-flex items-center gap-2">
              <CalendarDays size={16} strokeWidth={1.5} aria-hidden />
              {formatDate(post.publishedAt)}
            </div>
            <div className="inline-flex items-center gap-2">
              <Clock3 size={16} strokeWidth={1.5} aria-hidden />
              {post.readingTime} de lecture
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper className="pt-0">
        <article className="mx-auto flex max-w-[920px] flex-col gap-10">
          {post.sections.map((section) => (
            <section key={section.heading} className="rounded-2xl border border-border bg-surface p-8 md:p-10">
              <h2 className="font-display text-h2 font-normal leading-[1.15] text-primary">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[1.05rem] leading-[1.8] text-text-primary"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-6 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-xl bg-background px-4 py-3 text-[1rem] leading-[1.6] text-text-primary"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <Card className="p-8 md:p-10">
            <h2 className="font-display text-h2 font-normal text-primary">
              Voir ce que ça donnerait dans votre contexte
            </h2>
            <p className="mt-4 text-[1.05rem] leading-[1.7] text-text-secondary">
              Un bon agent vocal se juge sur des appels concrets, avec vos
              scénarios, vos règles de transfert et votre façon de parler aux
              clients.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button href="/demo-gratuite" variant="primary" size="default">
                Réserver une démo
              </Button>
              {post.relatedIndustryHref ? (
                <Button href={post.relatedIndustryHref} variant="secondary" size="default">
                  Voir la page liée
                </Button>
              ) : null}
            </div>
          </Card>
        </article>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[920px]">
          <h2 className="font-display text-h2 font-normal text-primary">
            Continuer la lecture
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group block">
                <Card className="flex h-full flex-col p-8">
                  <p className="text-sm text-text-secondary">
                    {formatDate(relatedPost.publishedAt)}
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-primary">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[1rem] leading-[1.6] text-text-secondary">
                    {relatedPost.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-accent">
                    Lire l&apos;article
                    <ArrowRight
                      size={18}
                      strokeWidth={1.5}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
