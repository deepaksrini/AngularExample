import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateAccountComponent } from './create-account/create-account.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'DemoApp';
s:number=10;
  ngOnInit(){
    new Observable((observer)=>{
observer.next();
this.s+10;
    }).subscribe(()=>{
      console.log(this.s);
    })
  }
}
