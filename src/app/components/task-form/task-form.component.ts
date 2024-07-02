import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title: string = '';
  @Output() taskAdded = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.title.trim()) {
      this.taskService.addTask(this.title);
      this.title = '';
      this.taskAdded.emit();
    }
  }
}
