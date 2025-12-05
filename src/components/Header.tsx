"use client";

import { useState } from "react";
import Link from "next/link";
import { HeartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-md">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <HeartIcon className="h-6 w-6 text-[var(--color-ivory)] group-hover:text-[var(--color-rose)] transition-colors" />
          <span className="text-lg font-serif text-[var(--color-ivory)] group-hover:text-[var(--color-rose)] transition-colors">
            ODE Events
          </span>
        </Link>

            {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-6 font-sans text-sm tracking-wide">
          <Link href="/" className="text-[var(--color-ivory)] hover:text-[var(--color-rose)] transition-colors">Accueil</Link>
          <Link href="/LocationPage" className="text-[var(--color-ivory)] hover:text-[var(--color-rose)] transition-colors">Location</Link>
          <Link href="/inspirations" className="text-[var(--color-ivory)] hover:text-[var(--color-rose)] transition-colors">Inspirations</Link>
          <Link href="/devisservice" className="text-[var(--color-ivory)] hover:text-[var(--color-rose)] transition-colors">Devis</Link>
          <Link href="/blog" className="text-[var(--color-ivory)] hover:text-[var(--color-rose)] transition-colors">Blog</Link>
          <Link 
            href="/contact" 
            className="px-4 py-2 bg-[var(--color-sage-deep)] text-white  hover:bg-[var(--color-sage-dark)] transition font-semibold"
          >
            Contact
          </Link>
        </nav>

       
     {/* Bouton burger mobile */}
        <button
          className="md:hidden text-[var(--color-ivory)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6 text-[var(--color-rose)]" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
 {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--background)] text-center py-6 space-y-4 font-sans shadow-lg">
          <Link href="/" className="block menu-link">Accueil</Link>
          <Link href="/boutique" className="block menu-link">Boutique</Link>
          <Link href="/#inspirations" className="block menu-link">Inspirations</Link>
          <Link href="/devisservice" className="block menu-link">Devis</Link>
          <Link href="/blog" className="block menu-link">Conseils</Link>
          <Link 
            href="/contact" 
            className="inline-block px-6 py-2 bg-[var(--color-sage-deep)] text-white rounded-md hover:bg-[var(--color-gold)] transition font-semibold"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
