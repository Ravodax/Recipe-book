// services/recipe.service.ts
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private storageKey = 'recipes';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      const initial: Recipe[] = [];
      localStorage.setItem(this.storageKey, JSON.stringify(initial));
    }
  }

  getAll(): Recipe[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getById(id: number): Recipe | undefined {
    return this.getAll().find(r => r.id === id);
  }

  add(recipe: Recipe) {
    const recipes = this.getAll();
    recipes.push(recipe);
    localStorage.setItem(this.storageKey, JSON.stringify(recipes));
  }

  delete(id: number) {
    const recipes = this.getAll().filter(r => r.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(recipes));
  }

  toggleFavorite(id: number) {
    const recipes = this.getAll();
    const recipe = recipes.find(r => r.id === id);
    if (recipe) recipe.favorite = !recipe.favorite;
    localStorage.setItem(this.storageKey, JSON.stringify(recipes));
  }
}
