import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; // Imported Header Component
import { UserComponent } from './user/user.component';

import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent], // this statement will handle all of the imports we are making above. This configuration in the end works together with "standalone" feature, such that it register all the things all the standalone components, foe example that we wanna use in this AppComponent.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS; // in this way, we can expose importing data into the template of our app.
  selectedUserId = 'u1';

  // getter property
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId) !; // the reason we added '!' this mark here is that without it typescript is not sure that we dont find a user at all, and find might returns therefore an undefined as a value, so by using this we asure that we'll always find a user for the selectedUserId
  }

  onSelectUser(id: string) {
    // console.log('Selected user with id ' + id)
    this.selectedUserId = id;
  }
}
