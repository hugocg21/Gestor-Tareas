import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  months: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  currentYear: number = new Date().getFullYear();
  displayedMonthsIndex: number = 0;
  currentMonth: number = new Date().getMonth();
  currentDay: number = new Date().getDate();

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.setInitialDisplayedMonths();
  }

  isToday(day: number, month: number): boolean {
    return day === this.currentDay && month === this.currentMonth;
  }

  setInitialDisplayedMonths(): void {
    this.displayedMonthsIndex = Math.floor(this.currentMonth / 4) * 4;
  }

  getTasksForMonth(month: number): Task[] {
    return this.tasks.filter(
      (task) => new Date(task.dueDate).getMonth() === month
    );
  }

  getDaysInMonth(month: number, year: number): number[] {
    const date = new Date(year, month, 1);
    const days: number[] = [];
    while (date.getMonth() === month) {
      days.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  getTasksForDay(day: number, month: number): Task[] {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.dueDate);
      return (
        taskDate.getDate() === day &&
        taskDate.getMonth() === month &&
        taskDate.getFullYear() === this.currentYear
      );
    });
  }

  getDisplayedMonths(): string[] {
    return this.months.slice(
      this.displayedMonthsIndex,
      this.displayedMonthsIndex + 4
    );
  }

  previousMonths(): void {
    if (this.displayedMonthsIndex > 0) {
      this.displayedMonthsIndex -= 4;
    }
  }

  nextMonths(): void {
    if (this.displayedMonthsIndex + 4 < this.months.length) {
      this.displayedMonthsIndex += 4;
    }
  }

  toggleTask(id: number): void {
    this.taskService.toggleTask(id);
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
}
