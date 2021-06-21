// var randomValue = parseInt(Math.random() * (50-10) + 10)
// console.log(randomValue);

function hexa() {
    var randomValue = parseInt(Math.random() * 0x10000);
    return randomValue.toString(16)
}

function uid() {
    return hexa()+hexa()+'-'+hexa()+'-'+hexa()+hexa();
}

console.log(uid());