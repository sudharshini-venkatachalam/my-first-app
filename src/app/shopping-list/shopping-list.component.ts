import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
 
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients:Ingredient[];
private igChangeSub:Subscription


  constructor(private shoppingListService:ShoppingListService,private loggingService:LoggingService) { }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  ngOnInit() {
this.ingredients=this.shoppingListService.getIngredient();

this.igChangeSub=this.shoppingListService.ingredientsChanged.subscribe((ingredients:Ingredient[])=> {
  this.ingredients=ingredients;
});
this.loggingService.printlog('hi from shopping');
  }

onEditItem(index:number)
{
  this.shoppingListService.startedEditing.next(index);
}
  
  
}
