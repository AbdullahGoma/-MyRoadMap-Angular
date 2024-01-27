import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[Lightbox]'
})
export class LightboxDirective implements OnChanges {
  @Input('Lightbox') highLightColor:string = "yellow";
  @Input() defaultColor:string = "darkblue";

  constructor(private elemRef:ElementRef) {
    // this.elemRef.nativeElement.style.border=`3px solid ${this.defaultColor}`;
  }

  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border=`3px solid ${this.defaultColor}`;
  }

  @HostListener('mouseover') onMouseOver()
  {
    this.elemRef.nativeElement.style.border=`3px solid ${this.highLightColor}`;
  }

  @HostListener('mouseout') onMouseOut()
  {
    this.elemRef.nativeElement.style.border=`3px solid ${this.defaultColor}`;
  }

}
