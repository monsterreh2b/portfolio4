var next = document.querySelector(".nextBtn");
var prev = document.querySelector(".prevBtn");

console.log(next);
console.log(prev);

var slides = document.querySelectorAll(".slide");
console.log(slides);

slides.forEach(function (slide, index) {
  console.log(slide);
  console.log(index);
   slide.style.left = `${index * 100}%`
});

var counter = 0;

next.addEventListener("click", function () {
  counter++;
  console.log(counter);
  carousel();
});

prev.addEventListener("click", function () {
  counter--;
  console.log(counter);
  carousel();
});

function carousel() {
    if (counter == slides.length) {
        counter = 0;
    }

    if (counter < 0) {
        counter = slides.length - 1;
    }
   slides.forEach(function (slide) {
    
     slide.style.transform = `translateX(-${counter * 100}%)`;
   });
}