let scorehEl = document.getElementById("scoreh-el")
let scoregEl = document.getElementById("scoreg-el")

let hscore = 0
let gscore = 0

function hbtn1() {
    hscore += 1
    scorehEl.textContent = hscore
}

function hbtn2() {
    hscore +=2
    scorehEl.textContent = hscore
}

function hbtn3() {
    hscore += 3
    scorehEl.textContent = hscore
}

function gbtn1() {
    gscore += 1
    scoregEl.textContent = gscore

}

function gbtn2() {
    gscore += 2
    scoregEl.textContent = gscore
}

function gbtn3() {
    gscore += 3
    scoregEl.textContent = gscore
}
