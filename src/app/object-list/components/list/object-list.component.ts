import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'my-object-list',
	templateUrl: './object-list.component.html',
	styleUrls: ['./object-list.component.scss']
})

export class MyObjectListComponent  {

	constructor(private router: Router, private route: ActivatedRoute) {}
	public myObjects = myObjects;

	public redirectTo(id: number): void {
		this.router.navigate([`${id}`], {relativeTo: this.route})
	}

}

export interface MyObject {
	title: string;
	content: string;
	id: number;
}

export const myObjects: MyObject[] = [
	{
	  title: 'first',
		content: 'Lorem Ipsumfdvf dfdsf fsdfsfs',
		id: 1
	},
	{
	  title: 'second',
		content: 'Lorem Ipsumfdvf dfdsf fsdfsfs dffgfg',
		id: 2
	},
	{
		title: 'third',
		content: 'Lorem Ipsumfdvf dfdsf fsdfsfs',
		id: 3
	},
	{
		title: 'fourth',
		content: 'Lorem Ipsumfdvf dfdsf fsdfsfs',
		id: 4
	},
	{
		title: 'five',
		content: 'Lorem Ipsumfdvf dfdsf fsdfsfs',
		id: 5
	}
]

