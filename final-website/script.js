function validateForm() {

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all required fields.");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address.");
    return false;
  }

  return true;
}