import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
recipesChanged=new Subject<Recipe[]>();

//    private recipes : Recipe[] =[

//         new Recipe('A test recipe','simple test','https://www.bing.com/th?id=OIP.xMSfAbxROtmVmd77nSXhzAHaF6&w=146&h=120&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',[

// new Ingredient('Meat',1),
// new Ingredient('french fries',20)
//         ]),
//         new Recipe('A test recipe','simple test','https://tse4.mm.bing.net/th/id/OIP.eAhp6Bcqc0v56y3lLO8ZUAHaHa?w=190&h=190&c=7&r=0&o=5&pid=1.7',[


//         new Ingredient('Meat',1)
//         ])
        
//         ];
private recipes:Recipe[]=[];
constructor(private sl:ShoppingListService){

}
getRecipes()
        {
            return this.recipes.slice();
        }

getRecipe(index :number)
{
        return this.recipes[index];
}

addIngredients(ingredient:Ingredient[])
{
this.sl.addIngredients(ingredient);
}

addRecipe(recipe:Recipe)
{
this.recipes.push(recipe);
this.recipesChanged.next(this.recipes.slice());

}
updateRecipe(index:number,recipe:Recipe)
{
this.recipes[index]=recipe;
this.recipesChanged.next(this.recipes.slice());
}

deleteRecipe(index:number)
{
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
}


setRecipes(recipe:Recipe[])
{
        this.recipes=recipe;
        this.recipesChanged.next(this.recipes.slice());
}




}