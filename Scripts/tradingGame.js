// gameData.js
// chrome won't let me access files from my device. It's probably a good system but it makes it hard to code.
// so that's why this is all one silly long script.

const itemKinds = new Array(
    "Gold",
    "Ivory",
    "Spices",
    "Animal Skins",
    "Timber",
    "Porcelain",
    "Silk",
    "Rice",
    "Tea",
    "Cotton Textiles",
    "Gems",
    "Incense",
    "Steel Swords",
    "Silver",
    "Wine",
    "Wool Textiles",
    "Salt",
    "Pepper",
    "Pearls",
    "Horses",
    "Carpets",
    "Dyes",
    "Percelain",
    "Sugar Cultivation Knowledge",
    "Metals",
    "Gunpowder",
    "Dye",
);

const merchants = new Map([
    ["Zanzibar", "Faraji"],
    ["Venice", "Giovanni"],
    ["Hambantota", "Lashith"],
    ["Egypt", "Ammon"],
    ["Persia", "Syrus"],
    ["Malacca", "Muhammad"],
    ["Kilwa", "Johari"],
    ["Hangzhou", "Haoyu"],
    ["Gujarat", "Aarav"],
    ["Calicut", "Krishna"],
]);

const technologyKinds = new Array(
    "Dhow Ship",
    "Lateen Sail",
    "Astrolabe",
    "Magnetic Compass",
    "Stern Rudder",
    "Junk Ship",
);
// the actions that technologies do are defined below in the ship class, in addTechnologiesAndClassify.
// I could have used callbacks but I didn't.

// dhow ship increases cargo capacity to 20.
// junk ship increases cargo capacity to 40.
// 

// This took a couple attempts to generate right

const places = new Array(
    {cityName : 'Zanzibar', location : 'Swahili Coast',stock : ['Gold', 'Ivory', 'Spices', 'Animal Skins', 'Timber'],desired : ['Porcelain', 'Silk', 'Rice', 'Tea', 'Spices', 'Cotton Textiles', 'Gems', 'Incense', 'Steel Swords'],tech : [],destinations : ['Venice', 'Persia', 'Egypt', 'Calicut', 'Kilwa', 'Gujarat']},
    {cityName : 'Venice', location : 'Mediterranean',stock : ['Silver', 'Wine', 'Wool Textiles', 'Salt'],desired : ['Gold', 'Silk', 'Silver', 'Pepper', 'Porcelain', 'Timber', 'Spices', 'Pearls'],tech : ['Dhow Ship', 'Lateen Sail'],destinations : ['Egypt', 'Persia']},
    {cityName : 'Hambantota', location : 'Sri Lanka',stock : ['Spices', 'Ivory', 'Gems', 'Pearls', 'Cotton Textiles'],desired : ['Horses', 'Porcelain', 'Gold', 'Silk', 'Silver'],tech : [],destinations : ['Persia', 'Calicut', 'Gujarat', 'Malacca']},
    {cityName : 'Egypt', location : 'The Red Sea',stock : ['Gold', 'Horses', 'Incense', 'Pearls', 'Silver'],desired : ['Cotton Textiles', 'Ivory', 'Spices', 'Pepper', 'Porcelain', 'Gems'],tech : ['Lateen Sail'],destinations : ['Kilwa', 'Persia', 'Calicut', 'Gujarat']},
    {cityName : 'Persia', location : 'Persian Gulf',stock : ['Carpets', 'Horses', 'Incense', 'Pearls', 'Silver', 'Dyes', 'Steel Swords'],desired : ['Cotton Textiles', 'Ivory', 'Percelain', 'Spices', 'Pepper'],tech : ['Lateen Sail', 'Astrolabe'],destinations : ['Kilwa', 'Egypt', 'Calicut', 'Gujarat']},
    {cityName : 'Malacca', location : 'Malaccan Strait',stock : ['Gems', 'Pepper', 'Pearls', 'Spices', 'Timber'],desired : ['Cotton Textiles', 'Ivory', 'Incense', 'Silk', 'Porcelain', 'Sugar Cultivation Knowledge'],tech : [],destinations : ['Calicut', 'Gujarat', 'Hambantota', 'Hangzhou']},
    {cityName : 'Kilwa', location : 'Swahili Coast',stock : ['Gold', 'Ivory'],desired : ['Cotton Textiles', 'Pearls', 'Porcelain', 'Gems', 'Pepper', 'Spices'],tech : [],destinations : ['Egypt', 'Calicut', 'Gujarat', 'Malacca']},
    {cityName : 'Hangzhou', location : 'China',stock : ['Silk', 'Porcelain', 'Metals', 'Gunpowder', 'Tea', 'Rice'],desired : ['Spices', 'Ivory', 'Pepper', 'Salt', 'Gold'],tech : ['Magnetic Compass', 'Stern Rudder', 'Junk Ship'],destinations : ['Malacca']},
    {cityName : 'Gujarat', location : 'India',stock : ['Cotton Textiles', 'Pepper', 'Steel Swords', 'Gold', 'Gems', 'Dye', 'Silk', 'Spices'],desired : ['Incense', 'Porcelain', 'Sugar Cultivation Knowledge', 'Timber', 'Ivory'],tech : ['Lateen Sail'],destinations : ['Hambantota', 'Zanzibar', 'Venice', 'Egypt', 'Persia', 'Malacca', 'Kilwa', 'Calicut']},
    {cityName : 'Calicut', location : 'India',stock : ['Cotton Textiles', 'Pepper', 'Gold', 'Gems', 'Steel Swords', 'Dye', 'Silk', 'Spices'],desired : ['Incense', 'Ivory', 'Porcelain', 'Sugar Cultivation Knowledge', 'Timber'],tech : ['Lateen Sail'],destinations : ['Hambantota', 'Zanzibar', 'Venice', 'Egypt', 'Persia', 'Malacca', 'Kilwa', 'Gujarat']}
);

// I am far too lazy to actually write a merchant property for each of these places
for (const place of places) {
    place.merchant = merchants.get(place.cityName);
};

