const renameElement = document.querySelector('.font-semibold');
if (renameElement) {
  renameElement.textContent = 'BYTE.dev';
}

const element = document.querySelector('.flex.h-full.w-full.pb-2.md\\:pb-\\[8vh\\] h1.text-4xl.font-semibold.text-center.text-gray-200.dark\\:text-gray-600.ml-auto.mr-auto.mb-10.sm\\:mb-16.flex.gap-2.items-center.justify-center.flex-grow');
if (element) {
  element.remove();
}
