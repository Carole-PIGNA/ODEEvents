"use client";

export default function About() {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image côté gauche */}
        <div className="relative">
          <img
            src="/images/about.png"
            alt="À propos"
            className="rounded-xl shadow-2xl object-cover w-full h-[400px] opacity-0 animate-fadeZoom animate-delay-100"
          />
          <div className="absolute inset-0 bg-[var(--color-sage)]/40 rounded-xl opacity-0 hover:opacity-100 transition flex items-center justify-center">
            <span className="text-white text-2xl font-serif">Notre histoire</span>
          </div>
        </div>

        {/* Texte côté droit */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-serif text-[var(--color-sage)] mb-6">
            À propos de nous
          </h2>
          <p className="text-[var(--color-foreground)] leading-relaxed mb-4 font-sans">
            Chaque mariage est une histoire unique. Nous croyons que l’élégance se trouve dans les détails, 
            et que l’inclusion et la diversité rendent chaque célébration encore plus belle.
          </p>
          <p className="text-[var(--color-foreground)] leading-relaxed mb-4 font-sans">
            Notre approche est guidée par la créativité, la sérénité et la passion. 
            Nous accompagnons nos clients avec écoute et bienveillance, pour transformer leurs rêves en réalité.
          </p>
          <p className="text-[var(--color-foreground)] leading-relaxed font-sans">
            Que vous imaginiez un mariage bohème chic, romantique ou moderne, 
            nous sommes là pour donner vie à vos inspirations avec authenticité et élégance.
          </p>
        </div>
      </div>
    </section>
  );
}
