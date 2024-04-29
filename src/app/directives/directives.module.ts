import { NgModule } from '@angular/core';

import { DirectivesPageComponent } from './directives.component';
import { CommonModule } from '@angular/common';
import { DirectivesRouting } from './directives-routings.module';

@NgModule({
	imports: [
		CommonModule,
		DirectivesRouting
	],
	exports: [],
	declarations: [DirectivesPageComponent],
	providers: [],
})
export class DirecttivesModule { }
