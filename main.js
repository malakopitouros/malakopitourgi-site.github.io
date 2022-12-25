let number = document.querySelector('.number')

let count = 0

function increase() {
    count = count + 1
    number.textContent = count
}

function decrease() {
    count = count - 1
    number.textContent = count
}