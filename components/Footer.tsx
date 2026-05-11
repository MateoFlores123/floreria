import { CONTACT_INFO } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold/10 bg-obsidian overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-8 bg-gradient-to-b from-gold/30 to-transparent" />
        <span className="text-gold/20 text-xs">✦</span>
      </div>

      {/* Flores decorativas fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -bottom-10 -right-10 w-64 h-64 opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          {[0,45,90,135,180,225,270,315].map((deg, i) => (
            <circle key={i}
              cx={120 + Math.cos(deg * Math.PI / 180) * 48}
              cy={120 + Math.sin(deg * Math.PI / 180) * 48}
              r="20" fill="#d4920f"
            />
          ))}
          <circle cx="120" cy="120" r="18" fill="#f3db8b" />
        </svg>
        <svg className="absolute -top-10 -left-10 w-48 h-48 opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          {[0,45,90,135,180,225,270,315].map((deg, i) => (
            <circle key={i}
              cx={96 + Math.cos(deg * Math.PI / 180) * 38}
              cy={96 + Math.sin(deg * Math.PI / 180) * 38}
              r="16" fill="#d4920f"
            />
          ))}
          <circle cx="96" cy="96" r="14" fill="#f3db8b" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-16 sm:pt-20 pb-8 sm:pb-10 relative z-10">

        {/* Top footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 mb-12 sm:mb-16">

          {/* Marca */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p
              className="font-display text-2xl sm:text-3xl font-light text-gold-shimmer mb-1 sm:mb-2"
              style={{ letterSpacing: "0.18em" }}
            >
              SHALON<span className="text-gold-light">4</span>
            </p>
            <p className="font-body text-[8px] sm:text-[9px] tracking-[0.4em] sm:tracking-[0.45em] text-gold/40 uppercase mb-4 sm:mb-5">
              Arte Floral de Lujo
            </p>
            <div className="gold-line-left mb-4 sm:mb-5" />
            <p className="font-body font-light text-cream/35 text-xs leading-relaxed max-w-xs">
              Desde Arequipa para el mundo. Cada flor que tocamos lleva consigo la intención de
              hacer más bello el mundo de quien la recibe.
            </p>
            {/* Info de contacto en footer */}
            <div className="mt-5 space-y-2">
              <p className="font-body text-xs text-cream/30 flex items-center gap-2">
                <span className="text-gold/30 text-sm">☎</span>
                {CONTACT_INFO.phone}
              </p>
              <p className="font-body text-xs text-cream/30 flex items-start gap-2">
                <span className="text-gold/30 text-sm mt-0.5">◎</span>
                {CONTACT_INFO.address}
              </p>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <p className="font-body text-[9px] tracking-[0.4em] text-gold/50 uppercase mb-5 sm:mb-6">
              Navegación
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {[
                ["Inicio",    "#inicio"],
                ["Servicios", "#servicios"],
                ["Galería",   "#galeria"],
                ["Nosotros",  "#nosotros"],
                ["Contacto",  "#contacto"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-xs text-cream/35 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="block w-0 h-px bg-gold group-hover:w-4 transition-all duration-300" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <p className="font-body text-[9px] tracking-[0.4em] text-gold/50 uppercase mb-5 sm:mb-6">
              Servicios
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Arreglos para Bodas",
                "Eventos Corporativos",
                "Suscripciones Semanales",
                "Regalos & Obsequios",
                "Instalaciones de Arte",
                "Talleres Florales",
              ].map((s) => (
                <li key={s}>
                  <span className="font-body text-xs text-cream/35 flex items-center gap-2">
                    <span className="text-gold/25 text-[8px]">◈</span>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex-1 h-px bg-gold/8" />
          <span className="text-gold/15 text-xs">✦</span>
          <div className="flex-1 h-px bg-gold/8" />
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="font-body text-[10px] text-cream/25 tracking-wide">
            © {year} FloreriaShalon4 · {CONTACT_INFO.owner}. Todos los derechos reservados.
          </p>
          <p className="font-body text-[10px] text-cream/20 tracking-wide">
            Hecho con <span className="text-gold/40">✦</span> en Arequipa, Perú
          </p>
        </div>
      </div>
    </footer>
  );
}