import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'
import {FormBuilder,Validator,FormGroup,FormControl, Validators, AbstractControl} from '@angular/forms'
import { Key } from 'protractor';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

//CustDet:FormGroup;
assetManagement:FormGroup;
id:string;
Value:number =500;
submitted:boolean= false;
occupation =[{id:1,value:"sal",name:"sal"}];
user:{id:string}
  constructor(private router:Router,private route:ActivatedRoute,private formBuilder:FormBuilder) {
   }
 
  ngOnInit(): void {
  this.route.url.subscribe(url=>{
    this.id = url[1].path;
  });


this.assetManagement = this.formBuilder.group({
  assetName:['',[Validators.required]],
  assetCategory:['',Validators.required],
  assetDescription:['',[Validators.required,Validators.maxLength(50)]],
  dateOfPurcase:['',[Validators.required,purchaseDatevalidation]],
  assetCost:['',[Validators.required]]
  
    });  
    } 

    saveDetails(){
      if (this.assetManagement.invalid) {
        this.submitted=true;
       }
       else{
         const assetManagementData={
          assetName:this.assetManagement.get('assetName').value,
          assetCategory:this.assetManagement.get('assetCategory').value,
          assetDescription:this.assetManagement.get('assetDescription').value,
          dateOfPurcase:this.assetManagement.get('dateOfPurcase').value,
          assetCost:this.assetManagement.get('assetCost').value
         }
         var a = assetManagementData;
         let b:number=1;
         this.router.navigate(['view'],{queryParams:{id:b}});
       }
  
    }

    get f(){
      return this.assetManagement.controls
    } 
    assetddl(event) {
      this.assetCategory.setValue(event.target.value, {
        onlySelf: true
      })
    }
get assetCategory(){
  return this.assetManagement.get('assetCategory');
}
// this.CustDet = this.formBuilder.group({
// custName :['',Validators.required],
// dob:['',[Validators.required,datevalidation]],
// pan:['',Validators.required],
// gender:['',Validators.required],
// amount:['',Validators.required],
// ocu:['',[Validators.required]],
// meal:['',Validators.required]

//   });  
//   } 

  // saveDetails(){
  //   if (this.CustDet.invalid) {
  //     this.submitted=true;
  //    }
  //    else{
  //      const cutdet={
  //       custName:this.CustDet.get('custName').value,
  //       dob:this.CustDet.get('dob').value,
  //       pan:this.CustDet.get('pan').value,
  //       gender:this.CustDet.get('gender').value,
  //       ocu:this.CustDet.get('ocu').value,
  //       meal:this.CustDet.get('meal').value
  //      }
  //      var a = cutdet;
  //      this.router.navigate(['view']);
  //    }

  // }

  // get f(){
  //   return this.CustDet.controls
  // } 
  // ddl(event) {
  //   this.ocuName.setValue(event.target.value, {
  //     onlySelf: true
  //   })
  // }

  // menuchange(e) {
  //   this.menu.setValue(e.target.value, {
  //     onlySelf: true
  //   })
  // }

  // get menu(){
  //   return this.CustDet.get('meal');
  // }
  // // Getter method to access formcontrols
  // get ocuName() {
  //   return this.CustDet.get('ocu');
  // }
}
function purchaseDatevalidation(control: AbstractControl): {[key:string]:any} | null{
  let dob:Date =new Date(control.value);
  let date:Date=new Date();
  if(dob>date){
    return {'dateinvalid' :true}
  }
}
function datevalidation(control: AbstractControl): {[key:string]:any} | null{
  let dob:Date =new Date(control.value);
  let date:Date=new Date();
  date.setFullYear(date.getFullYear() - 10)
  if(dob<date){
    return {'dateinvalid' :true}
  }
}
function ocuvali(contol:AbstractControl):{[key:string]:any}|null{
let a=contol.value;
  return {'ocuinvalid' :true}
}

