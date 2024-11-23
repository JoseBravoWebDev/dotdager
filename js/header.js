"use strict";

const burgerMenu = document.getElementById('burger-check');
const menuItems = document.querySelector('.menu-items');

burgerMenu.addEventListener("change", ()=> {
	menuItems.classList.toggle('active');
})

// Seleccionar las secciones y los elementos del menú
const sections = document.querySelectorAll("main section");

// Configuración del Intersection Observer
const observerOptions = {
  root: null, // Usa la ventana del navegador como referencia
  threshold: 0.25, // Al menos el 25% de la sección debe estar visible
};

// Callback del Observer
const observerCallback = (entries) => {
  entries.forEach((entry) => {
    const targetId = entry.target.id;

    // Buscar el elemento del menú correspondiente
    const menuItem = document.querySelector(`.menu-item[data-target="${targetId}"]`);

    if (entry.isIntersecting) {
      // Agregar clase activa al menú correspondiente
      menuItem.classList.add("active");
    } else {
      // Quitar clase activa cuando la sección ya no esté visible
      menuItem.classList.remove("active");
    }
  });
};

// Crear el Intersection Observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observar cada sección
sections.forEach((section) => observer.observe(section));

// Seleccionar el header
const header = document.querySelector(".header");

// Función para manejar el scroll
const handleScroll = () => {
  if (window.scrollY >= 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

// Agregar el evento de scroll
window.addEventListener("scroll", handleScroll);
