"use client";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(150deg, #0e0b01 0%, #0a0a0a 60%, #070a09 100%)" }}
    >
      {/* ─── Flores y decoración SVG ─── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="stemG" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d4920f" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#d4920f" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="petG" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f3db8b" />
            <stop offset="100%" stopColor="#b8720b" />
          </linearGradient>
          <linearGradient id="petG2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#f3db8b" />
            <stop offset="100%" stopColor="#d4920f" />
          </linearGradient>
        </defs>

        {/* TULIPÁN — borde derecho (más grande y visible) */}
        <g transform="translate(1390,940) rotate(-6)" opacity="0.22">
          <path d="M0,0 Q8,-130 0,-400" stroke="url(#stemG)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          {/* hojas */}
          <path d="M0,-240 Q-85,-270 -90,-360 Q-18,-278 0,-258 Z" fill="#d4920f" opacity="0.35"/>
          <path d="M0,-260 Q85,-295 88,-388 Q16,-300 0,-278 Z" fill="#d4920f" opacity="0.35"/>
          {/* pétalos tulipán */}
          <path d="M-4,-400 Q-62,-510 -36,-610 Q-2,-512 -2,-428 Z" fill="url(#petG)" opacity="0.65"/>
          <path d="M4,-400 Q62,-510 36,-610 Q2,-512 2,-428 Z" fill="url(#petG)" opacity="0.65"/>
          <path d="M-2,-405 Q-35,-510 -18,-608 Q1,-515 1,-438 Z" fill="#f3db8b" opacity="0.48"/>
          <path d="M2,-405 Q35,-510 18,-608 Q-1,-515 -1,-438 Z" fill="#f3db8b" opacity="0.48"/>
          {/* pétalos laterales */}
          <path d="M-4,-400 Q-90,-430 -96,-510 Q-22,-422 -4,-410 Z" fill="url(#petG)" opacity="0.5"/>
          <path d="M4,-400 Q90,-430 96,-510 Q22,-422 4,-410 Z" fill="url(#petG)" opacity="0.5"/>
        </g>

        {/* LIRIO — borde izquierdo (más grande y visible) */}
        <g transform="translate(55,940) rotate(5)" opacity="0.2">
          <path d="M0,0 Q-5,-110 0,-380" stroke="url(#stemG)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          {/* hojas */}
          <path d="M0,-200 Q-72,-232 -78,-308 Q-12,-222 0,-212 Z" fill="#d4920f" opacity="0.32"/>
          <path d="M0,-220 Q68,-250 72,-330 Q10,-238 0,-228 Z" fill="#d4920f" opacity="0.32"/>
          {/* pétalos lirio */}
          <path d="M0,-380 Q-70,-430 -82,-520 Q-14,-434 0,-402 Z" fill="url(#petG)" opacity="0.62"/>
          <path d="M0,-380 Q70,-430 82,-520 Q14,-434 0,-402 Z" fill="url(#petG)" opacity="0.62"/>
          <path d="M0,-380 Q-100,-378 -115,-448 Q-36,-384 0,-396 Z" fill="#f3db8b" opacity="0.45"/>
          <path d="M0,-380 Q100,-378 115,-448 Q36,-384 0,-396 Z" fill="#f3db8b" opacity="0.45"/>
          <path d="M0,-380 Q-32,-475 -13,-560 Q1,-478 0,-412 Z" fill="url(#petG)" opacity="0.58"/>
          <path d="M0,-380 Q32,-475 13,-560 Q-1,-478 0,-412 Z" fill="url(#petG)" opacity="0.58"/>
          {/* estambres */}
          <line x1="0" y1="-430" x2="-17" y2="-505" stroke="#f3db8b" strokeWidth="1.2" opacity="0.55" strokeLinecap="round"/>
          <line x1="0" y1="-430" x2="17" y2="-505" stroke="#f3db8b" strokeWidth="1.2" opacity="0.55" strokeLinecap="round"/>
          <line x1="0" y1="-430" x2="0" y2="-515" stroke="#f3db8b" strokeWidth="1.2" opacity="0.55" strokeLinecap="round"/>
          <circle cx="-17" cy="-505" r="3.5" fill="#f3db8b" opacity="0.7"/>
          <circle cx="17" cy="-505" r="3.5" fill="#f3db8b" opacity="0.7"/>
          <circle cx="0" cy="-515" r="3.5" fill="#f3db8b" opacity="0.7"/>
        </g>

        {/* ROSA pequeña — centro-derecha, mid-height */}
        <g transform="translate(1280,500) rotate(-10)" opacity="0.14">
          <path d="M0,0 Q3,-50 0,-180" stroke="url(#stemG)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          {/* espiral rosa */}
          <circle cx="0" cy="-180" r="28" fill="none" stroke="#d4920f" strokeWidth="1" opacity="0.6"/>
          <circle cx="0" cy="-180" r="20" fill="none" stroke="#f3db8b" strokeWidth="0.8" opacity="0.5"/>
          <circle cx="0" cy="-180" r="12" fill="#d4920f" opacity="0.4"/>
          <path d="M0,-152 Q30,-168 28,-195 Q8,-165 0,-160 Z" fill="#f3db8b" opacity="0.4"/>
          <path d="M0,-152 Q-30,-168 -28,-195 Q-8,-165 0,-160 Z" fill="#f3db8b" opacity="0.4"/>
          <path d="M24,-195 Q38,-220 22,-245 Q12,-210 16,-200 Z" fill="#d4920f" opacity="0.45"/>
          <path d="M-24,-195 Q-38,-220 -22,-245 Q-12,-210 -16,-200 Z" fill="#d4920f" opacity="0.45"/>
          <path d="M0,-152 Q0,-170 0,-210 Q-8,-170 0,-158 Z" fill="#f3db8b" opacity="0.35"/>
        </g>

        {/* FLOR PEQUEÑA — izquierda media */}
        <g transform="translate(160,450) rotate(8)" opacity="0.12">
          <path d="M0,0 Q-2,-40 0,-160" stroke="url(#stemG)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          {[0,60,120,180,240,300].map((deg, i) => (
            <g key={i} transform={`rotate(${deg}, 0, -160)`}>
              <ellipse cx="0" cy="-193" rx="8" ry="18" fill="#d4920f" opacity="0.5"/>
            </g>
          ))}
          <circle cx="0" cy="-160" r="9" fill="#f3db8b" opacity="0.6"/>
        </g>

        {/* CAPULLO — derecha media-alta */}
        <g transform="translate(1370,300) rotate(-12)" opacity="0.15">
          <path d="M0,0 Q4,-60 0,-210" stroke="url(#stemG)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M-2,-210 Q-30,-255 -18,-305 Q-1,-258 -1,-228 Z" fill="url(#petG)" opacity="0.55"/>
          <path d="M2,-210 Q30,-255 18,-305 Q1,-258 1,-228 Z" fill="url(#petG)" opacity="0.55"/>
          <path d="M-1,-212 Q-18,-255 -10,-302 Q1,-258 1,-232 Z" fill="#f3db8b" opacity="0.4"/>
          <path d="M1,-212 Q18,-255 10,-302 Q-1,-258 -1,-232 Z" fill="#f3db8b" opacity="0.4"/>
        </g>

        {/* CAPULLO pequeño — izquierda baja */}
        <g transform="translate(120,680) rotate(3)" opacity="0.13">
          <path d="M0,0 Q3,-50 0,-170" stroke="url(#stemG)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M-2,-170 Q-24,-205 -14,-248 Q-1,-208 -1,-184 Z" fill="#d4920f" opacity="0.5"/>
          <path d="M2,-170 Q24,-205 14,-248 Q1,-208 1,-184 Z" fill="#f3db8b" opacity="0.5"/>
        </g>

        {/* Puntos dorados — más numerosos */}
        {([
          [300,180,1.2],[580,90,1],[870,130,1.3],[1100,280,1.1],
          [180,550,1],[980,650,1.2],[430,780,1.1],[1260,580,1.3],
          [720,200,0.9],[440,400,1],[1050,140,1.1],[220,300,0.9],
          [1180,720,1],[650,680,0.8],[380,560,1.1],[850,820,1],
          [130,200,0.9],[1310,460,1],[760,50,0.8],[1420,200,1.1],
        ] as [number,number,number][]).map(([x,y,r],i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="#d4920f" opacity="0.18"/>
        ))}

        {/* Líneas decorativas finas */}
        <line x1="720" y1="0" x2="720" y2="900" stroke="#d4920f" strokeWidth="0.3" opacity="0.04"/>
        <line x1="0" y1="450" x2="1440" y2="450" stroke="#d4920f" strokeWidth="0.3" opacity="0.04"/>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian pointer-events-none" />

      {/* Contenido principal */}
      <div
        className="relative z-10 text-center w-full px-5 sm:px-10 max-w-3xl mx-auto
                   flex flex-col items-center justify-center min-h-screen"
        style={{
          paddingTop: "clamp(90px, 20vw, 120px)",
          paddingBottom: "clamp(48px, 10vw, 80px)",
        }}
      >
        <p
          className="font-body text-[9px] sm:text-[10px] tracking-[0.42em] sm:tracking-[0.55em] text-gold/55 uppercase mb-5 sm:mb-9 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Arte Floral de Lujo · Arequipa
        </p>

        <h1
          className="font-display font-light leading-[1.06] mb-5 sm:mb-7 animate-fade-up w-full"
          style={{
            animationDelay: "0.5s",
            fontSize: "clamp(2rem, 8.5vw, 7rem)",
          }}
        >
          <span className="block text-cream/85">Donde las</span>
          <em className="block not-italic text-gold-shimmer">flores hablan</em>
          <span className="block text-cream/85">por ti</span>
        </h1>

        <div className="gold-line mx-auto mb-5 sm:mb-6 animate-fade-in" style={{ animationDelay: "0.8s" }} />

        <p
          className="font-body font-light text-cream/42 max-w-[240px] sm:max-w-md mx-auto mb-9 sm:mb-14 leading-loose animate-fade-up"
          style={{ animationDelay: "0.9s", fontSize: "clamp(0.78rem, 3vw, 0.97rem)" }}
        >
          Cada arreglo, una obra maestra pensada para el momento y la persona que lo recibirá.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 w-full animate-fade-up"
          style={{ animationDelay: "1.1s" }}
        >
          <a
            href="#servicios"
            className="btn-gold justify-center"
            style={{ maxWidth: "260px", fontSize: "0.66rem" }}
          >
            <span>Nuestros servicios</span>
            <span>→</span>
          </a>
          <a
            href="#galeria"
            className="font-body text-[10px] tracking-[0.22em] uppercase text-cream/35 hover:text-gold/70 transition-colors duration-400 flex items-center gap-3 group"
          >
            <span className="block w-7 h-px bg-cream/18 group-hover:bg-gold/50 group-hover:w-12 transition-all duration-400" />
            Ver galería
          </a>
        </div>

        {/* Scroll indicator — desktop only */}
        <div
          className="mt-16 sm:mt-20 flex-col items-center gap-2 opacity-28 animate-fade-in hidden sm:flex"
          style={{ animationDelay: "1.6s" }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-float" />
        </div>
      </div>

      {/* Nombre del dueño — esquina inferior derecha */}
      <div
        className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-10 text-right animate-fade-in"
        style={{ animationDelay: "2s" }}
      >
        <p className="font-body text-[7px] sm:text-[8px] tracking-[0.28em] text-gold/25 uppercase leading-relaxed">
          Martin Mario
          <br />
          Flores Ramos
        </p>
        <span className="block w-5 h-px bg-gradient-to-l from-gold/30 to-transparent ml-auto mt-1" />
      </div>
    </section>
  );
}