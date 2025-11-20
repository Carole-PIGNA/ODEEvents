"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Natalia & Anthony",
      quote: "Une décoration magique, une ambiance douce et raffinée… Merci pour ce moment inoubliable.",
      image: "/images/testimonial1.png",
    },
    {
      name: "Laura & William",
      quote: "Tout était parfait, du premier rendez-vous jusqu’au jour J. Une équipe à l’écoute et inspirée.",
      image: "/images/testimonial2.png",
    },
    {
      name: "Gloire",
      quote: "Nous avons été bluffés par la créativité et le professionnalisme. C’était au-delà de nos rêves.",
      image: "/images/testimonial3.png",
    },
  ];

  return (
    <section className="py-20 bg-[var(--background)]">
      <h2 className="text-3xl  heading-body text-center mb-12">
        Ils nous ont fait confiance
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`bg-[var(--accent-sand)] rounded-xl shadow-lg p-6 text-center opacity-0 animate-fadeZoom animate-delay-${(index + 1) * 100}`}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-[var(--color-rose)]"
            />
            <p className="italic text-[var(--color-foreground)] font-sans mb-4">“{t.quote}”</p>
            <span className="font-semibold font-serif text-[var(--color-sage)]">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
