(function () {
  'use strict';

  var theme = new URLSearchParams(window.location.search).get('theme');
  if (theme && /^[a-z-]+$/.test(theme)) {
    var themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.href = 'themes/' + theme + '.css';
    document.head.append(themeLink);
  }

  var hours = document.querySelector('[data-hours]');
  var note = document.querySelector('[data-scent-note]');
  var chips = document.querySelectorAll('[data-scent]');

  function choose(chip) {
    chips.forEach(function (other) {
      other.setAttribute('aria-pressed', String(other === chip));
    });
    hours.textContent = chip.dataset.hours;
    note.textContent = chip.textContent + ': ' + chip.dataset.notes + '.';
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      choose(chip);
    });
  });

  var BAG_KEY = 'wick-hour-bag';
  var bag = document.getElementById('bag');
  var bagItems = document.querySelector('[data-bag-items]');
  var bagEmpty = document.querySelector('[data-bag-empty]');
  var bagTotal = document.querySelector('[data-bag-total]');
  var bagCount = document.querySelector('[data-bag-count]');

  function readBag() {
    try {
      return JSON.parse(localStorage.getItem(BAG_KEY)) || [];
    } catch (error) {
      return [];
    }
  }

  function writeBag(items) {
    try {
      localStorage.setItem(BAG_KEY, JSON.stringify(items));
    } catch (error) {
      return;
    }
  }

  function renderBag(items) {
    var total = items.reduce(function (sum, item) {
      return sum + item.price;
    }, 0);

    bagCount.textContent = items.length;
    bagTotal.textContent = '$' + total;
    bagEmpty.hidden = items.length > 0;
    bagItems.textContent = '';

    items.forEach(function (item) {
      var row = document.createElement('li');
      var name = document.createElement('span');
      var price = document.createElement('span');
      row.className = 'bag-item';
      name.textContent = item.name;
      price.textContent = '$' + item.price;
      row.append(name, price);
      bagItems.append(row);
    });
  }

  var items = readBag();
  renderBag(items);

  document.querySelectorAll('[data-add]').forEach(function (button) {
    button.addEventListener('click', function () {
      items = items.concat([{ name: button.dataset.name, price: Number(button.dataset.price) }]);
      writeBag(items);
      renderBag(items);
    });
  });

  document.querySelector('.bag-button').addEventListener('click', function () {
    bag.showModal();
  });

  document.querySelector('[data-bag-close]').addEventListener('click', function () {
    bag.close();
  });

  document.documentElement.classList.add('js');

  var targets = document.querySelectorAll(
    '.section-title, .hero-lede, .scent-picker, .scent-table tbody tr, .about-figure, .about-text, ' +
    '.visit-statement, .visit-links, .invitation, .footer-side, .credits'
  );
  var stages = document.querySelectorAll('.stage');

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) {
      el.classList.add('is-in');
    });
    stages.forEach(function (el) {
      el.classList.add('is-in');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function (el) {
    var siblings = el.parentNode.children;
    var position = Array.prototype.indexOf.call(siblings, el);
    el.classList.add('reveal');
    el.style.setProperty('--delay', Math.min(position, 4) * 80 + 'ms');
    observer.observe(el);
  });

  stages.forEach(function (el) {
    observer.observe(el);
  });
})();
