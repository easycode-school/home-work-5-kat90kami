import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-form-component',
	templateUrl: './form-component.html',
	styleUrls: ['./form-component.css']
})

export class FormComponent {
	@Output() addTodo = new EventEmitter();
	@ViewChild('addUserForm') form: NgForm;

	public newTodo = '';

	onSubmitHandler() {
		this.addTodo.emit(this.newTodo);
		this.form.resetForm();
	}
}


