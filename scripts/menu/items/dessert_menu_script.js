async function getUserId() {
  return await db.users.findOne({ username: 'codeX' });
}
async function getId( name ) {
  return await db.menus.findOne({ title: name });
}

async function addDessertMenuItems() {
    const id = (await getId('Desserts'))['_id'].toString();
    const userId = (await getUserId())['_id'].toString();

    
const dessertMenu = [
    {
      menuId: id,
      userId: userId,
      active: true,
      imageUrl: "http://192.168.0.252:3000/items/dessert/ttb.webp",
      item: {
        title: "TikTok Brownies",
        summary: "TikTok Brownies",
        cooking: false,
        price: 49,
        quantity: 123,
        unit: "servings",
        prep: "45 min",
        recipe: [
          {
            title: "unsalted butter, plus additional",
            summary: "unsalted butter, plus additional",
            quantity: 1 / 2,
            unit: "cup",
            instructions: "",
          },
          {
            title: "cocoa powder",
            summary: "cocoa powder",
            quantity: 1 / 3,
            unit: "cup",
            instructions: "",
          },
          {
            title: "granulated sugar",
            summary: "granulated sugar",
            quantity: 1,
            unit: "cup",
            instructions: "",
          },
          {
            title: "vanilla extract",
            summary: "vanilla extract",
            quantity: 2,
            unit: "teaspoons",
            instructions: "",
          },
          {
            title: "eggs",
            summary: "eggs",
            quantity: 2,
            unit: "large",
            instructions: "",
          },
          {
            title: "all-purpose flour",
            summary: "all-purpose flour",
            quantity: 1 / 2,
            unit: "cup",
            instructions: "",
          },
        ],
        nutrition: { fat: "7g", carbs: "17g", protein: "2g", calories: "128" },
        instructions:
          "Heat oven to 350 degrees F (175 degrees C). Coat an 8x8-inch metal baking dish with butter.\n" +
          "Melt butter in a large saucepan over low heat. Remove from heat and let cool for 5 minutes. Whisk in cocoa powder, sugar, and vanilla extract. Stir in eggs, 1 at a time until incorporated. Add flour and stir until just combined. Scrape mixture into the prepared pan and smooth the top.\n" +
          "Bake in the preheated oven until a toothpick inserted comes out clean, 20 to 25 minutes.\n" +
          "Remove from the oven and cool on a wire rack for at least 45 minutes before cutting.",
        content: "TikTok Brownies",
      },
    },
    {
      menuId: id,
      userId: userId,
      active: true,
      imageUrl: "http://192.168.0.252:3000/items/dessert/pcc.webp",
      item: {
        title: "Paleo Chocolate Cake",
        summary: "The Best Paleo Chocolate Cake with Paleo Chocolate Frosting",
        cooking: false,
        price: 60,
        quantity: 123,
        unit: "servings",
        prep: "30min",
        recipe: [
          {
            title: "can coconut cream",
            summary: "can coconut cream",
            quantity: 1,
            unit: "(14 ounce)",
            instructions: "",
          },
          {
            title: "dairy free chocolate chips pinch of salt nonstick spray",
            summary: "dairy free chocolate chips pinch of salt nonstick spray",
            quantity: 3 / 2,
            unit: "cups",
            instructions: "",
          },
          {
            title: "virgin coconut oil, melted and cooled",
            summary: "virgin coconut oil, melted and cooled",
            quantity: 3 / 4,
            unit: "cup",
            instructions: "",
          },
          {
            title: "coconut sugar",
            summary: "coconut sugar",
            quantity: 7 / 4,
            unit: "cups",
            instructions: "",
          },
          {
            title: "eggs,at room temperature",
            summary: "eggs,at room temperature",
            quantity: 4,
            unit: "large",
            instructions: "",
          },
          {
            title: "pure vanilla extract",
            summary: "pure vanilla extract",
            quantity: 1,
            unit: "tablespoon",
            instructions: "",
          },
          {
            title: "apple cider vinegar",
            summary: "apple cider vinegar",
            quantity: 1,
            unit: "tablespoon",
            instructions: "",
          },
          {
            title: "Almond Breeze Unsweetened Vanilla Almondmilk",
            summary: "Almond Breeze Unsweetened Vanilla Almondmilk",
            quantity: 1,
            unit: "cup",
            instructions: "",
          },
          {
            title: "Blue Diamond Almond Flour",
            summary: "Blue Diamond Almond Flour",
            quantity: 3,
            unit: "cups",
            instructions: "",
          },
          {
            title: "high-quality unsweetened cocoa powder",
            summary: "high-quality unsweetened cocoa powder",
            quantity: 3 / 4,
            unit: "cup",
            instructions: "",
          },
          {
            title: "coconut flour",
            summary: "coconut flour",
            quantity: 1 / 4,
            unit: "cup",
            instructions: "",
          },
          {
            title: "baking soda",
            summary: "baking soda",
            quantity: 2,
            unit: "teaspoons",
            instructions: "",
          },
          {
            title: "salt",
            summary: "salt",
            quantity: 1 / 2,
            unit: "teaspoon",
            instructions: "",
          },
        ],
        nutrition: { fat: "32g", carbs: "53g", protein: "8g", calories: "506" },
        instructions:
          "First begin by making your frosting: Add coconut cream, chocolate chips, and a pinch of salt to a small pot and place over low heat. Whisk until melted. Transfer to a bowl, cover with plastic wrap and place in the refrigerator to harden for 6 hours or until hard. Overnight is best!\n" +
          "Preheat the oven to 350 degrees F (175 degrees C). Line the bottom of 3 round cake pans with parchment paper rounds. Spray parchment paper and side of pan with nonstick cooking spray (otherwise cake is likely to stick).\n" +
          "In a large bowl, mix together melted and cooled coconut oil, coconut sugar, eggs, vanilla, and apple cider vinegar with an electric mixer until smooth. Add Almond Breeze Unsweetened Vanilla Almondmilk and beat once more until mixture is well incorporated.\n" +
          "In a separate bowl, whisk Blue Diamond Almond Flour, cocoa powder, coconut flour, baking soda, and 1/2 teaspoon salt together. Add the dry ingredients to the wet ingredients and mix well. Mixture will be on the thicker side. Divide batter evenly between pans and spread out with a spatula to smooth the tops.\n" +
          "Bake in the preheated oven until a tester comes out clean or with just a few crumbs attached, rotating the pans halfway through baking, 20 to 30 minutes.\n" +
          "Let cake cool in the pan for 15 minutes then transfer to the fridge to finish cooling completely. Allow cake to cool in the fridge for at least 1 hour before removing from the pan and frosting. The cake should be room temperature when you frost it. This is very important. Cake can be made a day ahead if you’d like!\n" +
          "Finish making your frosting: Scoop the hardened chocolate coconut cream frosting mixture into a large bowl. Use a hand mixer or an electric mixer to beat frosting until peaks form and it looks nice, fluffy and creamy. Use immediately!\n" +
          "Layer cake, using about 1/3 to 1/2 cup frosting between each layer, then frost the top and sides with remaining frosting.\n" +
          "Cook's Note:Cake can be stored at room temp for a day or two, then should be transferred to the fridge.",
        content:
          "This fudgy cake makes the perfect healthy alternative when you need your chocolate fix. This is made with a base of Almond Breeze Unsweetened Vanilla Almondmilk, coconut flour, and Blue Diamond Almond Flour.",
      },
    },
    {
      menuId: id,
      userId: userId,
      active: true,
      imageUrl: "http://192.168.0.252:3000/items/dessert/si.webp",
      item: {
        title: "Easy Strawberry Ice Cream",
        summary: "Easy Strawberry Ice Cream",
        cooking: false,
        price: 27,
        quantity: 232,
        unit: "servings",
        prep: "50min",
        recipe: [
          {
            title: "mashed fresh strawberries",
            summary: "mashed fresh strawberries",
            quantity: 2,
            unit: "cups",
            instructions: "",
          },
          {
            title: "whole milk",
            summary: "whole milk",
            quantity: 2,
            unit: "cups",
            instructions: "",
          },
          {
            title: "heavy cream",
            summary: "heavy cream",
            quantity: 2,
            unit: "cups",
            instructions: "",
          },
          {
            title: "white sugar",
            summary: "white sugar",
            quantity: 1,
            unit: "cup",
            instructions: "",
          },
          {
            title: "vanilla extract",
            summary: "vanilla extract",
            quantity: 2,
            unit: "teaspoons",
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
            title: "red food coloring (Optional)",
            summary: "red food coloring (Optional)",
            quantity: 2,
            unit: "drops",
            instructions: "",
          },
        ],
        nutrition: { fat: "23g", carbs: "34g", protein: "4g", calories: "354" },
        instructions:
          "Gather all ingredients." +
          "\nCombine strawberries, milk, cream, sugar, vanilla, salt, and food coloring in a large bowl." +
          "\nPour strawberry mixture into the freezer bowl of an ice cream maker; freeze according to the manufacturer's directions." +
          "\nTransfer to an air tight container and freeze until firm.",
        content:
          "This strawberry ice cream is super easy to make. This recipe doesn't use an egg-custard base but still tastes rich and creamy.",
      },
    },
    {
      menuId: id,
      userId: userId,
      active: true,
      imageUrl: "http://192.168.0.252:3000/items/dessert/bpud.webp",
      item: {
        title: "The Best Banana Pudding",
        summary: "The Best Banana Pudding",
        cooking: false,
        price: 35,
        quantity: 232,
        unit: "servings",
        prep: "25min",
        recipe: [
          {
            title: "cold milk",
            summary: "cold milk",
            quantity: 2,
            unit: "cups",
            instructions: "",
          },
          {
            title: "package instant vanilla pudding mix",
            summary: "package instant vanilla pudding mix",
            quantity: 1,
            unit: "(5ounce)",
            instructions: "",
          },
          {
            title: "can sweetened condensed milk",
            summary: "can sweetened condensed milk",
            quantity: 1,
            unit: "(14ounce)",
            instructions: "",
          },
          {
            title: "vanilla extract",
            summary: "vanilla extract",
            quantity: 1,
            unit: "tablespoon",
            instructions: "",
          },
          {
            title: "container frozen whipped topping, thawed",
            summary: "container frozen whipped topping, thawed",
            quantity: 1,
            unit: "(12ounce)",
            instructions: "",
          },
          {
            title: "package vanilla wafers",
            summary: "package vanilla wafers",
            quantity: 1,
            unit: "(16ounce)",
            instructions: "",
          },
          {
            title: "sliced",
            summary: "sliced",
            quantity: 14,
            unit: "bananas,",
            instructions: "",
          },
        ],
        nutrition: { fat: "10g", carbs: "57g", protein: "4g", calories: "329" },
        instructions:
          "Gather all ingredients.\n" +
          "Place milk and pudding mix in a large bowl; beat with a whisk for 2 minutes. Blend in condensed milk until smooth.\n" +
          "Stir in vanilla, then fold in whipped topping.\n" +
          "Layer wafers, banana slices, and pudding mixture in a glass serving bowl.\n" +
          "Chill. When ready to serve top with extra crushed wafers.\n" +
          "Enjoy!",
        content:
          "This no-cook banana pudding recipe is easy to make and delicious layered with vanilla wafers and slices of banana. It's the best banana pudding you will ever find (or so I've been told by many)!",
      },
    },
    {
      menuId: id,
      userId: userId,
      active: true,
      imageUrl: "http://192.168.0.252:3000/items/dessert/spf.webp",
      item: {
        title: "Spanish Flan",
        summary: "Spanish Flan",
        cooking: false,
        price: 38,
        quantity: 232,
        unit: "servings",
        prep: "40min",
        recipe: [
          {
            title: "white sugar",
            summary: "white sugar",
            quantity: 1,
            unit: "cup",
            instructions: "",
          },
          {
            title: "eggs",
            summary: "eggs",
            quantity: 3,
            unit: "large",
            instructions: "",
          },
          {
            title: "can sweetened condensed",
            summary: "can sweetened condensed",
            quantity: 1,
            unit: "(14ounce)",
            instructions: "",
          },
          {
            title: "can evaporated milk",
            summary: "can evaporated milk",
            quantity: 1,
            unit: "(12ounce)",
            instructions: "",
          },
          {
            title: "vanilla extract",
            summary: "vanilla extract",
            quantity: 1,
            unit: "tablespoon",
            instructions: "",
          },
        ],
        nutrition: { fat: "10g", carbs: "57g", protein: "10g", calories: "349" },
        instructions:
          "Preheat the oven to 350 degrees F (175 degrees C).\n" +
          "Melt sugar in a medium saucepan over medium-low heat until liquefied and golden in color. Carefully pour hot syrup into a 9-inch round glass baking dish, turning the dish to evenly coat the bottom and sides; set aside.\n" +
          "Beat eggs in a large bowl. Add condensed milk, evaporated milk, and vanilla; beat until smooth. Pour egg mixture into the baking dish; cover with aluminum foil.\n" +
          "Bake in preheated oven for 1 hour. Let cool completely.\n" +
          "To serve, carefully invert onto a rimmed serving plate; let caramel sauce flow over flan.",
        content:
          "Delicious Spanish flan — it's easy to make and everyone will love it!",
      },
    },
    {
      menuId: id,
      userId: userId,
      active: true,
      imageUrl: "http://192.168.0.252:3000/items/dessert/bbc.webp",
      item: {
        title: "Burnt Basque Cheesecake",
        summary: "Burnt Basque Cheesecake",
        cooking: false,
        price: 45,
        quantity: 232,
        unit: "servings",
        prep: "50min",
        recipe: [
          {
            title: "soft unsalted butter, or as needed",
            summary: "soft unsalted butter, or as needed",
            quantity: 1,
            unit: "tablespoon",
            instructions: "",
          },
          {
            title: "packages cream cheese, softened",
            summary: "packages cream cheese, softened",
            quantity: 3,
            unit: "(8ounce)",
            instructions: "",
          },
          {
            title: "white sugar",
            summary: "white sugar",
            quantity: 1,
            unit: "cup",
            instructions: "",
          },
          {
            title: "all-purpose flour",
            summary: "all-purpose flour",
            quantity: 3,
            unit: "tablespoons",
            instructions: "",
          },
          {
            title: "fine salt",
            summary: "fine salt",
            quantity: 1 / 2,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "vanilla extract",
            summary: "vanilla extract",
            quantity: 1 / 2,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "eggs, at room temperature",
            summary: "eggs, at room temperature",
            quantity: 4,
            unit: "jumbo",
            instructions: "",
          },
          {
            title: "heavy cream",
            summary: "heavy cream",
            quantity: 5 / 4,
            unit: "cups",
            instructions: "",
          },
        ],
        nutrition: { fat: "38g", carbs: "25g", protein: "9g", calories: "467" },
        instructions:
          "Preheat the oven to 400 degrees F (200 degrees C).\n" +
          "Butter a 9-inch cake pan. Cut a sheet of parchment paper large enough to line the inside of the pan by a few extra inches. Butter the paper and press it into the pan, flattening any major creases. Trim away any excess paper from the sides until you have an inch or two of overhang.\n" +
          "Combine cream cheese, sugar, flour, and salt in a bowl; stir and smear together with a spatula until very smooth and creamy.\n" +
          "Add vanilla and 1 egg; whisk to combine. Whisk in remaining eggs, one at a time. Pour in heavy cream and mix until smooth.\n" +
          "Pour batter into the prepared pan. Tap the pan against the counter to burst any excess air bubbles.\n" +
          "Bake in the preheated oven until puffed, very well browned, and nearly burned on the edges, 50 to 55 minutes. Increase oven temperature to 425 degrees F (220 degrees C) for the last 10 minutes.\n" +
          "Let cheesecake cool to room temperature, at least 25 minutes. Lift out onto a plate and peel back parchment paper, using a knife or spatula if needed. Refrigerate until thoroughly chilled, 4 hours to overnight.",
        content: `"Burnt" Basque cheesecake is made by baking the cheesecake in a very hot oven to deliver a beautiful, dark exterior full of bittersweet notes that complements the creamy light interior. The original recipe was developed in the 1970s, at a cafe in San Sebastian called La Vina. I adapted it to fit a standard cake pan rather than the large springform pan used in the original. I rarely post a trendy recipe while it's still trendy. But this "burnt" cheesecake method deserves the hype and is just plain easier — just remember the parchment paper.`,
      },
    },
    {
      menuId: id,
      userId: userId,
      active: true,
      imageUrl: "http://192.168.0.252:3000/items/dessert/orc.webp",
      item: {
        title: "Oatmeal Raisin Cookies",
        summary: "Oatmeal Raisin Cookies",
        cooking: false,
        price: 10,
        quantity: 1323,
        unit: "servings",
        prep: "30min",
        recipe: [
          {
            title: "butter, softened",
            summary: "butter, softened",
            quantity: 2 / 4,
            unit: "cup",
            instructions: "",
          },
          {
            title: "white sugar",
            summary: "white sugar",
            quantity: 3 / 4,
            unit: "cup",
            instructions: "",
          },
          {
            title: "packed light brown sugar",
            summary: "packed light brown sugar",
            quantity: 3 / 4,
            unit: "cup",
            instructions: "",
          },
          {
            title: "eggs",
            summary: "eggs",
            quantity: 2,
            unit: "large",
            instructions: "",
          },
          {
            title: "vanilla extract",
            summary: "vanilla extract",
            quantity: 1,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "all-purpose flour",
            summary: "all-purpose flour",
            quantity: 5 / 4,
            unit: "cups",
            instructions: "",
          },
          {
            title: "baking soda",
            summary: "baking soda",
            quantity: 1,
            unit: "teaspoon",
            instructions: "",
          },
          {
            title: "ground cinnamon",
            summary: "ground cinnamon",
            quantity: 3 / 4,
            unit: "teaspoon",
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
            title: "rolled oats",
            summary: "rolled oats",
            quantity: 11 / 4,
            unit: "cups",
            instructions: "",
          },
          {
            title: "raisins",
            summary: "raisins",
            quantity: 1,
            unit: "cup",
            instructions: "",
          },
        ],
        nutrition: { fat: "3g", carbs: "15g", protein: "1g", calories: "92" },
        instructions:
          "Gather all ingredients.\n" +
          "Preheat the oven to 375 degrees F (190 degrees C). Line two cookie sheets with parchment paper or silicone liners.\n" +
          "Beat butter, white sugar, and brown sugar in a large bowl until smooth and creamy. Beat in eggs and vanilla until fluffy.\n" +
          "Stir together flour, baking soda, cinnamon, and salt. Gradually beat into the butter mixture. Stir in oats and raisins. Drop teaspoonfuls of batter onto the prepared cookie sheets.\n" +
          "Bake in the preheated oven until golden brown, 8 to 10 minutes, switching racks halfway through. Remove from the oven and let sit on the cookie sheets for 1 to 2 minutes before transferring cookies to a wire rack to cool completely.",
        content:
          "Oatmeal raisin cookies with a soft, chewy center and crispy edges. The whole family will love this old standby!",
      },
    },
  ];
  
    db.menuitems.insertMany(dessertMenu);
    console.log(`${dessertMenu.length} menuitems inserted`);
}

addDessertMenuItems();