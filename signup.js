let errorTimeout;

function validateForm() {
  document.querySelectorAll('.error').forEach(el => el.innerHTML = '');
  clearTimeout(errorTimeout);

  let firstName = document.getElementById("firstName").value;
  let middleName = document.getElementById("middleName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let address = document.getElementById("address").value;
  let passwordInput = document.getElementById("passCode").value;
  let conPass = document.getElementById("conPass").value;
  // let successMsg = document.getElementById("successMsg").value;

  let isValid = true;



  if (firstName.trim() === "") {
    document.getElementById("firstNameError").innerText = "First name is required";
    isValid = true;
  }

  if (middleName.trim() === "") {
    document.getElementById("middleNameError").innerText = "Middle name is required";
    isValid = false;
  }

  if (lastName.trim() === "") {
    document.getElementById("lastNameError").innerText = "Last name is required";
    isValid = false;
  }

  if (email.trim() === "") {
    document.getElementById("emailError").innerText = "Email ID is required";
    isValid = false;

  }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email format";
    isValid = false;
  }

  if (phoneNumber.trim() === "") {
    document.getElementById("phoneNumberError").innerText = "Phone number is required";
    isValid = false;
  }else if (!/^\d{10}$/.test(phoneNumber)) {
    document.getElementById("phoneNumberError").innerText = "Phone number must be 10 digits";
    isValid = false;
  }

  if (address.trim() === "") {
    document.getElementById("addressError").innerText = "Address is required";
    isValid = false;
  }

  let passwordError = "";
  if (passwordInput.length < 8) {
    passwordError = "Password must be at least 8 characters long.";
  }
  else if (!/[A-Z]/.test(passwordInput)) {
    passwordError = "Password must contain at least one uppercase letter.";
  }
  else if (!/[a-z]/.test(passwordInput)) {
    passwordError = "Password must contain at least one lowercase letter.";
  }
  else if (!/[0-9]/.test(passwordInput)) {
    passwordError = "Password must contain at least one number.";
  }
  else if(!/[!@#\$%\^&\*]/.test(passwordInput)) {
    passwordError = "Password must contain at least one special character.";
  }

  if (conPass.trim() === ""){
    document.getElementById("conPassError").innerText = "Confirm password is required.";
    isValid = false;
  }

  else if (conPass != passwordInput){
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
      document.querySelectorAll('.error').forEach(el => el.innerHTML = '');
    }, 3000); //3000 milliseconds = 3 seconds
  }
  
  else
  {document.write("Submitted successfully!.");
    signupForm.reset();
    setTimeout(()=>{
      document.getElementById("successMsg").innerHTML = "";
    }, 5000); //5000 milliseconds = 5 seconds
  }
}
