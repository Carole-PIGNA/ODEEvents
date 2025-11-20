"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-[819px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
        {/* Fallback image si la vidéo ne se charge pas */}
        <img
          src="/images/hero.png"
          alt="Décoration de mariage romantique"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Voile léger */}
      <div className="absolute inset-0 bg-[var(--color-sage)]/30" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[var(--background)] z-10" />

      {/* Overlay avec texte */}
   <div className="absolute inset-0 bg-black/30 flex flex-col justify-center 
                items-center text-center 
                md:items-start md:text-left 
                text-[var(--color-foreground)] px-5 md:px-16">


        
      <h1 className="text-[2.2rem] leading-tight md:text-[4rem] md:leading-[1.2] heading-hero font-serif mb-4 md:mb-6 animate-slideFadeLeft text-center md:text-left">
        LE MEILLEUR <br /> POUR UN JOUR <br />
        <span className="font-sans text-[var(--color-rose)] text-[2.4rem] md:text-[4.5rem] font-black tracking-[0.3em] uppercase block">
          UNIQUE
        </span>
      </h1>


        <p className="text-lg md:text-xl font-script text-[var(--color-ivory)] mb-8 animate-fadeZoom animate-delay-200">
          Ensemble, créons des souvenirs éternels
        </p>

        <a
          href="/contact"
          className="inline-block bg-[var(--color-sage-deep)] hover:bg-[var(--color-sage-dark)] text-white text-base font-semibold px-8 py-3 shadow-lg transition animate-fadeZoom animate-delay-400"
        >
          CONTACTEZ-NOUS
        </a>
      </div>
    </section>
  );
}
