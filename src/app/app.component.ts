import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; // Imported Header Component
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent], // this statement will handle all of the imports we are making above. This configuration in the end works together with "standalone" feature, such that it register all the things all the standalone components, foe example that we wanna use in this AppComponent.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