// This took fewer attempts. I'm glad I know python!
const dialog = new Map([
    ['introduce', ['Hi there! My name is', "Hello. I'm", "Hey! The name's", 'Howdy. I am', 'Heyo! My name is']],
    ['reintroduce', ['Hey, welcome back!', 'Nice to see you again!', 'I was wondering how long it would be till I saw you again!', 'Hi again!']],
    ['start', ['Does anything here catch your eye?', 'Anything catch your eye?', 'Would you like to sell something?', "Let's get down to business.", 'Would you like to buy something here?']],
    ['pitch', ['Certainly! Come over here to see my wares...', 'Sure! Here is my cargo...', 'Great! You can see my wares over there.']],
    ['intro item', ['Ah yes,', 'Oh,', 'Ah,']],
    ['supply', ['We actually sell that here.', 'That guy over there is selling it for a cheaper price.', "That's in high supply here!", 'We already have that here.']],
    ['low demand', ['It goes for a small price around here.', "I'll take it, I guess.", "Sure, why not? It can't hurt my business.", 'We have a decent amount of that here.', 'Maybe I can resell it.']],
    ['high demand', ['I could really use that!', "Can I have it? I'll pay a good price!", "I'll take it!", 'That goes for a very fine price around here.', "Better keep quiet! That's in high demand here."]],
    ['bad deal', ["Stop joking around, I'm not paying that.", "You'd make a better comedian than merchant.", 'Nope, not doing that.', 'What, are you serious? No!']],
    ['meh deal', ["Not bad, but I'd like a bit more on top.", 'Eh. No.', 'Raise your payment a little more, and sure.']],
    ['okay deal', ["Your deal sounds good. I'll take it!", 'Sounds good to me!', "That's a good price. I accept.", 'Sure, why not? I accept your offer.', "That's a good price for me."]],
    ['great deal', ["That's a steal! I'll pay that happily.", "I'll take it! Let me grab my stuff here...", 'Sounds good to me!', "That's a good price. I accept.", 'Gimme gimme gimme! I like that price!']],
    ['trade', ['Very fair. Good trade!', 'Thank you for your business!', 'You make a mean deal. Do you want anything else in my wares?', 'Alright! Anything else catch your eye?']],
    ['too full', ["That ship of yours is loaded! I don't think you can take any more stuff, sorry!", 'If you put anything more on that ship of yours it will sink!', "I'm not selling you anything until you unload some cargo off that ship!", "That ship is overflowing with cargo! Sell some of it first. I'll give you a mean deal!"]],
    ['look at inventory', ['Sure! Let me see what you have...', "Alright! What's in that cargo of yours...", 'Okay! Let me see your wares...', 'Sounds good! May I take a tour of your cargo?']],
    ['goodbye', ['Thank you for your business! I hope to meet you again soon!', 'Come back soon! You have real potential as a merchant.', 'Bye! Safe travels!', 'May you have a safe voyage!']],
    ['offer', ['How about this:', 'How does this sound:', "How about: ", 'Does this sound good:']],
    ['unload', ['Certainly. What exotics did you get?', "Wow, that's a lot of items! What did you want to unload again?", 'Great, what do you have for me?']],
    ['unload fail', ['Hard to unload an already empty ship, bud.', "I can't unload what's already empty!", "There's nothing to unload!"]],
    ['load', ['Yep, get these goods and get selling!', 'Yeah sure, what do you want?', 'Alright, what would you like?']],
    ['too many items', ['That many items would sink your ship!', 'No can do, your ship would sink!', 'Do you want to sink your ship?', "You can't put that much cargo on a ship like that!"]]
]);


// they really ought to let us index sets, so I made a function to do that 
// it basically increases i as it iterates through set, and when i == index it returns
// set_index(foo, 2) is the same as foo[2] in python (where foo is a list or tuple)
function set_at_index(set, index) {

    if (set instanceof Set || set instanceof Array) {
        let i = 0;
        for (const val of set) {
            if (i == index) {
                return val;
            };
            i++;
        };
    }
    else {
        throw ("set_index only takes iterable objects!");
    };
};

// this is the equivalent of list.index() in python
function index_set(set, thing) {
    const setArray = Array.from(set);
    return setArray.indexOf(thing);
};

// straight from stackOverflow
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
}

// get a random dialog of a certain type.
function getMerchantSpeak(talkType, merchantName=undefined) {
    try {
        let dialogArray = dialog.get(talkType.toLowerCase());
        let dialogString = dialogArray[Math.floor(Math.random() * (dialogArray.length - 1))];
        if (merchantName != undefined) {
            if (talkType != 'introduce') {
                dialogString = merchantName + ': ' + dialogString;
            } else {
                dialogString += ' ' + merchantName + '.';
            }

            return dialogString
            
        }
    } catch {
        throw('Invalid talkType in getMerchantSpeak. Make sure talkType is in array dialog!');
    }
}

// cookie functions (since they can be defined in global scope)
// thanks to w3schools, although I coded these myself

// set a cookie with a name, value, and days until expiration
function setCookie(cookieName, cookieValue, expirationDays=undefined) {
    if (expirationDays != undefined) {
        let expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (expirationDays * 1000 * 60 * 60 * 24));
        let expires = "expires=" + expirationDate.toUTCString();
        document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
    } else {
        document.cookie = `${cookieName}=${cookieValue}; path=/`;
    }
    
}

// get a cookie's value based on its name. if it isn't found in document.cookie, return ''.
function getCookie(cookieName) {
    let cookiesArray = document.cookie.split('; ');
    
    for (let i of cookiesArray) {
        let currentCookieArray = i.split('=');
        if (cookieName.trim() == currentCookieArray[0].trim()) {
            return currentCookieArray[1];
        }
    }
    return '';
}

// check to see if a cookie is found, and return a boolean.
function checkForCookie(cookieName) {
    let cookieValue = getCookie(cookieName);
    if (cookieValue != '') {
        return true;
    } else{
        return false;
    }
}



// Chrome won't let me export or import while testing, unfortunately.
// This is the end of gameData.js.


























// classes.js

async function read_file(fileName) {
    fileObject = await fetch(fileName);
    fileText = await fileObject.text();
    document.getElementById("paragraphText").innerHTML = fileText;
};

// creates item and technology. 
class item {
    constructor(kind) {
        if (itemKinds.includes(kind)) {
            this.kind = toTitleCase(kind);
            this.id = itemKinds.indexOf(kind);

            if (this.id == -1) {
                throw ("An item was created, but it has no index in itemKinds!");
            };
        };
    };

