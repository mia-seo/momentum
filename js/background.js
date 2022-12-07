const images = [
  "background1.jpeg",
  "background2.jpeg",
  "background3.jpeg",
  "background4.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgStyle = document.body.style;
bgStyle.backgroundImage = `url(img/${chosenImage})`;
bgStyle.backgroundSize = "cover";
bgStyle.backgroundPosition = "center";
bgStyle.backgroundRepeat = "no-repeat";
