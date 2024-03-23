import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from './interfaces/TodoItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  task: string = ""
  tasks: TodoItem[] = []
  backgroundColors: string[] = ['bg-light', 'bg-white'];

  ngOnInit(): void {
    const localStorageTasks = localStorage.getItem("tasks")
    if (localStorageTasks !== null) {
      this.tasks = JSON.parse(localStorageTasks)
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.insertTask();
    }
  }

  getTaskBackgroundColor(index: number) {
    return this.backgroundColors[index % this.backgroundColors.length];
  }

  insertTask() {
    if (this.task.trim() !== '') {
      const taskObj = { description: this.task, selected: false }
      this.tasks.push(taskObj)
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
      this.task = ""
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1)
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
  }

  completedTask(index: number) {
    this.tasks[index] = { ...this.tasks[index], selected: !this.tasks[index].selected };
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  removeAllTasks() {
    this.tasks = []
    localStorage.clear()
  }
}
