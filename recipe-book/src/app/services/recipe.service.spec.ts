// services/recipe.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';
import 'zone.js';
import 'zone.js/testing';

describe('RecipeService', () => {
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeService] // Явно указываем сервис для DI
    });
    service = TestBed.inject(RecipeService);
    localStorage.clear();
  });

  it('should add a recipe', () => {
    const recipe: Recipe = { id: 1, title: 'Тест', description: '', ingredients: [], steps: [], favorite: false };
    service.add(recipe);
    expect(service.getAll().length).toBe(1);
  });

  it('should delete a recipe', () => {
    const recipe: Recipe = { id: 1, title: 'Тест', description: '', ingredients: [], steps: [], favorite: false };
    service.add(recipe);
    service.delete(1);
    expect(service.getAll().length).toBe(0);
  });

  it('should toggle favorite', () => {
    const recipe: Recipe = { id: 1, title: 'Тест', description: '', ingredients: [], steps: [], favorite: false };
    service.add(recipe);
    service.toggleFavorite(1);
    expect(service.getById(1)?.favorite).toBeTrue();
  });
});
