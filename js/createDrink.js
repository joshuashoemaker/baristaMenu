function createDrink(){
    return {
        size: drinkSizes.GRANDE,
        iced: false,
        caffeine: caffeineTypes.NORMAL,
        type: drinkTypes.DRINK,
        recipe: {
            assigned: false,
            shotType: shotTypes.NORMAL,
            syrups: [],
            addedSyrups: [],
            milk: milkTypes.NONE
        },
    }
}

function changeSize(drink, size) {
    switch(size){
        case "SHORT":
            drink.size = drinkSizes.SHORT;
            break;
        case "TALL":
            drink.size = drinkSizes.TALL;
            break;
        case "GRANDE":
            drink.size = drinkSizes.GRANDE;
            break;
        case "VENTI":
            drink.size = drinkSizes.VENTI;
            break;
        case "TRENTA":
            drink.size = drinkSizes.TRENTA;
            break;
    }
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
            if(drink.caffeine === caffeineTypes.DECAF){
                drink.caffeine = caffeineTypes.NORMAL;
            }
            else{
                drink.caffeine = caffeineTypes.DECAF;
            }
            break;
        case "HALFCAF":
            if(drink.caffeine === caffeineTypes.HALFCAF){
                drink.caffeine = caffeineTypes.NORMAL;
            }
            else{
                drink.caffeine = caffeineTypes.HALFCAF;
            }
            break;
    }
    return drink;
}

function changeShotType(drink, shotType) {
    switch(shotType){
        case "RESTRETTO":
            if(drink.recipe.shotType === shotTypes.RESTRETTO){
                drink.recipe.shotType = shotTypes.NORMAL;
            }
            else{
                drink.recipe.shotType = shotTypes.RESTRETTO;
            }
        break;
        case "LONG":
            if(drink.recipe.shotType === shotTypes.LONG){
                drink.recipe.shotType = shotTypes.NORMAL;
            }
            else{
                drink.recipe.shotType = shotTypes.LONG;
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
            case "AMERICANO":
                drink.recipe = Object.assign(drink.recipe, americano(drink));
                break;
            case "ESPRESSO":
                drink.recipe = Object.assign(drink.recipe, espresso(drink));
                break;
            case "ESPRESSOMACCHIATO":
                drink.recipe = Object.assign(drink.recipe, espressoMacchiato(drink));
                break;
            case "LATTE":
                drink.recipe = Object.assign(drink.recipe, latte(drink));
                break;
            case "CINNDOLLATTE":
                drink.recipe = Object.assign(drink.recipe, cinnamonDolceLatte(drink));
                break;
            case "SKINNYLATTE":
                drink.recipe = Object.assign(drink.recipe, skinnyLatte(drink));
                break;
            case "WHITEMOCHA":
                drink.recipe = Object.assign(drink.recipe, whiteMocha(drink))
                break;
        }
    }
    else 
        ERR.set("Recipe is already set. Delete drink to change the recipe.");

    return drink;
}

function addSyrup(drink, syrup, qunatity){

    let pumps = 0;
    if(qunatity){
        pumps = qunatity
    }
    else{
        pumps = standardPumps(drink.size);
    }

    s = {
        name: syrup,
        count: pumps
    }

    let otherSyrups = _.without(drink.recipe.addedSyrups, _.findWhere(drink.recipe.addedSyrups, {
        name: syrup
    }));

    otherSyrups.push(s);
    drink.recipe.addedSyrups = otherSyrups;

    return drink;
}

function standardPumps(size, mod){
    let modValue;
    if(!mod)
        modValue = 0;
    else
        modValue = mod;

    switch(size){
        case drinkSizes.SHORT:
            return 2 + modValue;
        case drinkSizes.TALL:
            return 3 + modValue;
        case drinkSizes.GRANDE:
            return 4 + modValue;
        case drinkSizes.VENTI:
            return 5 + modValue;
        case drinkSizes.TRENTA:
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
        case drinkSizes.SHORT:
            return 1 + modValue;
        case drinkSizes.TALL:
            return 1 + modValue;
        case drinkSizes.GRANDE:
            return 2 + modValue;
        case drinkSizes.VENTI:
            return 2 + modValue;
    }
}

function espressoShotsDeclaration(){

}