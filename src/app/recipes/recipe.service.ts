import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core"

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tomato Salad', 'Tasty salad with spicy masalas',
      'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg',
      [
        new Ingredient('Tomato', 5),
        new Ingredient('Cucumber', 3)
      ]),
    new Recipe(
      'Big Burger', 'What else you need say?',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/veg-burger-recipe-1.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  addIntredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}