    get_type() {
        return 'item'
    }
};

class technology {
    constructor(kind) {
        if (technologyKinds.includes(kind)) {
            this.kind = toTitleCase(kind);
            this.id = technologyKinds.indexOf(kind);
        };

        if (this.id == -1) {
            throw ("A technology was created, but it has no index in technologyKinds!");
        };
    };

    get_type() {
        return 'technology'
    }
};

// a city is a class that just holds easy access information to a lot of useful data about a place
class city {
    constructor(cityName) {
        this.cityName = toTitleCase(cityName);

        let currentCityObject = undefined;
        let cityIndex = 0;
        //check that cityName is valid by finding its cooresponding city Object in array places
        for (let cityObject of places) {
            if (cityObject.cityName == this.cityName) {
                currentCityObject = cityObject;
                this.cityID = cityIndex;
                break;
            };
            cityIndex++;
        };

        if (currentCityObject == undefined) {
            throw ("City name not found in array places!");
        };

        // well then we must be good to continue! we found our cityObject
        // basically we transform this class into the object in places (there must be a better way to do this)
        this.location = currentCityObject.location;
        this.stock = currentCityObject.stock;
        this.desired = currentCityObject.desired;
        this.destinations = currentCityObject.destinations;
        this.technologies = currentCityObject.tech;
        this.merchant = currentCityObject.merchant;
    };
};

class ship {
    constructor(shipName, inventory = [], technologies = [], money = 0, city = new city("Venice"), homeland = new city("Venice")) {
        this.shipName = shipName;
        this.inventory = inventory;
        this.technologies = technologies;
        this.money = money;
        this.city = city;
        this.homeland = homeland;

        this.inventoryLimit = 15;
    };

    // this method looks through items in the inventory, returns them in an array if successful, and returns false if
    // unsuccessful

    returnItems(items) {

        let itemReturned = false;
        let indexesToDelete = [];
        let returnArray = [];
        // for every item in the list we got
        for (let item of items) {
            itemReturned = false;
            // for every item in our inventory
            for (let i = this.inventory.length - 1; i >= 0; i--) {

                // if we get a match AND we haven't already indexed this item
                if (this.inventory[i].kind == item.kind && !indexesToDelete.includes(i)) {
                    itemReturned = true;
                    indexesToDelete.push(i);
                    break;
                };
            };

            // make sure that we actually got an item! if not, return false
            if (!itemReturned) {
                console.error("Some items were not found in inventory;");
                return false;
            };
        };

        indexesToDelete.sort();
        indexesToDelete.reverse();

        // we must have found the indexes for ALL the items without error! Woo! Now let's delete them
        for (let index of indexesToDelete) {
            returnArray.push(this.inventory[index]);
            this.inventory.splice(index, 1);
        };

        // we did it! we took items out of our inventory and returned them!
        return returnArray;
    };
    
    // add items to the inventory (with respect to inventoryLimit)
    addItems(items) {
        for (let item of items) {
            this.classifyThing(item);
        }
        if (this.inventory.length > this.inventoryLimit) {
            console.warn("More than inventoryLimit items were put in a ship inventory, it has been trimmed to be inventoryLimit");
            while (this.inventory.length > this.inventoryLimit) {
                this.inventory.pop();
            }
        }
    }

    // add technologies to the ship and activate their effects
    addTechnologiesAndClassify(technologies) {
        for (let tech of technologies) {
            // make sure tech is a technology
            if (tech.constructor.name == "String") {
                tech = new technology(tech);
            }

            // activate only if we DON'T have the tech yet
            let hasTech = false;
            for (let ownedTech of this.technologies) {
                if (ownedTech.kind == tech.kind) {
                    hasTech = true;
                    break;
                }
            }

             
            if (!hasTech) {
                if (tech.kind == "Junk Ship") {
                    if (this.inventoryLimit < 40) {this.inventoryLimit = 40;}
                } else if (tech.kind == "Dhow Ship") {
                    if (this.inventoryLimit < 30) {this.inventoryLimit = 30;}
                }
            }

        }
    }

    // this function takes some random object and classifies it into its proper place
    // they don't have anything like switch in python, but they do in C++. Interesting
    classifyThing(thing) {
        switch (thing.constructor.name) {
            case 'item':
                this.inventory.push(thing);
                break;
            case 'technology':
                this.technologies.push(thing);
                break;
            case 'number':
                this.money += thing;
                break;
            case 'String':
                if (itemKinds.includes(thing)) {this.inventory.push(new item(thing));}
                else if (technologyKinds.includes(thing)) {this.technologies.push(new technology(thing));}
            default:
                console.log(thing.constructor.name);
        };
    };
};



// end classes.js
























// I really wish I could just have different scripts, but 20 line breaks work also
// begin tradingGame.js


// this could actually do the job! Having runGame as a generator would let me run it
// every single time an event is triggered (i.e. the continue button)
// this might just work!

// edit: yes it works!

// these variables are globals that I need to define in the global scope.
// (Points doesn't have to be global but it's here anyway)
let desiredInputType = undefined;
let points = 0;
let playerShipHomeland = undefined;

// these are things specifically for devMode
let startingInventory = [];
let startingGold = 5;

/*   //this gives you one of every item
for (let i of itemKinds) {
    startingInventory.push(new item(i));
}
yield;
*/




// this little variable checks for cookies, to see if we have played the game before.
let checkForCookies = true;

