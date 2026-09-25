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

  /* ---------- Galeri gambar bergantian ---------- */
  document.querySelectorAll('.post-content p').forEach(function (p) {
    var imgs = Array.prototype.filter.call(p.children, function (el) {
      return el.tagName === 'IMG';
    });
    if (imgs.length < 2) return;

    var wrap = document.createElement('div');
    wrap.className = 'img-carousel';

    var track = document.createElement('div');
    track.className = 'img-carousel-track';
    imgs.forEach(function (img, i) {
      img.className = 'img-carousel-slide';
      img.hidden = i !== 0;
      track.appendChild(img);
    });

    var nav = document.createElement('div');
    nav.className = 'img-carousel-nav';
    var prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'ic-prev';
    prevBtn.setAttribute('aria-label', 'Gambar sebelumnya');
    prevBtn.textContent = '<';
    var count = document.createElement('span');
    count.className = 'ic-count';
    var nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'ic-next';
    nextBtn.setAttribute('aria-label', 'Gambar berikutnya');
    nextBtn.textContent = '>';
    nav.appendChild(prevBtn);
    nav.appendChild(count);
    nav.appendChild(nextBtn);

    wrap.appendChild(track);
    wrap.appendChild(nav);
    p.replaceWith(wrap);

    var current = 0;
    function show(next) {
      imgs[current].hidden = true;
      current = (next + imgs.length) % imgs.length;
      imgs[current].hidden = false;
      count.textContent = (current + 1) + ' / ' + imgs.length;
    }
    show(0);
    prevBtn.addEventListener('click', function () { show(current - 1); });
    nextBtn.addEventListener('click', function () { show(current + 1); });
  });
})();
