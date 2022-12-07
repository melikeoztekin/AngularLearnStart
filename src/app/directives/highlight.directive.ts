import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() color: string = 'red';
  @Input() backgroundColor = 'yellow';

  constructor(private el: ElementRef) {
    //# çalışacak body
    //# ilgili elemente ulaşma isteği
    //# HOSTLISTENER
  }

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.color;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
