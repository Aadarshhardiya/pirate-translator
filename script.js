const inputText = document.querySelector("#input");
const convertBtn = document.querySelector("#btn-id");
const outputText = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function btnHandler() {
    var input = inputText.value;

    fetch(getTranslationURL(input))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.value = translatedText;
    })
}

convertBtn.addEventListener ("click", btnHandler)