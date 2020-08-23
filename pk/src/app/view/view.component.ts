import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Asset } from '../asset';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  Data:any
  constructor(private route : Router,private activatedRoute :ActivatedRoute,private formBuilder:FormBuilder) { }
  asset:Array<Asset>;
  assetManagement: FormGroup;
  ngOnInit(): void {
    this.assetManagement = this.formBuilder.group({

      assetCategory: ['', Validators.required],
      assetDescription: ['', [Validators.required, Validators.maxLength(50)]],
    });

    this.Data = [{ id: 0, indian: "test1", Data: "0.5" }, { id: 1, western: "test2", Data: "2" }]
  }
  del(id: number) {
    this.route.navigate(['login'], { queryParams: { id: 1 } })
    this.Data.splice(id, 1);
  }

  test() {
    const assetManagementData = {
      assetCategory: this.assetManagement.get('assetCategory').value,
      assetDescription: this.assetManagement.get('assetDescription').value,
    }
    this.asset = new Array<Asset>();
    var a =assetManagementData.assetCategory
    //this.asset.push({a : assetManagementData.assetDescription })
  }
  get f() {
    return this.assetManagement.controls
  }
  assetddl(event) {
    this.assetList.setValue(event.target.value, {
      onlySelf: true
    })
  }
  get assetList() {
    return this.assetManagement.get('assetCategory');
  }
}
