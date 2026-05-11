import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "FloreriaShalon4 — Arte Floral de Lujo",
  description:
    "Arreglos florales de alta costura para momentos que merecen ser eternos. Arequipa, Perú.",
  keywords: ["florería", "flores", "arreglos florales", "eventos", "lujo", "Shalon", "Arequipa"],
  openGraph: {
    title: "FloreriaShalon4 — Arte Floral de Lujo",
    description: "Cada flor cuenta una historia. Nosotros la escribimos por ti.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-obsidian text-cream antialiased overflow-x-hidden">
        {children}
        <div id="custom-cursor" aria-hidden="true" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (window.matchMedia('(pointer: coarse)').matches) return;
                var cursor = document.getElementById('custom-cursor');
                if (!cursor) return;
                document.addEventListener('mousemove', function(e) {
                  cursor.style.left = e.clientX + 'px';
                  cursor.style.top  = e.clientY + 'px';
                });
                document.querySelectorAll('a,button,.service-card,.gallery-item').forEach(function(el) {
                  el.addEventListener('mouseenter', function() { cursor.classList.add('expanded'); });
                  el.addEventListener('mouseleave', function() { cursor.classList.remove('expanded'); });
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}