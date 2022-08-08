let par;
let playerName = prompt("Welcome to GC mini golf! What is your name?")

console.log(playerName)

let holeAmount = parseFloat(prompt(`Hi, ${playerName}! Would you like to play 3 or 6 holes today?`));

let holeOptions = [3,6];

console.log(`Player is playing ${holeAmount} holes.`)

if (holeOptions.includes(holeAmount)) {
par = -3 * holeAmount;
for (let i = 1; i <= holeAmount; i++) {
    let score = parseFloat( prompt(`How many putts for hole ${i}? (par:3)`) );
    par += score
}
}

else {
    alert(`Sorry, ${holeAmount} is an invalid response please refresh the page and start again!`)
}
console.log(`Score for the course is ${par}`)

if (!par) {
console.log(`Good game, ${playerName}. you total par was: ${par}`)
}

else if (par > 0) {
console.log(`Nice try, ${playerName}... you total par was: +${par}`)

}

else {
console.log(`Great Job, ${playerName}! you total par was: ${par}`)

}



