import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForNestedComponent } from '../ng-for-nested/ng-for-nested.component';
import { TrackbyComponent } from '../trackby/trackby.component';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule, NgForNestedComponent, TrackbyComponent],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css',
})
export class NgIfComponent {
  isVisible = false;
  btnText = 'show';
  product = {
    name: 'Samsung Tv',
    price: 344000.5,
    photo:
      'https://images.samsung.com/is/image/samsung/p6pim/in/ua32t4380akxxl/gallery/in-hd-t4310-428849-ua32t4380akxxl-537157418?$650_519_PNG$',
  };
  displayCheck(): any {
    this.btnText = this.btnText == 'Show' ? 'Hide' : 'Show';
    // this.isVisible = this.isVisible == false ? true : false;
    this.isVisible = !this.isVisible;
  }
}
