function loadPhotos() {
  let divElement = document.getElementById("drugiID");

  for (let i = 18; i <= 45; i++) {
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", "public/pictures/photo (" + i + ").jpg");
    divElement.appendChild(imgElement);
  }
}

document.addEventListener("DOMContentLoaded", loadPhotos);
