// Size the news viewport to the first ten entries, including wrapped lines.
document.querySelectorAll('.news-scroll').forEach(function (region) {
  var list = region.querySelector('ul');
  if (!list) return;

  function sizeNews() {
    var items = list.children;
    if (!items.length) return;
    var last = items[Math.min(10, items.length) - 1];
    var height = last.getBoundingClientRect().bottom
      - region.getBoundingClientRect().top + region.scrollTop;
    region.style.maxHeight = Math.ceil(height) + 'px';
  }

  sizeNews();
  if (document.fonts) document.fonts.ready.then(sizeNews);
  if (window.ResizeObserver) {
    new ResizeObserver(sizeNews).observe(list);
  } else {
    window.addEventListener('resize', sizeNews);
  }
});
