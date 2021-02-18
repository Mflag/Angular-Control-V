import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-singUp',
  templateUrl: './singUp.component.html',
  styleUrls: ['./singUp.component.scss']
})
export class SingUpComponent implements OnInit {
 user={
    nombre:'',
    email:'',
    telefono:'',
    password:'',
    confirmacion:'', 
 }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  singUp(){
    this.authService.singUp(this.user)
      .subscribe(
        res =>{
          console.log(res);
          localStorage.setItem('token', res.token)
        },
        err => console.log(err)
      )
  }


}
