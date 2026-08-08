"use client";
import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    const scripts = [
      "/assets/js/jquery-3.7.1.min.js",
      "/assets/js/phosphor-icon.js",
      "/assets/js/boostrap.bundle.min.js",
      "/assets/js/aos.js",
      "/assets/js/magnific-popup.min.js",
      "/assets/js/jquery.marquee.min.js",
      "/assets/js/purecounter.js",
      "/assets/js/swiper-bundle.min.js",
      "/assets/js/gsap/gsap.js",
      "/assets/js/gsap/gsap-scroll-to-plugin.js",
      "/assets/js/gsap/gsap-scroll-smoother.js",
      "/assets/js/gsap/gsap-scroll-trigger.js",
      "/assets/js/gsap/gsap-split-text.js",
      "/assets/js/gsap/chroma.min.js",
      "/assets/js/slider-active.js",
      "/assets/js/custom-gsap.js",
      "/assets/js/main.js",
      "/assets/js/tw-cursor.js"
    ];

    const loadScript = (index) => {
      if (index >= scripts.length) return;

      const script = document.createElement("script");
      script.src = scripts[index];
      script.async = false; // ensure they execute in order if appended together, but we do it sequentially anyway
      script.onload = () => loadScript(index + 1);
      document.body.appendChild(script);
    };

    loadScript(0);
  }, []);

  return null;
}
