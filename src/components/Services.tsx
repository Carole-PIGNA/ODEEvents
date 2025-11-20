"use client";

import {
  SparklesIcon,
  GiftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  ShoppingBagIcon,
  SparklesIcon as CleanIcon,
} from "@heroicons/react/24/solid";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

// ✅ Composant carte de service
function ServiceCard({ icon, title, text }: ServiceCardProps) {
  return (
    <div className="bg-[var(--color-sage-light)] rounded-tl-[3rem] rounded-br-[3rem] p-8 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
      <div className="bg-[var(--color-sage-deep)] text-white rounded-full p-3 mb-4">
        {icon}
      </div>
      <h3 className="text-xl heading-accent mb-3">{title}</h3>
      <p className="text-[var(--color-foreground)] font-sans text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}

// ✅ Composant principal
export default function Services() {
  return (
    <section id="services" className="py-20 bg-[var(--background)] text-center">
      <h2 className="text-3xl heading-body mb-16">Nos Services</h2>

      <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">

        {/* Colonne 1 : 2 cartes */}
        <div className="flex flex-col gap-12">
          <ServiceCard
            icon={<SparklesIcon className="h-8 w-8" />}
            title="Organisation"
            text="Totale ou partielle, nous orchestrons votre mariage avec précision, selon vos besoins et votre rythme."
          />
          <ServiceCard
            icon={<HeartIcon className="h-8 w-8" />}
            title="Coordination"
            text="Le jour J, nous assurons la fluidité de chaque moment pour que vous puissiez vivre pleinement votre célébration."
          />
        </div>

        {/* Colonne 2 : 1 carte centrée */}
        <div className="flex items-center justify-center">
          <ServiceCard
            icon={<GiftIcon className="h-8 w-8" />}
            title="Décoration"
            text="Ambiance florale, scénographie, art de la table… nous créons un univers qui vous ressemble."
          />
        </div>

        {/* Colonne 3 : 2 cartes */}
        <div className="flex flex-col gap-12">
          <ServiceCard
            icon={<ShoppingBagIcon className="h-8 w-8" />}
            title="Tenues & accessoires"
            text="Robes, costumes et accessoires pour mariés, demoiselles et hommes d'honneur — tout pour sublimer votre style."
          />
          <ServiceCard
            icon={<CleanIcon className="h-8 w-8" />}
            title="Nettoyage & logistique"
            text="Après la fête, nous prenons soin de la salle et de la vaisselle pour que vous restiez dans la magie."
          />
        </div>

      </div>
    </section>
  );
}
