/// elements 6 alien ships, my character

//-----------------------------------------------

 const battle=()=>{

    let playerOneScore = 100

    let alienScore = 100
    console.log('Battle Started')
    /// Start Game

    //establishRoundOne

         //signal Explosion


            // decrease alien point Valu

            let currentScore = document.querySelector('.hundred').innerHTML="";
            currentScore.classList.toggle('blackOut')
        
            console.log(currentScore)

            target.replaceWith(explosion)

        }




    //attack()
    // if (alien.life = 0){
        //then they attack
    const attacktheUSSA = () =>{
        let ufo = document.querySelector('.alienShip1', '.alienShip2', '.alienShip3', '.alienShip4', '.alienShip5', '.alienShip6')
        console.log('attacked!')

        ufo.classList.toggle('startAlienAttack')
    }


// ///my character attacks first
   const attackTheAliens = () =>{
       let playerShip = document.querySelector('.ship')
       console.log('attacked!')

       playerShip.classList.toggle('startUSSAAttack');

       if (Math.random() < alienShips[0].accuracy) {
         	console.log('You have been hit!')}

       let alienTwirling = document.querySelector('.hundred');

       let youAreDone = document.createElement("img");
            youAreDone.setAttribute("src","https://thumbs.gfycat.com/UnfinishedQuickDunlin-max-1mb.gif");
            youAreDone.style.height = 80;
            alienTwirling.replaceWith(youAreDone);

            

   }

   


   const playerRetreats = () =>{
       let playerHasRetreated = getElementbyId('retreatBtn')
       console.log("Player Has Retreated!")

   }




  class ussAssembly  {
      constructor(){

        this.ship =  ship
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy;
      }
     
         

     }


  class alienShips  {
      constructor(){
        this.ship = ship
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy;
      }
    
        


    }

    const alienArray =['alienShip1', 'alienShip2', 'alienShip3', 'alienShip4', 'alienShip5', 'alienShip6'
]



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