document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav__toggle');
  var center = document.querySelector('.nav__center');
  if (toggle && center) {
    toggle.addEventListener('click', function () {
      center.classList.toggle('open');
    });
  }
});
