"use client";

import { useEffect, useRef } from "react";
import { SERVICES } from "@/lib/data";

export default function Services() {
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
      id="servicios"
      ref={sectionRef}
      className="py-24 sm:py-32 px-5 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #111008 50%, #0a0a0a 100%)" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 sm:h-32 bg-gradient-to-b from-gold/30 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(212,146,15,1) 60px,rgba(212,146,15,1) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(212,146,15,1) 60px,rgba(212,146,15,1) 61px)`,
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20 reveal">
          <p className="font-body text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] text-gold uppercase mb-4">
            — Lo que hacemos —
          </p>
          <h2
            className="font-display font-light text-cream/95 mb-5 sm:mb-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
          >
            Nuestros <span className="text-gold-shimmer italic">Servicios</span>
          </h2>
          <span className="gold-line block mx-auto mb-5" />
          <p className="font-body font-light text-cream/50 max-w-lg mx-auto text-sm leading-relaxed tracking-wide px-2">
            Cada servicio es una promesa de belleza, cuidado y atención al detalle que
            solo quienes aman las flores pueden ofrecer.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="service-card reveal p-6 sm:p-8 group"
              style={{ transitionDelay: `${(service.id - 1) * 80}ms` }}
            >
              <span className="absolute top-3 right-4 sm:top-4 sm:right-6 font-display text-5xl sm:text-7xl font-light text-gold/5 select-none pointer-events-none leading-none">
                {String(service.id).padStart(2, "0")}
              </span>
              <div className="mb-5 sm:mb-6 relative">
                <span className="text-2xl sm:text-3xl text-gold/70 group-hover:text-gold transition-colors duration-300 block">
                  {service.icon}
                </span>
                <div className="mt-3 gold-line-left transition-all duration-500 group-hover:w-20" />
              </div>
              <h3
                className="font-display font-light text-cream/90 mb-3 group-hover:text-gold transition-colors duration-300"
                style={{ fontSize: "clamp(1.1rem, 3vw, 1.35rem)" }}
              >
                {service.title}
              </h3>
              <p className="font-body font-light text-cream/50 text-sm leading-relaxed mb-4 sm:mb-5">
                {service.description}
              </p>
              <p className="font-body text-[10px] tracking-[0.15em] sm:tracking-[0.18em] text-gold/50 uppercase">
                {service.detail}
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Cita */}
        <div className="mt-20 sm:mt-24 text-center reveal px-2">
          <div className="ornament mb-5">
            <span className="font-accent text-2xl italic text-cream/30 font-light">❝</span>
          </div>
          <blockquote
            className="font-display font-light italic text-cream/55 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1rem, 3.5vw, 1.75rem)" }}
          >
            Cada flor que tocamos lleva consigo la intención de hacer más bello
            el mundo de quien la recibe.
          </blockquote>
          <p className="font-body text-[9px] sm:text-[10px] tracking-[0.3em] text-gold/40 uppercase mt-5 sm:mt-6">
            — Martin Mario Flores Ramos, Fundador
          </p>
        </div>
      </div>
    </section>
  );
}