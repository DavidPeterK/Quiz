function renderStart() {
    let content = document.getElementById('gameSection');
    content.innerHTML = '';
    content.innerHTML = returnStart();
}

function renderSelect() {
    let content = document.getElementById('gameSection');
    content.innerHTML = '';
    content.innerHTML = returnSelect();
}

function renderQuestHTML() {
    let content = document.getElementById('gameSection');
    let htmlFrage = HTMLArray[0]['frage'][questNumber];
    let htmlAnswer1 = HTMLArray[0]['antwort1'][questNumber];
    let htmlAnswer2 = HTMLArray[0]['antwort2'][questNumber];
    let htmlAnswer3 = HTMLArray[0]['antwort3'][questNumber];
    let htmlAnswer4 = HTMLArray[0]['antwort4'][questNumber];
    content.innerHTML = '';
    content.innerHTML = returnQuest(htmlAnswer1, htmlAnswer2, htmlAnswer3, htmlAnswer4, htmlFrage);
}

function renderQuestCSS() {
    let content = document.getElementById('gameSection');
    let htmlFrage = HTMLArray[0]['frage'][questNumber];
    let htmlAnswer1 = HTMLArray[0]['antwort1'][questNumber];
    let htmlAnswer2 = HTMLArray[0]['antwort2'][questNumber];
    let htmlAnswer3 = HTMLArray[0]['antwort3'][questNumber];
    let htmlAnswer4 = HTMLArray[0]['antwort4'][questNumber];
    content.innerHTML = '';
    content.innerHTML = returnQuest(htmlAnswer1, htmlAnswer2, htmlAnswer3, htmlAnswer4, htmlFrage);
}

function renderQuestJS() {
    let content = document.getElementById('gameSection');
    let htmlFrage = HTMLArray[0]['frage'][questNumber];
    let htmlAnswer1 = HTMLArray[0]['antwort1'][questNumber];
    let htmlAnswer2 = HTMLArray[0]['antwort2'][questNumber];
    let htmlAnswer3 = HTMLArray[0]['antwort3'][questNumber];
    let htmlAnswer4 = HTMLArray[0]['antwort4'][questNumber];
    content.innerHTML = '';
    content.innerHTML = returnQuest(htmlAnswer1, htmlAnswer2, htmlAnswer3, htmlAnswer4, htmlFrage);
}