import { Component } from '@angular/core';
import { HeaderComponent } from '../task-dashboard/header/header.component';
import { UserComponent } from '../task-dashboard/user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { TasksComponent } from '../task-dashboard/tasks/tasks.component';

//import User interface from User Component
import { type User } from '../task-dashboard/user/user.model';

@Component({
  selector: 'app-task-dashboard',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.scss',
})
export class TaskDashboardComponent {
  users = DUMMY_USERS;
  selectedUser = this.users[0]; // stores the full user object

  onSelectUser(user: User) {
    this.selectedUser = user;
  }
}
