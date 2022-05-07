// Creating variables.
// Time to start at 0
let time = 0;
// counter running
let counterRunning = true;
// Frecuency Counter
let likedNumbers = {}

// Selecting counter text "number"
let counterText = document.querySelector("h1#counter");
// Selecting likes list.
let likesList = document.querySelector("ul.likes");

// Selecting buttons.
const buttons = document.querySelector("#buttons")



// When the page loads start timer (Counterrunning = true)
// set interval that updates +1 each second.
setInterval(function(){
    if(counterRunning){
    counterText.textContent = time++;
        }
    }, 1000);


buttons.addEventListener("click", (event) =>{
    if(event.target.id === "plus"){
        time++;
        counterText.textContent = time;
    }else if(event.target.id === "minus"){
        time--;
        counterText.textContent = time;
    }else if(event.target.id === "pause"){
        toggleSwitch();
    }
    else if(event.target.id === "heart"){
        likes();
    }
});

function toggleSwitch(){
    // switching magic occurs here! returning opposite of what is activated...("it is a boolean!")
    counterRunning = !counterRunning;
    document.querySelectorAll("button").forEach(element => {
    // for each button (has to be button!)
        if(element.id !== "pause"){
            // setting what ever is not "pause" to be disabled or enabled... 
            // The opposite of what it is. (First is disabled and then enabled)
            element.disabled = !counterRunning;
        }else{
            if(counterRunning){
                element.textContent = "pause"
            }else{
            element.textContent = "resume"
            }
        }
    });
};

function likes(){
    // 2. Check if a key exists in an object...
    // 3. if likedNumbers already has a key of the current number(time), 
    if(likedNumbers[time]){
        // Selecting time from id of already existing current number.
        const newLi2 = document.querySelector(`[id="${time}"]`)
        // want to increment value from created key from time(current number).
        let newLikedCount = likedNumbers[time] ++;
        newLi2.textContent = `The number ${time} has been liked ${newLikedCount} time`;

    }else{
    // 1. Create a new key[] on object{} with the current number(time). (hash?) and place (1) on value.
        likedNumbers[time] = 1;
        const newLi = document.createElement("li");
        // create something to locate the current number 
        newLi.setAttribute('id', time);
        newLi.textContent = `The number ${time} has been liked 1 time`;
        likesList.appendChild(newLi); 
    }
    
};


// // Hearting button("liking number").
// heart.addEventListener("click", function(){
//     const newLi = document.createElement("li");
//     // creating the current time in a list 
//     let currentTime = counterText.innerText;

//     if(currentTime){
//     let number = 
//     newLi.innerHTML = time + ` has been liked ${number} times`;
//     likesList.appendChild(newLi); 
//     }else{
//     newLi.innerHTML = time + ` has been liked 1 time`;
//     likesList.appendChild(newLi); 
//     }
// });




