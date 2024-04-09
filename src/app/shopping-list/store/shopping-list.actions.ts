import { createAction, props } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const addIngredient = createAction(
  'ADD_INCREDIENT',
  props<Ingredient>()
)