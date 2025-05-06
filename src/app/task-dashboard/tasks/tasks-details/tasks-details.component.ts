import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Task } from './tasks-details.model';

@Component({
  selector: 'app-tasks-details',
  standalone: true,
  imports: [],
  templateUrl: './tasks-details.component.html',
  styleUrl: './tasks-details.component.scss',
})
export class TaskDetailsComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
