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
      name: 'In-N-Out Burger',
      description:
        'In-N-Out Burger is an American regional chain of fast food restaurants with locations primarily in California and the Southwest.',
      image: '/assets/imgs/in_n_out_burger.jpg',
      cuisine: 'American',
    },
    {
      name: 'Chicken Alfredo',
      description:
        'Chicken Alfredo is a pasta dish made from fettuccine pasta tossed with a creamy Alfredo sauce and topped with grilled chicken.',
      image: '/assets/imgs/Chicken-alfredo.jpg',
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
