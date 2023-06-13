import { log } from "console";

type nut = {
  title: string;
  summary: string;
  quantity: number;
  unit: string;
  instructions: string;
};

function getData(data: string[]): nut[] {
  const new_data = data.map((el) => {
    const data_ = el.split(" ");
    const title = extractTitle(data_.slice(2, data.length));
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

function extractTitle(data: string[]): string {
  if (data.length == 0) {
    return "";
  }
  return data.join(" ");
}

// returns a list of data
function fullText(
  data: string,
  cooking: boolean,
  price: number,
  quantity: number,
  units: string
): any {
  const splitdata = data.split("\n");
  const title = splitdata[0];
  const summary = splitdata[1];
  const preptime = splitdata[2];
  const ingredients: string[] = splitdata.slice(
    splitdata.indexOf("ingredients") + 1,
    splitdata.indexOf("directions")
  );
  const ind: string[] = splitdata.slice(
    splitdata.indexOf("directions") + 1,
    splitdata.indexOf("nutrition")
  );
  const instructions = getInstructions(ind);
  const recipelist: nut[] = getData(ingredients);

  const nut = splitdata.slice(splitdata.indexOf("nutrition") + 1);
  const nutrition = extractNut(nut);

  log(recipelist);
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

function getInstructions(data: string[]): string {
  return data.join("\n");
}

function extractNut(nutrition: string[]): object {
  return {
    fat: nutrition[1],
    carbs: nutrition[2],
    protein: nutrition[3],
    calories: nutrition[0],
  };
}

console.log(
  fullText(
    `Sparkling Cantaloupe Agua Fresca
This refreshing agua fresca with cantaloupe and lime juice topped with club soda is perfect on a hot day.
15mins
ingredients
2 pounds fresh cantaloupe cubes (6 cups)
2 cups water
6 tablespoons freshly squeezed lime juice (from 2 limes)
3 tablespoons honey
1/4 teaspoon salt
2 cups club soda, chilled cantaloupe melon balls or cubes , for garnish  lime zest twists, for garnish
directions
Working in batches if needed, blend cantaloupe, water, lime juice, honey, and salt in a blender until smooth. Press through a sieve; discard solids. Add strained juice to a pitcher.
Chill until ready to serve. Add club soda just before serving. Serve over ice, and garnish glasses with melon balls and lime zest twists.
nutrition
81
0g
21g
1g`,
    false,
    36.99,
    510,
    "servings"
  )
);
