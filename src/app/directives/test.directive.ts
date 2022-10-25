
import { Directive, ElementRef, HostBinding, Renderer2,  HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  //private elref: ElementRef |undefined;

  constructor(private elref: ElementRef, private render:Renderer2) {
   // this.elref = _elref
   //this.elref.nativeElement.style.color='red'
  // this.render.addClass(this.elref.nativeElement,'evenClass')
   debugger;
  
   }

@HostListener('mouseover')
   mouseover(){
    debugger
    this.render.removeClass(this.elref.nativeElement,'oddClass')
    this.render.addClass(this.elref.nativeElement,'evenClass')
  
   }

   
@HostListener('mouseleave')
   mouseleave(){
    debugger
    this.render.removeClass(this.elref.nativeElement,'evenClass')
  
    this.render.addClass(this.elref.nativeElement,'oddClass')
  
   }
}


