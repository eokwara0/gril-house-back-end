import { getUserId } from "../menu_script/menu_script.js";
import { getId } from "./main_menu_script.js";

export async function addDrinkMenuItems() {
    const id = (await getId('Drinks'))['_id'].toString();
    const userId = (await getUserId())['_id'].toString();


    const drinks = [
        {
          menuId: id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/drink/perm.webp",
          item: {
            title: "The Perfect Margarita",
            summary: "The Perfect Margarita",
            cooking: false,
            price: 23.99,
            quantity: 275,
            unit: "servings",
            prep: "10min",
            recipe: [
              {
                title: "lime",
                summary: "lime",
                quantity: 1,
                unit: "wedge",
                instructions: "",
              },
              {
                title: "coarse sea salt, or as needed",
                summary: "coarse sea salt, or as needed",
                quantity: 1,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "ice cube",
                summary: "ice cube",
                quantity: 1,
                unit: "large",
                instructions: "",
              },
              {
                title: "ice cubes, or as needed",
                summary: "ice cubes, or as needed",
                quantity: 1,
                unit: "cup",
                instructions: "",
              },
              {
                title: "ounces white tequila",
                summary: "ounces white tequila",
                quantity: 2,
                unit: "fluid",
                instructions: "",
              },
              {
                title: "ounces triple sec",
                summary: "ounces triple sec",
                quantity: 3 / 2,
                unit: "fluid",
                instructions: "",
              },
              {
                title: "ounce freshly squeezed lime juice",
                summary: "ounce freshly squeezed lime juice",
                quantity: 1,
                unit: "fluid",
                instructions: "",
              },
              {
                title: "lime",
                summary: "lime",
                quantity: 1,
                unit: "slice",
                instructions: "",
              },
            ],
            nutrition: { fat: "0g", carbs: "30g", protein: "1g", calories: "321" },
            instructions:
              "Gather all ingredients\n" +
              "Moisten the rim of a glass with a lime wedge. Sprinkle salt onto a plate. Lightly dip the moistened rim into the salt.\n" +
              "Place a large ice cube in the glass and freeze the prepared glass until ready to serve.\n" +
              "Fill a cocktail shaker with fresh ice. Add tequila, triple sec, and lime juice. Cover and shake vigorously until the outside of the shaker has frosted.\n" +
              "Strain margarita into the chilled glass and garnish with a slice of lime.",
            content:
              "This margarita recipe is created with the perfect ratio of white tequila, high-quality triple sec, and freshly squeezed lime juice for the best-tasting margarita every time.",
          },
        },
        {
          menuId: id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/drink/strdaq.webp",
          item: {
            title: "Best Strawberry Daiquiri",
            summary: "Best Strawberry Daiquiri",
            cooking: false,
            price: 29.99,
            quantity: 34,
            unit: "servings",
            prep: "10min",
            recipe: [
              {
                title: "frozen strawberries",
                summary: "frozen strawberries",
                quantity: 4,
                unit: "ounces",
                instructions: "",
              },
              {
                title: "white sugar",
                summary: "white sugar",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "lemon juice",
                summary: "lemon juice",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "lime juice",
                summary: "lime juice",
                quantity: 1 / 8,
                unit: "cup",
                instructions: "",
              },
              {
                title: "rum",
                summary: "rum",
                quantity: 3 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "lemon-lime flavored carbonated beverage",
                summary: "lemon-lime flavored carbonated beverage",
                quantity: 1 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "ice, or as needed",
                summary: "ice, or as needed",
                quantity: 6,
                unit: "cups",
                instructions: "",
              },
            ],
            nutrition: { fat: "0g", carbs: "30g", protein: "1g", calories: "321" },
            instructions:
              "Place frozen strawberries in a blender; add sugar, lemon juice, and lime juice. Pour in rum and lemon-lime beverage, then add ice. Blend until smooth.\n" +
              "Use fresh, in-season strawberries if you have them!",
            content:
              "It's officially happy hour with these easy strawberry daiquiris made with either frozen or fresh, sweet, in-season strawberries if you can find them. A little citrus juice really kicks the strawberry flavor up a notch and a bit of lemon-lime soda adds a hint of effervescence.",
          },
        },
      
        {
          menuId: id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/drink/dim.webp",
          item: {
            title: "Dirty Martini",
            summary: "Dirty Martini",
            cooking: false,
            price: 29.99,
            quantity: 200,
            unit: "servings",
            prep: "5min",
            recipe: [
              {
                title: "ounces vodka",
                summary: "ounces vodka",
                quantity: 6,
                unit: "fluid",
                instructions: "",
              },
              {
                title: "dry vermouth",
                summary: "dry vermouth",
                quantity: 1,
                unit: "dash",
                instructions: "",
              },
              {
                title: "ounce brine",
                summary: "ounce brine",
                quantity: 1,
                unit: "fluid",
                instructions: "",
              },
              {
                title: "green olives",
                summary: "green olives",
                quantity: 4,
                unit: "stuffed",
                instructions: "",
              },
            ],
            nutrition: { fat: "1g", carbs: "0g", protein: "0g", calories: "207" },
            instructions:
              "Gather all ingredients.\n" +
              "Stir together vodka, dry vermouth, brine, and olives in a mixing glass. Pour into a glass or shaker with ice.\n" +
              "Serve on the rocks, or strain into chilled cocktail glasses.",
            content:
              "A dirty martini is the perfect cocktail for olive lovers. It can be made with vodka or gin and served on the rocks or chilled.",
          },
        },
      
        {
          menuId: id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/drink/jrp.webp",
          item: {
            title: "Jamaican Rum Punch",
            summary: "Jamaican Rum Punch",
            cooking: false,
            price: 23.99,
            quantity: 200,
            unit: "servings",
            prep: "10min",
            recipe: [
              {
                title: "pineapple juice",
                summary: "pineapple juice",
                quantity: 5 / 2,
                unit: "cups",
                instructions: "",
              },
              {
                title: "orange juice",
                summary: "orange juice",
                quantity: 5 / 2,
                unit: "cups",
                instructions: "",
              },
              {
                title: "151 proof rum (such as Bacardi)",
                summary: "151 proof rum (such as Bacardi)",
                quantity: 1,
                unit: "cup",
                instructions: "",
              },
              {
                title: "dark rum (such as Meyer's®)",
                summary: "dark rum (such as Meyer's®)",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "coconut-flavored rum (such as Malibu®)",
                summary: "coconut-flavored rum (such as Malibu®)",
                quantity: 1 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "fresh lime juice",
                summary: "fresh lime juice",
                quantity: 1 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "grenadine syrup",
                summary: "grenadine syrup",
                quantity: 3,
                unit: "tablespoons",
                instructions: "",
              },
              {
                title: "sliced",
                summary: "sliced",
                quantity: 1,
                unit: "orange,",
                instructions: "",
              },
              {
                title: "sliced",
                summary: "sliced",
                quantity: 1,
                unit: "lime,",
                instructions: "",
              },
              {
                title: "sliced",
                summary: "sliced",
                quantity: 1,
                unit: "lemon,",
                instructions: "",
              },
            ],
            nutrition: { fat: "1g", carbs: "30g", protein: "2g", calories: "254" },
            instructions:
              "Gather all ingredients.\n" +
              "Stir pineapple juice, orange juice, 151 proof rum, dark rum, coconut-flavored rum, lime juice, and grenadine syrup together in a punch bowl.\n" +
              "Float orange slices, lime slices, and lemon slices in the punch.\n" +
              "Ladle the punch into ice filled glasses, or chill the punch in the refrigerator until ready to serve.",
            content:
              "A tropical rum punch made with three varieties of rum, grenadine, pineapple juice, fresh lime juice, and orange juice for a refreshingly fruity party drink. Fresh lime juice is key to getting the unique flavor of this punch.",
          },
        },
        {
          menuId: id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/drink/jcf.webp",
          item: {
            title: "Java Chip Frappe",
            summary: "Java Chip Frappe",
            cooking: false,
            price: 32.99,
            quantity: 200,
            unit: "servings",
            prep: "10min",
            recipe: [
              {
                title: "Almond Breeze Original Almondmilk",
                summary: "Almond Breeze Original Almondmilk",
                quantity: 3 / 2,
                unit: "cups",
                instructions: "",
              },
              {
                title: "Almond Breeze Vanilla Almondmilk",
                summary: "Almond Breeze Vanilla Almondmilk",
                quantity: 2,
                unit: "tablespoons",
                instructions: "",
              },
              {
                title: "ice cubes",
                summary: "ice cubes",
                quantity: 3,
                unit: "cups",
                instructions: "",
              },
              {
                title: "strong brewed coffee, cooled",
                summary: "strong brewed coffee, cooled",
                quantity: 3 / 2,
                unit: "cups",
                instructions: "",
              },
              {
                title: "chocolate syrup",
                summary: "chocolate syrup",
                quantity: 1 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "semi-sweet chocolate chips",
                summary: "semi-sweet chocolate chips",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
            ],
            nutrition: { fat: "1g", carbs: "30g", protein: "2g", calories: "254" },
            instructions:
              "Combine ice, coffee, Almond Breeze Original Almondmilk, Almond Breeze Vanilla Almondmilk Creamer, chocolate syrup and chocolate chips in a blender. Blend until smooth.\n" +
              "Serve in glasses.",
            content:
              "Skip your regular cup of coffee and try this delicious and refreshing frappe blended with coffee and chocolate to kickstart your day.",
          },
        },
      
        {
          menuId: id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/drink/idcl.webp",
          item: {
            title: "Iced Dirty Chai Latte",
            summary: "Iced Dirty Chai Latte",
            cooking: false,
            price: 43.99,
            quantity: 210,
            unit: "servings",
            prep: "10min",
            recipe: [
              {
                title: "Almond Breeze Extra Creamy Almondmilk",
                summary: "Almond Breeze Extra Creamy Almondmilk",
                quantity: 1,
                unit: "cup",
                instructions: "",
              },
              {
                title: "Almond Breeze Vanilla Almondmilk Creamer",
                summary: "Almond Breeze Vanilla Almondmilk Creamer",
                quantity: 2,
                unit: "tablespoons",
                instructions: "",
              },
              {
                title: "water",
                summary: "water",
                quantity: 1,
                unit: "cup",
                instructions: "",
              },
              {
                title: "brown sugar",
                summary: "brown sugar",
                quantity: 1 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "ground cinnamon",
                summary: "ground cinnamon",
                quantity: 1 / 2,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "ground ginger",
                summary: "ground ginger",
                quantity: 1 / 2,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "ground allspice",
                summary: "ground allspice",
                quantity: 1 / 4,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "cardamom",
                summary: "cardamom",
                quantity: 1 / 4,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "tea bags ice cubes as needed",
                summary: "tea bags ice cubes as needed",
                quantity: 2,
                unit: "black",
                instructions: "",
              },
              {
                title: "espresso, cooled",
                summary: "espresso, cooled",
                quantity: 2,
                unit: "shots",
                instructions: "",
              },
            ],
            nutrition: { fat: "1g", carbs: "30g", protein: "2g", calories: "254" },
            instructions:
              "In a small saucepan over high heat, combine water, brown sugar, cinnamon, ginger, allspice, and cardamom." +
              "\nBring to a boil, then turn off heat and add tea bags. " +
              "\nAllow to steep for about 5 minutes. Remove tea bags and allow to cool completely.\n" +
              "Strain tea mixture into 2 ice filled glasses, then add espresso shots." +
              "\nPour Almond Breeze Extra Creamy Almondmilk, and Almond Breeze Vanilla Almondmilk Creamer into glasses.",
            content:
              "The rich blend of spices in this chai latte make a wonderful aroma to pair with Almond Breeze Almondmilk and your favorite shots of espresso.",
          },
        },
      
        {
          menuId: id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/drink/scaf.webp",
          item: {
            title: "Sparkling Cantaloupe Agua",
            summary: "Sparkling Cantaloupe Agua Fresca",
            cooking: false,
            price: 36.99,
            quantity: 510,
            unit: "servings",
            prep: "15min",
            recipe: [
              {
                title: "fresh cantaloupe cubes",
                summary: "fresh cantaloupe cubes",
                quantity: 2,
                unit: "6 pounds",
                instructions: "",
              },
              {
                title: "water",
                summary: "water",
                quantity: 2,
                unit: "cups",
                instructions: "",
              },
              {
                title: "freshly squeezed lime juice",
                summary: "freshly squeezed lime juice",
                quantity: 6,
                unit: "tablespoons",
                instructions: "",
              },
              {
                title: "honey",
                summary: "honey",
                quantity: 3,
                unit: "tablespoons",
                instructions: "",
              },
              {
                title: "salt",
                summary: "salt",
                quantity: 1 / 4,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "club soda, chilled cantaloupe",
                summary: "club soda, chilled cantaloupe",
                quantity: 2,
                unit: "cups",
                instructions: "",
              },
            ],
            nutrition: { fat: "0g", carbs: "21g", protein: "1g", calories: "81" },
            instructions:
              "Working in batches if needed, blend cantaloupe, water, lime juice, honey, and salt in a blender until smooth." +
              "\nPress through a sieve; discard solids. Add strained juice to a pitcher.\n" +
              "Chill until ready to serve. Add club soda just before serving. Serve over ice, and garnish glasses with melon balls and lime zest twists.",
            content:
              "This refreshing agua fresca with cantaloupe and lime juice topped with club soda is perfect on a hot day.",
          },
        },
      ];
    db.menuitems.insertMany(drinks);
    console.log(`${drinks.length()} menuitems inserted`);
  }