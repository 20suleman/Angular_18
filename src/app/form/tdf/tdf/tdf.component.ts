import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-tdf',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css',
})
export class TdfComponent {
  userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    age: null,
    gender: '',
  };

  // @ViewChild('userForm') : NgForm;
  submitForm(formRef: any, myUserName: any) {
    console.log(formRef);
  }
  resetForm(formRef: any) {
    formRef.reset();
  }
}
