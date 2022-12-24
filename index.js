//code for the slideshow **********

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  //if last slide > go back to first
  if (n > slides.length) 
    {slideIndex = 1}

  //if first slide > go to last 
  if (n < 1) 
    {slideIndex = slides.length}

  //hide all of the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //make all the classNames from active to ""
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  //slideIndex-1 is the current slide
  //make it block and set it to active
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//end code for the slideshow ************\

//wash
//polish
//steam
//https://bluebeacon.com/

//price page
//picture page