import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  showLightTheme: boolean = true;
  rightPanel: string = 'lightRightPanel';
  labelText: string = 'Check to switch Dark Model';
  employeeData = {
    image:
      'https://th.bing.com/th/id/OIP.vf6tqF3ZfAAvJsEqI5-ubgHaLH?rs=1&pid=ImgDetMain',

    empName: 'Md Sulema',

    empAge: 24,

    empGender: 'Male',
  };

  changeUser(name: string) {
    name === 'shamoon'
      ? (this.employeeData = {
          image:
            'https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1',
          empName: 'Md Shamoon',
          empAge: 24,
          empGender: 'Male',
        })
      : (this.employeeData = {
          image:
            'https://th.bing.com/th/id/OIP.vf6tqF3ZfAAvJsEqI5-ubgHaLH?rs=1&pid=ImgDetMain',
          empName: 'Md Suleman',
          empAge: 24,
          empGender: 'FeMale',
        });
  }
  changeTheme(event: any) {
    if (event.target.checked) {
      this.rightPanel = 'darkRightPanel';

      this.labelText = 'UnCheck to switch light Model';
    } else {
      this.rightPanel = 'lightRightPanel';
      this.labelText = 'Check to switch Dark';
    }
  }
}
