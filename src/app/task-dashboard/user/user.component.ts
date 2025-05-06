import { Component, EventEmitter, Input, Output } from '@angular/core';

// We can use 'type alias' or 'interface' for more cleaner code.
// Since we are using model here now, so we will just import interface from model file.
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<User>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user); //  'select' property is used to emit a new value.
  }
}
// export { User };
