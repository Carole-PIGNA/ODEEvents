"use client";

import { useRef } from "react";
import useInView from "@/hooks/useInView";

export default function Inspirations() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const visible1 = useInView(ref1);
  const visible2 = useInView(ref2);
  const visible3 = useInView(ref3);

  return (
    <section id="inspirations" className="py-16 bg-[var(--background)]">
      <h2 className="text-3xl heading-body text-center mb-12">
        Inspirations
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        
        {/* Grande photo */}
        <div
          ref={ref1}
          className={`relative group opacity-0 ${
            visible1 ? "animate-fadeZoom animate-delay-100" : ""
          }`}
        >
          <img
            src="/images/inspiration3.png"
            alt="Inspiration mariage 1"
            className="rounded-lg shadow-2xl object-cover w-full h-[500px]"
          />
          <div className="absolute inset-0 bg-[var(--color-sage)]/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-lg">
            <span className="text-white text-2xl font-serif">Bohème Chic</span>
          </div>
        </div>

        {/* Deux petites photos */}
        <div className="grid gap-6">
          <div
            ref={ref2}
            className={`relative group opacity-0 ${
              visible2 ? "animate-fadeZoom animate-delay-200" : ""
            }`}
          >
            <img
              src="/images/inspiration2.png"
              alt="Inspiration mariage 2"
              className="rounded-lg shadow-xl object-cover w-full h-[240px]"
            />
            <div className="absolute inset-0 bg-[var(--color-rose)]/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-lg">
              <span className="text-white text-xl font-serif">Élégance</span>
            </div>
          </div>

          <div
            ref={ref3}
            className={`relative group opacity-0 ${
              visible3 ? "animate-fadeZoom animate-delay-300" : ""
            }`}
          >
            <img
              src="/images/inspiration1.png"
              alt="Inspiration mariage 3"
              className="rounded-lg shadow-xl object-cover w-full h-[240px]"
            />
            <div className="absolute inset-0 bg-[var(--color-gold)]/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-lg">
              <span className="text-white text-xl font-serif">Jardin romantique</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
