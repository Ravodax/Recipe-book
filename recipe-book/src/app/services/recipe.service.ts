import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';


@Injectable({ providedIn: 'root' })
export class RecipeService {
private storageKey = 'recipes';


constructor() {
if (!localStorage.getItem(this.storageKey)) {
const initial: Recipe[] = [
{ id: 1, title: 'Борщ', description: 'Традиционный суп', ingredients: ['Свекла', 'Картофель', 'Мясо'], steps: ['Нарезать овощи', 'Варить 40 минут'], favorite: false },
{ id: 2, title: 'Омлет', description: 'Быстрый завтрак', ingredients: ['Яйца', 'Молоко', 'Соль'], steps: ['Взбить яйца', 'Жарить 5 минут'], favorite: false }
];
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