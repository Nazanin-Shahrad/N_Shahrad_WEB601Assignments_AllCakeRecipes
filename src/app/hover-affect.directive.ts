import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
})
export class HoverAffectDirective {
  @Input() action: string = '';

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    switch (this.action) {
      case 'bold':
        this.elementRef.nativeElement.style.fontWeight = 'bold';
        break;

      case 'border':
        this.elementRef.nativeElement.style.borderBottom = '1px solid red';
        break;
    }
  }

  @HostListener('mouseout') onMouseOut() {
    switch (this.action) {
      case 'bold':
        this.elementRef.nativeElement.style.fontWeight = 'normal';
        break;

      case 'border':
        this.elementRef.nativeElement.style.borderBottom = 'none';
        break;
    }
  }
}
