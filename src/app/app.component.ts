import { Component } from '@angular/core';
import { InputComponent } from './Input/input.component'
import { ResultsComponent } from './results/results.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent, ResultsComponent],
  templateUrl: './app.component.html'  
})
export class AppComponent {
  title = 'ntt-angular-todo-list';
}
