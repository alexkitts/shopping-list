import { Category, Recipe } from "./RecipeTypes";

const mutterPaneer: Recipe = {
  name: "Mutter Paneer",
  serves: 2,
  ingridients: [
    {
      name: "Paneer",
      category: Category.Fridge,
      quantity: 1,
    },{
      name: "Cinnamon Stick",
      category: Category.Dry,
      quantity: 1,
      include: false
    },
    {
      name: "Olive Oil",
      category: Category.Dry,
      quantity: 1,
      include: false
    },
    {
      name: "Garlic Clove",
      category: Category.NutsHerbs,
      quantity: 4,
    },
    {
      name: "Brown Onion",
      category: Category.FruitVeg,
      quantity: 1,
    }
  ],
};

const saagPaneer: Recipe = {
  name: "Saag Paneer",
  serves: 2,
  ingridients: [
    {
      name: "Paneer",
      category: Category.Fridge,
      quantity: 1,
    },{
      name: "Cinnamon Stick",
      category: Category.Dry,
      quantity: 1,
      include: false
    },
    {
      name: "Olive Oil",
      category: Category.Dry,
      quantity: 1,
      include: false
    },
    {
      name: "Garlic Clove",
      category: Category.NutsHerbs,
      quantity: 4,
    },
    {
      name: "Brown Onion",
      category: Category.FruitVeg,
      quantity: 1,
    },
    {
      name: "Eggplant Onion",
      category: Category.FruitVeg,
      quantity: 2,
    },
    {
      name: "Pumpkin",
      category: Category.FruitVeg,
      quantity: 2,
    }
  ],
};

const recipiesArray: Array<Recipe> = [
  mutterPaneer,
  saagPaneer
];

export default recipiesArray;
