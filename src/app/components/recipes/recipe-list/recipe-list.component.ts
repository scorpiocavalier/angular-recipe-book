import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a simple description',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Feasy-recipes&psig=AOvVaw17__WlZeY6ftz_qhzwaZyg&ust=1611895979999000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJirhc3qve4CFQAAAAAdAAAAABAD'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
