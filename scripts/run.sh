#!/bin/bash
DATABASE="nest"
curDir="$(pwd)"


addUser() {
    mongosh $DATABASE -f "scripts/user/user_script.js"
}

addTables(){
    mongosh $DATABASE -f scripts/tables/table_script.js
}

addMenus(){
    mongosh $DATABASE -f scripts/menu/menu_script/menu_script.js
}

addItems(){
    mongosh $DATABASE -f scripts/menu/items/starter_menu_script.js \
    -f scripts/menu/items/soup_menu_script.js -f scripts/menu/items/main_menu_script.js \
    -f scripts/menu/items/drink_menu_script.js -f scripts/menu/items/dessert_menu_script.js \
    -f scripts/menu/items/add_index.js
}


main(){
    # addUser
    # addTables
    # addMenus
    addItems
}


main

