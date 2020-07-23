let buttonIsDown = false;
let working = false;

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.lang = inputLang;
recognition.interimResults = true;
recognition.continuous = true;

document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented) {
        return;
    }
    if (!buttonIsDown && !working && event.code === 'ControlLeft') {
        buttonIsDown = true;

        recognitionStart();
    }
});

document.addEventListener('keyup', (event) => {
    if (event.defaultPrevented) {
        return;
    }

    if (buttonIsDown && event.code === 'ControlLeft') {
        buttonIsDown = false;

        recognitionStop();
    }
});

function recognitionStart() {
    recognition.start();
}

function recognitionStop() {
    recognition.stop();
}

recognition.onstart = () => {
    working = true;
};

recognition.onend = () => {
    working = false;
};

recognition.onresult = (event) => {
    let finalTranscript = '';
    let specialWords = Object.keys(wordSymbols[lang]);
    for (let i = event.resultIndex; i < event.results.length; i++) {
        let localTranscript = event.results[i][0].transcript;
        if(specialWords.includes(localTranscript)) {
            localTranscript = wordSymbols[lang][localTranscript];
        }

        if (event.results[i].isFinal) {
            finalTranscript += localTranscript;
        }
    }

    console.log(finalTranscript);
    document.getElementById('textarea').value = finalTranscript;
};