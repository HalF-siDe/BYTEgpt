function changeFavicon(newFaviconURL) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = newFaviconURL;
    document.getElementsByTagName('head')[0].appendChild(link);
}

var newFaviconURL = 'https://raw.githubusercontent.com/HalF-siDe/BYTEgpt/main/BYTE.ico';
changeFavicon(newFaviconURL);
