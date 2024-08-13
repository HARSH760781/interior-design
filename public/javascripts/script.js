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

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    },
    {
      threshold: 0.1, // Adjust threshold as needed
    }
  );

  // Select all elements with animations
  const elementsToAnimate = document.querySelectorAll(
    ".fade-in, .fade-in-delay, .fade-up, .slide-in-divider, .bounce-button"
  );

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    },
    {
      threshold: 0.1, // Adjust threshold as needed
    }
  );

  // Select all elements with animations
  const elementsToAnimate = document.querySelectorAll(
    ".marquee-animation, .zoom-in-image, .fade-in-notice, .fade-in-text, .bounce-in-button"
  );

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
});

// service section slider //
document.addEventListener("DOMContentLoaded", function () {
  const serviceSliders = document.querySelectorAll(".service_slider");

  serviceSliders.forEach((slider, index) => {
    const images = slider.querySelector(".service_images");
    const prevButton = slider.querySelector(".prev");
    const nextButton = slider.querySelector(".next");
    const pagination = slider.parentNode.querySelector(".pagination");

    if (!pagination) {
      console.error("Pagination element not found for slider", slider);
      return; // Skip this slider if pagination is missing
    }

    const totalImages = images.children.length;
    let currentIndex = 0;

    // Clone first and last images to create a smooth cyclic effect
    const firstImage = images.children[0].cloneNode(true);
    const lastImage = images.children[totalImages - 1].cloneNode(true);
    images.appendChild(firstImage);
    images.insertBefore(lastImage, images.children[0]);

    const dots = [];

    // Initialize pagination
    for (let i = 0; i < totalImages; i++) {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      pagination.appendChild(dot);
      dots.push(dot);
    }

    function updatePagination() {
      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentIndex);
      });
    }

    function moveToIndex(index) {
      images.style.transition = "transform 0.5s ease-in-out";
      images.style.transform = `translateX(-${(index + 1) * 100}%)`; // +1 due to cloned element at the start
      currentIndex = index;
      updatePagination();
    }

    function nextSlide() {
      if (currentIndex === totalImages - 1) {
        moveToIndex(totalImages); // Move to the cloned first image
        setTimeout(() => {
          images.style.transition = "none";
          images.style.transform = `translateX(-100%)`;
          currentIndex = 0; // Reset to actual first image
          updatePagination(); // Ensure pagination is correct after the reset
        }, 500); // Match the transition duration
      } else {
        moveToIndex(currentIndex + 1);
      }
    }

    function prevSlide() {
      if (currentIndex === 0) {
        moveToIndex(-1); // Move to the cloned last image
        setTimeout(() => {
          images.style.transition = "none";
          images.style.transform = `translateX(-${totalImages * 100}%)`;
          currentIndex = totalImages - 1; // Reset to actual last image
          updatePagination(); // Ensure pagination is correct after the reset
        }, 500); // Match the transition duration
      } else {
        moveToIndex(currentIndex - 1);
      }
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        moveToIndex(idx);
      });
    });

    // Initialize position to show the first image correctly
    images.style.transform = `translateX(-100%)`;
  });
});

/* end here service slider */

let currentIndex = 0;

function autoSlide() {
  const sliderImages = document.querySelector(".slider-images");
  const totalImages = sliderImages.children.length;

  // Update the index and wrap around
  currentIndex = (currentIndex + 1) % totalImages;

  // Move to the next slide
  sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Start the auto-slide function every 3 seconds
setInterval(autoSlide, 3000);

function toggleMenu() {
  const menu = document.querySelector(".menu ul");
  const menu_icon = document.querySelector(".menu-icon");

  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    menu_icon.classList.remove("close");
    menu_icon.innerHTML = "&#9776;";
  } else {
    menu.classList.add("show");
    menu_icon.classList.add("close");
    menu_icon.innerHTML = "&#10006;";

    // Trigger reflow to restart animations for each item
    const items = document.querySelectorAll(".menu ul li");
    items.forEach((item, index) => {
      item.style.animation = "none";
      item.offsetHeight; /* Trigger reflow */
      item.style.animation = ""; /* Reapply the animation */
    });
  }
}
