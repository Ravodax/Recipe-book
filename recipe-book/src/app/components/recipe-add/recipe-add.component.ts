import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
selector: 'app-recipe-add',
standalone: true,
imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule],
templateUrl: './recipe-add.component.html'
})
export class RecipeAddComponent {
title = '';
description = '';
ingredients: string[] = [];
steps: string[] = [];
imageUrl: string = '';


newIngredient = '';
newStep = '';


constructor(private service: RecipeService, private router: Router) {}


addIngredient() {
if (this.newIngredient.trim()) {
this.ingredients.push(this.newIngredient.trim());
this.newIngredient = '';
}
}


addStep() {
if (this.newStep.trim()) {
this.steps.push(this.newStep.trim());
this.newStep = '';
}
}


save() {
this.service.add({
id: Date.now(),
title: this.title,
description: this.description,
ingredients: this.ingredients,
steps: this.steps,
imageUrl: this.imageUrl
});
this.router.navigate(['/']);
}
}