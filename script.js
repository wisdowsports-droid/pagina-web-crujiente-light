/* =========================================================
   EL CRUJIENTE LIGHT — Configuración e interacciones
   =========================================================
   Cambia aquí los datos de la marca. Se aplican automáticamente
   en toda la página (WhatsApp, redes, footer, etc).
   ========================================================= */

const CONFIG = {
  NOMBRE_MARCA: "El Crujiente Light",

  // Escribe el número completo con indicativo de país, sin espacios ni signos.
  // Este es el número principal: se usa en todos los botones "Pedir por WhatsApp"
  // (hero, menú, eventos, CTA final, botón flotante).
  WHATSAPP_NUMBER: "573225364471",

  // Segundo número de WhatsApp de la marca (también recibe pedidos).
  // Se muestra como opción adicional en la sección de Contacto.
  WHATSAPP_NUMBER_2: "573004769747",

  // Mensaje que se abrirá automáticamente en WhatsApp.
  WHATSAPP_MENSAJE: "Hola, quiero hacer un pedido de lechona El Crujiente Light.",

  INSTAGRAM_USER: "elcrujientelight",
  TIKTOK_USER: "elcrujientelight",

  TELEFONO: "322 536 4471 · 300 476 9747",

  // Pedidos 100% virtuales (WhatsApp + domicilio): no hay local físico,
  // por eso se muestra zona de cobertura en vez de una dirección exacta.
  COBERTURA: "Domicilios en toda Bogotá y periferia (sujeto a costo adicional)",
  CIUDAD: "Bogotá",
  HORARIO: "Lunes a domingo, 8:00 a.m. – 8:00 p.m.",
};

document.addEventListener("DOMContentLoaded", () => {
  aplicarConfiguracion();
  inicializarMenuMovil();
  inicializarTabsMenu();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------------------------------------------------------
   Aplica los datos de CONFIG en todos los elementos marcados
   --------------------------------------------------------- */
function aplicarConfiguracion() {
  const waUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(CONFIG.WHATSAPP_MENSAJE)}`;
  document.querySelectorAll(".js-whatsapp-link").forEach((el) => {
    el.setAttribute("href", waUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  const waUrl2 = `https://wa.me/${CONFIG.WHATSAPP_NUMBER_2}?text=${encodeURIComponent(CONFIG.WHATSAPP_MENSAJE)}`;
  document.querySelectorAll(".js-whatsapp-link-2").forEach((el) => {
    el.setAttribute("href", waUrl2);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
    el.textContent = formatearNumeroVisible(CONFIG.WHATSAPP_NUMBER_2);
  });

  document.querySelectorAll(".js-whatsapp-display").forEach((el) => {
    el.textContent = formatearNumeroVisible(CONFIG.WHATSAPP_NUMBER);
  });

  const igUrl = `https://instagram.com/${CONFIG.INSTAGRAM_USER}`;
  document.querySelectorAll(".js-instagram-link").forEach((el) => el.setAttribute("href", igUrl));
  document.querySelectorAll(".js-instagram-handle").forEach((el) => (el.textContent = `@${CONFIG.INSTAGRAM_USER}`));

  const ttUrl = `https://tiktok.com/@${CONFIG.TIKTOK_USER}`;
  document.querySelectorAll(".js-tiktok-link").forEach((el) => el.setAttribute("href", ttUrl));
  document.querySelectorAll(".js-tiktok-handle").forEach((el) => (el.textContent = `@${CONFIG.TIKTOK_USER}`));

  document.querySelectorAll(".js-cobertura").forEach((el) => (el.textContent = CONFIG.COBERTURA));
  document.querySelectorAll(".js-ciudad").forEach((el) => (el.textContent = CONFIG.CIUDAD));
  document.querySelectorAll(".js-horario").forEach((el) => (el.textContent = CONFIG.HORARIO));
}

function formatearNumeroVisible(numero) {
  // Muestra el número tal cual si no se puede formatear con certeza.
  return `+${numero}`;
}

/* ---------------------------------------------------------
   Menú hamburguesa (mobile)
   --------------------------------------------------------- */
function inicializarMenuMovil() {
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mobileNav");
  if (!burger || !nav) return;

  burger.addEventListener("click", () => {
    const abierto = nav.classList.toggle("is-open");
    burger.classList.toggle("is-open", abierto);
    burger.setAttribute("aria-expanded", String(abierto));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------------------------------------------
   Tabs del menú (Lechona / Porciones / Combos / Eventos)
   --------------------------------------------------------- */
function inicializarTabsMenu() {
  const botones = document.querySelectorAll(".menu-tabs__btn");
  const paneles = document.querySelectorAll(".menu-panel");
  if (!botones.length) return;

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");

      botones.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      paneles.forEach((panel) => {
        panel.classList.toggle("is-active", panel.id === targetId);
      });
    });
  });
}
