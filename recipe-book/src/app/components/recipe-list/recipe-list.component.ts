import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
selector: 'app-recipe-list',
standalone: true,
imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, FormsModule, MatInputModule, MatCheckboxModule],
templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [];
searchQuery: string = '';
showFavoritesOnly: boolean = false;


constructor(private recipeService: RecipeService) {}


ngOnInit() {
this.loadRecipes();
}


loadRecipes() {
this.recipes = this.recipeService.getAll();
}


deleteRecipe(id: number) {
if (confirm('Вы уверены, что хотите удалить рецепт?')) {
this.recipeService.delete(id);
this.loadRecipes();
}
}


toggleFavorite(id: number) {
this.recipeService.toggleFavorite(id);
this.loadRecipes();
}


get filteredRecipes(): Recipe[] {
let result = this.recipes;
if (this.searchQuery.trim()) {
result = result.filter(r => r.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
}
if (this.showFavoritesOnly) {
result = result.filter(r => r.favorite);
}
return result;
}
}