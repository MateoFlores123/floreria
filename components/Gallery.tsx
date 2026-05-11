"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/data";

const FILTERS = ["Todos", "Bodas", "Eventos", "Regalos", "Instalaciones"];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="py-24 sm:py-32 px-5 sm:px-6 relative overflow-hidden bg-obsidian"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 sm:h-32 bg-gradient-to-b from-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <p className="font-body text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] text-gold uppercase mb-4">
            — Nuestra obra —
          </p>
          <h2
            className="font-display font-light text-cream/95 mb-5 leading-tight"
            style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
          >
            <span className="text-gold-shimmer italic">Galería</span> Floral
          </h2>
          <span className="gold-line block mx-auto" />
        </div>

        {/* Filtros — scroll horizontal en móvil */}
        <div className="flex gap-2 sm:gap-3 mb-10 sm:mb-14 reveal overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-body text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase px-4 sm:px-5 py-2 border whitespace-nowrap flex-shrink-0 transition-all duration-300 ${
                active === f
                  ? "border-gold bg-gold text-obsidian"
                  : "border-gold/20 text-cream/50 hover:border-gold/50 hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 reveal">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`gallery-item relative overflow-hidden ${
                i === 0 && active === "Todos" ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ minHeight: "220px", aspectRatio: i === 0 && active === "Todos" ? "4/3" : "1/1" }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 sm:p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="font-body text-[9px] tracking-[0.3em] text-gold uppercase mb-1">
                  {item.category}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-light text-cream">
                  {item.label}
                </h3>
                <div className="mt-2 w-8 h-px bg-gold" />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-body font-light text-cream/25 text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase mt-12 sm:mt-16 reveal px-4">
          Cada imagen, una historia real ✦ Cada cliente, una flor única
        </p>
      </div>
    </section>
  );
}