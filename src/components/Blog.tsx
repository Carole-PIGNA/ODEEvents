"use client";

import { useState } from "react";

export default function Blog() {
  const posts = [
    {
      title: "Comment choisir son thème de mariage ?",
      description:
        "Découvrez les clés pour sélectionner un thème qui reflète votre personnalité et crée une ambiance harmonieuse.",
      image: "/images/blog1.png",
    },
    {
      title: "Les erreurs à éviter pour un mariage chic",
      description:
        "Nos conseils pour éviter les pièges courants et garantir une célébration élégante et sans stress.",
      image: "/images/blog2.png",
    },
    {
      title: "Tendances déco 2025 : bohème chic et romantique",
      description:
        "Inspirez-vous des dernières tendances pour donner une touche moderne et raffinée à votre mariage.",
      image: "/images/blog3.png",
    },
    {
      title: "Comment organiser un mariage éco-responsable",
      description:
        "Des astuces pour réduire l’impact écologique tout en gardant une célébration élégante.",
      image: "/images/blog4.png",
    },
    {
      title: "Les meilleures fleurs de saison",
      description:
        "Choisissez des compositions florales adaptées à la saison pour un rendu naturel et chic.",
      image: "/images/blog5.png",
    },
    {
      title: "Créer une ambiance lumineuse parfaite",
      description:
        "Découvrez comment utiliser la lumière pour transformer votre décor et créer une atmosphère magique.",
      image: "/images/blog6.png",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Calcul des articles visibles
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <section className="py-20 bg-[var(--background)]">
      <h2 className="text-3xl heading-body text-center mb-12">
        Blog
      </h2>

      {/* Grille 3 colonnes */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentPosts.map((post, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg overflow-hidden bg-[var(--color-sand)] opacity-0 animate-fadeZoom animate-delay-100"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-serif text-[var(--color-foreground)] mb-3">
                {post.title}
              </h3>
              <p className="text-[var(--color-foreground)] font-sans mb-4">
                {post.description}
              </p>
              <a
                href="#"
                className="text-[var(--color-rose)] font-semibold hover:text-[var(--color-gold)] transition"
              >
                Lire l’article →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-md border font-sans ${
              currentPage === i + 1
                ? "bg-[var(--color-rose)] text-white border-[var(--color-rose)]"
                : "bg-white text-[var(--color-foreground)] border-[var(--neutral-gray)] hover:bg-[var(--accent-sand)]"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
