const imagemin = require('imagemin'),
  webp = require('imagemin-webp')
const outputFolder = './images/webp'
const produceWebP = async () => {
  await imagemin(['images/*.png'], {
    destination: outputFolder,
    plugins: [
      webp({
        lossless: true
      })
    ]
  })
  console.log('PNGs processed')
  await imagemin(['images/*.{jpg,jpeg}'], {
    destination: outputFolder,
    plugins: [
      webp({
        quality: 65
      })
    ]
  })
  console.log('JPGs and JPEGs processed')
}
produceWebP()

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#card-slider', {
		perPage    : 2,
		breakpoints: {
			640: {
				perPage: 1,
			},
		},
  } ).mount();
} );

var checkbox = document.getElementById("__BVID__73");
var label = document.getElementById("l1");
var text = document.getElementById("_123");

checkbox.addEventListener("click", function() {
  if (checkbox.checked) {
    text.style.color = "red";
  } else {
    text.style.color = "black";
  }
});


const myElement = document.getElementById('myElement');
myElement.addEventListener('click', function() {
    // click olayı için işlemler
});

'use strict';