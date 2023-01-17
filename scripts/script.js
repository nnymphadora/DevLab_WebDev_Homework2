// Adding an event listener to the menu button seen in mobile and tablet, and creating an event handler function which toggles the menu by changing its display property.
const burgerButton = document.querySelector("#burger-button");
burgerButton.addEventListener("click", showDropdownMenu);

function showDropdownMenu() {
  var x = document.getElementById("dropdown-menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

// The following script shows and hides customer review cards on customer-icons mouseouver and mouseout

// Adding event listeners to all elements with the .customer-icon class
const customers = document.querySelectorAll(".customer-icon");

customers.forEach((customer) => {
  customer.addEventListener("mouseover", showReview);
  customer.addEventListener("mouseout", hideReview);
});

// showReview and hideReview functions use the event object to get the target element ID and then take advatage of the naming convention in order to target review cards by ID and show/hide them
function showReview(event) {
  var review = document.getElementById(event.target.id + "-text");
  review.style.display = "flex";
}

function hideReview(event) {
  var review = document.getElementById(event.target.id + "-text");
  review.style.display = "none";
}
