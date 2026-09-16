
const gallery = document.querySelector(".cards");

const artworkInfo = {
  "20260915_145843.jpg": {
    title: "A Peaceful Fishing Day",
    description: "A quiet scene by the water, showing a peaceful afternoon surrounded by trees and nature."
  },

  "20260915_145921.jpg": {
    title: "April, Beautiful",
    description: "A cheerful April-themed journal page filled with greenery, handmade details and a little reminder to stay cool."
  },

  "20260915_150001.jpg": {
    title: "Summer on Paper",
    description: "A bright summer journal page combining flowers, sweets, handmade notes and playful details."
  },

  "20260915_150013.jpg": {
    title: "Music in My Journal",
    description: "A creative music-themed page made with handmade paper elements, musical objects and colourful details."
  },

  "20260915_150040.jpg": {
    title: "Have a Nice Day",
    description: "A cheerful floral journal page built around green tones, handmade flowers and a positive message."
  },

  "20260915_174238.jpg": {
    title: "A Peaceful Neighborhood",
    description: "A simple neighborhood scene with trees, a green garden, a house, a road, a fence and an open gate."
  }
};

fetch("https://api.github.com/repos/ravinakumawat529-cpu/art_journal/contents/")
  .then(response => response.json())
  .then(files => {
    gallery.innerHTML = "";

    files
      .filter(file => file.name.toLowerCase().endsWith(".jpg"))
      .forEach((file, index) => {
        const info = artworkInfo[file.name] || {
          title: `Artwork ${index + 1}`,
          description: "Original artwork from my creative journal."
        };

        const card = document.createElement("article");
        card.className = "card";

        card.innerHTML = `
          <img src="${file.download_url}" alt="${info.title}">
          <h3>${info.title}</h3>
          <p>${info.description}</p>
        `;

        gallery.appendChild(card);
      });
  })
  .catch(error => {
    gallery.innerHTML = "<p>Gallery could not be loaded.</p>";
    console.error(error);
  });
