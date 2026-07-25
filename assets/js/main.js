/* 안태호 Portfolio — nav, scroll reveal, active section */
(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var links = document.getElementById('navLinks');
  var toggle = document.getElementById('navToggle');

  /* ---------- nav background on scroll (home page only) ---------- */
  if (nav && !nav.classList.contains('is-solid')) {
    var onScroll = function () {
      nav.classList.toggle('is-solid', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- mobile menu ---------- */
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- active section highlight (home page) ---------- */
  var sectionLinks = Array.prototype.filter.call(
    document.querySelectorAll('.nav-links a'),
    function (a) { return a.getAttribute('href').indexOf('#') === 0; }
  );

  if (sectionLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    sectionLinks.forEach(function (a) {
      var el = document.querySelector(a.getAttribute('href'));
      if (el) { map[el.id] = a; }
    });

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          sectionLinks.forEach(function (a) { a.classList.remove('is-active'); });
          if (map[entry.target.id]) { map[entry.target.id].classList.add('is-active'); }
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(map).forEach(function (id) {
      spy.observe(document.getElementById(id));
    });
  }

  /* ---------- stat count-up ---------- */
  var stats = document.querySelectorAll('.stat__num[data-count]');
  if (stats.length && 'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        countIO.unobserve(entry.target);

        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.querySelector('small');
        var suffixHTML = suffix ? suffix.outerHTML : '';
        var start = null;
        var dur = 1100;

        var step = function (ts) {
          if (start === null) { start = ts; }
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          var val = Math.round(target * eased);
          el.innerHTML = val.toLocaleString('ko-KR') + suffixHTML;
          if (p < 1) { requestAnimationFrame(step); }
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });

    stats.forEach(function (el) { countIO.observe(el); });
  }
})();
