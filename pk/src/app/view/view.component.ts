import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Asset } from '../asset';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  assestsdetails: Asset;
  Data: any;
  assetManagement: FormGroup;
  assests: Asset[];
  assestsCategoryOptions = ['assetDescription', 'dateOfPurcase', 'assetCost'];
  constructor(private route: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private service: ServiceService) { }

  ngOnInit(): void {

    this.service.assests.subscribe((data: Asset[] | undefined) => {
      this.assests = data;
      this.assestsdetails = data.find(x => x.id = 1);
      this.assetManagement = this.formBuilder.group({
        assetCategory: ['', Validators.required],
        assetDescription: ['', [Validators.required, Validators.maxLength(50)]],
      });
    });

    this.Data = [{ id: 0, indian: 'test1', Data: '0.5' }, { id: 1, western: 'test2', Data: '2' }];

  }
  del(id: number) {
    this.route.navigate(['login'], { queryParams: { id: 1 } })
    this.Data.splice(id, 1);
  }

  test() {
    const category = this.assetManagement.get('assetCategory').value;
    const assetDescription = this.assetManagement.get('assetDescription').value;
    if (category === 'dateOfPurcase') {
      this.assestsdetails.dateOfPurcase = assetDescription;
    } else if (category === 'assetCategory') {
      this.assestsdetails.assetCategory = assetDescription;
    } else {
      this.assestsdetails.assetDescription = assetDescription;
    }
    const index = this.assests.findIndex(x => x.id === 1);
    this.assests[index] = this.assestsdetails;
    this.service.assests.next(this.assests);
    console.log(this.assetManagement.value);
  }
  get f() {
    return this.assetManagement.controls;
  }
  assetddl(event) {
    this.assetList.setValue(event.target.value, {
      onlySelf: true
    });
  }
  get assetList() {
    return this.assetManagement.get('assetCategory');
  }
}
