console.log('Testing Dice Game');
pageLoader();

// Funciton to load the page and set event listeners
function pageLoader(){
    console.log('Loading... so far so good...');

    // Get the button to display numbers
    const playButton = document.getElementsByClassName('play-button');
    for (let btn of playButton) {
        btn.addEventListener('click', displayDices);
    }
    // same button adds score to scoreTotal ???

}

// addEventListener("click", (event) => {});
// onclick = (event) => {};

// Create a function to display Dice's numbers
function displayDices(e){
    console.log(e.target.value);
    if (e.target.value === 'play'){
        dices=[]
        for (let i=0; i<6; i++) {
            dices.push(getRandom());
        }
        let diceRow = document.getElementById('dice-display');
        diceRow.innerHTML = ''
        for (let dice of dices){
            let col=document.createElement('div')
            col.className = 'col-2'
            col.innerHTML = dice
            diceRow.append(col)
        }
        displayScore(dices)
    }
}

function getRandom(){
    return Math.floor(Math.random() *6) +1
}

function displayScore(dices){
    dices = dices.sort()
    console.log(dices)
    let score = 0;
    let diceCount = {
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0
    }
    for (let d of dices) {
        diceCount[d] += 1
    }
    console.log(diceCount)
    for (let [key,value] of Object.entries(diceCount)){
        if (key == 1){
            if (value >= 3){
                score += 1000;
            } else {
                score += 100*value;
            }
        }if (key == 5){
            if (value >= 3){
                score += 500;
            } else {
                score += 50*value;
            }
        } else if (key == 2,3,4,6){
            if (value >= 3){
                score += 100*key;
            }
        } else if (key == 1,2,3,4,5,6){
            score += 1500;
        }
        }
    console.log(score);
    let scoreRow = document.getElementById('score-display');
    let col=document.createElement('div')
    col.innerHTML = `Score: ${score}`
    scoreRow.append(col)
}

// function displayScoreTotal(score){
//     let totalScore = 0;
//     totalScore += score;
//     console.log(totalScore);

//     let totalRow = document.getElementById('scoreTotal-display');
//     let col=document.createElement('div')
//     col.innerHTML = `Total Score: ${scoreTotal}`
//     totalRow.append(col)
// }