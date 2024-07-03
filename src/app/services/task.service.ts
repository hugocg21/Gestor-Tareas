import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private localStorageKey = 'tasks';
  private tasks: Task[] = this.loadTasksFromLocalStorage();
  private idCounter: number = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string, description: string, dueDate: Date): void {
    const newTask: Task = {
      id: this.idCounter++,
      title,
      description,
      dueDate,
      completed: false
    };
    this.tasks.push(newTask);
    this.saveTasksToLocalStorage();
  }

  toggleTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasksToLocalStorage();
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
  }

  private loadTasksFromLocalStorage(): Task[] {
    const tasksJson = localStorage.getItem(this.localStorageKey);
    return tasksJson ? JSON.parse(tasksJson) : [];
  }
}
