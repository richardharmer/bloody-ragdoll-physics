import type { Metadata } from "next";
import { Header, Footer } from "@/components/Shell";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bloody Ragdoll Physics Wiki & Guide — Weapons, Badges, Passes",
    template: "%s | Bloody Ragdoll Physics Guide",
  },
  description:
    "Player-first Bloody Ragdoll Physics wiki and guide: browse all 25 confirmed weapons and tools, 13 badge tips, game pass value breakdown, syringes, world events, and controls.",
  icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/apple-touch-icon.png"],
  },
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
