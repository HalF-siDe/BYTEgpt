javascript:(function() {
    if (window.menuLoaded) {
        alert('Already loaded');
        return;
    }

    window.menuLoaded = true;
    let isMenuOpen = false;
    let isChecked = false;

    const initialCode = document.querySelector('script').innerText;

    const menu = document.createElement('div');
    menu.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: black; color: white; padding: 20px; z-index: 9999; display: none';

    const background = document.createElement('div');
    background.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 9998; display: none';

    document.body.appendChild(background);

    function toggleMenu() {
        if (isMenuOpen) {
            menu.style.display = 'none';
            background.style.display = 'none';
        } else {
            menu.style.display = 'block';
            background.style.display = 'block';
        }
        isMenuOpen = !isMenuOpen;
    }

    const box = document.createElement('div');
    box.style.cssText = 'border: 1px solid gray; background-color: rgba(255, 0, 0, 0.5); padding: 10px; text-align: center; cursor: pointer;';
    toggleBoxText();

    function toggleBoxText() {
        box.textContent = isChecked ? 'ON' : 'OFF';
    }

    function toggleBox() {
        isChecked = !isChecked;
        toggleBoxText();
        if (isChecked) {
            box.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        } else {
            box.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
        }
    }

    box.addEventListener('click', toggleBox);
    menu.appendChild(box);
    document.body.appendChild(menu);

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Insert') {
            toggleMenu();
        }
    });

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
        alert('Loaded');
    } else {
        alert('Check the Discord/GitHub for updates');
    }

    window.BYTEunload = function() {
        document.body.removeChild(menu);
        const script = document.createElement('script');
        script.textContent = initialCode;
        document.head.appendChild(script);
    };
})();
