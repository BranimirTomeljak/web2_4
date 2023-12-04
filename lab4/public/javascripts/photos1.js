function loadPhotos() {
  let divElement = document.getElementById("prviID");

  for (let i = 1; i <= 17; i++) {
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", "public/pictures/photo (" + i + ").jpg");
    divElement.appendChild(imgElement);
  }
}

document.addEventListener("DOMContentLoaded", loadPhotos);
