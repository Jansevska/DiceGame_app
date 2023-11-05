function displayDices(e){
    console.log(e.target.value);
    if (e.target.value === 'play'){
        dices=[]
        for (let i=0; i<6; i++) {
            dices.push(getRandom());
        }
        let diceRow = document.getElementById('dice-display');
        diceRow.innerHTML = ''
        for (let num of dices){
            let col=document.createElement('div')
            col.className = 'col-2'
            col.innerHTML = num
            diceRow.append(col)
        }
    }
    console.log('score func...')
    let score = 0;
    for (dice of dices) {
        if (dice[i].id === '5'){
            score += 50;
        } if (dice[i].id === '1'){
            score += 100;
        } if (dice[i].id === dice[i].id === dice[i].id){
            score += dice[i].id*100;
        } if (dice[i].id === '1', '2', '3', '4', '5', '6'){
            score += 1500;
        }
        switch (dices.dice[i].id === '1') {
            case ((dices.dice[i].id ==='1')*3):
                score += 1000 - 300;
                break;
        }
        console.log(score);
        let scoreRow = document.getElementById('score-display');
        let col=document.createElement('div')
        col.className = 'col-2'
        col.innerHTML = score
        scoreRow.append(col)
}
}

for (let d of dices) {
    if (d[i].id === '5'){
        score += 50;
    } if (d[i].id === '1'){
        score += 100;
    } if (d[i].id === dice[i].id === dice[i].id){
        score += d[i].id*100;
    } if (d[i].id === '1', '2', '3', '4', '5', '6'){
        score += 1500;
    }
    switch (d[i].id === '1') {
        case ((d[i].id ==='1')*3):
            score += 1000 - 300;
            break;
    }
}


// .includes
dices.includes(5)? score += 50 : score = score;
// dices.forEach((5) => score += 50)
dices.includes(1)? score += 100 : score = score;
dices.includes(1,1,1)? score += 1000 : score = score;
dices.includes(1,1,1,1,1,1)? score += 2000 : score = score;
dices.includes(2,2,2)? score += 200 : score = score;
dices.includes(3,3,3)? score += 300 : score = score;
dices.includes(4,4,4)? score += 400 : score = score;
dices.includes(5,5,5)? score += 500 : score = score;
dices.includes(6,6,6)? score += 600 : score = score;
dices.includes(1,2,3,4,5,6)? score += 1500 : score = score;
console.log(score += score);
// if score >= 10000 {
//     scoreRow.innerHTML = ''
// }


//case statement
switch (dices){
    case [5]:
        score += 50;
    case [5,5]:
        score += 100;
    case [5,5,5]:
        score += 150;
    case [5,5,5,5]:
        score += 200;
    case [5,5,5,5,5]:
        score += 250;
    case [5,5,5,5,5,5]:
        score += 300;
    case [1]:
        score += 100;
    default:
        score = score;
}




dice1 = <i class="bi bi-dice-1-fill"></i>
dice2 = <i class="bi bi-dice-2-fill"></i>
dice3 = <i class="bi bi-dice-3-fill"></i>
dice4 = <i class="bi bi-dice-4-fill"></i>
dice5 = <i class="bi bi-dice-5-fill"></i>
dice6 = <i class="bi bi-dice-6-fill"></i>

