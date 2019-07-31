import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';

import {RadioGroupComponent} from '../radio-group/radio-group.component';

@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  host: {'role': 'radio', 'tabIndex': '-1'},
})
export class RadioButtonComponent implements OnInit {
  @Input()
  @HostBinding('id')
  public id: number;

  @Input()
  @HostBinding('attr.aria-checked')
  public active: boolean;

  @HostListener('click')
  public select(): void {
    this.radioGroup.selectedId = this.id;
  }

  public constructor(
    private readonly radioGroup: RadioGroupComponent,
  ) {}

  public ngOnInit(): void {
    if (this.radioGroup != null) {
      this.radioGroup.selectedId$.subscribe(id => {
        const active = this.id === id;
        if (active !== this.active) {
          this.active = active;
        }
      });
    }
  }
}
