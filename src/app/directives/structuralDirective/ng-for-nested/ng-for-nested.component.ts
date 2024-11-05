import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-nested',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for-nested.component.html',
  styleUrl: './ng-for-nested.component.css',
})
export class NgForNestedComponent {
  data = [
    {
      category: 'Electronics',
      product: ['Samsung TV', 'Mobile'],
    },
    { category: 'Shoes', product: ['Nike casual', 'Lee chopper'] },
    { category: 'Shoes', product: ['Nike casual', 'Lee chopper'] },
  ];
}
