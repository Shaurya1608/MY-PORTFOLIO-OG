import "./globals.css";
import Script from "next/script";
import ClientScripts from "../components/ClientScripts";

export const metadata = {
  title: "Shaurya Kumar - Technical Founder & Full-Stack Engineer",
  description: "Shaurya Kumar - Personal Portfolio. Building scalable digital products.",
  keywords: ["Shaurya Kumar", "Software Engineer", "Full-Stack Developer", "Talentella", "Portfolio", "Technical Founder"],
  openGraph: {
    title: 'Shaurya Kumar - Technical Founder & Full-Stack Engineer',
    description: 'Shaurya Kumar - Personal Portfolio. Building scalable digital products.',
    url: 'https://talentella.in',
    siteName: 'Shaurya Kumar Portfolio',
    images: [
      {
        url: '/my-image/IMG_0026.jpg',
        width: 800,
        height: 600,
        alt: 'Shaurya Kumar',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaurya Kumar - Technical Founder & Full-Stack Engineer',
    description: 'Shaurya Kumar - Personal Portfolio. Building scalable digital products.',
    images: ['/my-image/IMG_0026.jpg'],
  },
  icons: {
    icon: '/assets/images/logo/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Bootstrap */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        {/* Swiper Bundle */}
        <link rel="stylesheet" href="/assets/css/swiper-bundle.css" />
        {/* Magnific Popup */}
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        {/* aos */}
        <link rel="stylesheet" href="/assets/css/aos.css" />
        {/* Main css */}
        <link rel="stylesheet" href="/assets/css/main.css?v=2" />
      </head>
      <body className="tw-magic-cursor">
        {children}

        <ClientScripts />
      </body>
    </html>
  );
}
