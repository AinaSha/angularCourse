import { NgModule } from '@angular/core';

import { DirectivesPageComponent } from './directives.component';
import { CommonModule } from '@angular/common';
import { DirectivesRouting } from './directives-routings.module';
import { MyChangeColorDirectiveDirective } from './directive/my-change-color-directive.directive';
import { MyIfDirectiveDirective } from './directive/my-if-directive.directive';

@NgModule({
	imports: [
		CommonModule,
		DirectivesRouting,
	],
	exports: [],
	declarations: [DirectivesPageComponent, MyChangeColorDirectiveDirective, MyIfDirectiveDirective],
	providers: [],
})
export class DirecttivesModule { }
