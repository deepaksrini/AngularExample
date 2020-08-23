import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGp: FormGroup;
  submitted: boolean;
  constructor(public _requestService: ServiceService, public formBuilder: FormBuilder,private router:Router,private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {

    let param1 = this.activatedRoute.snapshot.queryParams.id;
    this.formGp = this.formBuilder.group({
      firstName: ['', Validators.required],
      password : ['',Validators.required]
    })
  }
  onSubmit() {
    this.submitted = false;
    if (this.formGp.invalid) {
      this.submitted = true;      
    }
    else{
      this.router.navigate(['account']);
    }
  }
  // click() {
  //   this.submitted = false;
  //   if (this.formGp.invalid) {
  //     this.submitted = true;
  //   }
  //}
  get f(){return this.formGp.controls}

  userAuthentication(uname, psw) {

  }
}
