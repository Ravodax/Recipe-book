import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
selector: 'app-recipe-details',
standalone: true,
imports: [CommonModule, MatCardModule, MatButtonModule],
templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {
recipe?: Recipe;


constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {}


ngOnInit() {
const id = Number(this.route.snapshot.paramMap.get('id'));
this.recipe = this.recipeService.getById(id);
}


goBack() {
this.router.navigate(['/']);
}
}