import { Component, Input } from '@angular/core';

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

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
