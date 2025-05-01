import { Component } from '@angular/core';
import { HeaderComponent } from '../task-dashboard/header/header.component'; // Imported Header Component
import { UserComponent } from '../task-dashboard/user/user.component';

import { DUMMY_USERS } from '../dummy-users';
import { TasksComponent } from '../task-dashboard/tasks/tasks.component';

@Component({
  selector: 'app-task-dashboard',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.scss',
})
export class TaskDashboardComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  // getter property
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
