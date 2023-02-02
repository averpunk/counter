// var myAge = 31;

// console.log(myAge)

// let myAge = 31;

// console.log(myAge)

// let myAge = 31
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function increment() {
//     console.log("The button was clicked")
// }

// function meaningOfLife() {
//     console.log(42)
// }

// meaningOfLife()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function sum() {
//     console.log(lap1 + lap2 + lap3)
// }

// sum()

// let lapsCompleted = 0

// function increment() {
//     lapsCompleted = lapsCompleted + 1
// }

// increment()
// increment()
// increment()

// console.log(lapsCompleted)

// let countEl = document.getElementById("count-el")

// console.log(countEl)

// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// }

// let username = "per"

// let message = "You have three new notifications"

// console.log(message)

// let messageToUser = message + ", " + username

// console.log(messageToUser)

// let name = "Hanna"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Hanna"
// let greeting = "Welcome back, "
// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += "👋"
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment () {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}