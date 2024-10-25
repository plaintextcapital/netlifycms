var splash = $(".ReactModalPortal");
var menu = $(".mobile-menu");

$(window).on("load", function() {
  // Show popup if no 'visited=true' cookie is set
  if (document.cookie.indexOf("visited=true") === -1) {
    splash.fadeOut(200); // Initially hide the popup
    setTimeout(function() {
      splash.fadeIn(200); // Show it after 5 seconds
    }, 5000);
  }
});

// Close the popup when clicking outside the modal content
$(".ReactModal__Overlay--after-open").on("click", function(e) {
  // Check if the click is outside of the '.modal-content' element
  if (!$(e.target).closest('.modal-content').length) {
    document.cookie = "visited=true; path=/"; // Set the cookie to prevent the popup from showing again
    splash.fadeOut(200); // Hide the popup
  }
});

// Toggle popup visibility when the newsletter button is clicked
$(".button-newsletter").on("click", function() {
  splash.fadeToggle(200); // Toggle popup visibility
});

// Open and close mobile menu
$(".open-menu").on("click", function() {
  menu.slideDown(200);
});
$(".close-menu").on("click", function() {
  menu.slideUp(200);
});

// Fixes Netlify Identity email confirmation
// Ref https://answers.netlify.com/t/common-issue-netlify-cms-git-gateway-email-not-confirmed/10690/26
if (window.location.hash.includes('_token=')) {
  window.location.assign('/admin/' + window.location.hash);
}
