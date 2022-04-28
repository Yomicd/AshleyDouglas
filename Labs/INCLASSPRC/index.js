const showLogin = () => {
let login_btn =document.querySelector('.colorLink')
let loginAnswer = prompt("Enter Email for Login")


let screen = document.querySelector('.screen')

screen.innerHTML =loginAnswer
}