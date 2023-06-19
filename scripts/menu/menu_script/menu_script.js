
 async function getUserId() {
    return await db.users.findOne({ username: 'codeX' });
}

async function addMenus() {

    const userId = (await getUserId())['_id'].toString();
    let  menus = [
        {
        "title" : "Desserts",
        "summary": "The Sweet things of the world",
        "content" : "Sweet Meals Ice,Creams , Cookies",
        "userId" :  userId,
        "imageUrl" : "http://192.168.0.252:3000/icons/dessert.png"
        },
        {
        "title" : "Starters",
        "summary": "Menu Starter Categories",
        "content" : "A list of menu Starters",
        "userId" : userId,
    "imageUrl" : "http://192.168.0.252:3000/icons/starters.png"
    
    },
    
    {
        "title" : "Soups",
        "summary" : "Soups Menu",
        "content" : "A list of Available Soups",
        "userId" : userId,
    "imageUrl" : "http://192.168.0.252:3000/icons/soup.png"
    },
    
    
    {
        "title" : "Main",
        "summary" : "Main Course Menu",
        "content" : "A List of available main courses",
        "userId" : userId,
    "imageUrl" : "http://192.168.0.252:3000/icons/main.png"
    
    },
    {
        "title" : "Drinks",
        "summary" : "Drinks Menu",
        "content" : "A List of available Drinks",
        "userId" : userId,
    "imageUrl" : "http://192.168.0.252:3000/icons/drink.png"
    }
    ];


    db.menus.insertMany(menus);
    console.log(`${(await db.menus.countDocuments())} menus inserted`);
}


addMenus();
