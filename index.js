const contactList = [];

// The elements we are working with //
let inputField = document.getElementById("inputfield");
let inputButton = document.getElementById("submitbtn");
let inputForm = document.getElementById("input2");

// Email Format //
let emailFormat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

let errorTracker = false;

// Function for pushing email to contact list // 
let pushContact = (email) => {
  contactList.push(email);
};

// Adding a submit event listener to our inputForm //
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputField.value);
  // If the email format matches the input value entered //
  // we use our push contact function to push that value //
  // to our contact list || Lines 29 & 30 clear display //
  if (emailFormat.test(inputField.value)) {
    pushContact(inputField.value);
    inputField.value = "";
    let error = document.getElementById("err");
    error.style.display = "none";
    // Here we set the error tracker to false to get rid of error meessage //
    errorTracker = false;
    console.log(contactList);
  } else {
    // If the email format does not match the input value entered //
    // we return the error.  Lines 37-39 used to create error message //
    if (!errorTracker) {
      let err = document.createElement("p");
      err.id = "err";
      err.innerHTML = "Please provide a valid email address";
      inputForm.insertAdjacentElement("afterend", err);
      console.log("invid email");
      // Here we set the error tracker to true to display error message //
      errorTracker = true;
    }
  }
});
