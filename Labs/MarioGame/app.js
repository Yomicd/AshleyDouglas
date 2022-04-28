const attackMario = () =>{
    let shroomDude = document.querySelector('.shroom')
    console.log("pinged!")

    shroomDude.classList.toggle('startAttack')
}

const jump = () =>{
    let mario = document.querySelector('.italia')

    mario.classList.toggle('bunnies')

    addPoint()
}


let score = 0

const addPoint = () =>{
    let ticker = document.querySelector('.points')

    ticker.innerhtml = score += 1
}