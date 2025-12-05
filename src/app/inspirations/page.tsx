"use client";

import Image from "next/image";
import Link from "next/link";

const inspirations = [
  {
    id: 1,
    title: "Bohème Chic",
    description:
      "Un univers naturel et poétique, avec des matières brutes, des fleurs séchées et une ambiance décontractée mais élégante.",
    palette: ["#D9E5D0", "#E6B7C2", "#A3B18A", "#F6FAF7"],
    image: "/images/inspiration-boheme.png",
    ideas: [
      "Arche florale bohème",
      "Guirlandes guinguette",
      "Vaisselle vintage dorée",
      "Chemins de table en lin"
    ],
    tip: "Idéal pour un mariage en extérieur, ambiance champêtre et conviviale."
  },
  {
    id: 2,
    title: "Élégance Classique",
    description:
      "Ambiance raffinée et intemporelle, avec des tons ivoire et dorés, des compositions florales sophistiquées et des détails luxueux.",
    palette: ["#F6FAF7", "#C48A9A", "#D4AF37", "#5F7553"],
    image: "/images/inspiration-elegance.png",
    ideas: [
      "Service de table doré",
      "Bougeoirs en cristal",
      "Arche florale blanche",
      "Mobilier chic"
    ],
    tip: "Parfait pour une réception en salle prestigieuse ou un château."
  },
  {
    id: 3,
    title: "Jardin Romantique",
    description:
      "Fraîcheur et douceur, avec des verts tendres et des roses délicats, pour une atmosphère romantique et lumineuse.",
    palette: ["#EDF3EC", "#E6B7C2", "#A3B18A", "#FFFFFF"],
    image: "/images/inspiration-jardin.png",
    ideas: [
      "Tables fleuries",
      "Guirlandes lumineuses",
      "Vaisselle pastel",
      "Panneaux de bienvenue"
    ],
    tip: "Idéal pour un mariage printanier ou estival, en plein air."
  }
];

// Fonction utilitaire pour transformer le titre en slug propre (sans accents)
function slugify(text: string) {
  return text
    .normalize("NFD") // décompose les accents
    .replace(/[\u0300-\u036f]/g, "") // supprime les accents
    .toLowerCase()
    .replace(/\s+/g, "-"); // remplace espaces par tirets
}

export default function InspirationsPage() {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl heading-body mb-12">Inspirations</h1>
        <p className="text-lg font-sans text-[var(--color-foreground)] mb-16 max-w-3xl mx-auto">
          Explorez nos thèmes et palettes de couleurs pour imaginer l’univers de votre mariage. 
          Chaque inspiration est accompagnée d’idées concrètes et de conseils pratiques pour vous aider à créer une ambiance unique.
        </p>

        {/* Grille inspirations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {inspirations.map((item) => (
            <div
              key={item.id}
              className="bg-[var(--color-sage-light)] rounded-tl-[2rem] rounded-br-[2rem] shadow-md hover:shadow-xl transition-all p-6 flex flex-col items-center"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={400}
                className="rounded-lg object-cover mb-6"
              />
              <h3 className="text-xl heading-accent mb-2">{item.title}</h3>
              <p className="text-[var(--color-foreground)] font-sans mb-4">{item.description}</p>

              {/* Palette de couleurs */}
              <div className="flex space-x-2 mb-4">
                {item.palette.map((color, index) => (
                  <span
                    key={index}
                    className="w-8 h-8 rounded-full border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* Idées concrètes */}
              <ul className="text-sm text-[var(--color-foreground)] font-sans mb-4 space-y-1 text-left">
                {item.ideas.map((idea, idx) => (
                  <li key={idx}>• {idea}</li>
                ))}
              </ul>

              {/* Conseil pratique */}
              <p className="italic text-[var(--color-foreground)] mb-4">{item.tip}</p>

              {/* Bouton dynamique */}
              <Link
                href={`/devis?theme=${slugify(item.title)}`}
                className="px-6 py-2 bg-[var(--color-sage-deep)] text-white rounded-md hover:bg-[var(--color-sage-dark)] transition font-semibold"
              >
                Découvrir plus
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
