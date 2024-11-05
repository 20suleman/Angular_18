import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trackby',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trackby.component.html',
  styleUrl: './trackby.component.css',
})
export class TrackbyComponent {
  product = [
    {
      id: 1,
      name: 'Samsung Tv',
      price: 45600,
      photo:
        'https://images.samsung.com/is/image/samsung/p6pim/in/ua43t5450akxxl/gallery/in-fhd-t5310-428860-ua43t5450akxxl-532972981?$730_584_PNG$',
    },
    {
      id: 2,
      name: 'Lee cooper',
      price: 5300,
      photo: 'https://5.imimg.com/data5/EA/JR/MY-37593200/w.jpg',
    },
  ];
  addProduct() {
    this.product = [
      {
        id: 1,
        name: 'Samsung Tv',
        price: 45600,
        photo:
          'https://images.samsung.com/is/image/samsung/p6pim/in/ua43t5450akxxl/gallery/in-fhd-t5310-428860-ua43t5450akxxl-532972981?$730_584_PNG$',
      },
      {
        id: 2,
        name: 'Lee cooper',
        price: 5300,
        photo: 'https://5.imimg.com/data5/EA/JR/MY-37593200/w.jpg',
      },
    ];
  }
  TrackById(product: any) {
    return product.Id;
  }
}
