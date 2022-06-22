// #1

const totalBasketballScore = (freeThrows, midRange, threePointers) => {
    if (typeof freeThrows == "number" && typeof midRange == "number" && typeof threePointers == "number") {
        return freeThrows + midRange * 2 + threePointers * 3;
    } else {
        console.log("One of these is not a number.");
    }
}

// #2

const inventory = {
    computer : 500,
    mouse : 10,
    tablet : 250,
    case : 25,
    router : 100,
    itemPrice : function(item) {
        if (item) {
            return `$${item}`;
        } else {
            console.log("Invalid item.");
        }
    }
}

const itemPrice = (item) => {
    switch (item) {
        case "computer":
            console.log("$500");
            break;
        default:
            console.log("Item not in store");
    }
}

itemPrice("computer");

// #3

const restaurants = ["Applebees", "Panera Bread", "Popeyes", "Chopt", "Chick-Fil-A", "Cheesecake Factory", "Five Guys"];
const randomRestaurant = (numOfRestaurants) => {
    const randomRestaurantList = [];
    for (i = 0; i <= numOfRestaurants; i++) {
        randomRestaurantList.push(restaurants[Math.floor(Math.random() * restaurants.length)]);
    }
    return randomRestaurantList;
}

// #4

const isLeapYear = (year) => {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}