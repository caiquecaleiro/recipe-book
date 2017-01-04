import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnLT2GNcLpxYO2LrSo0UPktRIM6X09RHUFFqFPNxV1ZZC_zCSH8RtT1G2w', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/rainbow-summer-salad-3b8cab.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
