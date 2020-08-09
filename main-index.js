window.onload = () => {
  alert(`
  1. Code Plan is list in read me file
  2. You can add people or players
  3. You can add players to different teams
  4. Classes are used for player and teammates
  5. Tests are created in the main.js file which was used for starter code, prior to adding to DOM
  6. Many bonus extras were added
  `)

}
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
let registeredIndexs = []
let listOfPlayers = []
let blueTeam = []
let redTeam = []
let newId = 9;
let teamColor;
let teamMascot;
let directMode = 'false'

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
    this.color = 'Blue'
    this.mascot = 'donkey'
  }
}
class redTeammate extends player {
  constructor(id, name, age, skillSet, placeBorn) {
    super(id, name, age, skillSet, placeBorn)
    this.color = 'Red'
    this.mascot = 'elephant'
  }
}

const listPeopleChoices = (add = 0) => {
  if (add == 0) { clearList("people") }
  const listElement = document.getElementById('people')
  if (add == 1) { //only adds 1 person if function passed a 1
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.id = `butt${arrOfPeople[arrOfPeople.length - 1].id}`;
    button.innerHTML = "Register Player"
    button.addEventListener('click', function () {
      makePlayer(arrOfPeople[arrOfPeople.length - 1].id)
      document.getElementById(`butt${arrOfPeople[arrOfPeople.length - 1].id}`).style.display = 'none';

    })
    li.appendChild(button)
    let indexTemp = arrOfPeople.length - 1

    li.appendChild(document.createTextNode(arrOfPeople[arrOfPeople.length - 1].name + " - " + arrOfPeople[arrOfPeople.length - 1].skillSet))
    listElement.append(li)
  }

  else {
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.id = `butt${person.id}`;
      button.innerHTML = "Register Player"
      button.addEventListener('click', function () {
        makePlayer(person.id)
        document.getElementById(`butt${person.id}`).style.display = 'none';

      })
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)

    })
  }
  if (add == 0) { document.getElementById('listPlay').style.display = "none"; }


}

const makePlayer = (idx) => {
  console.log(`li ${idx} was clicked!`)
  console.log(registeredIndexs)



  if (registeredIndexs.indexOf(idx) != -1) {
    alert("already registered")
    return;
  }




  let newPlayerIndex;
  for (let i = 0; i < arrOfPeople.length; i++) {
    if (arrOfPeople[i].id == idx) { newPlayerIndex = i }
  }
  registeredIndexs.push(idx);


  listOfPlayers[listOfPlayers.length] = new player(arrOfPeople[newPlayerIndex].id, arrOfPeople[newPlayerIndex].name, arrOfPeople[newPlayerIndex].age, arrOfPeople[newPlayerIndex].skillSet, arrOfPeople[newPlayerIndex].placeBorn);

  getRegistrationData(listOfPlayers.length - 1);


  console.log(listOfPlayers)

}

const displayDBPlayers = () => {
  clearList('players');
  const listElement = document.getElementById('players');
  listOfPlayers.map(person => {
    const li = document.createElement("li")
    li.id = `dodgePerson${person.id}`
    console.log(li.id)

    const button = document.createElement("button")
    button.innerHTML = "Pick Team"
    button.addEventListener('click', function () {
      console.log("person.id=" + person.id)
      choseTeam(person.id)
    })
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + ":Skill Sore= " + person.skillSetScore))
    listElement.append(li)
    //info button

    const button2 = document.createElement("button")
    button2.className = "fa fa-folder"
    button2.addEventListener('click', function () {
      showInfo(listOfPlayers, person.id)
    })
    li.appendChild(button2)


    console.log(li.id)
    if (person.isHealthy == "Injured") { document.getElementById(li.id).style.color = "red" }

  })


}




const clearList = (id) => {
  let parent = document.getElementById(id);
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// Modal functions below
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];


const getRegistrationData = (idx) => {
  modal.style.display = "block";
  document.getElementById('fname').value = idx //passing index to form so can use on submit button
}

