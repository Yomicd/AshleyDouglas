

let score = 0

const toggleCardOne = () => {

    let hand = document.querySelector('.card1')
        hand.classList.toggle('galaxy')




let vizio = document.querySelector('.screen')

let riddleOne = prompt("1 + 1 = ?")

    if(riddleOne === '2'){
        vizio.innerHTML = "Correct!";
        score += 1
        document.querySelector('.points').innerHTML = score
    }

    else{
        vizio.innerHTML = 'Sorry'
        score = score -1
        document.querySelector('.points').inn = score
    }

}