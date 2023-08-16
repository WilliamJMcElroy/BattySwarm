let hunter = null
let clickCounter = 0
let batSwarm = []


const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
}
]
function makeHunter() {
    let randomIndex = Math.floor(Math.random() * people.length)
    hunter = people[randomIndex]
    console.log(hunter)
}
function drawPeople() {
    locations.forEach((spot) => {
        let atLocation = people.filter((person) => person.location == spot)
        let peopleEmojis = atLocation.map((person) => person.picture)
        document.getElementById(spot).innerText = peopleEmojis.join(', ')
    })
}


function attackSchool() {
    console.log("ATTACK SCHOOL")
    people.forEach(person => {
        // let attackLocation = document.getElementById('🏤')
        if (person.location == '🏤') {
            person.picture = '🦇'
        }
    })
    clickCounter++
    console.log(clickCounter)
    lossConditions()
    runForLife()
    drawPeople()
    victoryConditions()
}

function attackOffice() {
    console.log("ATTACK OFFICE")
    people.forEach(person => {
        if (person.location == '🏥') {
            person.picture = '🦇'
        }
    })
    clickCounter++
    console.log(clickCounter)
    lossConditions()
    runForLife()
    drawPeople()
    victoryConditions()
}

function attackFactory() {
    console.log("ATTACK FACTORY")
    people.forEach(person => {
        if (person.location == '🏭') {
            person.picture = '🦇'
        }
    })
    clickCounter++
    console.log(clickCounter)
    lossConditions()
    runForLife()
    drawPeople()
    victoryConditions()
}

function attackHospital() {
    console.log("ATTACK HOSPITAL")
    people.forEach(person => {
        if (person.location == '🏢') {
            person.picture = '🦇'
        }
    })
    clickCounter++
    console.log(clickCounter)
    lossConditions()
    runForLife()
    drawPeople()
    victoryConditions()
}

function attackAdmin() {
    console.log("ATTACK ADMIN")
    lossConditions()
    people.forEach(person => {
        if (person.location == '🏣') {
            person.picture = '🦇'
        }
    })
    clickCounter++
    console.log(clickCounter)
    runForLife()
    drawPeople()
    victoryConditions()
}

function victoryConditions() {
    let batSwarm = people.filter(person => person.picture == '🦇')
    if (batSwarm.length == people.length) {
        window.alert("You have slayed the vampire hunter. VICTORY!")
    }
    drawPeople()
}
function lossConditions() {
    if (clickCounter > 6) {
        window.alert("The pesky humans make it through the night and kill you in your sleep in the morning")
    } if (hunter.picture = '🦇') {
        window.alert("You tried to kill the vampire hunter and ended up eating 'stake'")
    }

}

function runForLife() {
    people.forEach(person => {

        let randomIndex = Math.floor(Math.random() * locations.length)
        let newLocation = locations[randomIndex]
        person.location = newLocation
    })
}


makeHunter()
drawPeople()

// function gameReset() {
//     if (batSwarm.length == people.length || clickCounter > 6) {
//         if ( '🦇') {
    //             reset();
//         }
//         }
//     }
// }