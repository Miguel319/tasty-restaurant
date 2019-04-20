import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') estaAbierto = false;

  @HostListener('click') alternarA() {
    this.estaAbierto = !this.estaAbierto;
  }

  constructor() {
  }

}
