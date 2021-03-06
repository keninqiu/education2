import {Component, Inject, ViewChild, TemplateRef, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import { UsersService } from '../service/users.service';
import { AuthService } from '../service/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'register-dialog',
  styles: [
    `iframe {
      width: 800px;
    }`
  ],
  templateUrl: 'register.html'
})
export class RegisterDialog {
  alert_message:string;
  constructor(
    public dialogRef: MatDialogRef<RegisterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,private usersService: UsersService,private authService: AuthService) { 
      this.alert_message = "";
    }

  onConfirmClick(fullname:string,email:string,password:string,repeat_password:string): void {
    console.log('onConfirmClick in register');
    if(password != repeat_password) {
      this.alert_message = "Passwords Do Not Match!";
    }
    else {
      this.usersService.createUser(fullname,email,password).subscribe(    
        suc => {
            this.authService.saveToken(suc.token);
            this.dialogRef.close();
        },
        err => {
            console.log(err );
            this.alert_message = "Email already existed!";
        }
      );

      
    }
    
  }


  onCancelClick(): void {
    console.log('cancel me');
    this.dialogRef.close();
  }
}