const isIntersecting = (entry) => {
  return entry.isIntersecting; //true cuando este dentro de la pantalla
};

const loadImage = (entry) => {
  const container = entry.target;
  const imagen = container.firstChild;
  const url = imagen.dataset.src;
  // Carga la imagen
  imagen.src = url;

  // Dejar de escuchar
  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) => {
  observer.observe(image);
};
