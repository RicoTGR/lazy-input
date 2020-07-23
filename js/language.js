let lang = window.navigator ? window.navigator.language : "en";
lang = lang.substr(0, 2).toLowerCase();

const LANGUAGES = ['en', 'ru'];

let sysLang = {
    instructionBase: [
        'Press left ctrl and say what you need',
        'Нажмите левую клавишу ctrl и скажите необходимый текст'
    ],
    textarea: [
        'Your text here',
        'Ваш текст здесь'
    ],
    clipboard: [
        'Copy to clipboard',
        'Скопировать в буфер'
    ],
    clear: [
        'Clear',
        'Очистить'
    ],
    copied: ['Copied', 'Скопировано']
};

let wordSymbols = {
    ru: {
        "запятая": ",",
        "точка": ".",
        "знак вопроса": "?",
        "восклицательный знак": "!",
        "тире": "—",
        "плюс": "+",
        "пробел": " ",
        "равно": "=",
        "двоеточие": ":",
        "точка с запятой": ";",
        "дефис": "-",
        "доллар": "$",
        "символ собака": "@",
        "символ улитка": "@",
        "стиль собачки": "🐶",
        "мяу": "🐱",
        "ауф": "🐺",
        "троеточие": "...",
        "три точки": "..."
    },
    en: {
        comma: ",",
        dot: ".",
        questionMark: "?",
        exclamationMark: "!",
        dash: " - ",
        space: " ",
        plus: "+",
        equally: "=",
        colon: ":",
        semicolon: ";",
        hyphen: "-",
        dollar: "$",
        "symbol dog": "@",
        "three point": "..."
    }
};

function changeLang(property) {
    if(LANGUAGES.includes(lang)) {
        return sysLang[property][LANGUAGES.indexOf(lang)];
    }
    return sysLang[property][0];
}