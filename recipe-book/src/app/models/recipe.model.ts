export interface Recipe {
id: number;
title: string;
description: string;
ingredients: string[];
steps: string[];
imageUrl?: string;
favorite?: boolean; // флаг избранного
}