import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  product = {
    name: 'Samsung Tv',
    price: 45000,
    quantity: 2,
    mfd: new Date('2020/02/20'),
    Instock: true,
  };
  customerInput: string = '';
  myTypeValue: string = 'text';
  changeToText() {
    this.myTypeValue = 'text';
  }
  changeToPassword() {
    this.myTypeValue = 'password';
  }
}
