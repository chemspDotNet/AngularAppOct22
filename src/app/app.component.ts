import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {TooltipPosition} from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { TestService } from './services/test.service';
import { DataService } from './services/data.service';
import { interval, Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  flag= true
  data:any;
  employeeName='Sunil'

  myObservable:Observable<any>;

  counter =0;

   constructor(private dts:DataService  ){  }
  

   ngOnInit(): void {

    this.dts.getData().subscribe({
      next:(dta)=>{
        this.data = dta;
      },
      error:(err)=>{
        debugger
        console.log(err.message);
      },
      complete:()=>{
        console.log('All Data is fetched')
      }
    })
   }
 
 toggle(){
   this.flag = !this.flag
 }

 update(){
  this.employeeName= 'Paul';
 }
}
