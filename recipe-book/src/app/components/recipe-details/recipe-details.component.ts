// components/recipe-details/recipe-details.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import 'zone.js';
import 'zone.js/testing';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent {
  recipe?: Recipe;

  constructor(private route: ActivatedRoute, private service: RecipeService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipe = service.getById(id);
  }

  goBack() {
    history.back();
  }
}
