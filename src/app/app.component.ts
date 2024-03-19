import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from './interfaces/TodoItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ntt-angular-todo-list'
  task: string = ""
  tasks: TodoItem[] = []  

  insertTask() {
    if (this.task.trim() !== '') {
      const taskObj = { description: this.task, selected: false }
      this.tasks.push(taskObj)
      this.task = ""
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1)
  }

  removeAllTasks() {
    this.tasks = []
  }

  completedTask(index: number) {
    this.tasks[index] = { ...this.tasks[index], selected: !this.tasks[index].selected };
  }
}
