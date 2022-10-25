import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { TestService } from '../services/test.service';


@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
  providers:[TestService]
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
 AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
 
  @Input()
  employeeName= '';


  data:any;   /// frm api
 
  title = 'App';

  @ContentChild('mycontent')
  test: ElementRef| undefined

@ViewChild('mydiv', {static:true})
  myDiv:ElementRef|undefined

  constructor(  private tstsvc:TestService){

     
  }
 
   
  ngOnChanges(changes:SimpleChanges){
  // debugger;
   let x= this.test;
   let y= this.myDiv;
//   alert('Update button was click');
  }

  ngOnInit(): void {
    let m=  this.tstsvc.getMessage();
 
    this.tstsvc.setNewMessage();
   let x =  this.tstsvc.getMessage();
   debugger

  }

  ngDoCheck(): void {
    if(this.employeeName =='Paul')
            this.employeeName= 'New name' 
  }
   
  

  ngAfterContentInit(): void {
   // debugger
    
    let x= this.test;
    
   let y= this.myDiv;
  }

  ngAfterContentChecked(): void {
  //  debugger
    
   let y= this.myDiv;
  }

  ngAfterViewInit(){
   // debugger
   let y= this.myDiv;
  }

  ngAfterViewChecked(){
   // debugger
  }

  ngOnDestroy(): void {
    debugger
  }

  callToAPI(){
    // create req
    // send req
    // got response
    // return resopnse
    return  {'name':'Sunil'} ;
  }
}
