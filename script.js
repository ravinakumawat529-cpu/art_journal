const gallery = document.querySelector(".cards");

fetch("https://api.github.com/repos/ravinakumawat529-cpu/art_journal/contents/")
  .then(response => response.json())
  .then(files => {
    gallery.innerHTML = "";

    files
      .filter(file => file.name.toLowerCase().endsWith(".jpg"))
      .forEach((file, index) => {
        const card = document.createElement("article");
        card.className = "card";

        card.innerHTML = `
          <img src="${file.download_url}" alt="Artwork ${index + 1}">
          <h3>Artwork ${index + 1}</h3>
          <p>Original artwork from my creative journal.</p>
        `;

        gallery.appendChild(card);
      });
  })
  .catch(error => {
    gallery.innerHTML = "<p>Gallery could not be loaded.</p>";
    console.error(error);
  });
