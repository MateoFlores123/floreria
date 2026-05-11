# 🌸 FloreriaShalon4 — Landing Page

Landing page de lujo para **FloreriaShalon4**, construida con **Next.js 15**, **Tailwind CSS** y **TypeScript**. Estética negra y dorada con animaciones elegantes.

---

## 🚀 Inicio rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Iniciar en modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Construir para producción

```bash
npm run build
npm start
```

---

## 📁 Estructura del proyecto

```
floreria-shalon4/
├── app/
│   ├── layout.tsx        ← Root layout + fuentes + cursor
│   ├── page.tsx          ← Página principal (ensambla todo)
│   ├── globals.css       ← Variables CSS, animaciones, estilos globales
│   └── not-found.tsx     ← Página 404
├── components/
│   ├── Navbar.tsx        ← Navegación fija con detección de sección activa
│   ├── Hero.tsx          ← Sección principal con partículas y animaciones
│   ├── Services.tsx      ← Catálogo de 6 servicios con cards interactivas
│   ├── Gallery.tsx       ← Galería con filtros por categoría
│   ├── About.tsx         ← Historia, estadísticas y testimonios
│   ├── Contact.tsx       ← Contacto, horarios y WhatsApp CTA
│   └── Footer.tsx        ← Pie de página elegante
├── lib/
│   └── data.ts           ← Todo el contenido centralizado (fácil de editar)
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

---

## ✏️ Personalización

Todo el contenido está centralizado en **`lib/data.ts`**. Edita ahí:

- `SERVICES` — Los 6 servicios que ofrece la florería
- `GALLERY_ITEMS` — Fotos de la galería (cambia las URLs de Unsplash por tus propias fotos)
- `TESTIMONIALS` — Testimonios de clientes
- `CONTACT_INFO` — Teléfono, email, dirección y redes sociales

### Cambiar fotos propias

Reemplaza las URLs de `images.unsplash.com` en `lib/data.ts` y `components/Hero.tsx` por rutas locales en `/public/` o URLs de tu propio servidor.

---

## 🎨 Paleta de colores

| Variable        | Valor       | Uso                          |
|-----------------|-------------|------------------------------|
| `--gold`        | `#d4920f`   | Color dorado principal       |
| `--gold-light`  | `#f3db8b`   | Dorado claro / shimmer       |
| `--obsidian`    | `#0a0a0a`   | Fondo negro principal        |
| `--cream`       | `#f8f4ec`   | Texto principal claro        |

---

## 📦 Tecnologías

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 3**
- **TypeScript 5**
- **Fuentes:** Cormorant Garamond · Jost · Playfair Display (Google Fonts)

---

*Hecho con ✦ para FloreriaShalon4 — Arequipa, Perú*