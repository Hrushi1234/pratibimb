var ham = document.getElementById("hamburger")

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  ham.style.display='none'
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  ham.style.display = 'block'
  document.getElementById("myNav").style.width = "0%";
}
