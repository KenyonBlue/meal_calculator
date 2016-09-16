// objects and cost of all dinner items
var app = {
    nachos: ['chips and cheese', 4.99],
    calimari: ['calimari', 8.99]
}

var salad = {
    garden: ['garden salad', 4.99],
    ceasar: ['ceasar', 5.99],
    wedge: ['apple wedge salad', 7.99]
}

var main_course = {
    meat: ['ribeye', 65.00],
    chicken: ['crispy chicken', 25.99],
    fish: ['jalapeno garlic tilapia', 45.00]
}

var dessert = {
    doughnuts: ['doughnuts', 14.00],
    brownies: ['brownies', 12.00]
}

var drinks = {
    water: ['bottled water', 8.00],
    wine: ['De Asti', 45.00],
    beer: ['guiness', 7.00]
}

// define global variables
var total;
var tax;
var tip;
var tipArr = [];

// diner object constructor, call with items they ordered
var diner = function(name, appetizer, salad, main_course,dessert, drinks) {
    this.name = name;
    this.appetizer = appetizer;
    this.salad = salad;
    this.main_course = main_course;
    this.dessert = dessert;
    this.drinks = drinks;
}

//diner obj method
diner.prototype = {
    //addTotal sums the prices of all the dinner items ordered, return the total
    addTotal: function() {
        var appPrice = app[this.appetizer][1];
        var saladPrice = salad[this.salad][1];
        var mainPrice = main_course[this.main_course][1];
        var dessertPrice = dessert[this.dessert][1];
        var drinksPrice = drinks[this.drinks][1];

        total = appPrice + saladPrice + mainPrice + dessertPrice + drinksPrice;
        total = total.toFixed(2);
        console.log(this.name + " ordered: " + app[this.appetizer][0] + "," + salad[this.salad][0] + "," + main_course[this.main_course][0] + "," + dessert[this.dessert][0] + "," + drinks[this.drinks][0] + ", for a cost of:$ " + total);
        return total;
    },
    //calcTax generates the tax from the total dinner $$$
    calcTax: function() {
        // 8% tax rate
        // tax does not include tip
        tax = total * .08;
        tax = tax.toFixed(2);
        console.log("tax was:$ " + tax);
    },
    //calcTip generates the tip from the total dinner $$$, includes the tax
    calcTip: function() {
        //20% tip
        // tip includes the tax
        tip = total * .20;
        tip = tip.toFixed(2);
        console.log("tip was:$ " + tip);
        tipArr.push(tip); // build an array for the tips from each diner
    }
};
//dinnergroup object constructor function
var dinnerGroup = function(diner1, diner2, diner3) {
        this.diner1 = diner1;
        this.diner2 = diner2;
        this.diner3 = diner3;
    }
    //dinnergroup methods
dinnerGroup.prototype = {
    //totalBill sums the total of all the diner's bills
    totalBill: function() {
        var finalBill = +jasonTotal + +kaleeTotal + +mikeTotal;
        finalBill = finalBill.toFixed(2);
        console.log("Dining group's total bill is :$ " + finalBill);
    },
    //totalTips sums (reduces) the values in the tip array
    totalTips: function() {
        var finalTips = tipArr.reduce(function(a, b) {
            return a + +b;
        }, 0);
        console.log("Dining group's total tip:$ " + finalTips);
    },
    //dinerEachbill function handled earlier in the code - here for legacy
    dinerEachBill: function() {
        //handled by totalling above
    }
};
// new 'jason' diner object, passin in name and dinner order
// calling methods, displaying the total

var jason = new diner("Jason", "nachos", "wedge", "fish", "brownies", "wine");
jason.addTotal();
jason.calcTax();
jason.calcTip();
var jasonTotal = +total + +tax + +tip;
jasonTotal = jasonTotal.toFixed(2);
console.log("Jason's total was:$ " + jasonTotal);
console.log("-------------");

//new 'kalee' diner object, passin in name and dinner order
// calling methods, displaying the total

var kalee = new diner("kalee", "calimari", "garden", "chicken", "doughnuts", "water");
kalee.addTotal();
kalee.calcTax();
kalee.calcTip();
var kaleeTotal = +total + +tax + +tip;
kaleeTotal = kaleeTotal.toFixed(2);
console.log("Kalee's total: " + kaleeTotal);
console.log("-------------");

//new 'mike' diner object, passin in name and dinner order
// calling methods, displaying the total

var mike = new diner("Mike", "nachos", "ceasar", "meat", "brownies", "beer");
mike.addTotal();
mike.calcTax();
mike.calcTip();
var mikeTotal = +total + +tax + +tip;
mikeTotal = mikeTotal.toFixed(2);
console.log("mike's total: " + mikeTotal);
console.log("-------------");

//new dinnergroup object, passing in name of diners
var dinnerGroup = new dinnerGroup("jason", "kalee", "mike");
//calling the methods to generate the total bill and the total tips
dinnerGroup.totalBill(jasonTotal, kaleeTotal, mikeTotal);

dinnerGroup.totalTips(tipArr);