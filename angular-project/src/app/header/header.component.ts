
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent {
  collapsed = true;

  @Output() selectComponent = new EventEmitter <string> ();

  onComponentClick(selectedLink: string) {
    this.selectComponent.emit(selectedLink);
  }
}
