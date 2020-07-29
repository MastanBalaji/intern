import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private snackbar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createform();
  }

  createform(){
    this.signup= this.fb.group({
      firstname: [null ,Validators.compose([Validators.required,Validators.maxLength(20),Validators.minLength(3),Validators.pattern(/^[A-Za-z]*$/)])],
      lastname: [null ,Validators.compose([Validators.required,Validators.maxLength(20),Validators.minLength(3),Validators.pattern(/^[A-Za-z]*$/)])],
      class: [null ,Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(2),Validators.pattern(/^[A-Za-z0-9]*$/)])],
      passing: [null ,Validators.compose([Validators.required,Validators.maxLength(4),Validators.minLength(4),Validators.pattern(/^[0-9]*$/)])],
      percentage: [null ,Validators.compose([Validators.required,Validators.maxLength(2),Validators.pattern(/^[0-9]*$/)])],
    })
  }
  onSubmit(){
    const a =parseInt(this.signup.get('passing').value);
    if(a <= 2017){
      this.snackbar.open('Passing year should be greater than 2017', 'error', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
      this.signup.patchValue({passing:'---'})
      return false;
    }
    else{
      this.snackbar.open('Successfully Sign UP', 'Success', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
      this.router.navigate(['details']);
    }
  }
}
