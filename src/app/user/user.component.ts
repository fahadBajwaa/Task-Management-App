import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

//Created a helper function for getting a random index for DUMMY_USERS array.
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); //Math.floor here rounds the number down to the nearest whole number. Math.random provides value in between 0 and 1(return floating-point number).

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // private selectedUsers = DUMMY_USERS[randomIndex];  // In case of private property, it will not be available to template but only within the class.
  selectedUsers = DUMMY_USERS[randomIndex]; // this line declares a class property named selectedUsers and initializes it with a value from the DUMMY_USERS array. In TypeScript, when defining properties within a class, we don't use let or const. These keywords are reserved for variable declarations within function or block scopes.

  //Here, I will declare a "getter" which will perform some computation and use in template file as a property.
  // its essentially a method, it's a function isnside of a class that's usable like a property, it produce and return a new value
  get imagePath() {
    return 'assets/users/' + this.selectedUsers.avatar; //  used this keyword, to access the property of a class from within that same class.
  }

  // method for event
  onSelectUser() {
    // console.log("User clicked")
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); //Math.floor here rounds the number down to the nearest whole number. Math.random provides value in between 0 and 1(return floating-point number).
    this.selectedUsers = DUMMY_USERS[randomIndex];
  }
}
