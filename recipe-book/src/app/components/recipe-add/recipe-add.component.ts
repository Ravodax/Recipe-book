// components/recipe-add/recipe-add.component.ts
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-recipe-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './recipe-add.component.html'
})
export class RecipeAddComponent {
  recipeForm: FormGroup;

  constructor(private fb: FormBuilder, private service: RecipeService, private router: Router) {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      imageUrl: [''],
      ingredients: this.fb.array([this.fb.control('', Validators.required)]),
      steps: this.fb.array([this.fb.control('', Validators.required)])
    });


    this.recipeForm.valueChanges.subscribe(val => console.log('Форма изменилась', val));
  }

  get ingredients() { return this.recipeForm.get('ingredients') as FormArray; }
  get steps() { return this.recipeForm.get('steps') as FormArray; }

  addIngredient() { this.ingredients.push(this.fb.control('', Validators.required)); }
  addStep() { this.steps.push(this.fb.control('', Validators.required)); }

  save() {
    if (this.recipeForm.valid) {
      this.service.add({
        id: Date.now(),
        ...this.recipeForm.value,
        favorite: false
      });
      this.router.navigate(['/']);
    }
  }
}
