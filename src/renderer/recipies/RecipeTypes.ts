 interface Recipe{ 
    name :string,
    serves : number,
    ingridients: Array<Ingridient>
}

interface Ingridient { 
    include? : boolean,
    name : string,
    quantity : number,
    category: Category
}

export enum Category{ 
    FruitVeg ="FruitVeg" ,
    NutsHerbs ="NutsHerbs" ,
    Fridge ="Fridge" ,
    Dry ="Dry" ,
    Freezer ="Freezer" ,
    Other ="Other" 
}

 interface ListRecipe extends Recipe {
  index: number;
  selected: boolean;
  muliplier: number
}

export const checkInclude = (ingridient: Ingridient): boolean => {
  if (ingridient.hasOwnProperty("include")) {
    return ingridient.include as boolean;
  } else {
    return true;
  }
};


export type {Recipe,ListRecipe, Ingridient};
