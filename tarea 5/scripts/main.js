const breakpoint = parseInt(getComputedStyle(document.body).getPropertyValue("--bs-breakpoint-md").slice(0,-2));
let once = false;

function updateLateral(shouldIsIn) {
  const lateral_container = document.getElementById("lateral-slider-container");
  const lateral = document.getElementById("lateral-slider");
  if(shouldIsIn) {
    lateral_container.hidden = true;
    lateral.classList.remove("position-fixed");
    document.getElementById("navbar-collapsable-body").appendChild(lateral);
  } else {
    lateral_container.hidden = false;
    lateral_container.appendChild(lateral);
    lateral.classList.add("position-fixed");
  }
}

function checkNavPagesSize() {
  if(window.innerWidth < breakpoint) {
    if(!once) {
      once = true;
      updateLateral(true);
    }
  } else {
    if(once) {
      once = false;
      updateLateral(false);
    }
  }
}

checkNavPagesSize();
window.addEventListener("resize", checkNavPagesSize);