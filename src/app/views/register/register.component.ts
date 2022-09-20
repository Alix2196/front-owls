import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  profileForm = new FormGroup({
    name : new FormControl(''),
    surname : new FormControl(''),
    phone : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl('')

  })

  constructor() { }

  ngOnInit(): void {
  }

  createRegister(){
    console.log(this.profileForm.value.name);
  }

  eliminarRegister(){
    console.log('hola');
  }
}
