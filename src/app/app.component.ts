import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './dataBinding/data-binding/data-binding.component';
import { TwoWayComponent } from './dataBinding/two-way/two-way.component';
import { ProductComponent } from './shoppingApp/product/product.component';
import { TdfComponent } from './form/tdf/tdf/tdf.component';
import { NgIfComponent } from './directives/structuralDirective/ng-if/ng-if.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DataBindingComponent,
    TwoWayComponent,
    ProductComponent,
    NgIfComponent,
    TdfComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice';
}
