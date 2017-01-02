import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'https://udemy-images.udemy.com/user/50x50/anonymous.png')

  constructor() { }

  ngOnInit() {
  }

}
