"use client";

export default function CTA() {
  return (
    <section className="py-20 bg-[var(--background)] text-center">
  <div className="max-w-3xl mx-auto bg-[var(--color-sage-pastel)] rounded-xl px-8 py-12 shadow-lg">
    <h2 className="heading-body text-2xl md:text-3xl tracking-[0.1em] mb-6">
      TRANSFORMONS VOS RÊVES EN RÉALITÉ
    </h2>
    <p className="text-[var(--color-gray-deep)] font-sans text-lg md:text-xl mb-10">
      Chaque mariage est unique. Contactez-nous pour créer une célébration qui vous ressemble.
    </p>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <a
        href="/devis"
        className="bg-[var(--color-sage-deep)] hover:bg-[var(--color-sage)] text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
      >
        Demander un devis
      </a>
      <a
        href="/rendez-vous"
        className="bg-transparent border-2 border-[var(--color-sage-deep)] text-[var(--color-sage-deep)] font-semibold px-6 py-3 rounded-md hover:bg-[var(--color-sage-deep)] hover:text-white transition"
      >
        Prenons rendez-vous
      </a>
    </div>
  </div>
</section>

  );
}
