db.menuitems.createIndex({
  "item.title": 1,
  "item.summary": 1,
  "item.content": 1,
});

console.log("Inidces created")