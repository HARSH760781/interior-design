document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const currentlyOpen = document.querySelector(
      '.faq-answer[style="display: block;"]'
    );
    const currentlyOpenIcon = currentlyOpen
      ? currentlyOpen.previousElementSibling.querySelector(".toggle-icon")
      : null;

    if (currentlyOpen && currentlyOpen !== item.nextElementSibling) {
      currentlyOpen.style.display = "none";
      currentlyOpenIcon.textContent = "+";
    }

    const answer = item.nextElementSibling;
    const icon = item.querySelector(".toggle-icon");
    if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.textContent = "+";
    } else {
      answer.style.display = "block";
      icon.textContent = "-";
    }
  });
});

function toggleMenu() {
  const menu = document.querySelector(".menu ul");
  const menu_icon = document.querySelector(".menu-icon");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    menu_icon.innerHTML = "&#9776;";
  } else {
    menu_icon.innerHTML = "X";
    menu.style.display = "block";
  }
}
