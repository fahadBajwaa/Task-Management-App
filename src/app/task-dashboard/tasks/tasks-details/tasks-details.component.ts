import { Component, Input } from '@angular/core';
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
}
