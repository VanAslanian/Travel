const maxImg = document.querySelector('.imgLogo img');
const select = document.querySelector('select');
const allLang = ['am', 'en', 'ru'];
let iframe = document.querySelector('#iframeCruise')
document.querySelectorAll('.left-panel img').forEach(item => item.onmouseenter = (event) => maxImg.src = event.target.src);
if ( window.location.hash === '#en'){
    iframe.setAttribute('src','https://center.cruises/widget/?uuid=d574a29b-19ea-4066-9064-32c1392d8d48&lang=en&currency=eur')
}else {
    iframe.setAttribute('src','https://center.cruises/widget/?uuid=d574a29b-19ea-4066-9064-32c1392d8d48&lang=ru&currency=eur')
}
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function updateMetaTags(hash) {
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaTitle = document.querySelector('title');
    const metaKeywords = document.querySelector('meta[name="keywords"]');

    if (langArr.description[hash]) {
        metaDescription.setAttribute("content", langArr.description[hash]);
    }

    if (langArr.unit[hash]) {
        metaTitle.innerHTML = langArr.unit[hash];
    }

    if (metaKeywords && langArr.keywords[hash]) {
        metaKeywords.setAttribute("content", langArr.keywords[hash]);
    }
}


function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#am';
        location.reload();
    }

    select.value = hash;

    // Обновление мета-тегов
    updateMetaTags(hash);

    // Обновление текста на странице
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();