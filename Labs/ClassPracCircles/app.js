//// select elements


const wrapperElement = document.querySelector('.wrapper');

const minuteInput = document.querySelector('.minutes');

const secondInput = document.querySelector('.seconds');



/// DOM Mnipulation




/// add functionalality
minuteInput.addEventListener('keydown', function (e) {

    if (e.keycode === 13) {
        secondInput.focus();

    };

    /// ad an event listener to the second box

    secondInput.addEventListener("keydown", function(e){

        ///initialize minutes and seconds

        let minutes = 0;
        let seconds = 0;

        /// verify uswer wants to start the clock
        if(e.keycode === 13){

            /// retrieve the number that the user inputs in boxes
            let minuteValue = minuteInput.value;

            //retrieve the second values
            let secondValue = secondInput.value;


            /// show starting value of the clock
            minuteInput.value = String(minutes).padStart(2, "0");
            secondInput.value = String(seconds).padStart(2, "0");


        /// Create an interval and retrieve the interval id
        
            const secondId = setInterval(() => {

                /// Add +1 to each previously displayed second
                seconds++;
                /// if my seconds get to 60 add +1 to my minutes
                if(Number(seconds)===60){
                    ++minutes;

                    minuteInput.value = String(minutes).padStart(2,"0")


                    /// reset the seconds
                    seconds = 0;
                }

                /// verify the predefined minute, second combo is equal to timer
                if (minutes === Number(minuteValue) && seconds === Number(secondValue)){
                    
                    ///stop the timer
                    clearInterval(secondId);

                    wrapperElement.classListladd("red-class");
                }

                secondInput.value=String(seconds.padStart(2, "0"))


            }, 1000)

            
        
        }
    })})





