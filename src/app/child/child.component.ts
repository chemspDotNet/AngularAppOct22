import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private somesvc:TestService) { }

  @Input()
  counterInChild = 0   /// bound property

 @Output()
  counterChanged:EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {

    let m = this.somesvc.getMessage();
    debugger
  }

   increment(){
    this.counterInChild++;
    this.counterChanged.emit(this.counterInChild);   // firing event
  }

  decrement(){
this.counterInChild--;
this.counterChanged.emit(this.counterInChild);   // firing event


  }
}
