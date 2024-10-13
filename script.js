//PAGE LOADING FUNCTION()
window.addEventListener("load", ()=> {
  //Hide the loading screen
  document.getElementById("loading").style.display = "none";

  // Show the content 
  document.getElementById("content").style.display = "block";
});


// Responsiveness (Hamburger)

const handburger = document.querySelector(".handburger")
const navbar = document.querySelector(".navbar");


handburger.addEventListener("click", (e) => {
    e.preventDefault()
    handburger.classList.toggle("active");
    navbar.classList.toggle("active")
});



document.querySelectorAll(".navbar li").forEach(n => n.addEventListener("click", ()=>{
    handburger.classList.remove("active");
    navbar.classList.remove("active");
}))


//DROPDOWN FUNCTION()


//Clock Display
function clock() {
  let today = new Date();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  // let day = h<23 ? '00' : '23';

  h = h<10? '0' + h: h;
  m = m<10? '0' + m: m;
  s = s<10? '0' + s: s;

  document.getElementById('hours').innerHTML = h;
  document.getElementById('mins').innerHTML = m;
  document.getElementById('secs').innerHTML = s;
} let inter = setInterval(clock, 400)



//Search box function()

function filterContent() {
  //Get the search query
  let searchInput = document.getElementById("searchBox").value.toLowerCase();

  //Get all the content paragraphs to filter
  let contentParagraphs = document.querySelectorAll(".searchable");

  //Loop through paragraphs and hide those that don't match the search query
  contentParagraphs.forEach(paragragh => {
    if (paragragh.textContent.toLowerCase().includes(searchInput)) {
      paragragh.style.display = "block"; // Show the paragraph if it matches
    } else {
      paragragh.style.display = "none"; //Hide the paragraph if it doesn't match
    }
  })
}

//Slide Show Function()

let slideIndex = 1;
showSlides(slideIndex);

//Next/Previous button
function plusSlides(n) {
  showSlides(slideIndex += n)
}

//Thumbnail image control

function currentSlides(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslide");
  let dots = document.getElementsByClassName("dot")

  if (n > slides.length) {
    slideIndex = 1};
    if (n < 1) {
      slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      } 
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
}



//Comment Box Function() Using Font Awesome Icon

// const toggleButton = document.getElementById("toggleButton");
// const commentBox = document.getElementById("commentBox");
// const toggleIcon = document.getElementById("toggleIcon");

// toggleButton.addEventListener("click", ()=> {
//   //Toggle the visibility of the comment box
//   commentBox.classList.toggle("hidden");

//   //Change the icon based on the visibility of the comment box 
//   if (commentBox.classList.contains("hidden")) {
//     toggleIcon.classList.remove("fa-circle-xmark");
//     toggleIcon.classList.add("fa-comment");

//   } else{
//     toggleIcon.classList.remove("fa-comment");
//     toggleIcon.classList.add("fa-circle-xmark");
//   }
// });




//Read More Function

function changeReadMore1() {
  const mycontent1 = document.getElementById("more1");
  const mybutton1 = document.getElementById("more1buttonid");

  if (mycontent1.style.display === "none" || mycontent1.style.display === "") {
    mycontent1.style.display = "block";
    mybutton1.textContent = "Read Less..."
  }else {
    mycontent1.style.display = "none";
    mybutton1.textContent = "Read More..."
  }
}

function changeReadMore2() {
  const mycontent2 = document.getElementById("more2");
  const mybutton2 = document.getElementById("more2buttonid");

  if (mycontent2.style.display === "none" || mycontent2.style.display === "") {
    mycontent2.style.display = "block";
    mybutton2.textContent = "Read Less..."
  }else {
    mycontent2.style.display = "none";
    mybutton2.textContent = "Read More..."
  }
}
function changeReadMore3() {
  const mycontent3 = document.getElementById("more3");
  const mybutton3 = document.getElementById("more3buttonid");

  if (mycontent3.style.display === "none" || mycontent3.style.display === "") {
    mycontent3.style.display = "block";
    mybutton3.textContent = "Read Less..."
  }else {
    mycontent3.style.display = "none";
    mybutton3.textContent = "Read More..."
  }
}


function changeReadMore4() {
  const mycontent4 = document.getElementById("more4");
  const mybutton4 = document.getElementById("more4buttonid");

  if (mycontent4.style.display === "none" || mycontent4.style.display === "") {
    mycontent4.style.display = "block";
    mybutton4.textContent = "Read Less..."
  }else {
    mycontent4.style.display = "none";
    mybutton4.textContent = "Read More..."
  }
}


// Sign Up Form Validation

