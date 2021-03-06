"use strict"

function createDrink(){
    return {
        size: "Grande",
        iced: false,
        caffeine: "Normal",
        recipe: {
            assigned: false,
            shotType: "Normal",
            syrups: [],
            addedSyrups: [],
            other: [],
            addedOthers: []
        },
    }
}

function changeSize(drink, size) {
    switch(size){
        case "SHORT":
            drink.size = "Short";
            break;
        case "TALL":
            drink.size = "Tall";
            break;
        case "GRANDE":
            drink.size = "Grande";
            break;
        case "VENTI":
            drink.size = "Venti";
            break;
        case "TRENTA":
            drink.size = "Trenta";
            break;
    }
    return drink;
}

function changeMilk(drink, milk){
    drink.recipe.milk = milk;
    return drink;
}

function changeIced(drink){
    if(drink.iced === undefined)
        drink.iced = true;
    else
        drink.iced = !drink.iced;
    return drink;
}

function changeCaffeine(drink, caffeine){
    switch(caffeine){
        case "DECAF":
            if(drink.caffeine === "Decaf"){
                drink.caffeine = "Normal";
            }
            else{
                drink.caffeine = "Decaf";
            }
            break;
        case "HALFCAF":
            if(drink.caffeine === "1/2 Decaf"){
                drink.caffeine = "Normal";
            }
            else{
                drink.caffeine = "1/2 Decaf";
            }
            break;
        case "TWOTHIRDS":
            if(drink.caffeine === "2/3 Decaf"){
                drink.caffeine = "Normal";
            }
            else{
                drink.caffeine = "2/3 Decaf";
            }
            break;
        case "THREEFOURTHS":
            if(drink.caffeine === "3/4 Decaf"){
                drink.caffeine = "Normal";
            }
            else{
                drink.caffeine = "3/4 Decaf";
            }
            break;
    }
    return drink;
}

function changeShotType(drink, shotType) {
    switch(shotType){
        case "Restretto":
            if(drink.recipe.shotType === "Restretto"){
                drink.recipe.shotType = "Normal";
            }
            else{
                drink.recipe.shotType = "Restretto";
            }
        break;
        case "Long":
            if(drink.recipe.shotType === "Long"){
                drink.recipe.shotType = "Normal";
            }
            else{
                drink.recipe.shotType = "Long";
            }
        break;
    }
    return drink;
}

function setShotCount(drink, count){
    switch(count){
        case "SOLO":
            drink.recipe.shots = 1;
            break;
        case "DOPPIO":
            drink.recipe.shots = 2;
            break;
        case "TRIPLE":
            drink.recipe.shots = 3;
            break;
        case "QUAD":
            drink.recipe.shots = 4;
            break;
    }
    return drink;
}

