(function () {
  'use strict';

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
})();
