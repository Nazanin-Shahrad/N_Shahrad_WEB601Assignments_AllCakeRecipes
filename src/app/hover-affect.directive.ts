import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

/*
@Decorator(...)
class - variable - function
*/

@Directive({
  selector: '[appHoverAffect]',
})
export class HoverAffectDirective implements OnInit {
  constructor(private elementRef: ElementRef, private rendere: Renderer2) {}

  // @Input() uderline : string = '1px solid black';
  @Input() action: string = '';

  // @Input() color: string = 'red';
  // @Input() action: string = ''; //bold , text-decoration , border;

  //@Input() disable: boolean = false;
  // border: string = '2px solid red';
  // noborder: string = '2px solid transparent';

  // private changeBorder(border: string) {
  //   this.rendere.setStyle(
  //     this.elementRef.nativeElement,
  //     'border-bottom',
  //     border
  //   );
  // }

  ngOnInit() {}

  @HostListener('mouseover') onMouseOver() {
    // // if (!this.disable) {
    switch (this.action) {
      case 'bold':
        this.elementRef.nativeElement.style.fontWeight = 'bold';
        console.log('hi bold');
        break;
      //   case 'text-decoration':
      //     this.elementRef.nativeElement.style.textDecoration = 'underline';
      //     break;
      case 'border':
        this.elementRef.nativeElement.style.borderBottom = '1px solid black';
        console.log('hi border');
        break;
    }
    // //  }
    // // this.changeBorder(this.border);

    // this.elementRef.nativeElement.style.borderBottom = this.;
  }

  @HostListener('mouseout') onMouseOut() {
    //   // if (!this.disable) {
    switch (this.action) {
      case 'bold':
        this.elementRef.nativeElement.style.fontWeight = 'normal';
        console.log('bye bold');
        break;
      //     case 'text-decoration':
      //       this.elementRef.nativeElement.style.textDecoration = 'none';
      //       break;
      case 'border':
        this.elementRef.nativeElement.style.borderBottom = 'none';
        console.log('bye border');
        break;
    }
    //   // }

    // this.elementRef.nativeElement.style.borderBottom = 'none';
  }
}
