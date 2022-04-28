/// elements 6 alien ships, my character

//-----------------------------------------------

 const battle=()=>{

    let playerOneScore = 100

    let alienScore = 100




    console.log('Battle Started')
    /// Start Game

    //establishRoundOne


    let command = prompt("Ready To [A]ttack? or [R]etreat?")

        if(command === "A"){
            let target = document.querySelector('.alienShip')
            
            let explosion = document.createElement('img')
            explosion.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZuKrIFINjiAUBHX2IEiZUvgfGlkqb7j6_A&usqp=CAU')
            
            
  
            //signal Explosion


            // decrease alien point Value


            let currentScore = document.querySelector('.hundred').innerHTML="";
            currentScore.classList.toggle('blackOut')
            currentScore.style.backgroundColor = "black;"

            let halfLife = document.querySelector('.fifty').innerHTML="50%"


            console.log(currentScore)






            target.replaceWith(explosion)

        }else{
            console.log("PlayerOne has retreated AND LOSES")
        }
    







}

    //attack()
    // if (alien.life = 0){
        //then they attack
    const attacktheUSSA = () =>{
        let ufo = document.querySelector('.alienShip')
        console.log('attacked!')

        ufo.classList.toggle('startAlienAttack')
    }



    //Player 2
// }



// let s = []









//  let ussAssembly = {
     
//          hull: 20
//          firepower: 5
//          accuracy: .7

//     }
//      }

//  let alienShips = {
    
//         hull:
//         firepower:
//         accuracy:
//      }
     


// //----- Game rounds = each player attacks ----

// ///my character attacks first



// //if ship survives, then attack my character

// /// if I survive, then attack ship again

// /// if ship survives, attacks me again, etc

// if (Math.random() < alienShips[0].accuracy) {
// 	console.log('You have been hit!');
// }


/// If my character destroys ship, then attack next ship or 

///retreat

/// if my character retereats, then

/// game over


///if my character destroys all aliens, I win


/// If my character is destroyed then, I lose