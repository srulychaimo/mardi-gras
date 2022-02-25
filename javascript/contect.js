function validation() {
  let form = document.getElementById("form");
  let email = document.getElementById("email").value;
  let emailSmall = document.getElementById("emailSmall").value;
  let span = document.getElementById("spanEmail");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern) || emailSmall.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    span.innerHTML = "Your email address is valid.";
    span.style.color = "#00ff00";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    span.innerHTML = "Please enter a valid email address.";
    span.style.color = "#ff0000";
  }
}
