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
