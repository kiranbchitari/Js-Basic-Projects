const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
    button.style.backgroundColor = button.id
    button.addEventListener('click', (e) => {
        body.style.backgroundColor = e.target.id
    })
})