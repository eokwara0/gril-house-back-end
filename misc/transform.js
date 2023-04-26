"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
function getData(data) {
    var new_data = data.map(function (el) {
        var data_ = el.split(" ");
        var title = extractTitle(data_.slice(2, data.length));
        return {
            title: title,
            summary: title,
            quantity: parseFloat(data_[0]),
            unit: data_[1],
            instructions: "",
        };
    });
    return new_data;
}
function extractTitle(data) {
    if (data.length == 0) {
        return "";
    }
    return data.join(" ");
}
// returns a list of data
function fullText(data, cooking, price, quantity, units) {
    var splitdata = data.split("\n");
    var title = splitdata[0];
    var summary = splitdata[1];
    var preptime = splitdata[2];
    var ingredients = splitdata.slice(splitdata.indexOf("ingredients") + 1, splitdata.indexOf("directions"));
    var ind = splitdata.slice(splitdata.indexOf("directions") + 1, splitdata.indexOf("nutrition"));
    var instructions = getInstructions(ind);
    var recipelist = getData(ingredients);
    var nut = splitdata.slice(splitdata.indexOf("nutrition") + 1);
    var nutrition = extractNut(nut);
    (0, console_1.log)(recipelist);
    return {
        menuId: "643e67e33cac95a4fabe0f16",
        userId: "64228cc979dd8c02d4271d76",
        item: {
            title: title,
            summary: title,
            cooking: cooking,
            price: price,
            quantity: quantity,
            unit: units,
            prep: preptime,
            recipe: [],
            nutrition: nutrition,
            instructions: instructions,
            content: summary,
        },
    };
}
function getInstructions(data) {
    return data.join("\n");
}
function extractNut(nutrition) {
    return {
        fat: nutrition[1],
        carbs: nutrition[2],
        protein: nutrition[3],
        calories: nutrition[0],
    };
}
console.log(fullText("Sparkling Cantaloupe Agua Fresca\nThis refreshing agua fresca with cantaloupe and lime juice topped with club soda is perfect on a hot day.\n15mins\ningredients\n2 pounds fresh cantaloupe cubes (6 cups)\n2 cups water\n6 tablespoons freshly squeezed lime juice (from 2 limes)\n3 tablespoons honey\n1/4 teaspoon salt\n2 cups club soda, chilled cantaloupe melon balls or cubes , for garnish  lime zest twists, for garnish\ndirections\nWorking in batches if needed, blend cantaloupe, water, lime juice, honey, and salt in a blender until smooth. Press through a sieve; discard solids. Add strained juice to a pitcher.\nChill until ready to serve. Add club soda just before serving. Serve over ice, and garnish glasses with melon balls and lime zest twists.\nnutrition\n81\n0g\n21g\n1g", false, 36.99, 510, "servings"));
