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
    // console.log(currentKey.attributes[0].value)
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

function startGame() {
    window.addEventListener("keydown" , checkKey)
    score = 0;
    peep();
    offGame = false;
};

function checkKey(e) {
    if (event.keyCode == currentKey.attributes[0].value){
        score ++;
        console.log(score)
    }
    else {
        score --;
        console.log(score)
    };
    if (score = endScore) {
        endGame()
    };

};

