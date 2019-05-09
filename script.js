// /* Carousel */

// var i = 0;
// var images = [];
// var time = 3000;

// images[0] = "./image-1.jpg";
// images[1] = "./image-2.jpg";
// images[2] = "./image-3.png";
// images[3] = "./image-4.jpg";

// function changeImg(){
//   document.slide.src = images[i];

//   if(i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }

//   setTimeout("changeImg()", time)
// }

// window.onload = changeImg;

var images = document.getElementById("divId").getElementsByTagName("img");

function changeImageOnClick(event) {
  event = event || window.event;
  var targetElement = event.target || event.srcElement;

  if (targetElement.tagName == "IMG") {
    mainImage.src = targetElement.getAttribute("src");
  }
}
