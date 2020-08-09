'use strict';
const assert = require('assert');
const arrOfPeople = [
    {
        id: 2,
        name: "Charles Young",
        age: 55,
        skillSet: "welding",
        placeBorn: "Omaha, Nebraska"
    },
    {
        id: 3,
        name: "Judy Twilight",
        age: 35,
        skillSet: "fishing",
        placeBorn: "Louisville, Kentucky"
    },
    {
        id: 4,
        name: "Cynthia Doolittle",
        age: 20,
        skillSet: "tic tac toe",
        placeBorn: "Pawnee, Texas"
    },
    {
        id: 5,
        name: "John Willouby",
        age: 28,
        skillSet: "pipe fitting",
        placeBorn: "New York, New York"
    },
    {
        id: 6,
        name: "Stan Honest",
        age: 20,
        skillSet: "boom-a-rang throwing",
        placeBorn: "Perth, Australia"
    },
    {
        id: 7,
        name: "Mia Watu",
        age: 17,
        skillSet: "acrobatics",
        placeBorn: "Los Angeles, California"
    },
    {
        id: 8,
        name: "Walter Cole",
        age: 32,
        skillSet: "jump rope",
        placeBorn: "New Orleans, Louisiana"
    },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class player {
    constructor(id, name, age, skillSet, placeBorn) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.placeBorn = placeBorn;
        this.canThrowBall;
        this.canDodgeBall;
        this.hasPaid;
        this.isHealthy;
        this.yearsExperience;
        this.skillSetScore;
    }
}
class blueTeammate extends player {
    constructor(id, name, age, skillSet, placeBorn) {
        super(id, name, age, skillSet, placeBorn)
        this.color = 'blue'
        this.mascot = 'Elephant'
    }
}
class redTeammate extends player {
    constructor(id, name, age, skillSet, placeBorn) {
        super(id, name, age, skillSet, placeBorn)
        this.color = 'red'
        this.mascot = 'Donkey'
    }
}

const listPeopleChoices = () => {

    arrOfPeople.map(person => {
        console.log(person.name + " - " + person.skillSet)

    })
}


const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
}



// Begin by reading the tests and building a function that will full each one.
// As you build, you might not have to build them in order, maybe you do...
// These are the tests
if (typeof describe === 'function') {
    describe('player', function () {
        it('should have a the same paramters upon instantiation', function () {
            // this creates a player with basic information an no skill sets
            const newPlayer1 = new player(888, 'John Doe', 55, 'chemistry');
            assert.equal(newPlayer1.id, 888);
            assert.equal(newPlayer1.name, 'John Doe');
            assert.equal(newPlayer1.age, 55);
            assert.equal(newPlayer1.skillSet, 'chemistry');
            assert.equal(newPlayer1.canDodgeBall, null);
        });

        it('can assign skills', function () {
            // test that special skills can be assigned

            const newPlayer1 = new player(888, 'John Doe', 55, 'chemistry');
            newPlayer1.canThrowBall = '2'
            newPlayer1.yearsExperience = '4'
            assert.equal(newPlayer1.canThrowBall, '2');
            assert.equal(newPlayer1.yearsExperience, '4');
        });
    });

    describe('player', function () {
        it('should have a the same paramters upon instantiation', function () {
            // this creates a blue player with basic information an shows
            const newPlayer1 = new blueTeammate(888, 'John Doe', 55, 'chemistry');
            assert.equal(newPlayer1.id, 888);
            assert.equal(newPlayer1.name, 'John Doe');
            assert.equal(newPlayer1.age, 55);
            assert.equal(newPlayer1.skillSet, 'chemistry');
            assert.equal(newPlayer1.canDodgeBall, null);
        });

        it('does assign color and mascot for blue', function () {
            // shows that color and mascot are assigned

            const newPlayer1 = new blueTeammate(888, 'John Doe', 55, 'chemistry');
            assert.equal(newPlayer1.color, 'blue');
            assert.equal(newPlayer1.mascot, 'Elephant');
        });
    });

    describe('player', function () {
        it('should have a the same paramters upon instantiation', function () {
            // this creates a blue player with basic information an shows
            const newPlayer1 = new blueTeammate(888, 'John Doe', 55, 'chemistry');
            assert.equal(newPlayer1.id, 888);
            assert.equal(newPlayer1.name, 'John Doe');
            assert.equal(newPlayer1.age, 55);
            assert.equal(newPlayer1.skillSet, 'chemistry');
            assert.equal(newPlayer1.canDodgeBall, null);
        });

        it('does assign color and mascot for red', function () {
            // shows that color and mascot are assigned

            const newPlayer1 = new redTeammate(888, 'John Doe', 55, 'chemistry');
            assert.equal(newPlayer1.color, 'red');
            assert.equal(newPlayer1.mascot, 'Donkey');
        });
    });
}
