import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  
  constructor(private el:ElementRef){}
  
  @Input('appInputFormat') format:string ='lowercase';

  @HostListener('blur')
  onBlur()
  {
    let value:string=this.el.nativeElement.value;
    console.log(this.format);
    if(this.format == 'uppercase')
      this.el.nativeElement.value=value.toUpperCase();
    else 
      this.el.nativeElement.value=value.toLowerCase();
  }
  
}
