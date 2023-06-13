import { getUserId } from "../menu_script/menu_script.js";

export async function getId( name ) {
    return await db.menus.find({ title: name });
}


  
export async function addMainMenuItems() {
  const id = (await getId('Main'))['_id'].toString();
  const userId = (await getUserId())['_id'].toString();

  const mainMenuMeals = [
    {
      menuId: id,
      userId: userId,
      active: true,
      imageUrl: "http://192.168.0.252:3000/items/main/smg.webp",
      item: {
        title: "Santa Maria Grilled Beef",
        summary: `Santa Maria tri-itp mariande of spices and herbs makes this recipe spectacular.`,
        cooking: true,
        price: 200,
        quantity: 300,
        unit: "servings",
        prep: "30min",
        recipe: [
          {
            title: "salt",
            summary: "salt seasoning",
            quantity: 2,
            unit: "teaspoons",
            instructions: "",
          },
          {
            title: "black pepper",
            summary: "black Pepper",
            quantity: 2,
            unit: "teaspoons",
            instructions: "",
          },
          {
            title: "garlic powder",
            summary: "garlic powder",
            quantity: 2,
            unit: "teaspoons",
            instructions: "",
          },
          {
            title: "paprika",
            summary: "paprika",
            quantity: 3 / 2,
            unit: "teaspoons",
            instructions: "",
          },
          {
            title: "onion powder",
            summary: "onion powder",
            quantity: 1,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "dried rosemary",
            summary: "dried rosemary",
            quantity: 1,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "cayenne pepper",
            summary: "cayenne pepper",
            quantity: 1 / 4,
            unit: "teaspoons",
            instructions: "",
          },
          {
            title: "beef tri-tip",
            summary: "beef tri-tip",
            quantity: 5 / 2,
            unit: "pounds",
            instructions: "",
          },
          {
            title: "red wine vinegar",
            summary: "red wine vinegar",
            quantity: 1 / 3,
            unit: "cup",
            instructions: "",
          },
          {
            title: "vegetable oil",
            summary: "vegetable oil",
            quantity: 1 / 4,
            unit: "cup",
            instructions: "",
          },
          {
            title: "crushed garlic",
            summary: "crushed garlic",
            quantity: 4,
            unit: "cloves",
            instructions: "",
          },
          {
            title: "dijon mustard",
            summary: "dijon mustard",
            quantity: 1 / 2,
            unit: "teaspoon",
            instructions: "",
          },
        ],
        nutrition: {
          fat: "24g",
          carbs: "4g",
          protein: "53g",
          calories: "452",
        },
        instructions:
          "Stir salt, black pepper, garlic powder, paprika, onion powder, rosemary, and cayenne pepper together in a bowl." +
          "\nPlace tri-tip in a glass baking dish and coat on all sides with spice mixture. Cover the dish with plastic wrap and refrigerate for 4 hours." +
          "\nCombine vinegar, vegetable oil, crushed garlic, and Dijon mustard in a sealable container. Cover the container and shake until ingredients are blended." +
          "\nRemove tri-tip from the refrigerator. Let sit uncovered at room temperature for 30 minutes." +
          "\nPreheat an outdoor grill for high heat; lightly oil the grates." +
          "\nPlace tri-tip on the preheated grill and brush with vinegar mixture. Cook for 4 minutes, flip, and baste. Flip and baste every 4 minutes until tri-tip starts to firm up and is reddish-pink and juicy in the center, 25 to 30 minutes total. An instant-read thermometer inserted into the center should read 130 degrees F (54 degrees C). Let rest for at least 10 minutes before slicing.",
        content: `Santa Maria tri-itp mariande of spices and herbs makes this recipe spectacular. 
        the Town of Santa Maria, California, is home to one of America's most delicious barbecue specialties,
        the tri-tip is cut from the bottom sirloin and when cooked properly, produces a very flavourful, incredibly juicy of beef`,
      },
    },
  
    {
      menuId: id,
      userId: userId,
      active: true,
      imageUrl: "http://192.168.0.252:3000/items/main/bsf.webp",
      item: {
        title: "Broccoli and Chicken Stir-Fry",
        summary: "Broccoli and Chicken Stir-fry .",
        cooking: true,
        price: 200,
        quantity: 300,
        unit: "servings",
        prep: "20min",
        recipe: [
          {
            title: "butter, divided",
            summary: "butter, divided",
            quantity: 4,
            unit: "tablespoons",
            instructions: "",
          },
          {
            title: "garlic",
            summary: "garlic",
            quantity: 4,
            unit: "cloves",
            instructions: "",
          },
          {
            title: "lemon juice",
            summary: "lemon juice",
            quantity: 2,
            unit: "tablespoons",
            instructions: "",
          },
          {
            title: "onion powder",
            summary: "onion powder",
            quantity: 1,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "skin-on, bone-in chicken thighs",
            summary: "skin-on, bone-in chicken thighs",
            quantity: 4,
            unit: "8 ounce",
            instructions: "",
          },
          {
            title: "fresh parsley, chopped",
            summary: "fresh parsley, chopped",
            quantity: 2,
            unit: "tablespoons",
            instructions: "",
          },
        ],
        nutrition: {
          fat: "34g",
          carbs: "7g",
          protein: "41g",
          calories: "510",
        },
        instructions:
          "Preheat the oven to 375 degrees F (190 degrees C)." +
          "\nPlace 3 tablespoons butter in a microwave-safe bowl and heat in a microwave oven until melted, 1 to 2 minutes. Smash garlic cloves with the side of a chef's knife and add garlic to the warm butter. Stir in lemon juice and onion powder; set aside." +
          "\nSprinkle both sides of chicken thighs with salt and pepper. Heat remaining 1 tablespoon butter in a medium oven-safe skillet over medium-high heat. Brown chicken, skin-side down, for 3 to 4 minutes. Flip chicken over and brush skin with lemon-butter mixture. Pour remaining butter mixture into skillet and remove from heat." +
          "\nBake in the preheated oven until chicken is no longer pink at the bone and the juices run clear, about 30 minutes. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C). Brush skin every 10 minutes with pan juices." +
          "\nRemove skillet from the oven and place chicken on a serving platter. Drizzle chicken with pan juices and garnish with parsley.",
  
        content:
          "Broccoli and Chicken Stir-Fry Such an easy and delicious stir-fry full of vegetables and spicy flavors! Ginger, red pepper, soy sauce all add to the savory dish. Pair with sticky rice for a wholesome meal any day of the week!",
      },
    },
  
    {
      menuId: id,
      userId: userId,
      active: true,
      imageUrl: "http://192.168.0.252:3000/items/main/blbc.webp",
      item: {
        title: "Baked Lemon Butter Chicken",
        summary: "Baked lemon Butter Chicken Thighs tasty meal",
        cooking: true,
        price: 159,
        quantity: 245,
        unit: "servings",
        prep: "40min",
        recipe: [
          {
            title: "soy sauce",
            summary: "soy sauce",
            quantity: 2,
            unit: "cup",
            instructions: "",
          },
          {
            title: "brown sugar",
            summary: "brown sugar",
            quantity: 1,
            unit: "cup",
            instructions: "",
          },
          {
            title: "ground ginger",
            summary: "ground ginger",
            quantity: 1,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "red pepper flakes, or to taste",
            summary: "red pepper flakes, or to taste",
            quantity: 1,
            unit: "pinch",
            instructions: "",
          },
          {
            title: "water",
            summary: "water",
            quantity: 2,
            unit: "tablespoons",
            instructions: "",
          },
          {
            title: "cornstarch",
            summary: "cornstarch",
            quantity: 2,
            unit: "tablespoons",
            instructions: "",
          },
          {
            title: "vegetable oil, or to taste",
            summary: "vegetable oil, or to taste",
            quantity: 2,
            unit: "teaspoons",
            instructions: "",
          },
          {
            title: "boneless chicken breast halves, cut into chunks",
            summary: "boneless chicken breast halves, cut into chunks",
            quantity: 3,
            unit: "skinless,",
            instructions: "",
          },
          {
            title: "sliced",
            summary: "sliced",
            quantity: 1,
            unit: "onion,",
            instructions: "",
          },
          {
            title: "broccoli florets",
            summary: "broccoli florets",
            quantity: 3,
            unit: "cups",
            instructions: "",
          },
        ],
        nutrition: {
          fat: "7g",
          carbs: "41g",
          protein: "33g",
          calories: "356",
        },
        instructions:
          "Gather all ingredients" +
          "\nStir soy sauce, brown sugar, ginger, and red pepper flakes together in a bowl until sugar dissolves. Mix water and cornstarch together in a small bowl, stir with a whisk until cornstarch dissolves completely" +
          "\nHeat oil in a large skillet over high heat. Fry chicken and onion in hot oil until chicken is no longer pink in the center and onion is tender, 5 to 7 minutes." +
          "\nStir in broccoli with chicken and onion; sauté until broccoli is hot, about 5 minutes." +
          "\nPush chicken and vegetable mixture to the side of the skillet. Pour soy sauce mixture into the vacant part of the skillet. Stir cornstarch slurry into soy sauce mixture until the color is consistent." +
          "\nMove chicken and vegetables back into the center of the pan; sauté until sauce thickens and coats chicken and vegetables, about 5 minutes more." +
          "",
        content:
          "These delicious lemon garlic chicken thighs are low carb, keto friendly, and easy enough for a weeknight meal. Guaranteed to impress the pickiest eaters! Serve over egg noodles, mashed potatoes, rice, or alongside your favorite vegetables.",
      },
    },
  
    {
      menuId: id,
      userId: userId,
      active: true,
      imageUrl: "http://192.168.0.252:3000/items/main/gsb.webp",
      item: {
        title: "Grilled Sea Bass",
        summary: "Grilled Sea Bass",
        cooking: true,
        price: 96,
        quantity: 343,
        unit: "servings",
        prep: "15min",
        recipe: [
          {
            title: "garlic powder",
            summary: "garlic powder",
            quantity: 1,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "onion powder",
            summary: "onion powder",
            quantity: 1,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "paprika lemon pepper to taste sea",
            summary: "paprika lemon pepper to taste sea",
            quantity: 1,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "sea bass",
            summary: "sea bass",
            quantity: 2,
            unit: "pounds",
            instructions: "",
          },
          {
            title: "butter",
            summary: "butter",
            quantity: 3,
            unit: "tablespoons",
            instructions: "",
          },
          {
            title: "cloves garlic, chopped",
            summary: "cloves garlic, chopped",
            quantity: 2,
            unit: "large",
            instructions: "",
          },
          {
            title: "chopped Italian flat leaf parsley",
            summary: "chopped Italian flat leaf parsley",
            quantity: 1,
            unit: "tablespoon",
            instructions: "",
          },
          {
            title: "extra virgin olive oil",
            summary: "extra virgin olive oil",
            quantity: 3,
            unit: "tablespoons",
            instructions: "",
          },
        ],
        nutrition: {
          fat: "12g",
          carbs: "1g",
          protein: "28g",
          calories: "232",
        },
        instructions:
          "Gather all ingredients" +
          "\nPreheat grill for high heat." +
          "\nIn a small bowl, stir together the garlic powder, onion powder, paprika, lemon pepper, and sea salt." +
          "\nSprinkle seasonings onto the fish." +
          "\nIn a small saucepan over medium heat, melt the butter with the garlic and parsley. Remove from heat when the butter has melted, and set aside." +
          "\nLightly oil grill grate. Grill fish for 7 minutes, then turn and drizzle with butter. Continue cooking for 7 minutes, or until easily flaked with a fork. Drizzle with olive oil before serving." +
          "",
        content:
          "This perfectly seasoned grilled sea bass dish includes a delicious garlic-parsley butter. Serve with steamed or grilled asparagus for a truly flavorful summer meal that's elegant enough to serve to guests.",
      },
    },
  
    {
      menuId: id,
      userId: userId,
      active: true,
      imageUrl: "http://192.168.0.252:3000/items/main/gbw.webp",
      item: {
        title: "Grilled Buffalo Wings",
        summary: "Grilled Buffalo Wings",
        cooking: true,
        price: 50,
        quantity: 1203,
        unit: "servings",
        prep: "17min",
        recipe: [
          {
            title: "chicken wings, separated at",
            summary: "chicken wings, separated at",
            quantity: 3,
            unit: "pounds",
            instructions: "",
          },
          {
            title: "Louisiana-style hot sauce",
            summary: "Louisiana-style hot sauce",
            quantity: 1,
            unit: "cup",
            instructions: "",
          },
          {
            title: "cola-flavored carbonated beverage",
            summary: "cola-flavored carbonated beverage",
            quantity: 1,
            unit: "(12fluidounce)",
            instructions: "",
          },
          {
            title: "cayenne pepper,",
            summary: "cayenne pepper,",
            quantity: 1,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "ground black pepper,",
            summary: "ground black pepper,",
            quantity: 1,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "soy sauce",
            summary: "soy sauce",
            quantity: 1,
            unit: "tablespoon",
            instructions: "",
          },
        ],
        nutrition: {
          fat: "7g",
          carbs: "6g",
          protein: "10g",
          calories: "129",
        },
        instructions:
          "Preheat a grill to medium heat" +
          "\nMix hot sauce, cola, cayenne pepper, black pepper and soy sauce together in a large pot; add wings to the sauce. Place the pot on one side of the preheated grill; bring to a simmer." +
          "\nUse tongs to transfer wings out of sauce and place on the preheated grill; cook until lightly charred on both sides, about 8 to 10 minutes, then return wings to the sauce to continue cooking. Repeat this process until chicken is cooked and pulls easily off of the bone, and the sauce is hot and thickened, about 50 minutes. You can serve them as sloppy-style wings, or serve right off the grill for dryer wings.",
        content: "These grilled buffalo wings taste so much better than fried!",
      },
    },
  
    {
      menuId: id,
      userId: userId,
      active: true,
      imageUrl: "http://192.168.0.252:3000/items/main/bb.webp",
      item: {
        title: "Beef Brisket",
        summary: "Beef Brisket with Ancho Chilli Sauce",
        cooking: true,
        price: 176,
        quantity: 45,
        unit: "servings",
        prep: "30min",
        recipe: [
          {
            title: "beef brisket",
            summary: "beef brisket",
            quantity: 6,
            unit: "pound",
            instructions: "",
          },
          {
            title: "kosher salt",
            summary: "kosher salt",
            quantity: 2,
            unit: "tablespoons",
            instructions: "",
          },
          {
            title: "onion powder",
            summary: "onion powder",
            quantity: 2,
            unit: "teaspoons",
            instructions: "",
          },
          {
            title: "garlic powder",
            summary: "garlic powder",
            quantity: 2,
            unit: "teaspoons",
            instructions: "",
          },
          {
            title: "smoked paprika",
            summary: "smoked paprika",
            quantity: 1,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "ground black pepper",
            summary: "ground black pepper",
            quantity: 1,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "dried ancho chiles (about 4 medium dried chiles)",
            summary: "dried ancho chiles (about 4 medium dried chiles)",
            quantity: 2,
            unit: "ounces",
            instructions: "",
          },
          {
            title: "canola oil, divided",
            summary: "canola oil, divided",
            quantity: 1 / 4,
            unit: "cup",
            instructions: "",
          },
          {
            title: "chopped red onion",
            summary: "chopped red onion",
            quantity: 2,
            unit: "cups",
            instructions: "",
          },
          {
            title: "garlic cloves, peeled and smashed",
            summary: "garlic cloves, peeled and smashed",
            quantity: 4,
            unit: "medium",
            instructions: "",
          },
          {
            title: "tomato paste",
            summary: "tomato paste",
            quantity: 2,
            unit: "tablespoons",
            instructions: "",
          },
          {
            title: "dry red wine",
            summary: "dry red wine",
            quantity: 3 / 4,
            unit: "cup",
            instructions: "",
          },
          {
            title: "ketchup",
            summary: "ketchup",
            quantity: 1 / 2,
            unit: "cup",
            instructions: "",
          },
          {
            title: "melted unsalted butter",
            summary: "melted unsalted butter",
            quantity: 1 / 4,
            unit: "cup",
            instructions: "",
          },
          {
            title: "sherry vinegar",
            summary: "sherry vinegar",
            quantity: 1,
            unit: "tablespoon",
            instructions: "",
          },
          {
            title: "cayenne pepper or hot sauce, as desired (Optional)",
            summary: "cayenne pepper or hot sauce, as desired (Optional)",
            quantity: 1 / 2,
            unit: "teaspoon",
            instructions: "",
          },
        ],
        nutrition: {
          fat: "104g",
          carbs: "11g",
          protein: "59g",
          calories: "1239",
        },
        instructions:
          "Prepare a thermocirculator and water bath according to manufacturer's directions. Set thermocirculator to 128 degrees F (53 degrees C) and allow water bath to come up to temperature." +
          "\nWhile water heats, trim excess fat from the fat cap of the brisket to about 1/4 inch. Do not remove all the fat, as this will contribute to keeping the meat juicy. Pat brisket dry with a paper towel." +
          "\nCombine salt, onion powder, garlic powder, smoked paprika and pepper in a small bowl. Completely cover all sides of the brisket with the spice mixture." +
          "\nPlace the brisket in a large vacuum sealable bag. Seal bag according to manufacturer's directions. Transfer vacuum sealed brisket to warm water bath with thermocirculator, cover vessel with aluminum foil to reduce evaporation, and cook undisturbed for 48 hours. Remove brisket from bag, reserving cooking liquid (you should have about 3 ½ cups cooking liquid). Strain cooking liquid through a fine mesh sieve and discard any solids. Set brisket aside on a plate or cutting board." +
          "\nPlace dried ancho chiles in a large, dry saucepan over medium high heat. Cook, turning often, until chiles are blistered, and aromatic. Remove chiles from heat and allow to cool briefly. Once chiles have cooled enough to handle, remove stems and seeds, and tear chiles into 2-inch pieces. Place torn chiles in a medium bowl with 1 cup of boiling water and 2 cups of strained, reserved cooking liquid; allow to stand until chiles have softened, about 10 minutes." +
          "\nMeanwhile, heat 2 tablespoons canola oil in the same saucepan over medium-high heat. Add onions and smashed garlic cloves; cook, stirring often, until onions and garlic have softened, about 5 minutes. Add tomato paste and cook, stirring often, for 1 minute. Add red wine and allow mixture to reduce until most of the liquid excep tfor about 1/4 cup has evaporated, stirring occasionally. Remove from heat." +
          "\nRemove softened chiles from liquid, and strain liquid through a fine mesh sieve, reserving 1/2 cup of the strained liquid. Combine softened chiles, 1/2 cup reserved liquid, onion mixture, and ketchup in a blender; blend until smooth. Add unsalted butter and sherry vinegar to the mixture and process until smooth. If you want a spicier sauce, add cayenne pepper or hot sauce to taste." +
          "\nPreheat a grill or grill pan to medium high (350 degrees F to 400 degrees F / 175 degrees C to 200 degrees C)." +
          "\nPat brisket dry with paper towels and rub with remaining 2 tablespoons oil. Place on the preheated grill and grill until grill marks appear, the outside is slightly charred, and the brisket is heated through, about 5 minutes per side." +
          "\nTransfer brisket to a cutting board, let stand for 5 minutes to rest, and slice thinly against the grain of the meat and serve hot with sauce." +
          "",
        content:
          "Perfectly tender, melt in your mouth brisket, with a gentle smokiness and a sauce that is full of ancho chili flavor and well balanced smoky, earthy, sweet, and spicy flavors.",
      },
    },
  ];
  
  db.menuitems.insertMany(mainMenuMeals);
  console.log(`${mainMenuMeals.length()} menuitems inserted`)
}

