import { registerImage } from "./lazy";

console.log("Happy hacking :)");

const maximo = 122;
const minimo = 1;
const random = () => Math.floor(Math.random() * (maximo - minimo)) + minimo;

// Crear imagen
const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-1";

  const imagen = document.createElement("img");
  imagen.className = "mx-auto";
  imagen.width = "320";
  imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(imagen);

  return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");

// Botón de agregar
const addButton = document.querySelector("button");
const addImage = () => {
  const newImage = createImageNode();
  // Agregar a #imagen
  mountNode.append(newImage);
  registerImage(newImage);
};
addButton.addEventListener("click", addImage);
