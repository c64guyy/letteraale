
AOS.init();

function toggleDetails(el) {
  const details = el.querySelector('.details');
  details.style.display = (details.style.display === 'block') ? 'none' : 'block';
}
