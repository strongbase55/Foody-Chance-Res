function auth() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "foody chance" && pass === "welcome") {
    window.location.href = "foody-chance.html";
  } else {
    window.alert("Invalid Password or Username");
  }
}
