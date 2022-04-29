// this application will create a menu for the management of duck coops

// this variable will store the coops in some sort of duck purgatory
let duckFarm = [];

// the main menu
function startMenu() {
    let menuItemSelection;
    while (menuItemSelection != 0) {
        menuItemSelection = prompt(`
        1. View Coop
        2. Edit Coop
        3. Create Coop
        4. Exit
        `);
        switch (menuItemSelection) {
            case '1': 
                viewCoop();
                menuItemSelection = 1;
                break;
            case '2':
                editCoop();
                menuItemSelection = 2;
                break;
            case '3':
                createCoop();
                menuItemSelection = 3;
                break;
            case '4':
                //hopefully this will exit the program
                menuItemSelection = 0;
                break;
            case null: 
                menuItemSelection = 0;
                break;
            default: 
                alert('That is not a valid selection!');
                menuItemSelection = 1;
    }
}
}
// menu item 1 to display all created coops
function viewCoop() {
    let selectedCoop;
    let coops = '';

        for (i = 0; i < duckFarm.length; i++) {
            coops += i + ". " + duckFarm[i].name + " \n";
        }

    selectedCoop = prompt(`Pick a coop: \n${coops}`);
    if (duckFarm[selectedCoop]){
        let listOfDucks = '';
        let coopDuckList = () => {
            for (i = 0; i < duckFarm[selectedCoop].ducks.length; i++) {
              listOfDucks += i + ". " + duckFarm[selectedCoop].ducks[i].name + "\n";
            }
        }
        coopDuckList();
        
        alert(`${duckFarm[selectedCoop].name} is a ${duckFarm[selectedCoop].size} coop! Here are the ducks of ${duckFarm[selectedCoop].name}: \n${listOfDucks}`);
    } 

    
}

// menu item 2 to allow duck creation and deletion, as well as delete coops
function editCoop() {
    let selectedCoop;
    let coops = '';

        for (i = 0; i < duckFarm.length; i++) {
            coops += i + ". " + duckFarm[i].name + " \n";
        }

    selectedCoop = prompt(`Pick a coop: \n${coops}`);
    function editMenu() {
        let editMenuItemSelection;
        while (editMenuItemSelection != 0) {
            editMenuItemSelection = prompt(`
            1. Delete Coop
            2. Add Duck
            3. Remove Duck
            4. Exit
            `);
            switch (editMenuItemSelection) {
                case '1': 
                    alert(`${duckFarm[selectedCoop].name} has been deleted!`);
                    duckFarm.splice(selectedCoop, 1);
                    
                    editMenuItemSelection = 0;
                    break;
                case '2':
                    createDuck(duckFarm[selectedCoop]);
                    
                    editMenuItemSelection = 2;
                    break;
                case '3':
                    let listOfDucks = '';
                    let coopDuckList = () => {
                        for (i = 0; i < duckFarm[selectedCoop].ducks.length; i++) {
                          listOfDucks += i + ". " + duckFarm[selectedCoop].ducks[i].name + "\n";
                        }
                    }
                    coopDuckList();
                    let duckChoice = prompt("Pick the index of a duck to remove: \n" + listOfDucks);
                    alert(duckFarm[selectedCoop].ducks[duckChoice].name + " has been deleted!");
                    duckFarm[selectedCoop].ducks.splice(duckChoice, 1);
                    editMenuItemSelection = 3;
                    break;
                case '4':
                    //hopefully this will exit the program
                    editMenuItemSelection = 0;
                    break;
                case null: 
                    editMenuItemSelection = 0;
                    break;
                default: 
                    alert('That is not a valid selection!');
                    editMenuItemSelection = 1;
            }

        }

    }
    editMenu();

}

// menu item 3 to create a coop
function createCoop() {
    let coopName = prompt("Name your coop: ");
    let coopSize = prompt("What size is the coop? Small/Medium/Large ('s'/'m'/'l')")
    duckFarm.push(new Coop(coopName, coopSize));
}

// nested menu add duck function
function createDuck(coop) {
    let duckName = prompt('Give the duck a name: ');
    let duckColor = prompt('What color is the duck?');
    let duckAge = prompt('How old is the duck?');
    coop.ducks.push(new Duck(duckName, duckColor, duckAge));
}

class Coop {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.ducks = [];
    }

    
}

class Duck {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }    
}

