"use client";

import Image from "next/image";
import Link from "next/link";

const rentalItems = [
  {
    id: 1,
    category: "Décoration florale",
    name: "Arche florale bohème",
    price: "À partir de 180 €",
    image: "/images/archefloral.png",
  },
  {
    id: 2,
    category: "Mobilier",
    name: "Salon lounge rotin & coussins",
    price: "À partir de 250 €",
    image: "/images/salon1.png",
  },
  {
    id: 3,
    category: "Éclairage",
    name: "Guirlandes guinguette 10m",
    price: "À partir de 45 €",
    image: "/images/guirlande1.png",
  },
  {
    id: 4,
    category: "Vaisselle & accessoires",
    name: "Service vintage doré (30 pers.)",
    price: "À partir de 90 €",
    image: "/images/vaisselle1.png",
  },
  {
    id: 5,
    category: "Signalétique",
    name: "Panneau de bienvenue personnalisé",
    price: "À partir de 60 €",
    image: "/images/panneau1.png",
  },
  {
    id: 6,
    category: "Textiles",
    name: "Chemins de table en lin naturel",
    price: "À partir de 25 €",
    image: "/images/chemin1.png",
  },
];

export default function LocationPage() {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl heading-body mb-8">Location de matériel</h1>
        <p className="text-lg font-sans text-[var(--color-foreground)] mb-16 max-w-3xl mx-auto">
          Pour un mariage élégant, responsable et sans compromis, découvrez notre sélection de décorations, mobiliers et accessoires à louer. Chaque pièce est soigneusement choisie pour sublimer votre événement tout en limitant l’impact écologique.
        </p>

        {/* Grille produits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {rentalItems.map((item) => (
            <div
              key={item.id}
              className="bg-[var(--color-sage-light)] rounded-tl-[2rem] rounded-br-[2rem] shadow-md hover:shadow-xl transition-all p-6 flex flex-col items-center"
            >
              <div className="w-[300px] h-[400px] relative mb-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <span className="text-sm uppercase tracking-wide text-[var(--color-sage-deep)] mb-1">
                {item.category}
              </span>
              <h3 className="text-xl heading-accent mb-2">{item.name}</h3>
              <p className="text-[var(--color-foreground)] font-sans mb-4">{item.price}</p>
              <Link 
                href={`/devislocation?item=${encodeURIComponent(item.name)}`}
                className="px-6 py-2 bg-[var(--color-sage-deep)] text-white rounded-md hover:bg-[var(--color-sage-dark)] transition font-semibold"
              >
                Demander un devis
                </Link>
 
            </div>
          ))}
        </div>

        {/* Section infos pratiques */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl heading-body mb-4">Comment ça fonctionne ?</h2>
          <ul className="list-disc list-inside text-[var(--color-foreground)] font-sans space-y-2">
            <li>Choisissez les articles qui vous inspirent</li>
            <li>Contactez-nous pour vérifier la disponibilité</li>
            <li>Retrait sur place ou livraison possible</li>
            <li>Retour sous 48h après l’événement</li>
            <li>Caution demandée selon les articles</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
