function losuj(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}
console.log(losuj(2, 5))