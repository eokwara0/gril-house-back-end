import { addDessertMenuItems } from "./dessert_menu_script.js";
import { addDrinkMenuItems } from "./drink_menu_script.js";
import { addMainMenuItems } from "./main_menu_script.js";
import { addSoupItems } from "./soup_menu_script.js";
import { addStarterMenuItems } from "./starter_menu_script.js";





export async function addItems() {
// inserting data

  await addDessertMenuItems()
  await addDrinkMenuItems() 
  await addMainMenuItems()
  await addSoupItems()
  await addStarterMenuItems()

  // creating indexes
  db.menuitems.createIndex({
    "item.title": 1,
    "item.summary": 1,
    "item.content": 1,
  });
}
