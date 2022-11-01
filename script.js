
// if (Math.random() < alien[0].accuracy) {
//     console.log('You have been hit!');
// }
class Spaceship {
    constructor (name,hull,firePower,accuracy) {
        this.name = name
        this.hull = hull
        this.firePower = firePower
        this.accuracy = accuracy
    }
    attack (human,alienship) {
        if(Math.random()<this.accuracy) {
            console.log("Human has attacked alien")
            alienship.hull -= human.firePower
            console.log( `This is alien's hull ${alienship.hull}`)
        }else {
            console.log("Human attack missed. There is no damage")
        }
    }
    retreat () {
    }
}
class Alien {
    constructor (hull,firePower,accuracy) {
        this.hull = hull
        this.firePower = firePower
        this.accuracy = accuracy
    }
    attack (human,alienship){
        if(Math.random()<this.accuracy) {
            console.log("Alien has attacked human")
            human.hull -= alienship.firePower
            console.log( `This is human's hull ${human.hull}`)
        }else {
            console.log("Alien attack missed. There is no damage")
        }

    }
}
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

const ussHelloWorld = new Spaceship("USS HelloWorld",20,5,.7)
const alienArray = []

for(let i=0;i<6;i++) {
    alienArray.push(new Alien(Math.floor(randomNumber(3,7)),Math.floor(randomNumber(2,5)),randomNumber(.6,.8)))
}
//console.log(alienArray)
//console.log(ussHelloWorld)

function battle() {
    console.log(`Earth: First attack (1) `)
    for (let i = 0; i < alienArray.length; i++) {
        ussHelloWorld.attack(ussHelloWorld, alienArray[i])
        while (alienArray[i].hull > 0 && ussHelloWorld.hull > 0) {
            console.log("Alien: First attack (1)")
            alienArray[i].attack(ussHelloWorld, alienArray[i])
            console.log("Human: Second Attack (2)")
            ussHelloWorld.attack(ussHelloWorld, alienArray[i])
            if(alienArray[i].hull>0) {
                alienArray[i].attack(ussHelloWorld, alienArray[i])
                console.log("Alien : Second Attack (2)")
            }
        } if (ussHelloWorld.hull > 0 && alienArray[i].hull <= 0) {
            console.log("This alienship has been defeated on to the next")
        } else if (ussHelloWorld.hull <= 0 && alienArray[i].hull >= 0) {
            console.log("Aliens have won. Earth is finished. You have lost")
            break
        }
    }

}

battle ()


// console.log(`This is human's hull ${ussHelloWorld.hull}`)

// while (alienArray[i].hull > 0 && ussHelloWorld.hull > 0) {
// if (ussHelloWorld.hull > 0 && alienArray[i].hull <= 0) {
//     console.log("This alienship has been defeated on to the next")
// } else if (ussHelloWorld.hull <= 0 && alienArray[i].hull >= 0) {
//     console.log("Aliens have won. Earth is finished")
// }
        
           





    //     while(alienArray[i].hull>0) {
    //         ussHelloWorld.attack(alienArray[i])
    //         if(alienArray[i].hull === 0) { 
    //             console.log(`${ussHelloWorld.name} is the victor. The alien ship is dead`)
    //         }
    //     }  
    
    // const goFirst = Math.random()
    // if(goFirst>0.5) {
    //     console.log(`Earth will attack first`)
    //     ussHelloWorld.attack(alienArray[0])
    //     while(alienArray[0].hull>0) {
    //         ussHelloWorld.attack(alienArray[0])
    //         if(alienArray[0].hull === 0) { 
    //             console.log(`${ussHelloWorld.name} is the victor. The alien ship is dead`)
    //         }
    //     } 
    // }else {
    //     console.log(`Alien will attack first`)
    //     alienArray[0].attack(ussHelloWorld)
    //     while(ussHelloWorld.hull>0) {
    //         alienArray[0].attack(ussHelloWorld)
    //         if(ussHelloWorld.hull === 0) { 
    //             console.log(`${ussHelloWorld.name} is the victor. The alien ship is dead`)
    //         }
    //     } 
    // }
    // if(ussHelloWorld.hull>0 && alienArray[0].hull ===0) {
    //     for(i=1;i<6;i++) {
    //         ussHelloWorld.attack(alienArray[i])
    //     }

    // }else if(ussHelloWorld.hull<=0 && alienArray[0]>=0) {
    //     console.log("Aliens have won. Earth is done")
    // }
