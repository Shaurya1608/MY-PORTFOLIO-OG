import "./globals.css";
import Script from "next/script";
import ClientScripts from "../components/ClientScripts";

export const metadata = {
  title: "Shaurya Kumar - Technical Founder & Full-Stack Engineer",
  description: "Shaurya Kumar - Personal Portfolio. Building scalable digital products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="keywords"
          content="Harsh, Personal Portfolio, Digital Designer, Developer, Creative Agency, Responsive"
        />
        <meta name="robots" content="INDEX,FOLLOW" />
        <link rel="icon" href="/assets/images/logo/favicon.png" type="image/png" />
        
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
