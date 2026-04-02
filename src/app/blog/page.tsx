import Link from "next/link";
import { ArrowRight, CalendarDays, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { createPageMetadata } from "@/lib/metadata";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export const metadata = createPageMetadata({
  title: "Blog sur les agents vocaux IA",
  description:
    "Articles pratiques sur les agents vocaux IA, la réception téléphonique automatisée et les critères à évaluer avant de choisir une solution.",
  path: "/blog",
  keywords: [
    "blog agent vocal ia",
    "agent vocal ia",
    "agent téléphonique ia québec",
    "réceptionniste ia",
  ],
});

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("fr-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
}

export default function BlogIndexPage() {
  const [featuredPost, ...otherPosts] = BLOG_POSTS;

  return (
    <>
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <Badge className="mb-6">Blog</Badge>
          <h1 className="max-w-3xl font-display text-3xl font-normal leading-[1.1] text-primary md:text-hero">
            Des articles utiles pour choisir un agent vocal IA sans vous faire vendre du rêve
          </h1>
          <p className="mt-6 max-w-2xl text-[1.125rem] leading-[1.6] text-text-secondary">
            On y parle de téléphone, d&apos;automatisation, de réception, de
            transfert d&apos;appels et de ce qui compte vraiment quand vient le
            temps d&apos;implanter un agent vocal IA dans une entreprise.
          </p>
        </div>
      </section>

      <SectionWrapper className="pt-0">
        <Link href={`/blog/${featuredPost.slug}`} className="group block">
          <Card className="grid gap-8 p-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                Article vedette
              </p>
              <h2 className="mt-4 font-display text-h2 font-normal leading-[1.15] text-primary">
                {featuredPost.title}
              </h2>
              <p className="mt-4 max-w-2xl text-[1.05rem] leading-[1.7] text-text-secondary">
                {featuredPost.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    <Tag size={14} strokeWidth={1.5} aria-hidden />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 rounded-xl border border-border bg-background p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <CalendarDays size={16} strokeWidth={1.5} aria-hidden />
                  {formatDate(featuredPost.publishedAt)}
                </div>
                <p className="text-sm text-text-secondary">
                  {featuredPost.readingTime} de lecture
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-semibold text-accent">
                Lire l&apos;article
                <ArrowRight
                  size={18}
                  strokeWidth={1.5}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </div>
          </Card>
        </Link>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex flex-col gap-8 lg:gap-10">
          <div>
            <h2 className="font-display text-h2 font-normal text-primary">
              Tous les articles
            </h2>
            <p className="mt-4 text-[1.05rem] leading-[1.6] text-text-secondary">
              Des guides pensés pour répondre aux vraies questions qu&apos;une
              entreprise se pose avant de mettre un agent vocal IA en place.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <Card className="flex h-full flex-col p-8">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <CalendarDays size={16} strokeWidth={1.5} aria-hidden />
                    {formatDate(post.publishedAt)}
                  </div>
                  <h3 className="mt-5 font-body text-xl font-bold text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[1rem] leading-[1.6] text-text-secondary">
                    {post.excerpt}
                  </p>
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

      <SectionWrapper>
        <div className="rounded-2xl border border-border bg-surface px-8 py-10 text-center">
          <h2 className="font-display text-h2 font-normal text-primary">
            Vous voulez voir comment ça s&apos;appliquerait chez vous?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] leading-[1.6] text-text-secondary">
            La meilleure façon de juger un agent vocal, c&apos;est encore de
            l&apos;entendre sur des scénarios proches de votre réalité.
          </p>
          <div className="mt-6">
            <Button href="/demo-gratuite" variant="primary" size="default">
              Planifier une démo
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
