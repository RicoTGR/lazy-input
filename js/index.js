let inputLang = lang;

function onClipboardClick() {
    navigator.clipboard.writeText(document.getElementById('textarea').value)
        .then(() => {
            document.getElementById('instruction').innerText = 'Copied';
        })
        .catch(err => {
            console.log('Something went wrong', err);
        });
}

function onChangeLang() {
    if(inputLang === 'ru') {
        inputLang = 'en';
        document.getElementById('language').innerText = 'Current language is English';
    }
    else {
        inputLang = 'ru';
        document.getElementById('language').innerText = 'Текущий язык - русский';
    }

}

function onCleanClick() {
    document.getElementById('instruction').innerText = changeLang('instructionBase');
    document.getElementById('clear').innerText = changeLang('clear');
    document.getElementById('clipboard').innerText = changeLang('clipboard');
    document.getElementById('textarea').value = '';
    document.getElementById('textareaLabel').innerText = changeLang('textarea');
}

onCleanClick();

document.addEventListener("DOMContentLoaded", () => {
    if(inputLang === 'en') document.getElementById('language').innerText = 'Current language is English';
    else document.getElementById('language').innerText = 'Текущий язык - русский';
});