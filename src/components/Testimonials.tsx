"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rozenn & Lénaïc",
      quote:
        " Nous avons été très touchés par le travail d’Odile. La décoration qu’elle a réalisée pour notre mariage était exactement ce que nous avions imaginé, voire même au-delà. Elle a su écouter nos envies, comprendre notre style et retranscrire parfaitement l’ambiance que nous souhaitions.Son professionnalisme, son sens du détail ont rendu l’expérience très agréable pour nous. Tout était harmonieux, soigné et fait avec beaucoup de goût. Nous nous sommes sentis compris et accompagnés du début à la fin, ce qui nous a énormément rassurés.Nous la recommandons sincèrement, car elle a contribué à rendre ce moment encore plus beau et inoubliable.",
      image: "/images/rozennLenaic.png",
    },
    {
      name: "Carole & Marius",
      quote: "Nous avons confié toute l’organisation à Odile : décoration de l’église et de la salle, coordination de la cérémonie, suivi du déroulement… Tout a été géré avec professionnalisme et goût. Nous avons pu profiter pleinement de notre journée en toute confiance. Merci pour son dévouement et son souci constant de notre satisfaction !",
      image: "/images/CaroleMarius.png",
    },
    {
      name: "Gloire et Mathieu",
      quote: "Nous avons confié toute l’organisation à Odile : décoration de l’église et de la salle, coordination de la cérémonie, suivi du déroulement… Tout a été géré avec professionnalisme et goût. Nous avons pu profiter pleinement de notre journée en toute confiance. Merci pour son dévouement et son souci constant de notre satisfaction !",
      image: "/images/couple_anonyme.png",
    },

  ];

  return (
    <section className="py-20 bg-[var(--background)]">
      <h2 className="text-3xl heading-body text-center mb-12">
        Ils nous ont fait confiance
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-[var(--accent-sand)] rounded-xl shadow-lg p-6 text-center opacity-0 animate-fadeZoom"
            style={{ animationDelay: `${(index + 1) * 200}ms` }} // ✅ inline style pour le délai
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-[var(--color-rose)]"
            />
            <p className="italic text-[var(--color-foreground)] font-sans mb-4">
              “{t.quote}”
            </p>
            <span className="font-semibold font-serif text-[var(--color-sage)]">
              {t.name}
            </span>
          </div>
        ))}
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeZoom {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeZoom {
          animation: fadeZoom 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