function addRecipe(drink, recipe){
    if(drink.recipe.assigned == false){
        switch(recipe){

            //ESPRESSO BERVERAGES
            case "AMERICANO":
                drink.recipe = Object.assign(drink.recipe, americano(drink));
                break;
            case "ESPRESSO":
                drink.recipe = Object.assign(drink.recipe, espresso(drink));
                break;
            case "ESPRESSOMACCHIATO":
                drink.recipe = Object.assign(drink.recipe, espressoMacchiato(drink));
                break;
            case "ESPRESSOCONPANNA":
                drink.recipe = Object.assign(drink.recipe, espressoConPanna(drink));
                break;
            case "DOUBLESHOT":
                drink.recipe = Object.assign(drink.recipe, starbucksDoubleShotOnIce(drink));
                break;
            case "LATTE":
                drink.recipe = Object.assign(drink.recipe, latte(drink));
                break;
            case "CINNDOLLATTE":
                drink.recipe = Object.assign(drink.recipe, cinnamonDolceLatte(drink));
                break;
            case "CAPPUCCINO":
                drink.recipe = Object.assign(drink.recipe, cappuccino(drink));
                break;
            case "FLATWHITE":
                drink.recipe = Object.assign(drink.recipe, flatWhite(drink));
                break;
            case "LATTEMACCHIATO":
                drink.recipe = Object.assign(drink.recipe, latteMacchiato(drink));
                break;
            case "SKINNYLATTE":
                drink.recipe = Object.assign(drink.recipe, skinnyLatte(drink));
                break;
            case "SKINNYCINNDOLLATTE":
                drink.recipe = Object.assign(drink.recipe, skinnyCinnamonDolceLatte(drink));
                break;
            case "CARAMELMACCHIATO":
                drink.recipe = Object.assign(drink.recipe, caramelMacchiato(drink));
                break;
            case "SKINNYCARAMELMACCHIATO":
                drink.recipe = Object.assign(drink.recipe, skinnyCaramelMacchiato(drink));
                break;
            case "MOCHA":
                drink.recipe = Object.assign(drink.recipe, mocha(drink))
                break;
            case "SKINNYMOCHA":
                drink.recipe = Object.assign(drink.recipe, skinnyMocha(drink))
                break;
            case "WHITEMOCHA":
                drink.recipe = Object.assign(drink.recipe, whiteMocha(drink))
                break;
            case "PSL":
                drink.recipe = Object.assign(drink.recipe, pumpkinSpiceLatte(drink))
                break;

            //BLENDED BEVERAGES
            case "COFFEEFRAPP":
                drink.recipe = Object.assign(drink.recipe, coffeeFrapp(drink))
                break;
            case "MOCHAFRAPP":
                drink.recipe = Object.assign(drink.recipe, mochaFrapp(drink))
                break;
            case "CARAMELFRAPP":
                drink.recipe = Object.assign(drink.recipe, caramelFapp(drink))
                break;
            case "JAVACHIPFRAPP":
                drink.recipe = Object.assign(drink.recipe, javachipFrapp(drink))
                break;
            case "CAFEVANILLAFRAPP":
                drink.recipe = Object.assign(drink.recipe, cafeVanillaFrapp(drink))
                break;
            case "ESPRESSOFRAPP":
                drink.recipe = Object.assign(drink.recipe, espressoFrapp(drink))
                break;
            case "WHITEMOCHAFRAPP":
                drink.recipe = Object.assign(drink.recipe, whiteMochaFrapp(drink))
                break;
            case "CHAIFRAPP":
                drink.recipe = Object.assign(drink.recipe, chaiFrapp(drink))
                break;
            case "DOUBLECHOCFRAPP":
                drink.recipe = Object.assign(drink.recipe, doubleChocolateChipFrapp(drink))
                break;
            case "VANILLABEANFRAPP":
                drink.recipe = Object.assign(drink.recipe, vanillaBeanFrapp(drink))
                break;
            case "WMCREAMFRAPP":
                drink.recipe = Object.assign(drink.recipe, whiteMochaCreamFrapp(drink))
                break;
            case "STRAWCREAMFRAPP":
                drink.recipe = Object.assign(drink.recipe, strawBerryCreamFrapp(drink))
                break;
            case "GREENTEAFRAPP":
                drink.recipe = Object.assign(drink.recipe, strawBerryCreamFrapp(drink))
                break;
            case "SYRUPFRAPP":
                drink.recipe = Object.assign(drink.recipe, syrupCreamFrapp(drink))
                break;
            case "OPARAHCHAIFRAPP":
                drink.recipe = Object.assign(drink.recipe, oparahChaiFrapp(drink))
                break;
            case "CHOCOLATESMOOTHIE":
                drink.recipe = Object.assign(drink.recipe, chocolateSmoothe(drink))
                break;
            case "STRAWBERRYSMOOTHIE":
                drink.recipe = Object.assign(drink.recipe, strawberrySmoothe(drink))
                break;
            case "BLENDEDSTRAWBERRY":
                drink.recipe = Object.assign(drink.recipe, blendedStrawberryLemonade(drink))
                break;

            //Tea's
            case "CHAITEALATTE":
                drink.recipe = Object.assign(drink.recipe, chaiTeaLatte(drink))
                break;
            case "OPARAHCHAITEALATTE":
                drink.recipe = Object.assign(drink.recipe, oparahChaiTeaLatte(drink))
                break;
            case "GREENTEALATTE":
                drink.recipe = Object.assign(drink.recipe, greenTeaLatte(drink))
                break;
            case "BLACKICETEA":
                drink.recipe = Object.assign(drink.recipe, blackIcedTea(drink))
                break;
            case "BLACKICETEALEMONADE":
                drink.recipe = Object.assign(drink.recipe, blackIcedTeaLemonade(drink))
                break;
            case "MANGOBLACKICETEA":
                drink.recipe = Object.assign(drink.recipe, mangoBlackTea(drink))
                break;
            case "MANGOBLACKICETEALEMONADE":
                drink.recipe = Object.assign(drink.recipe, mangoBlackTeaLemonade(drink))
                break;
            case "GREENICETEA":
                drink.recipe = Object.assign(drink.recipe, greenIcedTea(drink))
                break;
            case "GREENICETEALEMONADE":
                drink.recipe = Object.assign(drink.recipe, greenTeaLemonade(drink))
                break;
            case "PEACHGREENICETEA":
                drink.recipe = Object.assign(drink.recipe, peachGreenTea(drink))
                break;
            case "PEACHGREENICETEALEMONADE":
                drink.recipe = Object.assign(drink.recipe, peachGreenTeaLemonade(drink))
                break;
            case "PASSIONICETEA":
                drink.recipe = Object.assign(drink.recipe, passionIcedTea(drink))
                break;
            case "PASSIONTEALEMONADE":
                drink.recipe = Object.assign(drink.recipe, passionIcedTeaLemonade(drink))
                break;
            case "CUSTOMICETEA":
                drink.recipe = Object.assign(drink.recipe, customIcedTea(drink))
                break;
            case "CUSTOMICETEALEMONADE":
                drink.recipe = Object.assign(drink.recipe, customIcedTeaLemonade(drink))
                break;

        }
    }
    else 
        ERR.set("Recipe is already set. Delete drink to change the recipe.");

    return drink;
}

