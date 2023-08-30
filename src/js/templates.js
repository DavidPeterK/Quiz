let HTMLArray = [
    {
        'frage': ['Was ist in HTML das kleine Tag?', 'Was sind in HTML die Body-Tags?', 'Welches Tag wird in HTML verwendet, um Text fett darzustellen und als wichtigen Text zu kennzeichnen?', 'Was ist in HTML das <article>-Tag?', 'Welches Tag wird in HTML verwendet, um ein Favicon einzufügen?', 'Welcher Wert des Zielattributs öffnet in HTML einen Link in einem neuen Tab?'],
        'antwort1': ['kleiner Text nur für IMG-Tags', 'Definiert den Header-Inhalt für das HTML-Dokument', 'em', 'Ein Tag, der für Code verwendet wird', 'fav', '_leer'],
        'antwort2': ['kleiner Text nur für h1-Tags', 'definiert den Bildinhalt für das HTML-Dokument', 'b', 'Ein Tag, der für Anführungszeichen verwendet wird', 'Link', '_Spitze'],
        'antwort3': ['Ein Tag, der zur Darstellung von kleinem Text für Nebenkommentare oder Copyright-Informationen verwendet wird', 'Definiert den Hauptinhalt des HTML-Dokuments', 'fett', 'Ein Tag, der für Links verwendet wird', 'Favicon', '_Elternteil'],
        'antwort4': ['kleiner Text nur für div-Elemente', 'definiert den Tabelleninhalt für das HTML-Dokument', 'strong', 'Ein Tag, der für Inhalte verwendet wird, die vom Hauptinhalt der HTML-Seite unabhängig sind', 'Symbol', '_selbst'],
        'result': [3, 3, 4, 4, 2, 1]
    }
]

let JavascriptArray = [
    {
        'frage': ['Welche der folgenden Methoden gibt in JavaScript die Millisekunden des angegebenen Datums gemäß der Ortszeit zurück?', 'Welches Schlüsselwort wird in JavaScript verwendet, um Teile des Codes für andere Module zugänglich zu machen?', 'Was ist in JavaScript der optionale Verkettungsoperator?', 'Was ist in JavaScript der Unterschied zwischen == und ===?', 'Was sollte in JavaScript die Ausgabe von 3 < 2 < 1 sein?', 'Was ist die Dateinamenerweiterung einer JavaScript-Datei?'],
        'antwort1': ['getMinutes()', 'als', '?.', '== und === erlauben beide eine Typumwandlung der Werte, aber === ist strenger', 'Syntax-Fehler', '.J'],
        'antwort2': ['getMillisec()', 'importieren', '??', '== ermöglicht eine Typumwandlung der Werte, während === dies nicht tut', 'NaN', '.javascript'],
        'antwort3': ['getMilliseconds()', 'aus', '&&', 'Es gibt keinen Unterschied zwischen == und ===', 'FALSCH', '.js'],
        'antwort4': ['getTheMillisecondsNow()', 'Export', '**', '== erlaubt keine Typumwandlung der Werte, während === dies tut', 'WAHR', '.py'],
        'result': [3, 4, 1, 2, 4, 3]
    }
]

let CaskadingArray = [
    {
        'frage': ['Wofür stehen in CSS H, S und L in HSL?', 'Was bewirkt die Eigenschaft „animation-play-state“ in CSS?', 'Was ist in CSS eine at-Regel?', 'Wie heißt in CSS die relative Einheit, die auf der Schriftgröße ihres übergeordneten Elements basiert?', 'Wofür steht in CSS die VW-Einheit?', 'Was ist in CSS ein allgemeiner Haltepunktbereich, der für mobile Geräte in einer Medienabfrage verwendet wird?'],
        'antwort1': ['Farbton, Sättigung, Blitz', 'Es bestimmt, wie lange eine Animation in Sekunden dauern soll.', 'Eine Regel, die Javascript-Funktionen vorschreibt.', 'rem', 'Breite des Ansichtsfensters', '200px - 4000px'],
        'antwort2': ['Lebensraum, Stil, Leichtigkeit', 'Es wird verwendet, um die Animation anzuhalten, wenn sie auf „Pause“ eingestellt ist.', 'Eine Regel, die nur für den Stil von <p>-Elementen gilt.', 'vw', 'Ansicht Breite Höhe', '320px - 480px'],
        'antwort3': ['Farbton, Sättigung, Helligkeit', 'Es wird verwendet, um das Element nach Ende der Animation zu formatieren.', 'Eine Regel, die vorschreibt, wie der HTML-Code formatiert wird.', 'vh', 'Höhe des Ansichtsfensters', '100px - 150px'],
        'antwort4': ['Farbton, Stil, Leichtigkeit', 'Es gibt die Richtung für die Animation vor.', 'Eine Regel, die vorschreibt, wie das CSS basierend auf bestimmten Bedingungen aussehen wird.', 'em', 'Gewicht des Ansichtsfensters', '1000px - 5000px'],
        'result': [3, 2, 4, 4, 1, 2]
    }
]

