export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold/10 bg-obsidian overflow-hidden">

      {/* Ornamento superior central */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-8 bg-gradient-to-b from-gold/30 to-transparent" />
        <span className="text-gold/20 text-xs">✦</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">

        {/* Top footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Marca */}
          <div className="md:col-span-1">
            <p
              className="font-display text-3xl font-light tracking-widest text-gold-shimmer mb-2"
              style={{ letterSpacing: "0.18em" }}
            >
              SHALON<span className="text-gold-light">4</span>
            </p>
            <p className="font-body text-[9px] tracking-[0.45em] text-gold/40 uppercase mb-5">
              Arte Floral de Lujo
            </p>
            <div className="gold-line-left mb-5" />
            <p className="font-body font-light text-cream/35 text-xs leading-relaxed max-w-xs">
              Desde Arequipa para el mundo. Cada flor que tocamos lleva consigo la intención de
              hacer más bello el mundo de quien la recibe.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <p className="font-body text-[9px] tracking-[0.4em] text-gold/50 uppercase mb-6">
              Navegación
            </p>
            <ul className="space-y-3">
              {[
                ["Inicio",     "#inicio"],
                ["Servicios",  "#servicios"],
                ["Galería",    "#galeria"],
                ["Nosotros",   "#nosotros"],
                ["Contacto",   "#contacto"],
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

          {/* Servicios destacados */}
          <div>
            <p className="font-body text-[9px] tracking-[0.4em] text-gold/50 uppercase mb-6">
              Servicios
            </p>
            <ul className="space-y-3">
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
        <div className="flex items-center gap-6 mb-8">
          <div className="flex-1 h-px bg-gold/8" />
          <span className="text-gold/15 text-xs">✦</span>
          <div className="flex-1 h-px bg-gold/8" />
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-cream/25 tracking-wide">
            © {year} FloreriaShalon4. Todos los derechos reservados.
          </p>
          <p className="font-body text-[10px] text-cream/20 tracking-wide">
            Hecho con{" "}
            <span className="text-gold/40">✦</span>
            {" "}en Arequipa, Perú
          </p>
        </div>
      </div>
    </footer>
  );
}