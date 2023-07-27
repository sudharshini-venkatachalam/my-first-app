
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{


  startedEditing=new Subject<number>();
    ingredientsChanged=new Subject<Ingredient[]>();
   private  ingredients:Ingredient[]=[

        new Ingredient('Apples',5),
        new Ingredient('tomato',10)
        
         ];

         AddIngredient(ingredient:Ingredient){
            this.ingredients.push(ingredient);
            this.ingredientsChanged.next(this.ingredients.slice());
          }

          getIngredient()
          {
            return this.ingredients.slice();
          }

          addIngredients(ingredients:Ingredient[])
            {
                for (let ingredient of ingredients )
                {
                    this.AddIngredient(ingredient);
                }
               
            }
getIngredientByindex(index:number)
{
return this.ingredients[index];
}

updateIngredient(index:number,newIngredient:Ingredient){
  this.ingredients[index]=newIngredient;
this.ingredientsChanged.next(this.ingredients.slice());
}

deleteIngredientItem(index:number)
{
  this.ingredients.splice(index, 1);
  this.ingredientsChanged.next(this.ingredients.slice());
}



}