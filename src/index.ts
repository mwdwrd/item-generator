import { generateShoes } from "./utils/generateShoes";
import { generateWatches } from "./utils/generateWatches";

const itemMaker = (function() {
  function createItems(ItemType: string, ItemCount: Number) {
    let itemList = null;

    // If we call shoes, run the shoe specific generator.
    if (ItemType === "shoes") {
      itemList = generateShoes(ItemCount);
    }

    // If we call watches, run the watch specific generator.
    if (ItemType === "watches") {
      itemList = generateWatches(ItemCount);
    }

    // After generation, return the object.
    return {
      type: ItemType, //  Type of items.
      list: itemList.items, // Full list of items.
      rare: itemList.rareItems // Rare items only.
    };
  }

  return { generate: createItems };
})();

// Generates Shoes Type
const shoes = itemMaker.generate("shoes", 500);

console.log(`${shoes.rare.length}/${shoes.list.length} Rare Shoes Generated`);
console.log({ "Rare Shoes": shoes.rare });
console.log(" ");
console.log(
  `${shoes.list.length - shoes.rare.length}/${
    shoes.list.length
  } Common Shoes Generated`
);
console.log({ "Common Shoes": shoes.list });

// Generates Watches Type
// const watches = itemMaker.generate("watches", 500);
// console.log({
//   Ratio: watches.rare.length + "/" + watches.list.length,
//   "Rare Watches": watches.rare,
//   "All Watches": watches.list
// });
