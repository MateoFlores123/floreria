"use client";

import { useEffect, useRef } from "react";
import { CONTACT_INFO } from "@/lib/data";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const waLink = `https://wa.me/${CONTACT_INFO.social.whatsapp.replace(/\D/g, "")}?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20sus%20servicios.`;

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-24 sm:py-32 px-5 sm:px-6 relative overflow-hidden bg-obsidian"
    >
      {/* Línea top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 sm:h-32 bg-gradient-to-b from-gold/30 to-transparent" />

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[600px] h-72 sm:h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,146,15,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 sm:mb-20 reveal">
          <p className="font-body text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] text-gold uppercase mb-4">
            — Hablemos —
          </p>
          <h2
            className="font-display font-light text-cream/95 mb-5 leading-tight"
            style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
          >
            Hagamos algo{" "}
            <span className="text-gold-shimmer italic">hermoso juntos</span>
          </h2>
          <span className="gold-line block mx-auto mb-5" />
          <p className="font-body font-light text-cream/50 max-w-md mx-auto text-sm leading-relaxed tracking-wide">
            ¿Tienes un evento especial en mente? Escríbenos y con gusto te asesoramos
            sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

          {/* Panel info — 2 col */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">

            {/* Dueño */}
            <div className="reveal service-card p-6 sm:p-7 group">
              <p className="font-body text-[9px] tracking-[0.4em] text-gold/60 uppercase mb-2">
                Atendido por
              </p>
              <p className="font-display text-lg sm:text-xl font-light text-cream/90 leading-snug">
                {CONTACT_INFO.owner}
              </p>
              <div className="mt-3 gold-line-left transition-all duration-500 group-hover:w-16" />
            </div>

            {/* Dirección */}
            <div className="reveal service-card p-6 sm:p-7 group">
              <p className="font-body text-[9px] tracking-[0.4em] text-gold/60 uppercase mb-2">
                Encuéntranos
              </p>
              <p className="font-display text-base sm:text-lg font-light text-cream/85 leading-snug">
                {CONTACT_INFO.address}
              </p>
              <div className="mt-3 gold-line-left transition-all duration-500 group-hover:w-16" />
            </div>

            {/* Horarios */}
            <div className="reveal service-card p-6 sm:p-7">
              <p className="font-body text-[9px] tracking-[0.4em] text-gold/60 uppercase mb-4">
                Horarios de atención
              </p>
              <div className="space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <span className="font-body text-[10px] tracking-[0.15em] text-cream/40 uppercase">Lun – Sáb</span>
                  <span className="font-body text-sm text-cream/70">9:00 am – 7:00 pm</span>
                </div>
                <div className="h-px bg-gold/8" />
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <span className="font-body text-[10px] tracking-[0.15em] text-cream/40 uppercase">Domingo</span>
                  <span className="font-body text-sm text-cream/70">10:00 am – 3:00 pm</span>
                </div>
              </div>
            </div>

            {/* Contacto directo */}
            <div className="reveal service-card p-6 sm:p-7 space-y-4">
              <p className="font-body text-[9px] tracking-[0.4em] text-gold/60 uppercase">
                Contacto directo
              </p>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 group/link"
              >
                <span className="text-gold/50 text-lg group-hover/link:text-gold transition-colors">☎</span>
                <span className="font-body text-sm text-cream/60 group-hover/link:text-gold transition-colors break-all">
                  {CONTACT_INFO.phone}
                </span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 group/link"
              >
                <span className="text-gold/50 text-lg group-hover/link:text-gold transition-colors">✉</span>
                <span className="font-body text-sm text-cream/60 group-hover/link:text-gold transition-colors break-all">
                  {CONTACT_INFO.email}
                </span>
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group/link"
              >
                <span className="text-gold/50 text-lg group-hover/link:text-gold transition-colors">◉</span>
                <span className="font-body text-sm text-cream/60 group-hover/link:text-gold transition-colors">
                  WhatsApp directo
                </span>
              </a>
            </div>
          </div>

          {/* Panel derecho — 3 col */}
          <div className="lg:col-span-3 reveal flex flex-col gap-5">

            {/* Imagen ambiente */}
            <div
              className="relative w-full overflow-hidden border border-gold/15"
              style={{ minHeight: "220px", aspectRatio: "16/9" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=900&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-obsidian/60" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gold shadow-gold animate-float" />
                <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-gold to-transparent" />
                <p className="font-body text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-gold uppercase bg-obsidian/80 px-3 py-1 text-center">
                  Calle Pierola 520 · Arequipa
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full py-7 sm:py-8 flex flex-col items-center justify-center gap-2 sm:gap-3 border border-gold/25 bg-obsidian-mid hover:border-gold/60 hover:bg-[#1a1500] transition-all duration-400 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <span className="font-body text-[9px] tracking-[0.4em] sm:tracking-[0.5em] text-gold/50 uppercase relative z-10">
                Mensaje directo
              </span>
              <span
                className="font-display font-light text-cream/90 group-hover:text-gold transition-colors duration-300 relative z-10 text-center px-4"
                style={{ fontSize: "clamp(1.1rem, 4vw, 1.8rem)" }}
              >
                Escríbenos por WhatsApp
              </span>
              <div className="flex items-center gap-2 sm:gap-3 relative z-10 mt-1">
                <div className="w-6 sm:w-8 h-px bg-gold/30 group-hover:bg-gold group-hover:w-10 transition-all duration-400" />
                <span className="font-body text-xs text-gold/60 group-hover:text-gold transition-colors">
                  {CONTACT_INFO.phone}
                </span>
                <div className="w-6 sm:w-8 h-px bg-gold/30 group-hover:bg-gold group-hover:w-10 transition-all duration-400" />
              </div>
            </a>

            {/* Redes sociales */}
            <div className="flex items-center justify-center gap-6 sm:gap-8 py-3">
              {[
                { icon: "◈", label: "Instagram" },
                { icon: "✦", label: "Facebook" },
                { icon: "◉", label: "TikTok" },
              ].map((soc, i) => (
                <a key={i} href="#" className="flex flex-col items-center gap-1.5 group/soc">
                  <span className="text-lg sm:text-xl text-cream/30 group-hover/soc:text-gold transition-colors duration-300">
                    {soc.icon}
                  </span>
                  <span className="font-body text-[8px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.3em] text-cream/30 group-hover/soc:text-gold/70 uppercase transition-colors">
                    {soc.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}