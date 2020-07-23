let lang = window.navigator ? window.navigator.language : "en";
lang = lang.substr(0, 2).toLowerCase();

function onClipboardClick() {
    navigator.clipboard.writeText(document.getElementById('textarea').value)
        .then(() => {
            document.getElementById('instruction').innerText = 'Copied';
        })
        .catch(err => {
            console.log('Something went wrong', err);
        });
}

function onCleanClick() {
    document.getElementById("textarea").value = "";
    document.getElementById('instruction').innerText = 'Press right ctrl and say what you need';
}