/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log("Happy hacking :)");

const baseUrl = "https://platzi-avo.vercel.app";

const app = document.querySelector("#app");

// Web api (fecth)
// 1. Conectarnos al server
// 2. Procesar la respuesta y convertirla a JSON
// 3. JSON -> Data -> Renderizar Info en el navegador

// ----------------- Promises
// window
//   .fetch(url)
//   .then((respuesta) => respuesta.json())
//   .then((respuestaJson) => {
//     respuestaJson.data.forEach((item) => {
//       console.log(item.name);
//     });
//   });

// ------------------ Intl
// 1. Formato para fechas
// 2. Formato a monedas

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("es", {
    style: "currency",
    currency: "MXN",
  }).format(price);

  return newPrice;
};

// ------------------ Async Await

async function fetchData() {
  const allItems = [];
  const response = await fetch(`${baseUrl}/api/avo`);
  const responseJson = await response.json();

  responseJson.data.forEach((item) => {
    //Crear imagen
    const img = document.createElement("img");
    img.src = `${baseUrl}${item.image}`;
    img.className =
      "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

    //Crear titulo
    const title = document.createElement("h2");
    title.textContent = item.name;
    title.className = "text-lg";

    //Crear Precio
    const price = document.createElement("div");
    price.textContent = formatPrice(item.price);
    price.className = "text-gray-600";

    const titleAndPrice = document.createElement("div");
    titleAndPrice.className = "text-center md:text-left";
    titleAndPrice.append(title, price);

    const card = document.createElement("div");
    card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
    card.append(img, titleAndPrice);

    allItems.push(card);
  });
  app.append(...allItems);
}

fetchData();