function* runGame() {

    // first I define a lot of things
    // since the function is now loaded, all these things exist and are (relatively) static

    let nameText = document.getElementById("nameText");
    let sectionText = document.getElementById("sectionText");
    let optionBox = document.getElementById("optionBox");
    let textInput = document.getElementById("textInput");
    let footerTable = document.getElementById("footerTable");
    let playing = true;

    playerAffirmation = false;

    // here come functions (these functions make the webpage change to get user input)

    // make options in optionBox
    // if selectOne, we use radio inputs. if not, we use checkboxes (so they can select more than one)
    const yesNoArray = ["Yes", "No"];
    function askOptions(text, options, selectOne = true) {

        setText(text, true, true);
                desiredInputType = "choice";
        setName('');

        optionBox.innerHTML = '';
        // the creation of new html elements reminds me a lot of Luau's Instance.new()
        // we create it with document.createElement(); and set its properties, then set its parent with appendChild()
        let optionID = 0;
        for (let option of options) {

            // create the input first
            let newInput = document.createElement("input");
            if (selectOne) {
                newInput.type = "radio";
            } else {
                newInput.type = 'checkbox';
            };

            newInput.id = optionID.toString();
            newInput.name = 'item';

            optionBox.appendChild(newInput);

            // now we create a label
            let newLabel = document.createElement("label")
            if ((typeof(option) == 'string')) {
                newLabel.innerHTML = option;
            } else if (option.constructor.name == 'item' || option.constructor.name == 'technology') {
                newLabel.innerHTML = option.kind;
            } else {
                console.log(option.constructor.name)
            }
            newLabel.htmlFor = optionID.toString();
            optionBox.appendChild(newLabel);

            // then we add a break
            optionBox.appendChild(document.createElement('br'))

            // also increment optionID so the next button has a unique id
            optionID++;
        };
    };


    function setName(text) {
        nameText.innerHTML = text;
    };


    // set the sectionText
    // appendBreak ads an enter at the end
    // clearText clears the sectionText
    function setText(text, appendBreak = true, clearText = false) {

        if (clearText) {
            sectionText.innerHTML = '';
        };

        sectionText.innerHTML += text;
        if (appendBreak) {
            sectionText.innerHTML += '<br>';
        };
    };

    // I can't believe it! I subconciously started using python function naming conventions!
    // Haha wow. I actually like camel case more than underscores, but I still try to follow the rules with python.
    // Edit: I used find & replace to change all of them to camel case.
    function askOpenEnded(question, isNumber = true, max=5, min=0, clearOptionBox=true) {
        setText(question, true, true);
        if (clearOptionBox) {
            optionBox.innerHTML = '';
        }
        if (isNumber) {
            textInput.value = "0";
            textInput.type = 'number';
            textInput.max = max;
            textInput.min = min;

            desiredInputType = 'number';
        } else {

            textInput.type = 'text'
            desiredInputType = 'string';
        }

    };

    function hideInputs() {
        textInput.setAttribute('type', 'hidden');
        optionBox.innerHTML = '';
        desiredInputType = undefined;
    }

    function manageText(text, name='', updateFooter=true) {
        // sometimes this fails (because we haven't initialized playerShip yet) so I have try for this
        if (updateFooter) {try {manageFooter(playerShip);} catch {}}
        
        hideInputs();
        setName(name);
        setText(text, true, true);
    }

    function getTextInput() {
        return textInput.value;
    }

    // gets selected options. It looks at which options (children of optionBox) are selected, and takes their id.
    // it takes that id and puts it in optionList to find out what options are actually selected.
    function getOptions(optionList) {
        let returnArray = [];
        for (let option of optionBox.childNodes) {
            if (option.checked) {
                returnArray.push(optionList[Number(option.id)]);
            }
        }

        return returnArray;
    }

    // manage the footer on the bottom of the screen (update gold, inventory, etc)
    // this also manages cookies.
    function manageFooter(playerShip) {
        footerTable.style.removeProperty("display");
        footerTable.parentElement.style.height = 'auto';

        let gold = playerShip.money.toString();
        let location = playerShip.city.cityName;
        let inventory = itemArrayToString(playerShip.inventory);
        let pointString = points.toString();
        let technologies = itemArrayToString(playerShip.technologies);
        
        // change the footer
        document.getElementById("goldText").innerHTML = "Gold: " + gold;
        document.getElementById("locationText").innerHTML = "Location: " + location;
        document.getElementById("inventoryText").innerHTML = "Inventory: " + inventory;
        document.getElementById("pointText").innerHTML = "Points: " + pointString;

        // update game save (in cookies)
        setCookie("playedBefore", "true");
        setCookie("gold", gold);
        setCookie("location", location);
        setCookie("homeland", playerShip.homeland.cityName);
        setCookie("points", pointString);
        setCookie("inventory", inventory);
        setCookie("technologies", technologies);
    }

    function askTrade(question, options, max, min) {
        askOptions("", options, false);
        setText("", true, false);
        askOpenEnded(question, true, max, min, false);
        desiredInputType = "trade";
    }

    function itemArrayToString(items, separator=', ') {
        let returnArray = [];
        for (let thing of items) {
            switch (thing.constructor.name) {
                case 'item':
                    returnArray.push(thing.kind);
                    break;
                case 'technology':
                    returnArray.push(thing.kind);
                    break;
                case 'String':
                    returnArray.push(thing);
                    break;
                default:
                    returnArray.push(thing);
                    console.warn("Something is in items that is not a string, technology, or item. Expect trouble!");
            }
        }

        return returnArray.join(separator);
    }

    // if we are checking for cookies (variable set up higher), look for the cookie playedBefore.
    let playedBefore = false;
    if (checkForCookies) {
        playedBefore = checkForCookie("playedBefore");
    }

    let playerShip = undefined;
    let hometownPlace = undefined;

    if (!playedBefore) {
        // welcome screen
        manageText(`Welcome to Indian Ocean Trading!<br>Created by Matthew Winnat<br>Coded by Matthew Zielinski
            <br><br><br><br><br><br>
            This game uses cookies to save your game's progress, so if the school wifi interrupts your connection
            you don't have to restart the entire game. <br>Game progress cookies store
            your points, inventory, homeland, in-game currency, and your in-game location, and the cookies expire after four weeks.
            <br>None of these can personally identify you. None of these are shared with third-parties.
            <br>This site doesn't collect anything else through cookies.<br>
            By clicking continue (to continue the game) you agree to this.`, 'Welcome!', false);
            footerTable.style.display = 'none';
            footerTable.parentElement.style.height = '10%';
        yield;
        
        // make player ship
        // get a random city for our hometown. Then make the starting text.
        // the array places has objects inside of it, but they aren't city objects. That's why I make a city with its cityName.
        hometownPlace = new city(places[Math.floor(Math.random() * (places.length - 1))].cityName);
        playerShipHomeland = hometownPlace;
        manageText(`Welcome!<br>
            Your hometown is the city of ${hometownPlace.cityName}, which is on ${hometownPlace.location}.<br>
            It is a city well known for its role in Indian Ocean Trade. You have just created a deal with a friend, <br> 
            ${hometownPlace.merchant}, where he will give you goods to trade for free, asking for half of the profits in return.<br>
            You accepted his deal, and you are just now preparing to obtain cargo and set sail...`, '', false);

        playerShip = new ship(`Player's Ship`, startingInventory, [], 5, hometownPlace, hometownPlace);
        manageFooter(playerShip);
        yield;

    } else {
        // we HAVE played before, so set up everything based on what we find in the cookies.
        let savedGold = Number(getCookie('gold'));
        let savedLocation = new city(getCookie('location'));
        hometownPlace = new city(getCookie('homeland'));
        points = Number(getCookie('points'));
        let savedInventory = getCookie('inventory').split(', ');
        let savedTechnologies = getCookie('technologies').split(', ')

        playerShipHomeland = hometownPlace;

        playerShip = new ship("Player's ship", [], [], savedGold, savedLocation, hometownPlace);
        playerShip.addItems(savedInventory);
        playerShip.addTechnologiesAndClassify(savedTechnologies);

        manageText("Welcome back! Your progress was loaded successfully.", "Welcome!");
        yield;
        
    }
    
    // let the game begin!
    
    while (playing) {
        // we do something slightly different based on if we're in our homeland or not. It would be too painful
        // to differentiate every time based on if we're in our hometown or not, so I just added seperate code down lower.
        // I compare citynames to see if we're in our hometown. If not, we run the following code: (It's long)
        if (playerShip.city.cityName != playerShip.homeland.cityName) {
            // talk about where we are and set the scene...
            manageText(`You are currently in ${playerShip.city.location}, in the city of ${playerShip.city.cityName}.
                You disembark your ship, and a merchant walks over...`, playerShip.city.cityName);
            yield;
            
            // merchant says hi
            manageText(getMerchantSpeak('introduce', playerShip.city.merchant));
            setText('<br>', true, false);
            setText(getMerchantSpeak('start', playerShip.city.merchant), true, false);

            // also make the merchantTemper and merchantBonus (these is used later, for price fluctuations)
            // merchantTemper makes a merchant charge more in trades, and merchantBonus makes a merchant charge less for selling
            let merchantTemper = Math.floor(Math.random() * 2);
            let merchantBonus = Math.floor(Math.random() * 10);
            if (merchantBonus != 1) {
                merchantBonus = 0;
            }
            yield;
            
            let trading = true;
            while (trading) {
                // ask the player's choice of option
                askOptions("What would you like to do? You can >>>", ["Trade", "Sell", "Leave"], true);
                yield;

                // get the player's choice (it's returned as an array, so I just take the [0] of it since they can only choose one thing here)
                let playerActionChoice = getOptions(["Trade", "Sell", "Leave"])[0];

                if (playerActionChoice == "Trade") {
                    // make a new list with 3 of every thing in stock (so players can buy more than one if they so choose)
                    let amplifiedStock = [];
                    for (let thing of playerShip.city.stock) {
                        for (let i=0;i<3;i++) {
                            amplifiedStock.push(thing);
                        }
                    }
                    for (let tech of playerShip.city.technologies) {
                        amplifiedStock.push(tech);
                    }

                    // ask what we would like to buy first
                    askTrade(`Alright! Let's trade. Choose the items you would like to buy:<br>
                        In the box below, put how much currency you would like to add to the trade.<br>
                        To cancel this trade, click continue without selecting any items or adding currency.
                        Remember that your inventory can hold ${playerShip.inventoryLimit.toString()} items.`,
                        amplifiedStock, 1000, 0)
                    
                    yield;
                    
                    // get the response and ask what we would like to trade back
                    let playerDesiredThings = getOptions(amplifiedStock);
                    let playerDesiredTechs = [];
                    let playerDesiredItems = [];
                    // separate playerDesiredThings into technologies and items
                    for (let thing of playerDesiredThings) {
                        if (itemKinds.includes(thing)) {
                            playerDesiredItems.push(thing);
                        } else if (technologyKinds.includes(thing)) {
                            playerDesiredTechs.push(thing);
                        } else {
                            console.error("Some item the player requested was not in itemKinds or technologyKinds.");
                        }
                    }

                    let playerDesiredCurrency = Number(getTextInput());

                    // also break the loop if we asked for nothing
                    if (playerDesiredThings.length == 0 && playerDesiredCurrency == 0) {
                        continue;
                    }
                    
                    askTrade(`Ok! Choose the items (and currency) that you would like to give:<br>
                        You asked for [${playerDesiredItems.join(", ")}] and ${playerDesiredCurrency.toString()} gold.`,
                        playerShip.inventory, playerShip.money, 0
                    )
                    if (playerShip.inventory.length + playerDesiredItems.length > playerShip.inventoryLimit) {
                        setText(`Remember that you can't take more than ${playerShip.inventoryLimit.toString()} items.<br>
                        To keep your inventory under the limit, you need to trade at least 
                        ${(playerShip.inventoryLimit - playerDesiredItems.length + playerShip.inventory.length).toString()} items.
                        `);
                    }
                    yield;
                    
                    // get options and return merchant feedback
                    let playerPaymentItems = getOptions(playerShip.inventory);
                    let playerPaymentCurrency = Number(getTextInput());

                     // check that our inventory will stay under the limit
                     if (playerShip.inventory.length + playerDesiredItems.length - playerPaymentItems.length > playerShip.inventoryLimit) {
                        manageText(getMerchantSpeak('too many items', playerShip.city.merchant), playerShip.city.merchant);
                        setText(`<br>Oops! That would have sunk your ship. Try asking for fewer items next time!<br>
                            The trade was not completed.`);
                        yield;
                        continue;
                     }

                    // desired worth is the length of things we want to buy plus currency.
                    // also plus merchantTemper (making us have to trade more sometimes)
                    let desiredWorth = 0;
                    desiredWorth += playerDesiredCurrency + playerDesiredItems.length + merchantTemper;
                    // technologies go for more. They might differ in value so I have this
                    for (let tech of playerDesiredTechs) {
                        desiredWorth += 5;
                    }

                    // payment worth is trickier. If we're paying things in playerShip.city.stock, add 0.5. If we're paying things in desired, add 3. Else, add 1.
                    // this makes different items worth more or less.
                    // also we add the amount of currency needed
                    let paymentWorth = 0;
                    paymentWorth += playerPaymentCurrency;
                    for (let item of playerPaymentItems) {
                        if (playerShip.city.desired.includes(item)) {paymentWorth += 3;console.log('desired')}
                        else if (playerShip.city.stock.includes(item)) {paymentWorth += 0.5}
                        else {paymentWorth += 1}
                    }

                    // now we evaluate the worths...

                    let worthDifference = paymentWorth - desiredWorth;
                    let merchantReaction = ''
                    if (worthDifference > 1) {merchantReaction = 'great deal';} 
                    else if (worthDifference >= 0) {merchantReaction = 'okay deal'}
                    else if (worthDifference >= -2) {merchantReaction = 'meh deal'}
                    else {merchantReaction = 'bad deal'}

                    if (worthDifference < 0) {console.log(worthDifference.toString());}
                    

                    manageText(getMerchantSpeak(merchantReaction, playerShip.city.merchant));
                    yield;

                    // now we call off the trade (or continue the trade) based on the merchant's reaction.

                    if (worthDifference >= 0) {
                        // see if we finalize the trade or not.
                        askOptions(`Seems that ${playerShip.city.merchant} likes that deal! Would you like to finalize this trade?<br>`+
                            `You are offering ${itemArrayToString(playerPaymentItems)} and ${playerPaymentCurrency.toString()} for<br>`+
                            `${playerDesiredItems.join(", ")} and ${playerDesiredCurrency.toString()} gold.`, yesNoArray, true
                        );
                        yield;

                        // if we do finalize the trade, DO IT!
                        let finalizeTrade = getOptions(yesNoArray)[0];
                        if (finalizeTrade == 'Yes') {
                            playerShip.money -= playerPaymentCurrency;
                            playerShip.money += playerDesiredCurrency;

                            let desireItemArray = [];
                            for (let str of playerDesiredItems) {
                                desireItemArray.push(new item(str));
                            }
                            let desireTechArray = [];
                            for (let str of playerDesiredTechs) {
                                desireTechArray.push(new technology(str));
                            }
                            let paymentItemArray = [];
                            for (let item of playerPaymentItems) {
                                paymentItemArray.push(item);
                            }

                            playerShip.returnItems(paymentItemArray);
                            playerShip.addItems(desireItemArray);
                            playerShip.addTechnologiesAndClassify(desireTechArray);
                            manageFooter(playerShip);
                            manageText("Great! The trade was completed successfully.","Success!");
                            yield;
                        }
                        else {
                            manageText("Alright then! The trade was not completed.");
                            yield;
                        }
                    } else if (merchantReaction = 'meh deal'){
                        setText(`It seems that ${playerShip.city.merchant} didn't like that trade, but it seemed like they were willing to negotiate.<br>`+
                            `Maybe if you offer a little bit more next time they will accept!`, true, true);
                        yield;
                    } else if (merchantReaction = 'bad deal') {
                        setText(`Seems that ${playerShip.city.merchant} didn't like that trade. Try offering more next time!`, true, true);
                        yield;
                    }

                

                } else if (playerActionChoice == "Sell") {
                    // get the item that the player wants to sell
                    askOptions(`Alright! Let's see what  ${playerShip.city.merchant} will pay...<br>`+
                        "Choose an item that you would like to sell.", playerShip.inventory, true
                    );
                    yield;
                    
                    // show the merchant's reaction
                    // first we get our chosen option, then we find out if the item is in desire, stock, or not
                    let chosenItem = getOptions(playerShip.inventory)[0];
                    let chosenOption = chosenItem.kind;
                    let merchantReaction = "";
                    let merchantPrice = 0;
                    if (playerShip.city.stock.includes(chosenOption)) {
                        merchantReaction = 'supply'; merchantPrice = 1 ;
                        merchantBonus -= 1;
                    } 
                    else if (playerShip.city.desired.includes(chosenOption)) {
                        merchantReaction = 'high demand'; merchantPrice = 3 + merchantBonus;
                        merchantBonus -= 0;
                    }
                    else {
                        merchantReaction = 'low demand'; merchantPrice = 1 + merchantBonus;
                        merchantBonus -= 1;
                    }

                    if (merchantBonus < 0) {
                        merchantBonus = 0;
                    }

                    manageText(`Okay! Let's see what ${playerShip.city.merchant} is willing to pay for ${chosenOption}...`)
                    setText("<br>"+getMerchantSpeak(merchantReaction, playerShip.city.merchant), true, false);
                    setText(getMerchantSpeak('offer', playerShip.city.merchant) + ` ${merchantPrice.toString()} gold?`, true, false)

                    yield;

                    // does the player want to accept?
                    askOptions("Do you want to accept?<br>" +
                        `(${playerShip.city.merchant} is offering you ${merchantPrice.toString()} gold.)`,
                        yesNoArray,
                        true
                    );
                    yield;

                    let finalizeSale = getOptions(yesNoArray)[0];
                    if (finalizeSale == "Yes") {
                        playerShip.returnItems([chosenItem]);
                        playerShip.money += merchantPrice;
                        manageText("Great! The sale was completed successfully.");
                        yield;
                    } else {
                        manageText("Alright then! The sale was cancelled.");
                        yield;
                    }
                

                } else if (playerActionChoice == "Leave") {
                    askOptions("Are you sure you want to leave?<br>You will have to sail somewhere else if you say yes.",
                        yesNoArray,
                        true
                    );
                    yield;

                    let finalizeLeave = getOptions(yesNoArray)[0];
                    if (finalizeLeave == "Yes") {  
                        trading = false;
                        askOptions(getMerchantSpeak('goodbye', playerShip.city.merchant),
                            playerShip.city.destinations,
                            true
                        );
                        setText("<br>Time to set sail!<br>Where would you like to go next?")
                        yield;

                        let playerDestinationString = getOptions(playerShip.city.destinations)[0];
                        manageText(`Ok! Setting sail for ${playerDestinationString}!`);
                        setText("<img src='https://attic.sh/6r9b91eba6dyrshvlnutat6auqom' style='width:300px;height:300px'>");
                        playerShip.city = new city(playerDestinationString);
                        yield;


                    } else {
                        manageText(`Ok! You are still in ${playerShip.city.cityName}.`)
                        yield;
                    }
                    
                }
            }
        // that was long. now to program what happens if we're in our hometown! (Oh boy)
        } else {
            
            // since we start in our hometown, we only need to check for tutorial in the hometown
            // see if the player wants a quick tutorial
            if (!playedBefore) {
                askOptions("It seems that you are new to this game! Would you like a quick tutorial?",
                    yesNoArray,
                    true
                )
                yield;

                playedBefore = true;

                if (getOptions(yesNoArray)[0] == 'Yes') {
                    manageText(`Alright! In this game, you are a merchant who trades in the Indian Ocean.<br>
                        You can buy and sell things in ports from Italy to China! Certain ports desire items more than others,<br>
                        and your port is no exception! Click the button below that says "homeland details".<br><br><br>
                        
                        I can't force you to click it, but I really recommend it. Your hometown is ${playerShip.city.cityName}, 
                        which as you can see you are in right now. (Look at the location label below).<br>
                        Your job, as a trader, is to take items from your hometown and sell them elsewhere to make profit.<br>
                        In this game profit is represented with points. You gain points by dropping off items you earned at your hometown.<br>
                        Not all items are equal! Most items earn you one point by dropping off,<br>
                        but items in the "desired" list are worth 3 points! Dropping off desired items is the only way to make a net profit overall.<br>
                        You can return other items to your hometown, but they only earn you 1 point.<br><br>

                        To get desired items, you need to go to other cities and trade with them. Some cities will sell items in your "desired" list,<br>
                        But they won't sell them for free! You will have to trade with them. They too have a desired list,<br>
                        and they will offer you more items in trades if you offer them desired items. You don't know their desired list,<br>
                        but on average the further you ship goods, the more likely they are to be desired.<br>
                        Ideally, you want to find a place that desires something your hometown sells (I'll get to that in a minute).<br>
                        Also, most places usually desire <i>something</i> from China (Hangzhou).<br><br>

                        You are a starting merchant. You have a little gold and no items currently.<br>
                        To get items, you need to get them from your hometown. You can see what items your hometown has in the "stock" list.<br>
                        Your hometown will give these items to you without charge, but they decrease your points!<br>
                        Remember, to increase your points you need to drop off items at your hometown. You must to sail to other cities<br>
                        and trade to earn desired items for your hometown. Sail back home and drop them off, and your points will increase!<br>
                        Keep doing this and you will become rich with in-game points. Good luck!

                        `, 'Tutorial');
                        yield;
                }
            }

            manageText(`You are currently in the city of ${playerShip.city.cityName} of ${playerShip.city.location}, which is your hometown!
                You disembark your ship, and a merchant you recognize walks over...`, playerShip.city.cityName);
            yield;
            
            // merchant says hi
            manageText(getMerchantSpeak('reintroduce', playerShip.city.merchant));
            yield;

            let trading = true;
            while (trading) {
                // ask the player's choice of option
                askOptions("What would you like to do? You can >>>", ["Load Cargo", "Unload Cargo", "Exchange Currency", "Leave"], true);
                yield;

                // get the player's choice (it's returned as an array, so I just take the [0] of it since they can only choose one thing here)
                let playerActionChoice = getOptions(["Load Cargo", "Unload Cargo", "Exchange Currency", "Leave"])[0];

                if (playerActionChoice == "Load Cargo") {

                    if (playerShip.inventory.length >= playerShip.inventoryLimit) {
                        manageText(getMerchantSpeak('too full', playerShip.city.merchant), playerShip.city.merchant);
                        setText("<br> Your ship's inventory is completely full! You need to unload some items first.");
                        yield;
                        continue;
                    }
                    // make a new list with 3 of every thing in stock (so players can get more than one if they so choose)
                    let amplifiedStock = [];
                    for (let thing of playerShip.city.stock) {
                        for (let i=0;i<3;i++) {
                            amplifiedStock.push(thing);
                        }
                    }

                    // ask what we would like to get
                    askOptions(`Alright! Let's load some cargo. Choose the items you would like to recieve.<br>
                        You can select a maximum of ${(playerShip.inventoryLimit - playerShip.inventory.length).toString()}
                        items to put on your ship (due to your ship's max cargo capacity of 
                        ${playerShip.inventoryLimit.toString()} items).<br>
                        To cancel this, click continue without selecting any items or adding currency.`,
                        amplifiedStock, false);
                    desiredInputType = "cargoLoad";
                    
                    yield;
                    
                    // get the response 
                    let playerDesiredItems = getOptions(amplifiedStock);

                    // also break the loop if we asked for nothing
                    if (playerDesiredItems.length == 0) {
                        continue;
                    } else if (playerDesiredItems.length > playerShip.inventoryLimit) {
                        manageText(getMerchantSpeak('too many items', playerShip.city.merchant));
                        setText(`<br>Looks like you requested too many items!<br>
                            Your ship can take a maximum of ${playerShip.inventoryLimit.toString()} items.`,
                            true,
                            false
                        );
                        yield;
                        continue;
                    }
                    
            
                    // see if we finalize the trade or not.
                    askOptions(`You are going to load [${playerDesiredItems.join(", ")}] onto your ship. Is this correct?`,
                        yesNoArray, 
                        true
                    );
                    yield;

                    // if we do finalize, DO IT! (Also change points)
                    let finalizeLoad = getOptions(yesNoArray)[0];
                    if (finalizeLoad == 'Yes') {
                        let desireItemArray = [];
                        for (let str of playerDesiredItems) {
                            desireItemArray.push(new item(str));
                        }

                        playerShip.addItems(desireItemArray);
                        points -= desireItemArray.length;
                        manageText("Great! You loaded on your cargo.","Success!");
                        yield;
                    }
                    else {
                        manageText("Alright then! You did not load on any cargo.");
                        yield;
                    }

                } else if (playerActionChoice == "Unload Cargo") {

                    // ask what we would like to unload
                    askOptions("Alright! Let's unload some cargo. Choose the items you would like to unload.<br>" +
                        "To cancel this, click continue without selecting any items or adding currency.",
                        playerShip.inventory, false);
                    desiredInputType = "cargoLoad";
                    
                    yield;
                    
                    // get the response 
                    let playerDesiredItems = getOptions(playerShip.inventory);

                    // also break the loop if we asked for nothing
                    if (playerDesiredItems.length == 0) {
                        continue;
                    }
                    
            
                    // see if we finalize the trade or not.
                    askOptions(`You are going to unload [${itemArrayToString(playerDesiredItems)}] off of your ship. Is this correct?`,
                        yesNoArray, 
                        true
                    );
                    yield;

                    // if we do finalize, DO IT!
                    let finalizeLoad = getOptions(yesNoArray)[0];
                    if (finalizeLoad == 'Yes') {

                        // also we need to change points. Stock items are worth 1 point, desired items are 3 points, and normal items are 1 point.
                        for (let item of playerDesiredItems) {
                            if (playerShip.city.desired.includes(item.kind)) {
                                points += 3;
                            } else if (playerShip.city.stock.includes(item.kind)) {
                                points += 1;
                            } else {
                                points += 1;
                            }
                        }

                        playerShip.returnItems(playerDesiredItems);
                        manageFooter(playerShip);
                        manageText("Great! You unloaded your cargo with no issues.","Success!");
                        yield;
                    }
                    else {
                        manageText("Alright then! You did not unload any cargo.");
                        yield;
                    }

                

                } else if (playerActionChoice == "Exchange Currency") {
                    // get the amount that the player wants to exchange
                    askOpenEnded("Ok! How much gold would you like?<br>"+
                        "You can put a negative number to give gold back home if you'd like.", 
                        true, 100 - playerShip.money, -playerShip.money);
                    yield;
                    
                    // change money and points accordingly. (You earn points by giving money back)
                    let moneyExchange = Number(getTextInput());
                    playerShip.money += moneyExchange;
                    points -= moneyExchange;
                    manageText(`Great! You exchanged ${moneyExchange.toString()} gold successfully.`);
                    yield;

                } else if (playerActionChoice == "Leave") {
                    askOptions("Are you sure you want to leave?<br>You will have to sail somewhere else if you say yes.",
                        yesNoArray,
                        true
                    );
                    yield;

                    let finalizeLeave = getOptions(yesNoArray)[0];
                    if (finalizeLeave == "Yes") {  
                        trading = false;
                        askOptions(getMerchantSpeak('goodbye', playerShip.city.merchant),
                            playerShip.city.destinations,
                            true
                        );
                        setText("<br>Time to set sail!<br>Where would you like to go next?")
                        yield;

                        let playerDestinationString = getOptions(playerShip.city.destinations)[0];
                        manageText(`Ok! Setting sail for ${playerDestinationString}!`);
                        setText("<img src='https://attic.sh/6r9b91eba6dyrshvlnutat6auqom' style='width:300px;height:300px'>");
                        playerShip.city = new city(playerDestinationString);
                        console.log(playerShip.city.cityName);
                        yield;


                    } else {
                        manageText(`Ok! You are still in ${playerShip.city.cityName}.`)
                        yield;
                    }
                    
                }
            }
        }
    }
};


