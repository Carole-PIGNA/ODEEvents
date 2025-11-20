"use client";

import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-[var(--color-foreground)] py-12 border-t border-[var(--neutral-gray)]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        
        {/* Coordonnées */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-serif text-[var(--color-sage)] mb-4 uppercase tracking-wide">Contact</h3>
          <p className="font-sans">📍 Nancy</p>
          <p className="font-sans">📞 +33 6 13 81 95 26</p>
          <p className="font-sans">✉️ samousa17@gmail.com</p>
        </div>

        {/* Liens rapides */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-serif text-[var(--color-sage)] mb-4 uppercase tracking-wide">Liens rapides</h3>
          <ul className="space-y-2 font-sans">
            <li><a href="/services" className="hover:text-[var(--color-rose)]">Boutique</a></li>
            <li><a href="#inspirations" className="hover:text-[var(--color-rose)]">Inspirations</a></li>
            <li><a href="#blog" className="hover:text-[var(--color-rose)]">Blog</a></li>
            <li><a href="#contact" className="hover:text-[var(--color-rose)]">Contact</a></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-serif text-[var(--color-sage)] mb-4 uppercase tracking-wide">Suivez-nous</h3>
          <div className="flex space-x-4 text-[var(--color-foreground)]">
            <a href="#" className="hover:text-[var(--color-rose)]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[var(--color-rose)]"><FaInstagram /></a>
            <a href="#" className="hover:text-[var(--color-rose)]"><FaPinterestP /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-serif text-[var(--color-sage)] mb-4 uppercase tracking-wide">Newsletter</h3>
          <form className="flex flex-col space-y-3 font-sans w-full max-w-xs">
            <input
              type="email"
              placeholder="Votre email"
              className="px-4 py-2 rounded-lg bg-[var(--accent-sand)] text-[var(--color-foreground)] text-center placeholder-[var(--neutral-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rose)]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[var(--color-rose)] text-white rounded-lg hover:bg-[var(--color-gold)] transition font-semibold"
            >
              S’inscrire
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-[var(--neutral-gray)] text-sm pt-6 font-sans">
        © {new Date().getFullYear()} ODE Events ,Wedding Planner. Tous droits réservés.
      </div>
    </footer>
  );
}
