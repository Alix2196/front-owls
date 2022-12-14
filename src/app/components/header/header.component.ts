import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }

  goHome(){
    console.log('ir a home');
    this.router.navigate(['home']);
  }
  goRegister(){
    console.log('ir a register');
    this.router.navigate(['register']);
  }
  goLogin(){
    console.log('ir a login');
    this.router.navigate(['login']);
  }
}
