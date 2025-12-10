console.log("Preload running...");

// loop through all the content you want to preload
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images
preload(
  "images/ancient chest.png",
  "images/basement.jpg",
  "images/bleh.png",
  "images/break.png",
  "images/chestlocked.png",
  "images/Circle.png",
  "images/godzilla1975.jpg",
  "images/Lightbulb.png",
  "images/Old note card 1.png",
  "images/Old note card 2.png",
  "images/Old note card 3.png",
  "images/Old note card 4.png",
  "images/Old note card 4.png",
  "images/Old note card.png",
  "images/Old_ahh_lock.png",
  "images/Old_riddle_card__1.png",
  "images/Old_riddle_card.png",
  "images/retro_key.png.png",
  "images/star.png",
  "images/TheeKey.png",
  "images/Triangle1.png",
  "images/X1.png",
  "images/GreenA.png"
);
