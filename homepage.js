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
