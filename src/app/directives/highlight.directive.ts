
import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
//cambia el elemento nativo y le da un comportamiento nuevo
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
  }

  constructor(
    private element: ElementRef
  ) {
    // this.element.nativeElement.style.backgroundColor = 'red';
  }

}
