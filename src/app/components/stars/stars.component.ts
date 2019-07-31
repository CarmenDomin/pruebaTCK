import {Component, Input} from '@angular/core';

@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
})
export class StarsComponent {
  @Input() number: number;
}
