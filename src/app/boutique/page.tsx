"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Robe de mariée Bohème",
    price: "1 200 €",
    image: "/images/robe1.png",
  },
  {
    id: 2,
    name: "Costume élégant",
    price: "850 €",
    image: "/images/costume1.png",
  },
  {
    id: 3,
    name: "Accessoires floraux",
    price: "120 €",
    image: "/images/accessoires1.png",
  },
  {
    id: 4,
    name: "Robe demoiselle d’honneur",
    price: "350 €",
    image: "/images/robe2.png",
  },
];

export default function BoutiquePage() {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl heading-body mb-12">Boutique</h1>
        <p className="text-lg font-sans text-[var(--color-foreground)] mb-16">
          Découvrez notre sélection de tenues et accessoires pour sublimer votre mariage.
        </p>

        {/* Grille produits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[var(--color-sage-light)] rounded-tl-[2rem] rounded-br-[2rem] shadow-md hover:shadow-xl transition-all p-6 flex flex-col items-center"
            >
              {/* Image wrapper fixe */}
              <div className="w-[300px] h-[400px] relative mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <h3 className="text-xl heading-accent mb-2">{product.name}</h3>
              <p className="text-[var(--color-foreground)] font-sans mb-4">{product.price}</p>
              <button className="px-6 py-2 bg-[var(--color-sage-deep)] text-white rounded-md hover:bg-[var(--color-sage-dark)] transition font-semibold">
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
