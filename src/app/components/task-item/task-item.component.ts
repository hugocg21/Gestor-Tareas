import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { differenceInDays } from 'date-fns';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() toggle = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  getDaysRemaining(): number {
    const dueDate = new Date(this.task.dueDate);
    const currentDate = new Date();
    const diffTime = dueDate.getTime() - currentDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  isDueSoon(): boolean {
    return this.getDaysRemaining() <= 7;
  }

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
      return 'bg-gray-200';
    }
  }
}
