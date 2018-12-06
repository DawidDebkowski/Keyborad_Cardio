function losuj(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

};




const buttonsKey = document.getElementsByClassName("key");
let lastKey;


function getRandomKey() {
  index = Math.floor(Math.random() * buttonsKey.length);
  const key = buttonsKey[index];
  if (key === lastKey) {
      console.log("The same key")
      return getRandomKey()
    }
    lastKey = key;
    return key;
};
console.log(getRandomKey());
function addClass() {
    getRandomKey().className="fire-key";
};
addClass();



    /* do domu stworz funkcje ktora losowo dodaje do klawisze klase fire-key  */

