"use client";

import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "10 étapes pour organiser votre mariage sans stress",
    excerpt: "Découvrez un planning simple et efficace pour préparer votre grand jour en toute sérénité.",
    slug: "organiser-mariage-sans-stress",
    date: "Novembre 2025",
  },
  {
    id: 2,
    title: "Tendances mariage 2025 : couleurs et styles",
    excerpt: "Les palettes et thèmes qui feront vibrer les mariages cette année.",
    slug: "tendances-mariage-2025",
    date: "Novembre 2025",
  },
  {
    id: 3,
    title: "Comment choisir vos tenues et accessoires",
    excerpt: "Nos conseils pour trouver la robe, le costume et les détails qui vous subliment.",
    slug: "choisir-tenues-accessoires",
    date: "Novembre 2025",
  },
];

export default function BlogPage() {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl heading-body text-center mb-12">Conseils</h1>
        <p className="text-lg font-sans text-[var(--color-foreground)] text-center mb-16">
          Explorez nos articles pour préparer votre mariage avec sérénité et inspiration.
        </p>

        {/* Liste des articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[var(--color-sage-pastel)] rounded-tl-[2rem] rounded-br-[2rem] shadow-md hover:shadow-xl transition-all p-6 flex flex-col"
            >
              <h3 className="text-xl heading-accent mb-2">{post.title}</h3>
              <p className="text-[var(--color-foreground)] font-sans mb-4">{post.excerpt}</p>
              <span className="text-sm text-gray-500 mb-4">{post.date}</span>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-auto inline-block px-6 py-2 bg-[var(--color-rose)] text-white rounded-md hover:bg-[var(--color-gold)] transition font-semibold"
              >
                Lire l’article
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
