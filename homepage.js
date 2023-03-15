const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  if (themeToggleBtn.innerHTML === "Light Theme") {
    document.body.style.background = "white";
    document.body.style.color = "black";
    themeToggleBtn.innerHTML = "Dark Theme";
    themeToggleBtn.style.backgroundColor = "black";
    themeToggleBtn.style.color = "white";
  } else {
    document.body.style.background = "black";
    document.body.style.color = "white";
    themeToggleBtn.innerHTML = "Light Theme";
    themeToggleBtn.style.backgroundColor = "white";
    themeToggleBtn.style.color = "black";
  }
});
const formSubmitBtn = document.getElementById("form-submit");
let form = document.querySelector("form");
formSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    form.elements.name.value === "" &&
    form.elements.email.value === "" &&
    form.elements.message.value === ""
  ) {
    alert("Name, Email and Message are required to submit the form.");
  } else if (form.elements.email.value === "") {
    alert("Email is required to submit the form");
  } else if (form.elements.message.value === "") {
    alert("Message is required to submit the form");
  } else {
    alert(
      "Thanks for visiting the website. Contacting through this form is not yet implemented. Please use one of the Social media links provided below the form to contact me."
    );
  }
});
