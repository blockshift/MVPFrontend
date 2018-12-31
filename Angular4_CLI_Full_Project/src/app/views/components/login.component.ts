import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatDialog} from '@angular/material';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
import { LoginerrorDialogComponent } from './loginerror-dialog/loginerror-dialog.component';
@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(private auth : AuthService , private router : Router , private http : HttpClient,public dialog: MatDialog ) { }
 
  @Input() username : any ;
  @Input() pass : any ;

  password : number ;

onSubmit(form : any) : void {
  console.log("username ", form.username );

console.log("Password" ,form.pass);


 var name = form.username;
var password = form.pass;


};

 /* login (){

    console.log("naam hai",this.username);
    
    this.http.get('http://ec2-18-234-198-67.compute-1.amazonaws.com:3000/login/?name=' + this.username)
  
    .subscribe(
      
      (data : any[] ) => {
        

      
try {

            if(this.pass==data[0].password)
             
                  {
                          console.log("successfully login");
  //throwing the token
                          this.auth.setUserLoggedIn(this.username);
                          this.router.navigate(['components']); 
                  }
           else {
                let dialogRef = this.dialog.open(LoginerrorDialogComponent, {
      height: '100px',
      width: '900px'
    });}
       
}
catch(e) {
  
let dialogRef = this.dialog.open(LoginerrorDialogComponent, {
      height: '100px',
      width: '900px'
    });

}
      },
      err=> console.log(err)

    );


  } */


  login() {
console.log("naam hai",this.username);

if (this.username == 'Admin' && this.pass == '789')
{
                          console.log("successfully login");
  //throwing the token
                          this.auth.setUserLoggedIn(this.username);
                          this.router.navigate(['components']); 
                  }
           else {
                let dialogRef = this.dialog.open(LoginerrorDialogComponent, {
      height: '100px',
      width: '900px'
    });}

  }
 
  
  
  }


