const contactList = [];

let inputField = document.getElementById("inputfield");
let inputButton = document.getElementById("submitbtn");
let inputForm = document.getElementById("input2");
let emailFormat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
let errorTracker = false;
let pushContact = (email) => {
  contactList.push(email);
};

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputField.value);
  if (emailFormat.test(inputField.value)) {
    pushContact(inputField.value);
    inputField.value = "";
    let error = document.getElementById("err");
    error.style.display = "none";
    errorTracker = false;
    console.log(contactList);
  } else {
    if (!errorTracker) {
      let err = document.createElement("p");
      err.id = "err";
      err.innerHTML = "Please provide a valid email address";
      inputForm.insertAdjacentElement("afterend", err);
      console.log("invid email");
      errorTracker = true;
    }
  }
});
