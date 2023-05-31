
let hscore = document.getElementById("hscore")
let gscore = document.getElementById("gscore")

let homescore = 0
let guestscore = 0

start()

function start() {
    guestscore = 0
    gscore.textContent = guestscore
    homescore = 0
    hscore.textContent = homescore
}

function add1() {
    homescore += 1
    hscore.textContent = homescore
}

function add2() {
    homescore += 2
    hscore.textContent = homescore
    
}

function add3() {
    homescore += 3
    hscore.textContent = homescore
    
}

function gadd1() {
    guestscore += 1
    gscore.textContent = guestscore
    
}

function gadd2() {
    guestscore += 2
    gscore.textContent = guestscore
    
}

function gadd3() {
    guestscore += 3
    gscore.textContent = guestscore
    
}

function reset() {
    guestscore = 0
    gscore.textContent = guestscore
    homescore = 0
    hscore.textContent = homescore
}
