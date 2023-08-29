function startGame() {
    audioClick.play();
    renderSelect();
}

function startHTML() {
    audioClick.play();
    document.getElementById('gameSection').classList.add('gameAreaIngame');
    renderQuestHTML();
}

function nextQuestHTML() {
    audioClick.play();
    clickDiv[0]['click'] = !clickDiv[0]['click'];
    questNumber++;
    renderQuestHTML();
}
function startCSS() {
    audioClick.play();
    document.getElementById('gameSection').classList.add('gameAreaIngame');
    renderQuestCSS();
}

function nextQuestCSS() {
    audioClick.play();
    clickDiv[0]['click'] = !clickDiv[0]['click'];
    questNumber++;
    renderQuestCSS();
}
function startHTMLJS() {
    audioClick.play();
    document.getElementById('gameSection').classList.add('gameAreaIngame');
    renderQuestJS();
}

function nextQuestJS() {
    audioClick.play();
    clickDiv[0]['click'] = !clickDiv[0]['click'];
    questNumber++;
    renderQuestJS();
}

function returnProgress() {
    zahl = questNumber / 6;
    result = Math.round(zahl * 100);
    return result;
}

function returnQuestNumber() {
    zahl = questNumber + 1;
    return zahl;
}

function answerClick(i) {
    if (clickDiv[0]['click']) {
        if (i === correctAnswer()) {
            dNoneAnswer();
            correctAnswerReturn(i);
        } else {
            dNoneAnswer();
            failAnswerReturn(i);
        }
    }
    else {
        return;
    }
    document.getElementById('nextButton').disabled = false;
}

function correctAnswer() {
    zahl = HTMLArray[0]['result'];
    number = zahl[questNumber];
    return number;
}

