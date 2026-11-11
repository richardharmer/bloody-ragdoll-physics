import type { Metadata } from "next";
import { Header, Footer } from "@/components/Shell";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://bloodyragdollphysics.com"),
  title: {
    default: "Bloody Ragdoll Physics — Interactive Wiki & Field Guide",
    template: "%s | Bloody Ragdoll Physics Guide",
  },
  description:
    "Explore confirmed weapons, syringes, NPC Wars and world events. An independent visual wiki with interactive experiments and honest source notes.",
  icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-TW44824G"
        />
        <script
          id="google-tag-init"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
          }}
        />
        <script
          id="clarity-init"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
 c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
 t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
 y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "zc2um79ysp");`,
          }}
        />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
