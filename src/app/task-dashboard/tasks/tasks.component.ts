import { Component, Input } from '@angular/core';
import { TaskDetailsComponent } from "./tasks-details/tasks-details.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskDetailsComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) name?: string;
}
