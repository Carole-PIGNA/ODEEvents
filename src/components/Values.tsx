"use client";

import { HeartIcon, SparklesIcon, LightBulbIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Values() {
  const values = [
    {
      title: "Passion",
      description: "Chaque détail est pensé avec amour et engagement pour créer des moments uniques.",
      icon: HeartIcon,
    },
    {
      title: "Sérénité",
      description: "Nous vous accompagnons avec douceur et bienveillance pour un mariage sans stress.",
      icon: SparklesIcon,
    },
    {
      title: "Créativité",
      description: "Des idées originales et élégantes pour donner vie à vos inspirations.",
      icon: LightBulbIcon,
    },
    {
      title: "Inclusion",
      description: "Nous célébrons la diversité et l’amour sous toutes ses formes, sans exception.",
      icon: GlobeAltIcon,
    },
  ];

  return (
    <section className="py-20 bg-[var(--background)]">
      <h2 className="text-3xl heading-body text-center mb-12">
        Nos valeurs
      </h2>
      
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {values.map((v, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center opacity-0 animate-fadeZoom animate-delay-${(index + 1) * 100}`}
          >
            <v.icon className="w-12 h-12 text-[var(--color-rose)] mb-4" />
            <h3 className="text-xl font-serif text-[var(--color-sage)] mb-2">{v.title}</h3>
            <p className="text-[var(--color-foreground)] font-sans">{v.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
