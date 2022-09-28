import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {


  @HostListener('mouseenter') mouseenter(){
    this.renders.addClass(this.element.nativeElement, 'card-increment' )
  }
  @HostListener('mouseleave') mouseleave(){
    this.renders.removeClass(this.element.nativeElement, 'card-increment' )
  }
  constructor(private renders: Renderer2, private element: ElementRef) { 
    console.log("directiva");
  }

}
