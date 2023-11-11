import { Component, Input } from '@angular/core';
import { IWordCardComponent } from '../../models/components-model.interface';

@Component({
  selector: 'app-work-card',
  standalone: true,
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss'],
})
export class WorkCardComponent {
  @Input({ required: true }) dataWork!: IWordCardComponent;
}
