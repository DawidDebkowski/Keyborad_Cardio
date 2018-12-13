const buttonsKey = document.getElementsByClassName('key');
let lastKey;
let offGame = false;

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


function peep(){
    const time = getRandomNumber(1000, 2000);
    const key = getRandomKey();
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
}
/*console.log(getRandomKey());
function addClass() {
    getRandomKey().className=fire-key";
};
addClass(); */