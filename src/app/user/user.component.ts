import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

//Created a helper function for getting a random index for DUMMY_USERS array.
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);  //Math.floor here rounds the number down to the nearest whole number. Math.random provides value in between 0 and 1(return floating-point number).

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUsers = DUMMY_USERS[randomIndex]; // this line declares a class property named selectedUsers and initializes it with a value from the DUMMY_USERS array. In TypeScript, when defining properties within a class, we don't use let or const. These keywords are reserved for variable declarations within function or block scopes.
}