const dodgeSkills = () => {
  let registeredID;
  let playerD;
  let formInfo = document.getElementById("frm1");
  registeredID = formInfo.elements[5].value;
  if (registeredID == -1) {

    if (teamColor == 'Blue') {
      playerD = blueTeam[blueTeam.length - 1]
      playerD.color = 'Blue';
      playerD.mascot = 'donkey'
    }
    if (teamColor == 'Red') {
      playerD = redTeam[redTeam.length - 1]
      playerD.color = 'Red';
      playerD.mascot = 'elephant'
    }
    console.log("player = " + playerD + "color= " + teamColor)
    playerD.canThrowBall = formInfo.elements[0].value;
    playerD.canDodgeBall = formInfo.elements[1].value;
    playerD.hasPaid = formInfo.elements[2].value;
    playerD.isHealthy = formInfo.elements[3].value;
    playerD.yearsExperience = formInfo.elements[4].value;
    if (teamColor == 'Blue') {
      playerD.color = 'Blue';
      playerD.mascot = 'donkey'

    }
    if (teamColor == 'Red') {
      playerD.color = 'Red';
      playerD.mascot = 'elephant'

    }

    sum = (parseInt(playerD.canThrowBall) + parseInt(playerD.canDodgeBall) + parseInt(playerD.yearsExperience));
    console.log(sum)
    sum = sum / 3;
    let average = sum.toFixed(1)
    playerD.skillSetScore = average;
    modal.style.display = "none";
    if (teamColor == 'Blue') {
      displayBluePlayers();
      teamColor = 'grey'
    }
    if (teamColor == 'Red') {
      displayRedPlayers();
      teamColor = 'grey'
    }

  }
  else {
    listOfPlayers[registeredID].canThrowBall = formInfo.elements[0].value;
    listOfPlayers[registeredID].canDodgeBall = formInfo.elements[1].value;
    listOfPlayers[registeredID].hasPaid = formInfo.elements[2].value;
    listOfPlayers[registeredID].isHealthy = formInfo.elements[3].value;
    listOfPlayers[registeredID].yearsExperience = formInfo.elements[4].value;
    sum = 0;
    for (let i = 0; i < 5; i++) {
      if ((i == 0) || (i == 1) || (i == 1)) {
        sum = sum + parseInt(formInfo.elements[i].value)
        console.log(sum)
      }
    }

    sum = sum / 3;
    let average = sum.toFixed(1)
    listOfPlayers[registeredID].skillSetScore = average;
    console.log(listOfPlayers[registeredID])
    modal.style.display = "none";
    displayDBPlayers();
  }



}

const displayRedPlayers = () => {

  console.log("made it to red")
  clearList('red');
  const listElement = document.getElementById('red');
  redTeam.map(person => {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(person.name + ":Skill Sore= " + person.skillSetScore))
    listElement.append(li)
    li.id = `redperson${person.id}`
    if (person.isHealthy == "Injured") { document.getElementById(li.id).style.color = "red" }
    const button = document.createElement("button")
    button.className = "fa fa-folder"
    button.addEventListener('click', function () {
      showInfo(redTeam, person.id)
    })
    li.appendChild(button)
  })
}

const choseTeam = (id) => {
  modal2.style.display = "block";
  console.log("id====" + id)
  document.getElementById('fname2').value = id //passing ID to form in hidden value 
  console.log("chose team")
}

