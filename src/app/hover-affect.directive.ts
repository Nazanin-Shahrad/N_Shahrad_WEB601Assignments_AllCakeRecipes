import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
})
export class HoverAffectDirective {
  constructor(private elementRef: ElementRef, private rendere: Renderer2) {}

  // border: string = '2px solid red';
  // noborder: string = '2px solid transparent';

  // private changeBorder(border: string) {
  //   this.rendere.setStyle(
  //     this.elementRef.nativeElement,
  //     'border-bottom',
  //     border
  //   );
  // }

  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.borderBottom = '2px solid red';
    // this.changeBorder(this.border);
  }

  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.borderBottom = '2px solid transparent';
    // this.changeBorder(this.noborder);
  }
}