function addSyrup(recipe, syrup, size, qunatity){

    let pumps = 0;
    if(qunatity){
        pumps = qunatity
    }
    else if(size){
        pumps = standardPumps(size);
    }
    else{
        pumps = 1;
    }

    let s = {
        name: syrup,
        count: pumps
    }

    let otherSyrups = _.without(recipe.addedSyrups, _.findWhere(recipe.addedSyrups, {
        name: syrup
    }));

    otherSyrups.push(s);
    recipe.addedSyrups = otherSyrups;

    return recipe;
}

function addOther(recipe, other, size, quantity){
    let o = {};
    o.name = other;
    
    if(quantity){
        o.count = quantity;
    }

    let otherOthers = _.without(recipe.addedOthers, _.findWhere(recipe.addedOthers, {
        name: other
    }));

    otherOthers.push(o);
    recipe.addedOthers = otherOthers;

    return recipe;
}

function standardPumps(size, mod){
    let modValue;
    if(!mod)
        modValue = 0;
    else
        modValue = mod;

    switch(size){
        case "Short":
            return 2 + modValue;
        case "Tall":
            return 3 + modValue;
        case "Grande":
            return 4 + modValue;
        case "Venti":
            return 5 + modValue;
        case "Trenta":
            return 7 + modValue;
    }
}

function standardShots(size, mod){
    let modValue;
    if(!mod)
        modValue = 0;
    else
        modValue = mod;

    switch(size){
        case "Short":
            return 1 + modValue;
        case "Tall":
            return 1 + modValue;
        case "Grande":
            return 2 + modValue;
        case "Venti":
            return 2 + modValue;
    }
}

function espressoShotsDeclaration(){

}