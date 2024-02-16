import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'sb-fav-food',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './fav-food.component.html',
  styleUrl: './fav-food.component.scss',
})
export class FavFoodComponent {
  favFoods: FavFood[] = [
    {
      name: 'Pho',
      description:
        'Pho is a Vietnamese soup consisting of broth, rice noodles, herbs, and meat, usually beef.',
      image: '/assets/imgs/pho2.png',
      cuisine: 'Vietnamese',
    },
    {
      name: 'Burger',
      description:
        'A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
      image:
        'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese.jpg',
      cuisine: 'American',
    },
    {
      name: 'Pasta',
      description:
        'Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.',
      image:
        'https://www.thespruceeats.com/thmb/5y4L7bXvKmYpJlJ0Lz5l4q5mZjE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pasta-2500-56a2104d3df78cf77272b4a8.jpg',
      cuisine: 'Italian',
    },
  ];
}

export interface FavFood {
  name: string;
  description: string;
  image: string;
  cuisine: string;
}