// now we actually run code!


let gameRunner = runGame()




// and run all that when the document fully loads...
//document.addEventListener("DOMContentLoaded", function(){

function buttonClick() {

    let playerInput = document.getElementById("textInput");
    let sectionText = document.getElementById("sectionText");

    // before we run, we make sure that the player put in good values (into the text box)
    // if undefined, we're showing text and don't care
    if (desiredInputType == undefined) {
        gameRunner.next(); 

    // if we're looking for a number, we DO care that it is a number
    } else if (desiredInputType == 'number') {
        let value = Number(playerInput.value);
        if (value == NaN || value < playerInput.min || value > playerInput.max) {
            sectionText.innerHTML = 'Please enter a number below!<br>Max: ' 
            + playerInput.max.toString() + '<br>Min: '+ playerInput.min.toString();
            
        } else {
            gameRunner.next();
        }
        
    // if we're looking for a string, trim off all spaces (and make sure they didn't just type spaces)
    } else if (desiredInputType == 'string') {
        let value = playerInput.value;
        value = value.trim();
        if (value != '' && value != undefined) {
            gameRunner.next();
        } else {
            sectionText.innerHTML = "&darr;&darr;&darr; Please actually type something! &darr;&darr;&darr;";
        }
            
    // if we're looking for a choice, make sure that we actually selected something
    // unless theres no checkboxes big boy
    // or choice box whatever radio buttons
    } else if (desiredInputType == 'choice') {
        let isOneSelected = false;
        let hasCheckboxes = false;
    
        const optionBox = document.getElementById("optionBox");
        if (optionBox) {
            for (let option of optionBox.children) {
                if (option.type === "checkbox") {
                    hasCheckboxes = true; // found one i think
                    if (option.checked) {
                        isOneSelected = true;
                        break;
                    }
                }
            }
        }
    
        if (isOneSelected) {
            gameRunner.next();
        } else if (!hasCheckboxes) {
            sectionText.innerHTML = "&rarr;&rarr; there arent any checkboxes stupid idiot 😡😡 &rarr;&rarr;";
        } else {
            sectionText.innerHTML = "&rarr;&rarr; Please select at least one! &rarr;&rarr;";
        }
    }

    // why does this exist? IDK, but if I make trades more complex in the future it could be helpful. 
    // Right now it is the same as desiredInputType='number'
    } else if (desiredInputType == 'trade') {
        // check that we have a number
        let value = Number(playerInput.value);

        if (value == NaN || value < playerInput.min || value > playerInput.max) {
            sectionText.innerHTML = 'Please enter a number below!<br>Max: ' 
            + playerInput.max.toString() + '<br>Min: '+ playerInput.min.toString();
            
        } else {
            gameRunner.next();
        }
    // cargoLoad doesn't require anything at all, since if we add no options we just cancel.
    } else if (desiredInputType == 'cargoLoad') {
        gameRunner.next();
    }
    
    
};

let continueB = document.getElementById("continueButton");
continueB.onclick = buttonClick;

// also if enter is pressed in the textBox treat it like a button press
let textInput = document.getElementById("textInput");
textInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        continueB.click();
    }
});

let homelandInfoButton = document.getElementById("homelandButton");
homelandInfoButton.addEventListener("click", ()=>{
    window.alert(`Here's a little info on your homeland:\nHomeland: ${playerShipHomeland.cityName}\nStock: [${playerShipHomeland.stock}]\n`+
        `Desired Items: [${playerShipHomeland.desired}]`)
});

gameRunner.next();
console.log("OK! Game start!");
