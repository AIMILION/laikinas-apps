// Pakeisk į savo FB puslapio URL
const FACEBOOK_URL = "https://www.facebook.com/aimilion"; // <-- Įrašyk teisingą

// Pašalinta: nebenaudojamas 'brand' paspaudimas

// Footer FB nuoroda
const fbLink = document.getElementById("fb-link");
if (fbLink) {
  fbLink.setAttribute("href", FACEBOOK_URL);
}

// Dinaminiai metai
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Maža detalė: pagerbti “prefers-reduced-motion”
try {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq.matches) {
    document.documentElement.style.setProperty("scroll-behavior", "auto");
  } else {
    document.documentElement.style.setProperty("scroll-behavior", "smooth");
  }
} catch (_) {}
