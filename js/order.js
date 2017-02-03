var currentDrink = createDrink();
var selected = currentDrink;

let orderSection = document.getElementById('order');
let orderList = document.getElementById('order-list');

let order = {
    set: function(drink){
        orderList.innerHTML = orderDisplay(drink)
    }
}


orderSection.addEventListener('click', function(e){

    if(e.target && e.target.nodeName === 'BUTTON'){

        let dataName = ""
        if(e.target.getAttribute('data-name')){
            dataName = e.target.getAttribute('data-name');
        }

        if(dataName == "DELETE"){
            currentDrink = createDrink();
            order.set(currentDrink);
        }
    }
});


function orderDisplay(drink){
    let o = {
        name: "default Drink <br>",
        iced: "",
        syrups: "",
        size: "",
        shotDeclaration: ""
    }

    if(drink.recipe.shots != standardShots(drink.size)){
        switch(drink.recipe.shots){
            case 1:
                o.shotDeclaration = "SOLO<br>";
                break;
            case 2:
                o.shotDeclaration = "DOUBLE<br>";
                break;
            case 3:
                o.shotDeclaration = "Triple<br>";
                break;
            case 4:
                o.shotDeclaration = "QUAD<br>";
                break;
            default:
                if(drink.recipe.shots){
                    o.shotDeclaration = (drink.recipe.shots + " shot<br>") || "";
                }
                else{
                    o.shotDeclaration = "";
                }
                
        }
    }
    else{
        o.shotDeclaration = "";
    }

    switch(drink.size){
        case drinkSizes.SHORT:
            o.size = "SH ";
            break;
        case drinkSizes.TALL:
            o.size = "TL ";
            break;
        case drinkSizes.GRANDE:
            o.size = "GR "; 
            break;
        case drinkSizes.VENTI:
            o.size = "VT ";
            break;
        case drinkSizes.TRENTA:
            o.size = "TR ";
            break;
    }

    if(!_.contains(drink.recipe, drink.recipe.name)){
        o.name = "Default Drink <br>"
    }
    else{
        o.name = drink.recipe.name + "<br>";
    }

    if(drink.iced){
        o.iced = "ICED<br>"
    }
    else{
        o.iced = ""
    }

    
    switch(drink.caffeine){
        case caffeineTypes.DECAF:
            o.caffeine = "Decaf <br>";
            break;
        case caffeineTypes.HALFCAF:
            o.caffeine = "1/2 Decaf <br>";
            break;
        default:
            o.caffeine = ""
    }

    if(drink.recipe.addedSyrups.length > 0){
        drink.recipe.addedSyrups.forEach(function(e) {
            o.syrups += e.name + "<br>"
        }, this);
    }

    return o.size + o.name + o.shotDeclaration + o.iced + o.syrups + o.caffeine;
}
