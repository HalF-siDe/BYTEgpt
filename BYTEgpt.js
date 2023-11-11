javascript:(function(){
  const e = document.querySelector('.font-semibold');
  if (e) {
    e.textContent = 'BYTE.dev';
  }

  const t = document.querySelector('.flex.h-full.w-full.pb-2.md\\:pb-\\[8vh\\] h1.text-4xl.font-semibold.text-center.text-gray-200.dark\\:text-gray-600.ml-auto.mr-auto.mb-10.sm\\:mb-16.flex.gap-2.items-center.justify-center.flex-grow');
  if (t) {
    t.remove();
  }

  const n = document.querySelector('img[data-nimg="1"]');
  if (n) {
    n.src = 'https://raw.githubusercontent.com/HalF-siDe/BYTEgpt/main/BYTE.ico';
    alert('Bookmarklet works!');
  } else {
    alert('Check the Discord/GitHub for updates');
  }
})();
