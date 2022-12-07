import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appButtonColor]',
})
export class ButtonColorDirective implements OnInit {
  @Input() buttonType!: string;
  @Input() backgroundColor!: string;
  @Input() borderColor: string = 'transparent';
  // colorArray = [
  //   'danger',
  //   'success',
  //   'dark',
  //   'warning',
  //   'light',
  //   'primary',
  //   'info',
  //   'link',
  //   'secondary',
  // ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'btn');
    const customClass = `btn-${this.buttonType}`;
    this.renderer.addClass(this.el.nativeElement, customClass);
  }

  // ngOnInit(): void {
  //   this.renderer.addClass(this.el.nativeElement, 'btn');
  //   if (this.colorArray.includes(this.buttonType)) {
  //     const customClass = `btn-${this.buttonType}`;
  //     this.renderer.addClass(this.el.nativeElement, customClass);
  //   } else {
  //     this.renderer.setStyle(
  //       this.el.nativeElement,
  //       'background-color',
  //       this.buttonType
  //     );
  //   }
  // }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.backgroundColor
    );
    this.el.nativeElement.style.borderColor = this.borderColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '');
  }
}
