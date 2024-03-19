import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ntt-angular-todo-list'
  task: string = ''
  tasks: string[] = []
  isStriked: boolean[] = []

  insertTask() {
    if (this.task.trim() !== '') {
      this.tasks.push(this.task)
      this.isStriked.push(false)
      this.task = ""
    }
  }

  removeTask(indice: number) {
    this.tasks.splice(indice, 1)
  }

  removeAllTasks() {
    this.tasks = []
  }

  completedTask(index: number) {
    console.log(this.isStriked[index])
    this.isStriked[index] = !this.isStriked[index];
  }

}

