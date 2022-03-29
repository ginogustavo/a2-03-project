import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Noodle special',
      'Typical food from China',
      'https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg'
    ),
    new Recipe(
      'Fried Rice',
      'Mix of Peruvian and China flavor',
      'https://i.pinimg.com/originals/1d/7a/64/1d7a64e16789f360ab33b9db13943464.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
