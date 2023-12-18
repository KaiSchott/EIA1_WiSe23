// script.js

storyStartFunction();
const storyStart = "Du befindest dich in einem dunklen Raum. Es gibt zwei Türen. Welche Tür nimmst du? Links oder Rechts?";
const storyRoom1 = "Du befindest dich in einem Raum mit einem Monster. Was machst du? Kämpfen oder Weglaufen?";
const storyRomm1Fight = "Du kämpfst gegen das Monster. Du bist tot. Spiel vorbei.";
const StoryRoom1Run = "Du rennst durch die Tür vor dir. Das Monster hinter dir verfolgt dich nicht. Du findest eine Schatztruhe. Du öffnest sie und findest viel Gold. Du bist reich. Du gewinnst.";
const WrongInput = "Falsche Eingabe. Spiel vorbei.";

const storyRoom2 = "Du befindest dich in einem Raum mit einer sich verengenden Falle. Vor dir gibt es zwei Türen. Welche Tür nimmst du? Links oder Rechts?";
const StoryRoom2Left = "Du kannst der Falle ausweichen und befindest dich in einem Raum mit einer Schatztruhe. Du öffnest sie und findest viel Gold. Du bist reich. Du gewinnst.";
const StoryRoom2Right = "Du kannst die Tür nicht öffnen und hast keine Zeit, der Falle auszuweichen. Du bist tot. Spiel vorbei.";

const myStoryArray = [storyStart, storyRoom1, storyRomm1Fight, StoryRoom1Run, WrongInput, storyRoom2, StoryRoom2Left, StoryRoom2Right];

const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

storyStartFunction();
storyRoom1Function();




let currentStorySection = 0;

function printOutput(text) {
    outputElement.innerHTML += `<p>${text}</p>`;
}

function processInput() {
    const userInput = inputElement.value;
    inputElement.value = '';

    if (currentStorySection < myStoryArray.length) {
        printOutput(userInput);
        const nextSection = myStoryFunctions[currentStorySection](userInput);
        currentStorySection = nextSection;
        printOutput(myStoryArray[currentStorySection]);
    }
}

function storyStartFunction(userInput) {
    // Hier kannst du die Logik für den Startabschnitt implementieren
     if (userInput === 'Links') { myStoryArray[1] 
        } 
     else if (userInput === 'Rechts') { myStoryArray[5] }
   
    return 1; // Index des nächsten Abschnitts im Array
}

function storyRoom1Function(userInput) {
    if (userInput === 'Links') { myStoryArray[2] } 
     else if (userInput === 'Rechts') { myStoryArray[3] }

     
    return userInput; // Index des nächsten Abschnitts im Array
}

function storyRomm1FightFunction(userInput) {
    // Hier kannst du die Logik für den Kampfabschnitt implementieren
    return 4; // Index des nächsten Abschnitts im Array
}

function storyRoom1RunFunction(userInput) {
    // Hier kannst du die Logik für den Fluchtabschnitt implementieren
    return 5; // Index des nächsten Abschnitts im Array
}

function storyRoom2Function(userInput) {
    // Hier kannst du die Logik für den zweiten Raum implementieren
    return 6; // Index des nächsten Abschnitts im Array
}

function storyRoom2LeftFunction(userInput) {
    // Hier kannst du die Logik für den Abschnitt nach links implementieren
    return 7; // Index des nächsten Abschnitts im Array
}

function storyRoom2RightFunction(userInput) {
    // Hier kannst du die Logik für den Abschnitt nach rechts implementieren
    return 7; // Index des nächsten Abschnitts im Array
}

const myStoryFunctions = [
    storyStartFunction,
    storyRoom1Function,
    storyRomm1FightFunction,
    storyRoom1RunFunction,
    null, // Hier könntest du eine Funktion für 'WrongInput' implementieren, wenn notwendig
    storyRoom2Function,
    storyRoom2LeftFunction,
    storyRoom2RightFunction
];

printOutput(myStoryArray[currentStorySection]);
