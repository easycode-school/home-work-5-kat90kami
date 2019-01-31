import { Component } from '@angular/core';

@Component({
	selector: 'app-todos-component',
	templateUrl: './todos-component.html',
	styleUrls: ['./todos-component.css']
})

export class TodosComponent {
	public todos = [];

	addTodoHandler(value) {
		this.todos.push(value);
	}
}
