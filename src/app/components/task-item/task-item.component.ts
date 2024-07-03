import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task';
import { differenceInDays } from 'date-fns';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() toggle = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  getCardColor(): string {
    if (this.task.completed) {
      return 'bg-green-100';
    }
    const dueDate = new Date(this.task.dueDate);
    const today = new Date();
    const daysDifference = differenceInDays(dueDate, today);

    if (daysDifference < 0) {
      return 'bg-red-100';
    } else if (daysDifference <= 7) {
      return 'bg-yellow-100';
    } else {
      return 'bg-white';
    }
  }
}
