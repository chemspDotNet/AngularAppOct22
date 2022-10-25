import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  constructor() { }

  counterInParent = 0;

  @ViewChildren(ChildComponent)
  childComponet: any

  ngOnInit(): void {
    debugger
    let x = this.childComponet;
     }
  
  increment(){
    this.counterInParent++;
  }


  handleEvent(val:any){

    debugger;
    this.counterInParent = val;
  }

}
