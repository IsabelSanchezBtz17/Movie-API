import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
 
  public response: string = '';
  public formularioLogin!: FormGroup;

  constructor( public authService: AuthService) { 
    console.log('login');
  }

  ngOnInit(): void {
    this.formularioLogin = new FormGroup({
      username: new FormControl('', [ Validators.minLength(3), Validators.required]),
      password: new FormControl('', [Validators.required] ),  
    }); 
  }
    
  

  onSubmit() {
      
    let username: string = this.formularioLogin.get('username')?.value;
    let password: string = this.formularioLogin.value.password;
    console.log(username, password);
    this.response = this.authService.getToken(username, password);

  }


}
