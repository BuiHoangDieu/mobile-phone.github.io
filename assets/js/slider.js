// var slideIndex = [1,1];
// var slideId = ["mySlides1"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   var i;
//   var x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}    
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex[no]-1].style.display = "block";  
// }
// 
var x = document.getElementsByTagName('a');
for (var i = 0; i< x.length; i++) {
  x[i].onclick = (e) => {
    e.preventDefault()
  }
}



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    console.log(slides[i]);
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}



var carouselIndex = 0;
slideCarousel()

function slideCarousel() {
  var i;
  var carouselArray = document.getElementsByClassName('slider__carousel');
  for (i = 0; i < carouselArray.length; i++) {
    carouselArray[i].style.display = "none";
    console.log(carouselArray[i]);
  }

  carouselIndex++;
  if (carouselIndex > carouselArray.length) {carouselIndex = 1}
  carouselArray[carouselIndex-1].style.display = "block";
  setTimeout(slideCarousel, 2500);
}
