function startGame() {
    audioClick.play();
    renderSelect();
}

function startName() {
    audioClick.play();
    renderName();
}

function startHTML() {
    audioClick.play();
    let button = document.getElementById('buttonHTML').innerHTML;
    classScore.push(button);
    rightAnswerScore.push(0);
    failAnswerScore.push(0);
    document.getElementById('gameSection').classList.add('gameAreaIngame');
    renderQuestHTML();
}

function nextQuestHTML() {
    audioClick.play();
    clickDiv[0]['click'] = !clickDiv[0]['click'];
    questNumber++;
    if (returnQuestNumber() > returnQuestLengthHTML()) {
        save();
        audioApplaus.play();
        renderFinish();
        document.getElementById('gameSection').classList.remove('gameAreaIngame');
    } else {
        renderQuestHTML();
    }
}
function startCSS() {
    audioClick.play();
    let button = document.getElementById('buttonCSS').innerHTML;
    classScore.push(button);
    rightAnswerScore.push(0);
    failAnswerScore.push(0);
    document.getElementById('gameSection').classList.add('gameAreaIngame');
    renderQuestCSS();
}

function nextQuestCSS() {
    audioClick.play();
    clickDiv[0]['click'] = !clickDiv[0]['click'];
    questNumber++;
    renderQuestCSS();
}

function startJS() {
    audioClick.play();
    let button = document.getElementById('buttonJS').innerHTML;
    classScore.push(button);
    rightAnswerScore.push(0);
    failAnswerScore.push(0);
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

function returnQuestLengthHTML() {
    let zahl = HTMLArray[0]['frage'].length;
    return zahl;
}

function answerClick(i) {
    if (clickDiv[0]['click']) {
        if (i === correctAnswer()) {
            rightAnswerScore[rightAnswerScore.length - 1]++;
            dNoneAnswer();
            correctAnswerReturn(i);
        } else {
            failAnswerScore[failAnswerScore.length - 1]++;
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

function save() {
    localStorage.setItem('scoreNameAsText', JSON.stringify(nameScore));
    localStorage.setItem('scoreClassAsText', JSON.stringify(classScore));
    localStorage.setItem('scoreFailAsText', JSON.stringify(failAnswerScore));
    localStorage.setItem('scoreRightAsText', JSON.stringify(rightAnswerScore));
}

function load() {
    let scoreName = localStorage.getItem('scoreNameAsText');
    let scoreClass = localStorage.getItem('scoreClassAsText');
    let scoreRight = localStorage.getItem('scoreRightAsText');
    let scoreFail = localStorage.getItem('scoreFailAsText');
    if (scoreName && scoreClass && scoreRight && scoreFail) {
        nameScore = JSON.parse(scoreName);
        classScore = JSON.parse(scoreClass);
        rightAnswerScore = JSON.parse(scoreRight);
        failAnswerScore = JSON.parse(scoreFail);
    }
}

