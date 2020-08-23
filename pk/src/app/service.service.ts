import { Asset } from './asset';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  assests: BehaviorSubject<Asset[] | undefined> = new BehaviorSubject<Asset[] | undefined>([{
    id: 1,
    assetCategory: 'Finance',
    assetDescription: 'mnney desc',
    dateOfPurcase: '22/22/11',
    assetCost: 1000
  }]);
}
