function showHoverMenu() {
  var x = document.getElementById("hover-menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
    console.log(1);
  } else {
    x.style.display = "flex";
    console.log(2);
  }
}
