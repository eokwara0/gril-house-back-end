import { getUserId } from "../menu_script/menu_script.js";
import { getId } from "./main_menu_script.js";

export async function addStarterMenuItems() {
    const id = (await getId('Starters'))['_id'].toString();
  const userId = (await getUserId())['_id'].toString();

    const starterMenu = [
        {
          menuId: id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/starter/cap.webp",
          item: {
            title: "Chicken AI Pastor",
            summary: "Chicken AI Pastor",
            cooking: true,
            price: 183,
            quantity: 234,
            unit: "servings",
            prep: "15min",
            recipe: [
              {
                title: "guajillo chiles, stemmed and seeded",
                summary: "guajillo chiles, stemmed and seeded",
                quantity: 4,
                unit: "dried",
                instructions: "",
              },
              {
                title: "achiote paste",
                summary: "achiote paste",
                quantity: 2,
                unit: "tablespoons",
                instructions: "",
              },
              {
                title: "cloves garlic, peeled",
                summary: "cloves garlic, peeled",
                quantity: 6,
                unit: "large",
                instructions: "",
              },
              {
                title: "can chipotle peppers in adobo sauce, drained",
                summary: "can chipotle peppers in adobo sauce, drained",
                quantity: 1,
                unit: "(7ounce)",
                instructions: "",
              },
              {
                title: "finely chopped onion, divided",
                summary: "finely chopped onion, divided",
                quantity: 4 / 3,
                unit: "cups",
                instructions: "",
              },
              {
                title: "orange juice",
                summary: "orange juice",
                quantity: 2 / 3,
                unit: "cup",
                instructions: "",
              },
              {
                title: "apple cider vinegar",
                summary: "apple cider vinegar",
                quantity: 3,
                unit: "tablespoons",
                instructions: "",
              },
              {
                title: "olive oil",
                summary: "olive oil",
                quantity: 3,
                unit: "tablespoons",
                instructions: "",
              },
              {
                title: "ground cumin",
                summary: "ground cumin",
                quantity: 1,
                unit: "tablespoon",
                instructions: "",
              },
              {
                title: "light brown sugar1 teaspoon kosher salt",
                summary: "light brown sugar1 teaspoon kosher salt",
                quantity: 1,
                unit: "tablespoon",
                instructions: "",
              },
              {
                title: "skinless, boneless chicken thighs, cut in half",
                summary: "skinless, boneless chicken thighs, cut in half",
                quantity: 3,
                unit: "pounds",
                instructions: "",
              },
              {
                title:
                  "jumbo wooden skewers1 large fresh pineapple - peeled, cored, and sliced",
                summary:
                  "jumbo wooden skewers1 large fresh pineapple - peeled, cored, and sliced",
                quantity: 8,
                unit: "(12-inch)",
                instructions: "",
              },
              {
                title: "corn tortillas",
                summary: "corn tortillas",
                quantity: 20,
                unit: "(6inch)",
                instructions: "",
              },
              {
                title: "roughly chopped fresh cilantro",
                summary: "roughly chopped fresh cilantro",
                quantity: 1,
                unit: "cup",
                instructions: "",
              },
            ],
            nutrition: { fat: "10g", carbs: "31g", protein: "28g", calories: "324" },
            instructions:
              "Heat a skillet over medium-high heat. Add dried chiles; cook, turning occasionally, until toasted and blistered in spots, 3 to 5 minutes. Add 1 cup water to just cover the chiles, and bring to a simmer over medium-high. Cover and cook, undisturbed, until softened, about 5 minutes. Drain well.\n" +
              "Combine chiles, achiote, garlic, chipotles, 2/3 cup onion, orange juice, vinegar, oil, cumin, brown sugar, and salt in a blender; process until smooth, about 30 seconds. Reserve 1/2 cup marinade, cover, and refrigerate until ready to use.\n" +
              "Place remaining marinade in a shallow dish or large resealable plastic bag, add chicken; toss to evenly coat. Cover chicken with plastic wrap, and refrigerate at least 8 hours or up to 24 hours.\n" +
              "Place wooden skewers in a shallow dish; cover with water by 1 inch. Let stand at room temperature while chicken marinates.\n" +
              "Preheat the oven to 400 degrees F (200 degrees C). Position oven rack 8 inches away from heating element. Line a small roasting pan or 13- x 9-inch baking dish with aluminum foil.\n" +
              "Thread 1 pineapple slice onto 2 skewers, being sure to pierce through the center core, (skewers will be about 1 inch apart), leaving a 1 1/2-inch space from end of skewer. Thread 5 to 6 pieces of marinated chicken, stacking on top of pineapple; thread 1 pineapple slice. Repeat process, ending with pineapple slice, until all chicken pieces and pineapple slices are used, making 4 stacks total. Brush with any remaining marinade from chicken.\n" +
              "Place stacked skewers in the prepared pan, resting skewer ends on edge of pan so that the chicken doesn't touch the bottom of the pan.\n" +
              "Bake in the preheated oven for 30 minutes. Flip skewers over, brush with reserved 1/2 cup marinade. Bake until chicken is no longer pink in the center and the juices run clear, about 30 minutes longer. An instant-read thermometer inserted into the center should read 160 degrees F (71 degrees C). Increase oven temperature to broil; broil until browned and crispy, 3 to 5 minutes. Flip, and broil until browned and crispy, 3 to 5 minutes.\n" +
              "Meanwhile, heat a large skillet over high heat. Working two at a time, add tortillas; cook, turning once, until heated and browning in some spots, 1 to 2 minutes per side. Repeat with remaining tortillas.\n" +
              "Remove chicken and pineapple from skewers, place on cutting board, roughly chop.\n" +
              "Divide chicken and pineapple between heated tortillas; top with remaining onion and cilantro.",
            content:
              "This chicken al pastor features almost-charred pineapple and toasty spicy chicken that is incredibly tender and juicy! Serve with of white onion and fresh cilantro.",
          },
        },
        {
          menuId: id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/starter/rgf.webp",
          item: {
            title: "Roasted Grape Flatbread",
            summary: "Roasted Grape Flatbread",
            cooking: true,
            price: 183,
            quantity: 234,
            unit: "servings",
            prep: "10min",
            recipe: [
              {
                title: " refrigerated pizza dough Or use a 7-oz. purchased",
                summary: " refrigerated pizza dough Or use a 7-oz. purchased",
                quantity: 1,
                unit: "(8-oz.)",
                instructions: "",
              },
              {
                title: "seedless red grapes",
                summary: "seedless red grapes",
                quantity: 4,
                unit: "cups",
                instructions: "",
              },
              {
                title: "plus 2 teaspoons olive oil",
                summary: "plus 2 teaspoons olive oil",
                quantity: 1,
                unit: "tablespoon",
                instructions: "",
              },
              {
                title: "chopped fresh rosemary",
                summary: "chopped fresh rosemary",
                quantity: 1,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "plus 1/8 teaspoon salt",
                summary: "plus 1/8 teaspoon salt",
                quantity: 1 / 4,
                unit: "teaspooon",
                instructions: "",
              },
              {
                title: "ricotta cheese",
                summary: "ricotta cheese",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "shredded mozzarella cheese",
                summary: "shredded mozzarella cheese",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "chopped fresh parsley",
                summary: "chopped fresh parsley",
                quantity: 1 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "black pepper",
                summary: "black pepper",
                quantity: 1 / 4,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "white wine vinegar",
                summary: "white wine vinegar",
                quantity: 1,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "watercress and/or arugula",
                summary: "watercress and/or arugula",
                quantity: 2,
                unit: "cups",
                instructions: "",
              },
            ],
            nutrition: { fat: "13g", carbs: "56g", protein: "11g", calories: "377" },
            instructions:
              "Preheat the oven to 425 degrees F (220 degrees C). Grease a baking sheet. Unroll pizza dough onto prepared baking sheet. Bake for 6 minutes.\n" +
              "Line a 10x15-inch baking pan with foil. Arrange grapes in prepared baking pan. Drizzle with 1 tablespoon oil and sprinkle with 1/2 teaspoon rosemary and 1/4 teaspoon salt; toss to coat.\n" +
              "Roast grapes, stirring once halfway through, until slightly charred, about 40 minutes. Remove grapes from baking pan; pour accumulated juices into a small bowl.\n" +
              "Meanwhile, stir together ricotta, mozzarella, parsley, pepper, and remaining 1/2 teaspoon rosemary in a small bowl.\n" +
              "Spread ricotta mixture onto the parbaked crust. Top with roasted grapes. Bake until cheese is lightly golden, about 10 minutes.\n" +
              "Meanwhile, for dressing, whisk together reserved grape-roasting juices, vinegar, and remaining 2 teaspoons oil and 1/8 teaspoon salt in a bowl. Toss watercress with dressing. Top flatbread with dressed greens.",
            content:
              "Pizza dough or a flatbread are topped with ricotta, mozzarella, and roasted grapes and baked in the oven - a delicious appetizer or side.",
          },
        },
        {
          menuId: id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/starter/cspp.webp",
          item: {
            title: "Chicken-Stuffed poblano",
            summary: "Chicken-Stuffed poblano peppers",
            cooking: true,
            price: 125,
            quantity: 89,
            unit: "servings",
            prep: "20min",
            recipe: [
              {
                title: "pepper, halved and seeded",
                summary: "pepper, halved and seeded",
                quantity: 4,
                unit: "poblano",
                instructions: "",
              },
              {
                title: "olive oil, divided",
                summary: "olive oil, divided",
                quantity: 3,
                unit: "tablespoons",
                instructions: "",
              },
              {
                title: "kosher salt, divided",
                summary: "kosher salt, divided",
                quantity: 1,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "finely chopped yellow onion",
                summary: "finely chopped yellow onion",
                quantity: 13 / 2,
                unit: "cups",
                instructions: "",
              },
              {
                title: "cloves garlic, finely chopped",
                summary: "cloves garlic, finely chopped",
                quantity: 5,
                unit: "medium",
                instructions: "",
              },
              {
                title: "ground cumin",
                summary: "ground cumin",
                quantity: 1,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "smoked paprika",
                summary: "smoked paprika",
                quantity: 1 / 2,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "can diced tomatoes with green chiles (such as RO*TEL)",
                summary: "can diced tomatoes with green chiles (such as RO*TEL)",
                quantity: 1,
                unit: "(10ounce)",
                instructions: "",
              },
              {
                title: "can black beans, drained and rinsed",
                summary: "can black beans, drained and rinsed",
                quantity: 1,
                unit: "(15ounce)",
                instructions: "",
              },
              {
                title: "cream cheese, cut into cubes",
                summary: "cream cheese, cut into cubes",
                quantity: 4,
                unit: "ounces",
                instructions: "",
              },
              {
                title: "shredded cooked chicken",
                summary: "shredded cooked chicken",
                quantity: 3,
                unit: "cups",
                instructions: "",
              },
              {
                title: "shredded pepper jack cheese, divided",
                summary: "shredded pepper jack cheese, divided",
                quantity: 3 / 2,
                unit: "cups",
                instructions: "",
              },
              {
                title: "shredded sharp white Cheddar cheese, divided",
                summary: "shredded sharp white Cheddar cheese, divided",
                quantity: 3 / 2,
                unit: "cups",
                instructions: "",
              },
              {
                title: "corn chips",
                summary: "corn chips",
                quantity: 1 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "chopped fresh cilantro lime wedges for serving",
                summary: "chopped fresh cilantro lime wedges for serving",
                quantity: 2,
                unit: "tablespoons",
                instructions: "",
              },
            ],
            nutrition: { fat: "69g", carbs: "31g", protein: "58g", calories: "971" },
            instructions:
              "Preheat the oven to 425 degrees F (220 degrees C). Position a rack in the center position of the oven and line a baking sheet with aluminum foil.\n" +
              "Place halved peppers, cut-side down, on the prepared baking sheet (leave stems on) and drizzle evenly with 1 tablespoon olive oil. Season inside and outside of peppers with 1/2 teaspoon salt.\n" +
              "Bake in the preheated oven until peppers are almost tender and starting to brown, about 15 minutes.\n" +
              "Meanwhile, heat remaining 2 tablespoons olive oil in a large skillet over medium-high heat. Add onion and cook, stirring occasionally, until soft and translucent, about 6 minutes. Add garlic, cumin, and paprika, and cook, stirring constantly, until fragrant, about 1 minute. Add tomatoes and cook, stirring occasionally, until most of the liquid has evaporated, about 4 minutes. Add beans and stir until heated through, about 1 minute.\n" +
              "Remove onion mixture from heat. Add cream cheese and stir until melted, about 2 minutes. Stir in chicken, 1/2 cup each pepper jack and white Cheddar, and season with remaining 1/2 teaspoon salt.\n" +
              "Spoon about 1/2 to 2/3 cup chicken mixture into each pepper half (depending on size of the pepper). Mix together corn chips and remaining 1 cup each pepper jack and white Cheddar in a small bowl. Top peppers evenly with cheese-chip mixture (it's okay if cheese spills onto the baking sheet).\n" +
              "Bake until the cheese has melted and peppers are tender, about 8 minutes. Without removing peppers, turn oven to broil and broil until cheese is starting to brown in spots, about 3 minutes.\n" +
              "Remove from oven and let cool slightly, about 5 minutes. Place 2 stuffed peppers and any cheese that has melted onto the baking sheet, onto each of 4 serving plates and garnish with cilantro. Serve with lime wedges.",
            content:
              "Smoky/earth poblanos do have a mild kick, and act as a tender yet sturdy base for this cheesy chicken filling. The beans and tomatoes bulk it up with more texture and flavor. The sharp cheddar adds a nice tang while the pepper jack is melty and spicy. The corn chips on top add a crunch and extra hit of salty sweetness.",
          },
        },
        {
          menuId: id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/starter/bbf.webp",
          item: {
            title: "Baked Buffalo Wings",
            summary: "Baked Buffalo Wings",
            cooking: false,
            price: 79,
            quantity: 349,
            unit: "servings",
            prep: "15min",
            recipe: [
              {
                title: "all-purpose flour",
                summary: "all-purpose flour",
                quantity: 3 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "cayenne pepper",
                summary: "cayenne pepper",
                quantity: 1 / 2,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "garlic powder",
                summary: "garlic powder",
                quantity: 1 / 2,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "salt",
                summary: "salt",
                quantity: 1 / 2,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "wings",
                summary: "wings",
                quantity: 20,
                unit: "chicken",
                instructions: "",
              },
              {
                title: "melted butter",
                summary: "melted butter",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "hot pepper sauce",
                summary: "hot pepper sauce",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
            ],
            nutrition: { fat: "9g", carbs: "4g", protein: "7g", calories: "125" },
            instructions:
              "Line a baking sheet with aluminum foil, and lightly grease with cooking spray.\n" +
              "Place flour, cayenne pepper, garlic powder, and salt into a resealable plastic bag, and shake to mix. Add chicken wings, seal the bag, and toss until well coated with the flour mixture\n" +
              "Transfer wings to the prepared baking sheet and refrigerate for at least 1 hour.\n" +
              "Preheat the oven to 400 degrees F (200 degrees C).\n" +
              "While the oven is preheating, whisk together melted butter and hot sauce in a small bowl.\n" +
              "Dip wings into butter mixture, and place back on the baking sheet.\n" +
              "Bake in the preheated oven for 20 minutes. Flip wings and continue to cook until crispy on the outside and no longer pink in the center, about 25 more minutes.",
            content:
              "These baked Buffalo wings are crispy without being fried. They take only 10 minutes to prep, but need to be refrigerated for about an hour so the flour coating is firm. You can add more cayenne or hot sauce if you like them spicier!",
          },
        },
        {
          menuId: id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/starter/afvs.webp",
          item: {
            title: "Air-Fryer Veggie Sticks",
            summary: "Air-Fryer Veggie Sticks",
            cooking: false,
            price: 79,
            quantity: 349,
            unit: "servings",
            prep: "15min",
            recipe: [
              {
                title:
                  "assorted root vegetables (carrots, parsnips, beets, onions, and or",
                summary:
                  "assorted root vegetables (carrots, parsnips, beets, onions, and or",
                quantity: 1,
                unit: "pound",
                instructions: "",
              },
              {
                title: "olive oil",
                summary: "olive oil",
                quantity: 1,
                unit: "tablespoon",
                instructions: "",
              },
              {
                title: "seasoning blend",
                summary: "seasoning blend",
                quantity: 1,
                unit: "teaspoon",
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
                title: "freshly ground black pepper",
                summary: "freshly ground black pepper",
                quantity: 1 / 4,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "plain Greek-style yogurt",
                summary: "plain Greek-style yogurt",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "lemon zest",
                summary: "lemon zest",
                quantity: 1,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "lemon juice",
                summary: "lemon juice",
                quantity: 1,
                unit: "tablespoon",
                instructions: "",
              },
              {
                title: "chopped fresh herbs",
                summary: "chopped fresh herbs",
                quantity: 1,
                unit: "tablespoon",
                instructions: "",
              },
              {
                title: "salt",
                summary: "salt",
                quantity: 1 / 8,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "freshly ground black pepper",
                summary: "freshly ground black pepper",
                quantity: 1 / 8,
                unit: "teaspoon",
                instructions: "",
              },
            ],
            nutrition: { fat: "6g", carbs: "8g", protein: "3g", calories: "97" },
            instructions:
              "Preheat an air fryer to 400 degrees F (200 degrees C). Add root vegetables to a large bowl and toss with oil, seasoning, 1/4 teaspoon salt, and 1/4 teaspoon pepper.\n" +
              "Working in batches as needed, spread out sticks in the air-fryer basket.\n" +
              "Air-fry, turning or stirring halfway through, until sticks are tender and golden, about 18 minutes.\n" +
              "Stir together yogurt, citrus zest, citrus juice, herbs, 1/8 teaspoon salt, and 1/8 teaspoon pepper in a small bowl for the dip. Serve dip with veggie sticks.",
            content:
              "For a less-indulgent take on French fries, try these air-fried veggie sticks. Toss root vegetables with your choice of seasoning blends, then air-fry and serve with a citrus-herb dip. ",
          },
        },
    ];
    
    db.menuitems.insertMany(starterMenu);
    console.log(`${starterMenu.length()} menuitems inserted`)
}
  
