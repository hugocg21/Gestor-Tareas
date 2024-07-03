import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title: string = '';
  description: string = '';
  dueDate: string = '';
  @Output() taskAdded = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.title.trim() && this.description.trim() && this.dueDate) {
      this.taskService.addTask(this.title, this.description, new Date(this.dueDate));
      this.title = '';
      this.description = '';
      this.dueDate = '';
      this.taskAdded.emit();
    }
  }

  openDatePicker(event: Event): void {
    (event.target as HTMLInputElement).showPicker();
  }
}
