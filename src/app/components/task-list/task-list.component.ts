// src/app/components/task-list/task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {
    this.tasks = [];
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onTaskAdded(): void {
    this.tasks = this.taskService.getTasks();
  }

  toggleTask(id: number): void {
    this.taskService.toggleTask(id);
    this.tasks = this.taskService.getTasks(); // Actualiza la lista de tareas
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks(); // Actualiza la lista de tareas
  }
}