let nameScore = [];
let rightAnswerScore = [];
let failAnswerScore = [];
let classScore = [];
let clickDiv = [{ 'click': true }]
let questNumber = 0;
let audioWin = new Audio('src/media/audio/cash-register-purchase-87313.mp3');
let audioFail = new Audio('src/media/audio/sadwhisle-91469.mp3');
let audioClick = new Audio('src/media/audio/click.mp3');
let audioApplaus = new Audio('src/media/audio/applaus.mp3')
load();

function returnStart() {
    return /*html*/`
    <div class="start">
    <img src="./src/media/logo/logo-nobackground-200.png" alt="">
    <button type="button" onclick="startName()" class="btn btn-primary">Start</button>
    <button type="button" onclick="renderScoreBoard()" class="btn btn-primary">Score</button>
    </div>
    `;
}
function returnName() {
    return /*html*/`
    <div class="start">
    <img src="./src/media/logo/logo-nobackground-200.png">
        <form onsubmit="renderSelect(); return false;">
            <input id="name" pattern="[A-Za-z0-9]+" required minlength="2" maxlength="20" placeholder="Namen eingeben" type="text">
            <button class="btn btn-primary">Weiter</button>
        </form>
    </div>
    `;
}

function returnSelect() {
    return /*html*/`
    <div class="start">
    <img src="./src/media/logo/logo-nobackground-200.png">
        <div class="dFlex">
            <button id="buttonHTML" type="button" onclick="startHTML()" class="btn btn-primary">HTML</button>
            <button id="buttonCSS" type="button" onclick="startCSS()" class="btn btn-primary">CSS</button>
            <button id="buttonJS" type="button" onclick="startJS()" class="btn btn-primary">Javascript</button>
        </div>
    </div>
`;
}

function returnQuest(htmlAnswer1, htmlAnswer2, htmlAnswer3, htmlAnswer4, htmlFrage) {
    return /*html*/`
<div class="questField">
    <div><img src="./src/media/logo/logo-nobackground-200.png" alt=""></div>
    <h3>${htmlFrage}</h3>
    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="${returnProgress()}%" aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${returnProgress()}%"></div>
    </div>
    <div class="progressTextDiv">
        <p>${returnQuestNumber()} / ${returnQuestLengthHTML()}</p>
        <button disabled onclick="nextQuestHTML()" id="nextButton" type="button" class="btn btn-primary">Weiter</button>
        <p>HTML</p>
    </div>
</div>
<div class="answerField">
    <div onclick="answerClick(1)" id="answer1" class="answer">
        <span>A</span>
        <div>${htmlAnswer1}</div>
    </div>
    <div onclick="answerClick(2)" id="answer2" class="answer">
        <span>B</span>
        <div>${htmlAnswer2}</div>
    </div>
    <div onclick="answerClick(3)" id="answer3" class="answer">
        <span>C</span>
        <div>${htmlAnswer3}</div>
    </div>
    <div onclick="answerClick(4)" id="answer4" class="answer">
        <span>D</span>
        <div>${htmlAnswer4}</div>
    </div>
</div>
`;
}

function returnScoreBoard() {
    return /*html*/`
    <div class="start">
        <img class="scoreIcon" src="./src/media/pic/business-4271251_640.png">
        <h4>Scoreboard</h4>
        <div>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Bereich</th>
                    <th>Punkte von 6</th>
                </tr>
            </tbody>
            <tbody id="scoreTable">
            </tbody>
        </table>

        </div>
        <button class="btn btn-primary" onclick="renderStart()">Hauptmenü</button>
    </div>
`;
}

function returnFinish() {
    return /*html*/`
    <div class="start">
        <img class="winIcon" src="./src/media/pic/cup-2015198_640.png">
        <h4>Glückwunsch</h4>
        <div class="WinText">
            <p>Du hast <b>${rightAnswerScore[rightAnswerScore.length - 1]}</b>
             von <b>6</b> Fragen in <b>${classScore[classScore.length - 1]}</b>
              richtig gelöst!</p>
            <p>Dein Ergebnis wird im Scoreboard gespeichert</p>
        </div>
        <button class="btn btn-primary" onclick="renderStart()">Hauptmenü</button>
    </div>
`;
}

function dNoneAnswer() {
    document.getElementById('answer1').classList.add('d-none');
    document.getElementById('answer2').classList.add('d-none');
    document.getElementById('answer3').classList.add('d-none');
    document.getElementById('answer4').classList.add('d-none');
}
function correctAnswerReturn(i) {
    audioWin.play();
    document.getElementById(`answer${i}`).classList.remove('d-none');
    document.getElementById(`answer${i}`).classList.add('answerGreen');
    clickDiv[0]['click'] = !clickDiv[0]['click'];
}
function failAnswerReturn(i) {
    audioFail.play();
    document.getElementById(`answer${i}`).classList.remove('d-none');
    document.getElementById(`answer${correctAnswer()}`).classList.remove('d-none');
    document.getElementById(`answer${i}`).classList.add('answerRed');
    document.getElementById(`answer${correctAnswer()}`).classList.add('answerGreen');
    clickDiv[0]['click'] = !clickDiv[0]['click'];
}