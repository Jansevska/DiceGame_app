console.log('Testing Dice Game');
pageLoader();

// Funciton to load the page and set event listeners
function pageLoader(){
    console.log('Loading... so far so good...');

    // Get the buttom to display numbers
    const playButton = document.getElementsByClassName('play-button');
    console.log('play button - click and play...');
    playButton.addEventListener('click', displayDices);
    console.log("abc");
}

// addEventListener("click", (event) => {});
// onclick = (event) => {};

// Create a function to display Dice's numbers
function displayDices(e){
    console.log(e.target.value);
    if (e.target.value === 'play'){
        console.log("do something");
    }
}
