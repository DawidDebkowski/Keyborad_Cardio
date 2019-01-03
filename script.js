const buttonsKey = document.getElementsByClassName('key');
let lastKey;
let currentKey;
let score;
let endScore = 9;
let OffGame = false;

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


function peep() {
    const time = getRandomNumber(1000, 2000);
    const key = getRandomKey();
    addClassToElement('fire-key', key);
    currentKey = key;
    setTimeout(() => {
        key.classList.remove('fire-key');
        
        if (!OffGame) peep();
    }, time);

};

function endGame() {
    OffGame = true;
};

function addClassToElement(clasName, element) {
    element.classList.add(clasName);
}

function removeClassFromElement(clasName, element) {
    element.classList.remove(clasName);
}


function showScore() {
    menu = document.querySelector('.game-menu');
    // console.log(menu);
    menu.innerHTML = `<div class="scoreBoard">Score: ${score}</div>`; 
}

function startGame() {
    score = 0;
    showScore();
    window.addEventListener('keydown', checkKey)
    peep();
    OffGame = false;
    scoreBoard = document.querySelector('.scoreBoard')
};

function checkKey(event) {
    if (event.keyCode == currentKey.attributes[0].value) {
        score ++;
        addClassToElement('correct-key-down', currentKey);
        removeClassFromElement("fire-key", currentKey);
        console.log(score);
    } else {
        score --;
        let wrongKey = document.querySelector(`div[data-key="${event.keyCode}"]`);
        addClassToElement('wrong-key-down', wrongKey);
        removeClassFromElement("fire-key", currentKey);
        console.log(score);
    }
    scoreBoard.innerHTML = `Score: ${score}`;
    if (score == endScore) {
        endGame()
    }
}