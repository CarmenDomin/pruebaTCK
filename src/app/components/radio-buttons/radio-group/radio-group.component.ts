import {Component} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Component({
  selector: 'radio-group',
  templateUrl: './radio-group.component.html',
  host: {'role': 'radiogroup', 'tabIndex': '-1'},
})
export class RadioGroupComponent {
  public selectedId$ = new ReplaySubject(1);

  public set selectedId(selectedId: any) {
    this.selectedId$.next(selectedId);
  }
}
