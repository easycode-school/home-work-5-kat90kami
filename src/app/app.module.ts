import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos-component/todos-component';
import { FormComponent } from './components/form-component/form-component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		TodosComponent,
		FormComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
