"use client";

import { useState, useEffect } from "react";

const IMAGES = {
  themes: [
    { label: "Mariage bohème en plein air", image: "/images/hero_jour.png" },
    { label: "Ambiance chic nocturne", image: "/images/hero_nuit2.png" },
    { label: "Réception florale romantique", image: "/images/hero_test.png" },
  ],
  curtains: {
    left: "/images/rideau_gauche.png",
    right: "/images/rideau_droite.png",
  },
};

export default function HeroCurtain() {
  const [themes, setThemes] = useState(IMAGES.themes);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setThemes((prev) => [...prev.slice(1), prev[0]]);
        setFade(false);
      }, 100);
    }, 3000);
    return () => clearInterval(interval);
  }, [themes]);

  return (
    <section className="relative w-full h-[819px] overflow-hidden bg-[var(--background)]">
      {/* Image actuelle */}
      <img
        src={themes[0].image}
        alt={themes[0].label}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Rideaux statiques */}
      <img
        src={IMAGES.curtains.left}
        alt="Rideau gauche"
        className="absolute top-0 left-0 h-full w-1/3 sm:w-1/2 object-cover opacity-60 z-10 pointer-events-none"
      />
      <img
        src={IMAGES.curtains.right}
        alt="Rideau droit"
        className="absolute top-0 right-0 h-full w-1/3 sm:w-1/2 object-cover opacity-60 z-10 pointer-events-none"
      />

      {/* Voile et gradient */}
      <div className="absolute inset-0 bg-[var(--color-sage)]/20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[var(--background)] z-10 pointer-events-none" />

      {/* Texte centré */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 z-20 animate-mobileFade">
        <h1 className="text-[2.2rem] md:text-[4rem] font-serif leading-tight mb-4">
          LE MEILLEUR <br /> POUR UN JOUR <br />
          <span className="font-sans text-[var(--color-rose)] text-[2.4rem] md:text-[4.5rem] font-black uppercase tracking-[0.3em] block">
            UNIQUE
          </span>
        </h1>
        <p className="text-lg md:text-xl font-script text-[var(--color-ivory)] mb-6">
          Ensemble, créons des souvenirs éternels
        </p>
        <a
          href="/contact"
          className="inline-block bg-[var(--color-sage-deep)] hover:bg-[var(--color-sage-dark)] text-white text-base font-semibold px-8 py-3 shadow-lg transition"
        >
          CONTACTEZ-NOUS
        </a>
      </div>

      {/* Animation mobile */}
      <style jsx>{`
        @keyframes mobileFade {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-mobileFade {
          animation: mobileFade 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
