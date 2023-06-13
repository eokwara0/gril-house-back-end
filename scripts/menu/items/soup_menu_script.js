import { getUserId } from "../menu_script/menu_script.js";
import { getId } from "./main_menu_script.js";

export async function addSoupItems() {
    const id = (await getId('Soups'))['_id'].toString();
  const userId = (await getUserId())['_id'].toString();

    const soups = [
        {
          menuId:id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/soup/nbf.webp",
          item: {
            title: "Noodle Bowl Formula",
            summary: "Noodle Bowl Formula",
            cooking: true,
            price: 30,
            quantity: 132,
            unit: "servings",
            prep: "15min",
            recipe: [
              {
                title: "low-sodium broth (any type of",
                summary: "low-sodium broth (any type of",
                quantity: 3,
                unit: "cups",
                instructions: "",
              },
              {
                title: "mixed fresh vegetables",
                summary: "mixed fresh vegetables",
                quantity: 1,
                unit: "cup",
                instructions: "",
              },
              {
                title: "cooked protein (any type of",
                summary: "cooked protein (any type of",
                quantity: 6,
                unit: "ounces",
                instructions: "",
              },
              {
                title: "package ramen noodles (without flavor",
                summary: "package ramen noodles (without flavor",
                quantity: 1,
                unit: "(3ounce)",
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
              {
                title: "sauce of choice garnish of",
                summary: "sauce of choice garnish of",
                quantity: 1,
                unit: "teaspoon",
                instructions: "",
              },
            ],
            nutrition: { fat: "12g", carbs: "34g", protein: "34g", calories: "384" },
            instructions:
              "Bring broth to a boil in a small saucepan. Reduce heat.\n" +
              "Reduce heat. Add vegetables, protein, and noodles. Simmer, stirring occasionally, until ramen noodles are tender and ingredients are heated through, 3 to 5 minutes.\n" +
              "Season with salt and black pepper. Top with sauce and sprinkle with garnish.",
            content:
              "This is a basic noodle bowl recipe where you can substitute any type of broth, vegetable, protein, or sauce to your own taste. Different specific variations can be found in the footnotes.",
          },
        },
        {
          menuId:id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/soup/cts.webp",
          item: {
            title: "Chicken Tortilla Soup",
            summary: "Chicken Tortilla Soup",
            cooking: true,
            price: 40,
            quantity: 132,
            unit: "servings",
            prep: "25min",
            recipe: [
              {
                title: "olive oil",
                summary: "olive oil",
                quantity: 1,
                unit: "tablespoon",
                instructions: "",
              },
              {
                title: "onion, chopped",
                summary: "onion, chopped",
                quantity: 1,
                unit: "medium",
                instructions: "",
              },
              {
                title: "garlic, minced",
                summary: "garlic, minced",
                quantity: 3,
                unit: "cloves",
                instructions: "",
              },
              {
                title: "can crushed tomatoes",
                summary: "can crushed tomatoes",
                quantity: 1,
                unit: "(28ounce)",
                instructions: "",
              },
              {
                title: "can condensed chicken broth",
                summary: "can condensed chicken broth",
                quantity: 1,
                unit: "(10.5ounce)",
                instructions: "",
              },
              {
                title: "water",
                summary: "water",
                quantity: 5 / 4,
                unit: "cups",
                instructions: "",
              },
              {
                title: "chili powder",
                summary: "chili powder",
                quantity: 2,
                unit: "teaspoons",
                instructions: "",
              },
              {
                title: "dried oregano",
                summary: "dried oregano",
                quantity: 1,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "can black beans, rinsed and drained",
                summary: "can black beans, rinsed and drained",
                quantity: 1,
                unit: "(15ounce)",
                instructions: "",
              },
              {
                title:
                  "boneless chicken breast halves, cooked and cut into bite-sized pieces",
                summary:
                  "boneless chicken breast halves, cooked and cut into bite-sized pieces",
                quantity: 2,
                unit: "large",
                instructions: "",
              },
              {
                title: "whole corn kernels, cooked",
                summary: "whole corn kernels, cooked",
                quantity: 1,
                unit: "cup",
                instructions: "",
              },
              {
                title: "white hominy",
                summary: "white hominy",
                quantity: 1,
                unit: "cup",
                instructions: "",
              },
              {
                title: "can chopped green chile peppers",
                summary: "can chopped green chile peppers",
                quantity: 1,
                unit: "(4ounce)",
                instructions: "",
              },
              {
                title: "chopped fresh cilantro",
                summary: "chopped fresh cilantro",
                quantity: 1 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "crushed tortilla chips, or to taste",
                summary: "crushed tortilla chips, or to taste",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "avocados, sliced, or to taste",
                summary: "avocados, sliced, or to taste",
                quantity: 2,
                unit: "medium",
                instructions: "",
              },
              {
                title: "shredded Monterey Jack cheese, or to taste",
                summary: "shredded Monterey Jack cheese, or to taste",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "chopped green onions, or to taste",
                summary: "chopped green onions, or to taste",
                quantity: 2,
                unit: "tablespoons",
                instructions: "",
              },
            ],
            nutrition: { fat: "17g", carbs: "29g", protein: "26g", calories: "363" },
            instructions:
              "Gather all ingredients.\n" +
              "Heat oil in a stockpot over medium heat. Add onion and garlic; saute until soft, about 5 minutes. Stir in chili powder and oregano.\n" +
              "Stir in crushed tomatoes, condensed broth, and water; bring to a boil. Reduce heat and simmer for 5 to 10 minutes.\n" +
              "Stir in black beans, cooked chicken, corn, hominy, chile peppers, and cilantro. Simmer for 10 minutes.\n" +
              "Ladle soup into individual serving bowls, and top with crushed tortilla chips, avocado slices, Monterey Jack cheese, and green onions",
            content:
              "This chicken tortilla soup with shredded chicken, black beans, and corn is quick to make, full of flavor, and very filling! It's garnished with chopped fresh avocado, Monterey Jack cheese, crushed tortilla chips, and green onion. This soup freezes well.",
          },
        },
        {
          menuId:id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/soup/bbs.webp",
          item: {
            title: "Beef Barley Vegetable Soup",
            summary: "Beef Barley Vegetable Soup",
            cooking: true,
            price: 47.99,
            quantity: 132,
            unit: "servings",
            prep: "30min",
            recipe: [
              {
                title: "beef chuck roast",
                summary: "beef chuck roast",
                quantity: 1,
                unit: "(3 pound)",
                instructions: "",
              },
              {
                title: "barley",
                summary: "barley",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "leaf",
                summary: "leaf",
                quantity: 1,
                unit: "bay",
                instructions: "",
              },
              {
                title: "oil",
                summary: "oil",
                quantity: 2,
                unit: "tablespoons",
                instructions: "",
              },
              {
                title: "chopped",
                summary: "chopped",
                quantity: 3,
                unit: "carrots,",
                instructions: "",
              },
              {
                title: "celery, chopped",
                summary: "celery, chopped",
                quantity: 3,
                unit: "stalks",
                instructions: "",
              },
              {
                title: "chopped",
                summary: "chopped",
                quantity: 1,
                unit: "onion,",
                instructions: "",
              },
              {
                title: "package frozen mixed vegetables",
                summary: "package frozen mixed vegetables",
                quantity: 1,
                unit: "(16 ounce)",
                instructions: "",
              },
              {
                title: "water",
                summary: "water",
                quantity: 4,
                unit: "cups",
                instructions: "",
              },
              {
                title: "can chopped stewed tomatoes",
                summary: "can chopped stewed tomatoes",
                quantity: 1,
                unit: "(28 ounce)",
                instructions: "",
              },
              {
                title: "beef bouillon cube",
                summary: "beef bouillon cube",
                quantity: 4,
                unit: "cubes",
                instructions: "",
              },
              {
                title: "white sugar",
                summary: "white sugar",
                quantity: 1,
                unit: "tablespoon",
                instructions: "",
              },
              {
                title: "ground black pepper, or more to taste salt to taste",
                summary: "ground black pepper, or more to taste salt to taste",
                quantity: 1 / 4,
                unit: "teaspoon",
                instructions: "",
              },
            ],
            nutrition: { fat: "17g", carbs: "22g", protein: "20g", calories: "321" },
            instructions:
              "Place chuck roast in a slow cooker. Cook on High until tender, 4 to 5 hours. Add barley and bay leaf during the last hour of cooking.\n" +
              "Remove meat; chop into bite-size pieces. Discard bay leaf. Set beef, broth, and barley aside.\n" +
              "Heat oil in a large stock pot over medium-high heat. Sauté carrots, celery, onion, and frozen mixed vegetables until tender, 5 to 7 minutes.\n" +
              "Add water, stewed tomatoes, beef bouillon cubes, sugar, 1/4 teaspoon pepper, and beef-barley-broth mixture. Bring to boil, reduce heat, and simmer 10 to 20 minutes\n" +
              "Season with salt and pepper before serving.",
            content:
              "Make beef barley soup in the slow cooker for an easy, filling meal. Serve with hearty bread, and enjoy.",
          },
        },
        {
          menuId:id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/soup/cms.webp",
          item: {
            title: "Chicken Minestrone Soup",
            summary: "Chicken Minestrone Soup",
            cooking: true,
            price: 39.99,
            quantity: 132,
            unit: "servings",
            prep: "20min",
            recipe: [
              {
                title: "olive oil, divided",
                summary: "olive oil, divided",
                quantity: 4,
                unit: "tablespoons",
                instructions: "",
              },
              {
                title:
                  "skinless, boneless chicken breast, cut into bite-sized pieces",
                summary:
                  "skinless, boneless chicken breast, cut into bite-sized pieces",
                quantity: 1 / 2,
                unit: "pound",
                instructions: "",
              },
              {
                title: "chopped onion",
                summary: "chopped onion",
                quantity: 1,
                unit: "cup",
                instructions: "",
              },
              {
                title: "garlic, minced",
                summary: "garlic, minced",
                quantity: 2,
                unit: "cloves",
                instructions: "",
              },
              {
                title: "sliced carrot",
                summary: "sliced carrot",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "chopped celery",
                summary: "chopped celery",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "chicken stock",
                summary: "chicken stock",
                quantity: 5,
                unit: "cups",
                instructions: "",
              },
              {
                title: "can diced tomatoes with basil, garlic, and oregano",
                summary: "can diced tomatoes with basil, garlic, and oregano",
                quantity: 1,
                unit: "(14.5 ounce)",
                instructions: "",
              },
              {
                title: "can cannellini beans, drained and rinsed",
                summary: "can cannellini beans, drained and rinsed",
                quantity: 1,
                unit: "(15.5 ounce)",
                instructions: "",
              },
              {
                title: "can kidney beans, drained and rinsed",
                summary: "can kidney beans, drained and rinsed",
                quantity: 1,
                unit: "(15.5 ounce)",
                instructions: "",
              },
              {
                title: "can tomato paste",
                summary: "can tomato paste",
                quantity: 1 / 2,
                unit: "(6 ounce)",
                instructions: "",
              },
              {
                title: "zucchini, quartered lengthwise and cut into 1/2 inch slices",
                summary:
                  "zucchini, quartered lengthwise and cut into 1/2 inch slices",
                quantity: 1,
                unit: "small",
                instructions: "",
              },
              {
                title: "frozen cut green beans",
                summary: "frozen cut green beans",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "Italian seasoning",
                summary: "Italian seasoning",
                quantity: 1,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "ditalini pasta salt and freshly ground black pepper to taste",
                summary:
                  "ditalini pasta salt and freshly ground black pepper to taste",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "grated Parmesan cheese, or more to taste (Optional)",
                summary: "grated Parmesan cheese, or more to taste (Optional)",
                quantity: 1 / 3,
                unit: "cup",
                instructions: "",
              },
              {
                title: "chopped fresh parsley",
                summary: "chopped fresh parsley",
                quantity: 2,
                unit: "teaspoons",
                instructions: "",
              },
            ],
            nutrition: { fat: "8g", carbs: "33g", protein: "15g", calories: "260" },
            instructions:
              "Heat 2 tablespoons olive oil in a large pot over medium heat. Add chicken to pot, and sauté just until lightly browned, about 3 minutes. Remove chicken from pot; set aside.\n" +
              "Heat remaining 2 tablespoons olive oil in the pot; add onions and cook until translucent, about 3 minutes. Stir in garlic; cook until fragrant, about 30 seconds. Add carrots and celery; cook for 5 minutes, stirring occasionally.\n" +
              "Reduce heat to medium-low; stir in chicken stock, diced tomatoes, cannellini beans, kidney beans, tomato paste, zucchini, green beans, Italian seasoning. Simmer, covered, for 15 minutes.\n" +
              "Stir in chicken and ditalini pasta, and cook until pasta is tender yet firm to the bite, about 8 minutes. Season to taste with salt and black pepper. If soup is too thick, add a little water or stock. Garnish each bowl with Parmesan and parsley.",
            content:
              "Take a classic minestrone soup full of fresh, wholesome vegetables, and add an additional layer of flavor with tender, juicy chicken.",
          },
        },
        {
          menuId:id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/soup/pfs.webp",
          item: {
            title: "Pasta Fagioli",
            summary: "Pasta Fagioli",
            cooking: true,
            price: 76.99,
            quantity: 132,
            unit: "servings",
            prep: "20min",
            recipe: [
              {
                title: "lean ground beef",
                summary: "lean ground beef",
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
                title: "slice onion, diced",
                summary: "slice onion, diced",
                quantity: 1,
                unit: "thin",
                instructions: "",
              },
              {
                title: "celery, diced",
                summary: "celery, diced",
                quantity: 1,
                unit: "stalk",
                instructions: "",
              },
              {
                title: "diced",
                summary: "diced",
                quantity: 1,
                unit: "carrot,",
                instructions: "",
              },
              {
                title: "minced garlic",
                summary: "minced garlic",
                quantity: 1,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "bottle tomato-vegetable juice cocktail (such as V8®)",
                summary: "bottle tomato-vegetable juice cocktail (such as V8®)",
                quantity: 1,
                unit: "(32 ounce)",
                instructions: "",
              },
              {
                title: "can chicken broth",
                summary: "can chicken broth",
                quantity: 1,
                unit: "(14 ounce)",
                instructions: "",
              },
              {
                title: "dried parsley",
                summary: "dried parsley",
                quantity: 1,
                unit: "tablespoon",
                instructions: "",
              },
              {
                title: "dried basil",
                summary: "dried basil",
                quantity: 1,
                unit: "tablespoon",
                instructions: "",
              },
              {
                title: "dried oregano freshly ground black pepper to taste",
                summary: "dried oregano freshly ground black pepper to taste",
                quantity: 1,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "ditalini pasta",
                summary: "ditalini pasta",
                quantity: 3 / 2,
                unit: "cups",
                instructions: "",
              },
              {
                title: "can cannellini beans, drained and rinsed",
                summary: "can cannellini beans, drained and rinsed",
                quantity: 1,
                unit: "(15 ounce)",
                instructions: "",
              },
            ],
            nutrition: { fat: "10g", carbs: "33g", protein: "18g", calories: "299" },
            instructions:
              "Heat a large skillet over medium-high heat. Cook and stir beef in the hot skillet until browned and crumbly, 5 to 7 minutes. Use a slotted spoon to transfer beef to a paper towel-lined plate to drain; discard grease.\n" +
              "Heat olive oil in the same skillet over medium-high heat; sauté onion, celery, and carrot until softened, 5 to 10 minutes. Add garlic and sauté until fragrant, 1 to 2 minutes. Stir vegetable juice cocktail, chicken broth, parsley, basil, oregano, and black pepper into vegetable mixture; bring to a boil. Reduce heat and simmer soup for 20 minutes.\n" +
              "Meanwhile, bring a large pot of lightly salted water to a boil. Cook ditalini pasta in boiling water, stirring occasionally, until tender yet firm to the bite, about 8 minutes. Drain and set aside.\n" +
              "Stir beef and cannellini beans into soup; cook and stir until soup is heated through, about 10 minutes.\n" +
              "Spoon about 1/3 cup pasta into each serving bowl; ladle soup over pasta.",
            content:
              "fagioli recipe features white cannellini beans, ditalini pasta with vegetables, lean hamburger, and herbs simmered in vegetable juice and chicken broth. It is similar to Italian chili, like Olive Garden's Pasta Fagioli, and even better on the second day.",
          },
        },
        {
          menuId:id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/soup/ces.webp",
          item: {
            title: "Chicken Enchilada Soup",
            summary: "Chicken Enchilada Soup",
            cooking: true,
            price: 54.99,
            quantity: 132,
            unit: "servings",
            prep: "45min",
            recipe: [
              {
                title: "vegetable oil",
                summary: "vegetable oil",
                quantity: 1,
                unit: "tablespoon",
                instructions: "",
              },
              {
                title: "skinless, boneless chicken breast halves",
                summary: "skinless, boneless chicken breast halves",
                quantity: 1,
                unit: "pound",
                instructions: "",
              },
              {
                title: "diced onion",
                summary: "diced onion",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "garlic, minced",
                summary: "garlic, minced",
                quantity: 1,
                unit: "clove",
                instructions: "",
              },
              {
                title: "chicken broth",
                summary: "chicken broth",
                quantity: 1,
                unit: "quart",
                instructions: "",
              },
              {
                title: "water",
                summary: "water",
                quantity: 3,
                unit: "cups",
                instructions: "",
              },
              {
                title: "masa harina",
                summary: "masa harina",
                quantity: 1,
                unit: "cup",
                instructions: "",
              },
              {
                title: "shredded Cheddar cheese",
                summary: "shredded Cheddar cheese",
                quantity: 2,
                unit: "cups",
                instructions: "",
              },
              {
                title: "enchilada sauce",
                summary: "enchilada sauce",
                quantity: 1,
                unit: "cup",
                instructions: "",
              },
              {
                title: "salt",
                summary: "salt",
                quantity: 1,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "chili powder",
                summary: "chili powder",
                quantity: 1,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "ground cumin",
                summary: "ground cumin",
                quantity: 1 / 2,
                unit: "teaspoon",
                instructions: "",
              },
            ],
            nutrition: { fat: "16g", carbs: "14g", protein: "22g", calories: "290" },
            instructions:
              "Heat oil in a large pot over medium heat. Cook chicken breasts in hot oil until well browned on all sides. Remove and set aside.\n" +
              "Cook and stir onion and garlic in drippings in the same pot until onions are translucent. Pour in chicken broth.\n" +
              "Whisk together 2 cups water and masa harina in a medium bowl until well blended; pour into the pot. Stir in Cheddar cheese, enchilada sauce, remaining 1 cup water, salt, chili powder, and cumin. Bring to a boil.\n" +
              "Shred cooked chicken and add it to the pot. Reduce heat and simmer until thickened, 30 to 40 minutes.",
            content:
              "This chicken enchilada soup is a copy of a favorite served at a local restaurant. My family loves it! Serve soup in bowls garnished with shredded Cheddar or Jack cheese and crumbled tortilla chips.",
          },
        },
        {
          menuId:id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/soup/cioppino.webp",
          item: {
            title: "Cioppino",
            summary: "Cioppino",
            cooking: true,
            price: 68.99,
            quantity: 275,
            unit: "servings",
            prep: "20min",
            recipe: [
              {
                title: "butter",
                summary: "butter",
                quantity: 3 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "chopped",
                summary: "chopped",
                quantity: 2,
                unit: "onions,",
                instructions: "",
              },
              {
                title: "fresh parsley, chopped",
                summary: "fresh parsley, chopped",
                quantity: 1,
                unit: "bunch",
                instructions: "",
              },
              {
                title: "garlic, minced",
                summary: "garlic, minced",
                quantity: 2,
                unit: "cloves",
                instructions: "",
              },
              {
                title: "cans stewed tomatoes",
                summary: "cans stewed tomatoes",
                quantity: 2,
                unit: "(14.5ounce)",
                instructions: "",
              },
              {
                title: "cans chicken broth",
                summary: "cans chicken broth",
                quantity: 2,
                unit: "(14.5ounce)",
                instructions: "",
              },
              {
                title: "white wine",
                summary: "white wine",
                quantity: 3 / 2,
                unit: "cups",
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
                title: "leaves",
                summary: "leaves",
                quantity: 2,
                unit: "bay",
                instructions: "",
              },
              {
                title: "dried basil",
                summary: "dried basil",
                quantity: 1,
                unit: "tablespoon",
                instructions: "",
              },
              {
                title: "dried thyme",
                summary: "dried thyme",
                quantity: 1 / 2,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "dried oregano",
                summary: "dried oregano",
                quantity: 1 / 2,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "cod fillets, cubed",
                summary: "cod fillets, cubed",
                quantity: 3 / 2,
                unit: "pounds",
                instructions: "",
              },
              {
                title: "large shrimp - peeled and deveined",
                summary: "large shrimp - peeled and deveined",
                quantity: 3 / 2,
                unit: "pounds",
                instructions: "",
              },
              {
                title: "bay scallops",
                summary: "bay scallops",
                quantity: 3 / 2,
                unit: "pounds",
                instructions: "",
              },
              {
                title: "clams",
                summary: "clams",
                quantity: 18,
                unit: "small",
                instructions: "",
              },
              {
                title: "cleaned and debearded",
                summary: "cleaned and debearded",
                quantity: 18,
                unit: "mussels,",
                instructions: "",
              },
              {
                title: "crabmeat",
                summary: "crabmeat",
                quantity: 3 / 2,
                unit: "cups",
                instructions: "",
              },
            ],
            nutrition: { fat: "13g", carbs: "9g", protein: "35g", calories: "318" },
            instructions:
              "Melt butter in a large stockpot over medium-low heat. Add onions, parsley, and garlic." +
              " \nCook and stir until onions are softened, 3 to 4 minutes.\n" +
              "Add tomatoes to the pot (break them into chunks as you add them)." +
              "\nStir in chicken broth, wine, water, bay leaves, basil, thyme, and oregano. Cover and simmer for 30 minutes." +
              "\nStir in cod, shrimp, scallops, clams, mussels, and crabmeat. Bring to boil; lower heat, cover, and simmer until clams open up, 5 to 7 minutes. Ladle soup into bowls and serve.",
            content:
              "This cioppino is a wonderful seafood stew! Serve with a loaf of warm, crusty bread for sopping up the delicious broth!",
          },
        },
        {
          menuId:id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/soup/egusi.webp",
          item: {
            title: "Egusi Soup",
            summary: "Egusi Soup",
            cooking: true,
            price: 54.99,
            quantity: 275,
            unit: "servings",
            prep: "50min",
            recipe: [
              {
                title: "pumpkin seeds",
                summary: "pumpkin seeds",
                quantity: 3 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "cubed beef stew meat salt to taste",
                summary: "cubed beef stew meat salt to taste",
                quantity: 3 / 2,
                unit: "pounds",
                instructions: "",
              },
              {
                title: "peanut oil",
                summary: "peanut oil",
                quantity: 1 / 2,
                unit: "cup",
                instructions: "",
              },
              {
                title: "tomatoes, chopped",
                summary: "tomatoes, chopped",
                quantity: 2,
                unit: "large",
                instructions: "",
              },
              {
                title: "onion, chopped",
                summary: "onion, chopped",
                quantity: 1,
                unit: "small",
                instructions: "",
              },
              {
                title: "peppers, seeded and minced",
                summary: "peppers, seeded and minced",
                quantity: 2,
                unit: "habanero",
                instructions: "",
              },
              {
                title: "fresh shrimp, peeled and deveined",
                summary: "fresh shrimp, peeled and deveined",
                quantity: 2,
                unit: "pounds",
                instructions: "",
              },
              {
                title: "tomato sauce",
                summary: "tomato sauce",
                quantity: 18,
                unit: "ounces",
                instructions: "",
              },
              {
                title: "water",
                summary: "water",
                quantity: 3 / 2,
                unit: "cups",
                instructions: "",
              },
              {
                title: "tomato paste",
                summary: "tomato paste",
                quantity: 3,
                unit: "tablespoons",
                instructions: "",
              },
              {
                title: "fresh spinach, washed and chopped",
                summary: "fresh spinach, washed and chopped",
                quantity: 1,
                unit: "pound",
                instructions: "",
              },
            ],
            nutrition: { fat: "51g", carbs: "17g", protein: "60g", calories: "758" },
            instructions:
              "Place pumpkin seeds in a blender; blend until mixture is powdery, 30 to 40 seconds. Set aside.\n" +
              "Cut beef into bite-sized cubes; season with salt.\n" +
              "Heat oil in a large pot over medium-high heat. Cook beef in hot oil until brown but not cooked through, 3 to 5 minutes.\n" +
              "Place tomatoes, onion, and peppers in a blender; blend until smooth, about 30 seconds. Stir tomato mixture into beef; reduce heat to medium-low and cover. Cook until meat is tender, 40 to 50 minutes.\n" +
              "Add shrimp, tomato sauce, water, and tomato paste; simmer for 10 minutes.\n" +
              "Stir in spinach and powdered pumpkin seeds. Continue simmering for 10 more minutes.",
            content:
              "Egusi soup is native to West Africa (Nigeria), and many of my American and Nigerian friends have enjoyed it. It is a great soup for those who like to try something different every once in a while. Ground Egusi seeds give this soup a unique color and flavor. If you can't find Egusi seeds, you can substitute pumpkin seeds. Any combination of crab, shrimp, and smoked fish can be used in place of the shrimp. Drained, smoked oysters and chicken can be used in place of the beef.",
          },
        },
        {
          menuId:id,
          userId: userId,
          active: true,
          imageUrl: "http://192.168.0.252:3000/items/soup/cramens.webp",
          item: {
            title: "Chicken Ramen Noodle Soup",
            summary: "Chicken Ramen Noodle Soup with Honey Sriracha Crackers",
            cooking: true,
            price: 78.99,
            quantity: 275,
            unit: "servings",
            prep: "20min",
            recipe: [
              {
                title: "olive oil",
                summary: "olive oil",
                quantity: 2,
                unit: "tablespoons",
                instructions: "",
              },
              {
                title: "thinly sliced carrot",
                summary: "thinly sliced carrot",
                quantity: 3 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "sliced celery",
                summary: "sliced celery",
                quantity: 3 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "chopped onion",
                summary: "chopped onion",
                quantity: 3 / 4,
                unit: "cup",
                instructions: "",
              },
              {
                title: "grated fresh ginger",
                summary: "grated fresh ginger",
                quantity: 1,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "garlic, minced",
                summary: "garlic, minced",
                quantity: 2,
                unit: "cloves",
                instructions: "",
              },
              {
                title: "low-sodium chicken broth",
                summary: "low-sodium chicken broth",
                quantity: 4,
                unit: "cups",
                instructions: "",
              },
              {
                title: "reduced-sodium soy sauce",
                summary: "reduced-sodium soy sauce",
                quantity: 1,
                unit: "tablespoon",
                instructions: "",
              },
              {
                title: "chopped fresh basil",
                summary: "chopped fresh basil",
                quantity: 2,
                unit: "teaspoons",
                instructions: "",
              },
              {
                title: "chopped fresh oregano",
                summary: "chopped fresh oregano",
                quantity: 2,
                unit: "teaspoons",
                instructions: "",
              },
              {
                title: "ground black pepper",
                summary: "ground black pepper",
                quantity: 1 / 4,
                unit: "teaspoon",
                instructions: "",
              },
              {
                title: "cubed cooked chicken",
                summary: "cubed cooked chicken",
                quantity: 2,
                unit: "cups",
                instructions: "",
              },
              {
                title: "ounce) packages ramen noodles with seasoning packet",
                summary: "ounce) packages ramen noodles with seasoning packet",
                quantity: 2,
                unit: "(3",
                instructions: "",
              },
              {
                title: "lime juice",
                summary: "lime juice",
                quantity: 1,
                unit: "tablespoon",
                instructions: "",
              },
              {
                title: "lime zest, or to taste",
                summary: "lime zest, or to taste",
                quantity: 1 / 4,
                unit: "teaspoon",
                instructions: "",
              },
            ],
            nutrition: { fat: "22g", carbs: "36g", protein: "25g", calories: "445" },
            instructions:
              "Heat oil in a Dutch oven over medium heat. Add carrot, celery, and onion. Cook until crisp-tender, about 5 minutes. Add ginger and garlic. Cook 1 minute more. Add broth, soy sauce, basil, oregano, and pepper. Bring to a boil. Reduce heat and simmer, covered, until carrots are just tender about 5 minutes.\n" +
              "Stir in cooked chicken and ramen noodles. Simmer, uncovered, until noodles are tender, 3 to 5 minutes. Stir in lime juice. Ladle soup into bowls. Sprinkle with lime zest and, if you like, additional basil and oregano leaves, and serve with Honey-Sriracha Crackers.\n" +
              "Honey-Sriracha Crackers:\n" +
              "Preheat the oven to 400 degrees F (200 degrees C). Line a 10x15-inch baking pan with foil.\n" +
              "Heat canola oil and butter in a large saucepan over medium heat until butter is melted, 1 to 2 minutes. Whisk in honey, Sriracha, and 1 1/2 teaspoons of the reserved ramen seasoning packet. Bring to a boil. Remove from heat and stir in oyster crackers. Toss together until evenly coated.\n" +
              "Transfer crackers to the prepared pan and spread to an even layer.\n" +
              "Bake in the preheated oven, stirring once, until light golden and crisp, 8 to 10 minutes. Remove from heat and cool completely (crackers will continue to crisp as they cool). Store crackers in an airtight container at room temperature up to 2 weeks.",
            content:
              "This comforting chicken ramen noodle soup is served with homemade honey Sriracha crackers for crunch and extra flavor.",
          },
        },
      ];
      
    
    db.menuitems.insertMany(soups);
    console.log(`${soups.length()} menuitems inserted`)
  }