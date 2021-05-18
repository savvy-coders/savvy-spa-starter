import { Header, Nav, Main, Footer } from "./components";
import { GalleryPictures, AddPicturesToGallery } from "./lib";

function render() {
  document.querySelector("#root").innerHTML = `
  ${Header()}
  ${Nav()}
  ${Main()}
  ${Footer()}
  `;

  addEventListeners();
}

render();

// add menu toggle to bars icon in nav bar
function addEventListeners() {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  // array of pictures for gallery
  const gallerySection = document.querySelector("#gallery");
  AddPicturesToGallery(GalleryPictures, gallerySection);
}
