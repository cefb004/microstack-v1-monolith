import { Component } from '@angular/core';
import { UsersComponent } from './components/users/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Microstack-J Frontend';
}

