var next = document.querySelector(".nextBtn");
var prev = document.querySelector(".prevBtn");
var menu = document.querySelector(".sidebar-toggle");
var sidebar = document.querySelector(".sidebar");
var closeBtn = document.querySelector(".close-btn");

console.log(next);
console.log(prev);
console.log(menu);
console.log(sidebar);
console.log(closeBtn);

var slides = document.querySelectorAll(".slide");
console.log(slides);

function showMenu() {
  //console.log("menu hello");
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  }
  else {
    sidebar.classList.add("show-sidebar");
  }
}

menu.onclick = showMenu;
closeBtn.onclick = showMenu;

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