const moveToTeam = (color = 'grey') => {
  modal2.style.display = 'none'
  console.log("the color passed is" + color)
  let formInfo = document.getElementById("frm2");
  let team;
  if (color == 'grey') {
    console.log("kkkk" + formInfo.elements[0].value)
    team = formInfo.elements[0].value;
  }
  console.log("the color passed on form is" + color)
  let idx = formInfo.elements[1].value;
  let index;
  index = findWithAttr(listOfPlayers, "id", idx)
  if (team == "Blue") {
    blueTeam.push(listOfPlayers[index])
    blueTeam[blueTeam.length - 1].color = 'Blue';
    blueTeam[blueTeam.length - 1].mascot = 'donkey'
  }

  else {
    redTeam.push(listOfPlayers[index])
    redTeam[redTeam.length - 1].color = 'Red';
    redTeam[redTeam.length - 1].mascot = 'elephant'
  }
  console.log(listOfPlayers)
  listOfPlayers.splice(index, 1)
  console.log(listOfPlayers)
  if (blueTeam.length > 0) { displayBluePlayers(); }
  if (redTeam.length > 0) { displayRedPlayers(); }
  displayDBPlayers();

}

const displayBluePlayers = () => {


  clearList('blue');
  const listElement = document.getElementById('blue');
  blueTeam.map(person => {
    const li = document.createElement("li")
    li.id = `blueperson${person.id}`
    li.appendChild(document.createTextNode(person.name + ":Skill Sore= " + person.skillSetScore))

    listElement.append(li)
    if (person.isHealthy == "Injured") { document.getElementById(li.id).style.color = "red" }
    const button = document.createElement("button")
    button.className = "fa fa-folder"
    button.addEventListener('click', function () {
      showInfo(blueTeam, person.id)
    })
    li.appendChild(button)
  })
}



//function to find index of key with value
function findWithAttr(array, attr, value) {
  console.log(value)
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i][attr])
    if (array[i][attr] == value) {
      console.log(i)
      return i;
    }
  }
  return -1;
}

const showInfo = (array, idx) => {

  let index = findWithAttr(array, "id", idx)

  clearList('user-info');
  const listElement = document.getElementById('user-info');
  console.log(array)
  console.log(index)
  const keys = Object.keys(array[index])
  for (let i = 0; i < keys.length; i++) {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(keys[i] + ": " + array[index][keys[i]]))
    listElement.append(li)
  }


}

const addPerson = () => {
  modal3.style.display = "block";
  console.log("Ready to add")


}


const addPersonInfo = () => {
  console.log("dirrectAdd" + directMode)
  modal3.style.display = 'none'
  if (directMode == 'true') {
    let formInfo = document.getElementById("frm3");
    arrNum = arrOfPeople.length
    let tempID = newId + 0;
    newId++;
    let tempName = formInfo.elements[0].value;
    let tempAge = formInfo.elements[1].value;
    let tempSkillSet = formInfo.elements[2].value;
    let tempPlaceBorn = formInfo.elements[3].value;
    if (teamColor == 'Blue') {
      blueTeam[blueTeam.length] = new blueTeammate(tempID, tempName, tempAge, tempSkillSet, tempPlaceBorn)
    }
    if (teamColor == 'Red') {
      redTeam[redTeam.length] = new redTeammate(tempID, tempName, tempAge, tempSkillSet, tempPlaceBorn)
    }

    directMode = 'false';
    console.log("should display block")
    modal.style.display = "block";
    document.getElementById('fname').value = -1

  }
  else {
    let formInfo = document.getElementById("frm3");

    arrNum = arrOfPeople.length
    arrOfPeople[arrNum] = {};
    arrOfPeople[arrNum].id = newId
    arrOfPeople[arrNum].name = formInfo.elements[0].value;
    arrOfPeople[arrNum].age = formInfo.elements[1].value;
    arrOfPeople[arrNum].skillSet = formInfo.elements[2].value;
    arrOfPeople[arrNum].placeBorn = formInfo.elements[3].value;
    console.log(arrOfPeople)
    newId++;
    listPeopleChoices(1); //pass function a 1 to add only 1 person and not the whole list
  }
}

const directAdd = (color, mascot) => {
  modal3.style.display = 'block'
  teamColor = color;
  teamMascot = mascot;
  directMode = 'true'


}

const directAddsave = () => {
  modal3.style.display = 'none'
}






