// Opciones del Intersection Observer
const options = {
  root: null,  // 'null' significa que se observará en el viewport
  rootMargin: '0px',  // Margen adicional alrededor del viewport
  threshold: 0.5  // 50% del elemento debe ser visible para activarse
};

// Función que maneja el callback cuando un elemento entra en el viewport
const handleIntersection = (entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Si el elemento es visible, añadir la clase 'animate' para activar la animación
      entry.target.classList.add('animate');
      
      // Para añadir un retraso escalonado en cada animación, usamos setTimeout
      setTimeout(() => {
        entry.target.classList.add('animate');
      }, index * 500); // Retraso de 500ms para cada elemento
    }
  });
};

// Crear el observer
const observer = new IntersectionObserver(handleIntersection, options);

// Seleccionar todos los elementos que deseas observar
const elementsToObserve = document.querySelectorAll('.fadeIn, .comeInLeft, .comeInUp, .comeInDown, .comeInRight');

// Iniciar el observer para cada uno de esos elementos
elementsToObserve.forEach((element) => {
  observer.observe(element);
});
