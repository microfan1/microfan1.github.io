(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('primary-navigation');
  if (!toggle || !menu) return;

  toggle.hidden = false;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.dataset.open = String(open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia('(min-width: 58.01rem)').addEventListener('change', function (event) {
    if (event.matches) setOpen(false);
  });
}());
