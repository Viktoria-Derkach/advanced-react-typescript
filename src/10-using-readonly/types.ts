export type Pizza = Readonly<{
  name: string;
  ingredients: string[];
  price: number;
  extras: string[];
}>;

export type ExtraIngredients = Readonly<Record<string, ExtraIngredient>>;

export type ExtraIngredient = Readonly<{
  name: string;
  price: number;
}>;

export type PizzaOnOrder = Readonly<{
  name: string;
  price: number;
  extraIngredients: ExtraIngredient[];
}>;
