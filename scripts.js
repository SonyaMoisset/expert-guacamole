const PANELS = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

PANELS.forEach(panel => panel.addEventListener('click', toggleOpen));
PANELS.forEach(panel => panel.addEventListener('transitionend', toggleActive));
