(function () {
  'use strict';

  /* ---------- Menu samping ---------- */
  var openBtn = document.querySelector('.menu-btn');
  var drawer = document.getElementById('drawer');
  var scrim = document.querySelector('.scrim');
  var closeBtn = document.querySelector('.drawer-close');
  var behind = document.querySelectorAll('main, .site-footer');

  function setBehind(state) {
    behind.forEach(function (el) { el.inert = state; });
  }

  if (openBtn && drawer && scrim) {
    drawer.inert = true;

    var openMenu = function () {
      drawer.inert = false;
      drawer.classList.add('is-open');
      scrim.hidden = false;
      requestAnimationFrame(function () { scrim.classList.add('is-open'); });
      openBtn.setAttribute('aria-expanded', 'true');
      setBehind(true);
      closeBtn.focus();
    };

    var closeMenu = function () {
      drawer.classList.remove('is-open');
      scrim.classList.remove('is-open');
      openBtn.setAttribute('aria-expanded', 'false');
      setBehind(false);
      drawer.inert = true;
      setTimeout(function () { scrim.hidden = true; }, 200);
      openBtn.focus();
    };

    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    scrim.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeMenu();
    });
  }

  /* ---------- Selengkapnya / Ringkas ---------- */
  document.querySelectorAll('.more-btn').forEach(function (btn) {
    var base = btn.getAttribute('data-target');
    var short = document.getElementById(base + '-ringkas');
    var full = document.getElementById(base + '-penuh');
    if (!short || !full) return;

    btn.addEventListener('click', function () {
      var expand = btn.getAttribute('aria-expanded') !== 'true';
      short.hidden = expand;
      full.hidden = !expand;
      btn.setAttribute('aria-expanded', String(expand));
      btn.textContent = expand ? btn.getAttribute('data-less') : btn.getAttribute('data-more');

      if (!expand) {
        var card = btn.closest('.card');
        if (card && card.getBoundingClientRect().top < 0) {
          card.scrollIntoView({ block: 'start' });
        }
      }
    });
  });
})();
