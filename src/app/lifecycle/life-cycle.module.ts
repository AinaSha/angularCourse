import { NgModule } from '@angular/core';

import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CommonModule } from '@angular/common';
import { LifeCycleRouting } from './life-cycle-routing.module'

@NgModule({
	imports: [CommonModule, LifeCycleRouting],
	exports: [],
	declarations: [ParentComponent, ChildComponent],
	providers: [],
})
export class LifeCycleModule{ }
