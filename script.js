const buttonsKey = document.getElementsByClassName('key');
let lastKey;
let currentKey;
let offGame = false;
let score;
let endScore = 2;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomKey() {
    index = Math.floor(Math.random() * buttonsKey.length);
    const key = buttonsKey[index];
    if (key === lastKey) {
        console.log('The same key!!!')
        return getRandomKey()
    }
    lastKey = key;
    return key;
};

function showScore() {
    menu = document.querySelector(".game-menu");
    menu.innerHTML =`<div class="scoreBoard">Score: ${score}<div>`;
}

console.log(getRandomKey());

function checkKey(event) {
    if (event.keyCode == currentKey.attributes[0].value){
        return true;
        console.log("ok")
    }
    else {
        return false
    };
};

function peep(){
    const time = getRandomNumber(1000, 2000);
    const key = getRandomKey();
    currentKey = key;
    addClassToElement("key", currentKey)
    key.classList.add("fire-key");
    setTimeout( () => {
        key.classList.remove("fire-key");
        if (!offGame){
            peep();
        }
    } , time);
}

function endGame() {
    offGame = true;
};

function addClassToElement(classname, element) {
    element.classList.add(classname)
}
removeClassToElement(clasName, element) {
    // homework
}


function startGame() {
    window.addEventListener("keydown" , checkKey)
    score = 0;
    showScore();
    peep();
    offGame = false;
    scoreBoard = document.querySelector(".scoreboard")
};

function checkKey(e) {
    if (event.keyCode == currentKey.attributes[0].value){
        score ++;
        console.log(score);
        addClassToElement("correct-key-down", currentKey);
    }
    else {
        score --;
        let wrongKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
        console.log(score);
        addClassToElement("wrong-key-down", wrongKey);
    };
    score.innerHTML = `Score: ${score}`;
    if (score == endScore) {
        endGame();
    };
};
function addClassToElement(classname, element) {
    element.classList.add(classname)
}
removeClassToElement(clasName, element) {
    // homework
}
