function renderStart() {
    save();
    let content = document.getElementById('gameSection');
    content.innerHTML = '';
    content.innerHTML = returnStart();
}

function renderName() {
    let content = document.getElementById('gameSection');
    content.innerHTML = '';
    content.innerHTML = returnName();
}

function renderSelect() {
    audioClick.play();
    questNumber = 0;
    let input = document.getElementById('name').value;
    nameScore.push(input);
    input = '';
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

function renderScoreBoard() {
    let content = document.getElementById('gameSection');
    content.innerHTML = '';
    content.innerHTML = returnScoreBoard();
    renderScore()
}

function renderScore() {
    let content = document.getElementById('scoreTable')
    content.innerHTML = '';
    for (let i = 0; i < nameScore.length; i++) {
        content.innerHTML += /*html*/`
        <tr>
        <td><b>${nameScore[i]}</b></td>
        <td><b>${classScore[i]}</b></td>
        <td><b>${rightAnswerScore[i]}</b></td>
        </tr>
        `;
    }
}

function renderFinish() {
    save();
    let content = document.getElementById('gameSection');
    content.innerHTML = '';
    content.innerHTML = returnFinish();
}
