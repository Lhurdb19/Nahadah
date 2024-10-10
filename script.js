//PAGE LOADING FUNCTION()
window.addEventListener("load", ()=> {
  //Hide the loading screen
  document.getElementById("loading").style.display = "none";

  // Show the content 
  document.getElementById("content").style.display = "block";
});


// Responsiveness (Hamburger)
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "none" 
}
function showSidebar() {
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "flex";
};


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

const toggleButton = document.getElementById("toggleButton");
const commentBox = document.getElementById("commentBox");
const toggleIcon = document.getElementById("toggleIcon");

toggleButton.addEventListener("click", ()=> {
  //Toggle the visibility of the comment box
  commentBox.classList.toggle("hidden");

  //Change the icon based on the visibility of the comment box 
  if (commentBox.classList.contains("hidden")) {
    toggleIcon.classList.remove("fa-circle-xmark");
    toggleIcon.classList.add("fa-comment");

  } else{
    toggleIcon.classList.remove("fa-comment");
    toggleIcon.classList.add("fa-circle-xmark");
  }
});



//MY DATABASE BAR CHART
const nameArray = ["1998-2003", "2003-2008", "2008-2013", "2013-2018", "2018-2023", "2023-2024"];
const numberArray = [90, 172, 297, 255, 355, 420];

const data = [{
  x:nameArray,
  y:numberArray,
  type:"bar",
  // orientation:"v",
  marker: {color:"rgba(2,0,565,0.7)"}
}];

const layout = {title:"Number of our students every five years."};

Plotly.newPlot("myPlot", data, layout);



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

//Log In Form Validation

document.getElementById("logInForm").addEventListener("submit", (event)=> {
  event.preventDefault();

  if (validForm()) {
    document.write("You have Log in successfully!");
  }
});

function validForm() {
  let logEmail = document.getElementById("logEmail");
  let logPassword = document.getElementById("logPassword");
  let msgError = document.getElementById("msgError");

  msgError.innerHTML = "";

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0]{2,6}$/;

  if(!emailPattern.test(logEmail)) {
    document.getElementById("msgError").innerHTML = "Enter a valid Email Address."
    return false;
  }

  // const passPattern = /^(?=.*[A-Za-a])(?=.*\d)[A-Za-z\d]{6,}$/;
  // if(logPassword === "") {
  //   msgError.innerHTML = "Password must be at least 6 characters long with special characters.";
  //   return false;
  // }

  let passwordError = "";
  if (logPassword.length < 6) {
    passwordError = "Password must be at least 6 characters long.";
  }
  else if (!/[A-Z]/.test(logPassword)) {
    passwordError = "Password must contain at least one uppercase letter.";
  }
  else if (!/[a-z]/.test(logPassword)) {
    passwordError = "Password must contain at least one lowercase letter.";
  }
  else if (!/[0-9]/.test(logPassword)) {
    passwordError = "Password must contain at least one number.";
  }
  else if(!/[!@#\$%\^&\*]/.test(logPassword)) {
    passwordError = "Password must contain at least one special character.";
  }
  if (passwordError) {
    document.getElementById("passwordError").innerText = passwordError;
    return false;
  }


  return true;
}

// Sign Up Form Validation

let errorTimeout;


function validateForm() {
  document.querySelectorAll(".error").forEach(el=> el.innerHTML = "");
  clearTimeout(errorTimeout);
  

  let firstName = document.getElementById("firstName").value;
  let middleName = document.getElementById("middleName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let address = document.getElementById("address").value;
  let country = document.getElementById("country").value;
  let password = document.getElementById("password").value;
  let conPass = document.getElementById("conPass").value;

  let isValid = true;


  if(firstName.trim() === "") {
    document.getElementById("firstError").innerHTML = "First Name is required";
    isValid = false
  }

  if(middleName.trim() === "") {
    document.getElementById("middleError").innerHTML = "Middle Name is required";
    isValid = false
  }

  if(lastName.trim() === "") {
    document.getElementById("lastError").innerHTML = "Last Name is required";
    isValid = false
  }

  //Email pattern: Email must be valid
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0]{2,6}$/;

  if(!emailPattern.test(email)) {
    document.getElementById("emailError").innerHTML = "Enter a valid Email Address."
    isValid = true;
  }

  //Phone Number Pattern: Phone number must be exact 10 digits
  const phonePattern = /^\d{10}$/;
  if(!phonePattern.test(phoneNumber)) {
    document.getElementById("numberError").innerHTML = "Phone number must be 10 digits.";
    isValid = true;
  }

  if(address.trim() === "") {
    document.getElementById("addressError").innerHTML = "Address is required";
    isValid = false
  }

  if(country.trim() === "" || country === null) {
    document.getElementById("countryError").innerHTML = "Please choose a Country";
    isValid = false
  }

  
  let passwordError = "";
  if (password.length < 6) {
    passwordError = "Password must be at least 6 characters long.";
  }
  else if (!/[A-Z]/.test(password)) {
    passwordError = "Password must contain at least one uppercase letter.";
  }
  else if (!/[a-z]/.test(password)) {
    passwordError = "Password must contain at least one lowercase letter.";
  }
  else if (!/[0-9]/.test(password)) {
    passwordError = "Password must contain at least one number.";
  }
  else if(!/[!@#\$%\^&\*]/.test(password)) {
    passwordError = "Password must contain at least one special character.";
  }

  if (conPass.trim() === ""){
    document.getElementById("conPassError").innerText = "Confirm password is required.";
    isValid = false;
  }
  else if (conPass != password){
    document.getElementById("conPassError").innerText = "Confirm password must match with password."
    isValid = false;
    
  }
   else{
    document.getElementById("conPassError").innerText = "";
  }

  if (passwordError) {
    document.getElementById("passwordError").innerText = passwordError;
    isValid = false;
  }

  
  if (!isValid){
    errorTimeout = setTimeout(()=> {
      document.querySelectorAll(".error").forEach(el => el.innerHTML = "");
    }, 3000); //3000 milliseconds = 3 seconds
  }
  
  else {document.getElementById("successMsg").innerHTML = "Submitted successfully.";
    myForm.reset();
    setTimeout(()=>{
      document.getElementById("successMsg").innerHTML = "";
    }, 5000); //5000 milliseconds = 5 seconds
  }
}



