"use client";

import { useEffect, useRef } from "react";
import { TESTIMONIALS, CONTACT_INFO } from "@/lib/data";

const STATS = [
  { value: "6+",    label: "Años de experiencia" },
  { value: "1,200+", label: "Arreglos creados" },
  { value: "98%",   label: "Clientes satisfechos" },
  { value: "150+",  label: "Bodas realizadas" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

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
      id="nosotros"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0f0c02 50%, #0a0a0a 100%)" }}
    >
      {/* ── NOSOTROS ── */}
      <div className="py-24 sm:py-32 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-20 items-center">

          {/* Imagen con marcos */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-xs sm:max-w-sm mx-auto lg:mx-0">
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full border border-gold/20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full border border-gold/10 pointer-events-none" />
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=700&q=80')",
                }}
              />
              {/* Tarjeta flotante */}
              <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-obsidian-mid border border-gold/25 p-4 sm:p-6 max-w-[160px] sm:max-w-[200px] shadow-elegant">
                <p className="font-body text-[8px] sm:text-[9px] tracking-[0.4em] text-gold uppercase mb-1">
                  Fundada en
                </p>
                <p className="font-display text-3xl sm:text-4xl font-light text-cream/90 leading-none">
                  2018
                </p>
                <div className="mt-2 gold-line-left" />
                <p className="font-body text-[9px] sm:text-[10px] text-cream/40 mt-2 leading-relaxed">
                  Con amor y pasión por las flores
                </p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="reveal order-1 lg:order-2">
            <p className="font-body text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] text-gold uppercase mb-5 sm:mb-6">
              — Nuestra historia —
            </p>
            <h2
              className="font-display font-light text-cream/95 mb-6 sm:mb-8 leading-tight"
              style={{ fontSize: "clamp(1.9rem, 6vw, 3.8rem)" }}
            >
              Más que flores,{" "}
              <span className="text-gold-shimmer italic block">creamos emociones</span>
            </h2>
            <span className="gold-line-left block mb-6 sm:mb-8" />
            <div className="space-y-4 sm:space-y-5 font-body font-light text-cream/55 leading-relaxed text-sm">
              <p>
                FloreriaShalon4 nació en Arequipa de la mano de{" "}
                <span className="text-cream/75">{CONTACT_INFO.owner}</span>, con una visión
                clara: llevar el arte floral a su máxima expresión. Desde nuestros inicios,
                cada arreglo ha sido concebido como una pieza única.
              </p>
              <p>
                Trabajamos con flores frescas de temporada, seleccionadas a mano cada mañana.
                Nuestra filosofía combina técnica europea con la calidez peruana, creando
                composiciones que sorprenden y perduran en la memoria.
              </p>
              <p>
                Hoy somos referentes en el arte floral de lujo en el sur del Perú, con
                clientes que confían en nosotros para sus momentos más especiales.
              </p>
            </div>
            <div className="mt-8 sm:mt-10">
              <a href="#contacto" className="btn-gold inline-flex">
                Trabaja con nosotros
              </a>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="max-w-7xl mx-auto mt-20 sm:mt-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="reveal bg-obsidian p-6 sm:p-10 text-center group hover:bg-obsidian-mid transition-colors duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p
                  className="font-display font-light text-gold-shimmer mb-2 leading-none"
                  style={{ fontSize: "clamp(1.6rem, 5vw, 3.5rem)" }}
                >
                  {stat.value}
                </p>
                <p className="font-body text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-cream/40 uppercase leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TESTIMONIOS ── */}
      <div className="py-20 sm:py-24 px-5 sm:px-6 border-t border-gold/8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 reveal">
            <p className="font-body text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] text-gold uppercase mb-4">
              — Voces que nos inspiran —
            </p>
            <h2
              className="font-display font-light text-cream/90"
              style={{ fontSize: "clamp(1.8rem, 6vw, 3.5rem)" }}
            >
              Lo que dicen{" "}
              <span className="text-gold-shimmer italic">nuestros clientes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="reveal service-card p-6 sm:p-8 flex flex-col"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="font-accent text-4xl sm:text-5xl text-gold/20 leading-none mb-3 sm:mb-4 block">❝</span>
                <p className="font-body font-light text-cream/60 text-sm leading-relaxed flex-1 mb-5 sm:mb-6 italic">
                  {t.text}
                </p>
                <div className="border-t border-gold/10 pt-4 sm:pt-5">
                  <p className="font-body font-medium text-cream/80 text-sm tracking-wide">{t.name}</p>
                  <p className="font-body text-[9px] sm:text-[10px] tracking-[0.2em] text-gold/50 uppercase mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}