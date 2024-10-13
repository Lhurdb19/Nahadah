//Log In Form Validation

document.getElementById("loginForm").addEventListener("submit", (event)=> {
  event.preventDefault();

  // if (validForm()) {
  //   document.write("You have Log in successfully!");
  // }

  let isValid = true;
  
  let logEmail = document.getElementById("logEmail").value.trim();
  let logPassword = document.getElementById("password").value;
  
  
  document.getElementById("errorEmail").textContent = "";
  document.getElementById("errorPassword").textContent = "";
  

  
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0]{2,6}$/;
  
  if(!emailPattern.test(logEmail)) {
    document.getElementById("errorEmail").innerHTML = "Enter a valid Email Address."
    isValid = false;
  }
  
  if (logPassword.trim() < 8) {
    document.getElementById("errorPassword").innerHTML = "Password must be at least 8 characters long.";
    isValid = false;
  }

  if(isValid){
    setTimeout(()=> {
      document.getElementById("errorEmail").innerHTML = "";
      document.getElementById("errorPassword").innerHTML = "";
    }, 3000);
  }

  if(isValid) {
    setTimeout( ()=> {
      document.write("Login Successfully!");
      document.getElementById("loginForm").submit();
    }, 2000)
  
  }


});
