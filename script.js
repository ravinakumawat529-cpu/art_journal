/* ===== Gallery Lightbox ===== */

const images = document.querySelectorAll(".card img");

const lightbox = document.createElement("div");

lightbox.style.position = "fixed";
lightbox.style.inset = "0";
lightbox.style.background = "rgba(0,0,0,0.88)";
lightbox.style.display = "none";
lightbox.style.alignItems = "center";
lightbox.style.justifyContent = "center";
lightbox.style.padding = "20px";
lightbox.style.zIndex = "9999";

lightbox.innerHTML = `
  <button
    aria-label="Close"
    style="
      position:fixed;
      top:18px;
      right:22px;
      width:44px;
      height:44px;
      border:none;
      border-radius:50%;
      background:white;
      color:#302b2b;
      font-size:28px;
      cursor:pointer;
      z-index:10000;
    "
  >×</button>

  <img
    src=""
    alt="Large artwork"
    style="
      max-width:92vw;
      max-height:88vh;
      width:auto;
      height:auto;
      object-fit:contain;
      border-radius:12px;
    "
  >
`;

document.body.appendChild(lightbox);

const largeImage = lightbox.querySelector("img");
const closeButton = lightbox.querySelector("button");


/* Open large photo */

images.forEach(image => {

  image.style.cursor = "zoom-in";

  image.addEventListener("click", () => {

    largeImage.src = image.src;
    largeImage.alt = image.alt;

    lightbox.style.display = "flex";
  });

});


/* Close button */

closeButton.addEventListener("click", () => {

  lightbox.style.display = "none";
  largeImage.src = "";

});


/* Close by clicking outside photo */

lightbox.addEventListener("click", event => {

  if (event.target === lightbox) {

    lightbox.style.display = "none";
    largeImage.src = "";

  }

});


/* Close with Escape */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    lightbox.style.display = "none";
    largeImage.src = "";

  }

});
