let currentState = "start";
let currentArrayIndex = 0;

function showPrompt() {
    document.getElementById("output").innerText = myArray[currentArrayIndex];
}

function updateState(input) {
    switch (currentState) {
        case "start":
            handleStartInput(input);
            break;
        case "decision1":
            handleDecision1Input(input);
            break;
        case "decision2":
            handleDecision2Input(input);
            break;
        case "ending1":
            handleEnding1Input(input);
            break;
        case "ending2":
            handleEnding2Input(input);
            break;
        default:
            fehleingabe();
    }
}

function handleStartInput(input) {
    if (input.toLowerCase() === myArray[1] || input.toLowerCase() === myArray[2]) {
        currentState = "decision1";
        currentArrayIndex = 3;
    } else if (input.toLowerCase() === myArray[16] || input.toLowerCase() === myArray[17]) {
        window.close();
    } else {
        fehleingabe();
    }
}

function handleDecision1Input(input) {
    if (input.toLowerCase() === myArray[4]) {
        currentState = "ending1";
        currentArrayIndex = 6;
    } else if (input.toLowerCase() === myArray[5]) {
        currentState = "decision2";
        currentArrayIndex = 11;
    } else {
        fehleingabe();
    }
}

function handleDecision2Input(input) {
    if (input.toLowerCase() === myArray[12]) {
        currentState = "ending1";
        currentArrayIndex = 14;
    } else if (input.toLowerCase() === myArray[13]) {
        currentState = "ending2";
        currentArrayIndex = 15;
    } else {
        fehleingabe();
    }
}

function handleEnding1Input(input) {
    if (input.toLowerCase() === myArray[16] || input.toLowerCase() === myArray[17]) {
        currentState = "start";
        currentArrayIndex = 0;
    } else {
        fehleingabe();
    }
}

function handleEnding2Input(input) {
    if (input.toLowerCase() === myArray[16] || input.toLowerCase() === myArray[17]) {
        currentState = "start";
        currentArrayIndex = 0;
    } else {
        fehleingabe();
    }
}

function showOutput(output) {
    document.getElementById("output").innerText = output;
}

function gameLoop() {
    let userInput = document.getElementById("input").value;
    updateState(userInput);
    showOutput(myArray[currentArrayIndex]);
    document.getElementById("input").value = "";
}

let myArray = [
    "Willkommen im Zauberland. Du stehst vor einer magischen Tür. Tippe 'Öffnen', um hindurchzugehen. Tippe 'Schließen', um das Spiel zu beenden.",
    "Öffnen", "öffnen",
    "Du betrittst den Wald der Entscheidungen. Gehst du den 'lichten' oder 'dunklen' Weg?",
    "lichten", "dunklen",
    "Du findest einen magischen Spiegel. Willst du hinein 'blicken' oder 'weitergehen'?",
    "blicken", "weitergehen",
    "Du hast die Liebe deines Lebens im Spiegel gefunden und lebst glücklich bis ans Ende deiner Tage.",
    "Du wirst von einer bösen Hexe aus dem Spiegel gezogen und verlierst dich in der Dunkelheit.",
    "Am Ende des dunklen Pfades findest du einen Drachen. Willst du ihn 'bekämpfen' oder 'fliehen'?",
    "bekämpfen", "fliehen",
    "Du besiegst den Drachen und gewinnst den Schatz des Zauberlandes.",
    "Der Drache ist stärker als du. Du wurdest verbrannt. Spiel vorbei.",
    "Exit", "exit",
    "'Keine korrekte Eingabe'"
];

function fehleingabe() {
    return alert(myArray[18]);
}

window.onload = showPrompt;

