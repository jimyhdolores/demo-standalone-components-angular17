import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { WorkCardComponent } from '../../components/work-card/work-card.component';
import { IWork } from '../../models/components-model.interface';

@Component({
	selector: 'app-work-detail-page',
	standalone: true,
	imports: [WorkCardComponent, MatButtonModule, RouterLink],
	templateUrl: './work-detail-page.component.html',
	styleUrls: ['./work-detail-page.component.scss']
})
export default class WorkDetailPageComponent implements OnInit {
	private _router = inject(Router);
	work?: IWork;

	constructor() {
		const workState = this._router.getCurrentNavigation()?.extras?.state?.['work'];
		if (workState) {
			this.work = workState as IWork;
		}
	}
	ngOnInit(): void {}
}
