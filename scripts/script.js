function showDropdownMenu() {
  var x = document.getElementById("dropdown-menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

// The following script handles the reviews section on the indexedDB.html

const customers = document.querySelectorAll(".customer-icon");

customers.forEach((customer) => {
  customer.addEventListener("mouseover", showReview);
});

customers.forEach((customer) => {
  customer.addEventListener("mouseout", hideReview);
});

function showReview(event) {
  var customerId = event.target.id;
  var reviewId = customerId + "-text";
  var review = document.getElementById(reviewId);
  review.style.display = "flex";
}

function hideReview(event) {
  var customerId = event.target.id;
  var reviewId = customerId + "-text";
  var review = document.getElementById(reviewId);
  review.style.display = "none";
}
