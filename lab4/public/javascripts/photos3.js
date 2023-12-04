function loadPhotos() {
  let divElement = document.getElementById("treciID");

  for (let i = 46; i <= 51; i++) {
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", "public/pictures/photo (" + i + ").jpg");
    divElement.appendChild(imgElement);
  }
}

document.addEventListener("DOMContentLoaded", loadPhotos);
