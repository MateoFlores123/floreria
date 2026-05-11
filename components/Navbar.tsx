"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería",   href: "#galeria" },
  { label: "Nosotros",  href: "#nosotros" },
  { label: "Contacto",  href: "#contacto" },
];

const WA_LINK = `https://wa.me/51993708614?text=Hola,%20me%20gustar%C3%ADa%20consultar%20sobre%20sus%20servicios.`;

export default function Navbar() {
  
  const [scrolled, setScrolled]    = useState(false);
  const [activeSection, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── NAV DESKTOP ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 hidden md:block ${
          scrolled
            ? "bg-obsidian/95 backdrop-blur-md border-b border-gold/20 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNav("#inicio")} className="flex flex-col leading-none text-left">
            <span className="font-display text-2xl font-light text-gold-shimmer" style={{ letterSpacing: "0.18em" }}>
              FLORERIASHALON<span className="text-gold-light">4</span>
            </span>
            <span className="font-body text-[8px] font-light tracking-[0.42em] text-gold/50 uppercase mt-0.5">
              Arte Floral de Lujo
            </span>
          </button>

          {/* Links */}
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative font-body text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 group ${
                    activeSection === link.href.replace("#", "") ? "text-gold" : "text-cream/55 hover:text-gold"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    activeSection === link.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); handleNav("#contacto"); }}
            className="btn-gold text-[10px]"
          >
            Contáctanos
          </a>
        </div>
      </nav>

      {/* ── NAV MOBILE — barra superior ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-obsidian/97 backdrop-blur-xl border-b border-gold/15"
            : "bg-transparent"
        }`}
        style={{ height: "56px" }}
      >
        <div className="flex items-center justify-between px-5 h-full">
          {/* Logo */}
          <button
            onClick={() => handleNav("#inicio")}
            className="flex flex-col leading-none text-left"
          >
            <span
              className="font-display font-light text-gold-shimmer"
              style={{ letterSpacing: "0.15em", fontSize: "1.15rem" }}
            >
              SHALON<span className="text-gold-light">4</span>
            </span>
            <span className="font-body text-[7px] font-light tracking-[0.32em] text-gold/45 uppercase">
              Arte Floral de Lujo
            </span>
          </button>

          {/* Right side: WhatsApp + Hamburger */}
          <div className="flex items-center gap-3">
            {/* WhatsApp CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-[9px] tracking-[0.16em] uppercase text-obsidian bg-gold px-3 py-1.5 font-medium"
              style={{ minHeight: "32px" }}
            >
              {/* WhatsApp icon */}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.843L.057 23.571l5.9-1.545A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.563 9.563 0 01-4.902-1.347l-.351-.208-3.644.956.972-3.548-.228-.364A9.559 9.559 0 012.4 12C2.4 6.698 6.698 2.4 12 2.4S21.6 6.698 21.6 12 17.302 21.6 12 21.6z"/>
              </svg>
              WhatsApp
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 relative"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <span
                className="block w-5 h-px bg-gold transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block w-5 h-px bg-gold transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-px bg-gold transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE FULLSCREEN MENU ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(8,7,2,0.97)", backdropFilter: "blur(16px)" }}
      >
        {/* Decorative flower SVG inside menu */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 400 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(360,750) rotate(-8)" opacity="0.12">
            <path d="M0,0 Q5,-80 0,-260" stroke="#d4920f" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M-2,-260 Q-38,-320 -22,-388 Q-1,-322 -1,-278 Z" fill="#d4920f" opacity="0.5"/>
            <path d="M2,-260 Q38,-320 22,-388 Q1,-322 1,-278 Z" fill="#f3db8b" opacity="0.5"/>
          </g>
          <g transform="translate(40,780) rotate(5)" opacity="0.1">
            <path d="M0,0 Q-3,-70 0,-240" stroke="#d4920f" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M0,-240 Q-44,-270 -50,-326 Q-8,-274 0,-256 Z" fill="#d4920f" opacity="0.45"/>
            <path d="M0,-240 Q44,-270 50,-326 Q8,-274 0,-256 Z" fill="#f3db8b" opacity="0.45"/>
            <path d="M0,-240 Q-62,-236 -72,-284 Q-22,-240 0,-250 Z" fill="#d4920f" opacity="0.3"/>
            <path d="M0,-240 Q62,-236 72,-284 Q22,-240 0,-250 Z" fill="#d4920f" opacity="0.3"/>
          </g>
        </svg>

        <div className="relative flex flex-col items-center justify-center h-full pt-16 pb-12 gap-1">
          {/* Owner name top */}
          <p className="font-body text-[9px] tracking-[0.4em] text-gold/30 uppercase mb-8">
            Martin Mario Flores Ramos
          </p>

          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="group flex flex-col items-center gap-1 py-3 px-8 transition-all duration-300"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
              }}
            >
              <span
                className={`font-display font-light transition-colors duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-gold-shimmer"
                    : "text-cream/70 group-hover:text-gold"
                }`}
                style={{ fontSize: "clamp(1.8rem, 8vw, 2.4rem)", letterSpacing: "0.06em" }}
              >
                {link.label}
              </span>
              {activeSection === link.href.replace("#", "") && (
                <span className="block w-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              )}
            </button>
          ))}

          {/* WA button inside menu */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 btn-gold text-[10px] flex items-center gap-2"
            style={{ maxWidth: "240px" }}
            onClick={() => setMenuOpen(false)}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.843L.057 23.571l5.9-1.545A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.563 9.563 0 01-4.902-1.347l-.351-.208-3.644.956.972-3.548-.228-.364A9.559 9.559 0 012.4 12C2.4 6.698 6.698 2.4 12 2.4S21.6 6.698 21.6 12 17.302 21.6 12 21.6z"/>
            </svg>
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
} 