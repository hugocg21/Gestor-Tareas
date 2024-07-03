import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit, OnDestroy {
  title: string = '';
  description: string = '';
  dueDate: Date | null = null;

  constructor(
    public dialogRef: MatDialogRef<TaskFormComponent>,
    private taskService: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    document.body.classList.add('modal-open');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('modal-open');
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    if (this.title && this.dueDate) {
      this.taskService.addTask(this.title, this.description, this.dueDate);
      this.dialogRef.close();
    }
  }

  openDatePicker(event: Event): void {
    (event.target as HTMLInputElement).showPicker();
  }
}
