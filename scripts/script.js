function showDropdownMenu() {
  var x = document.getElementById("dropdown-menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
