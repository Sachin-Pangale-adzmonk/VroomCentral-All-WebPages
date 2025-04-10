// login section start
document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector(".btn-custom");
  const profileContainer = document.querySelector(".profile-container");
  const logoutButton = document.getElementById("logout");

  // Check if user is logged in
  if (localStorage.getItem("isLoggedIn") === "true") {
      profileContainer.style.display = "block";
      loginButton.style.display = "none";
  } else {
      profileContainer.style.display = "none";
      loginButton.style.display = "block";
  }
  

  // Handle login
  document.querySelector("#get-otp button").addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission
      localStorage.setItem("isLoggedIn", "true");
      profileContainer.style.display = "block";
      loginButton.style.display = "none";
      document.getElementById("id01").style.display = "none"; // Close modal
  });

  // Redirect to home page when profile photo is clicked
  profileContainer.addEventListener("click", function () {
      if (localStorage.getItem("isLoggedIn") === "true") {
          window.location.href = "account-setting.html"; // Redirect to home page
      }
  });

  // Logout functionality (Right Click on Profile Picture)
  profileContainer.addEventListener("contextmenu", function (event) {
      event.preventDefault(); // Prevent the default right-click menu
      if (confirm("Do you want to logout?")) {
          localStorage.removeItem("isLoggedIn");
          profileContainer.style.display = "none";
          loginButton.style.display = "block";
          window.location.href = "Home.html"; // Redirect to Home Page
      }
  });

  // Logout functionality when clicking the logout link
  if (logoutButton) {
      logoutButton.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default link behavior
          if (confirm("Are you sure you want to log out?")) {
              localStorage.removeItem("isLoggedIn"); // Clear login data
              window.location.href = "Home.html"; // Redirect to Home Page
          }
      });
  }
});

// login section end 


const slider = document.querySelector(".news-box");
      const prevBtn = document.querySelector(".news-prev");
      const nextBtn = document.querySelector(".news-next");

      let newsindex = 0;
      let newscards = document.querySelectorAll(".unique-card");
      let newscardWidth = newscards[0].offsetWidth + 24; // Get the width of a single card including the gap
      let newsautoSlideInterval;

      function updateSliderPosition() {
        slider.style.transform = `translateX(-${newsindex * newscardWidth}px)`;
      }

      function moveSlide(next = true) {
        if (next) {
          newsindex = (newsindex + 1) % newscards.length;
        } else {
          newsindex = (newsindex - 1 + newscards.length) % newscards.length;
        }
        updateSliderPosition();
      }

      function startAutoSlide() {
        newsautoSlideInterval = setInterval(() => moveSlide(true), 3000);
      }

      function resetAutoSlide() {
        clearInterval(newsautoSlideInterval);
        startAutoSlide();
      }

      nextBtn.addEventListener("click", () => {
        moveSlide(true);
        resetAutoSlide();
      });

      prevBtn.addEventListener("click", () => {
        moveSlide(false);
        resetAutoSlide();
      });

      // Start auto-sliding on page load
      startAutoSlide();


// login popup 
// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};