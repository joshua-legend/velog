const backgroundImages = ["0.jpg","1.jpg","2.jpg"];

const chosenImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.append(bgImage);