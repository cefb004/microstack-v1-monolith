import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../services/user.service';  // <- confere o nome aqui!

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.html',
  styleUrls: ['./users.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ]
})
export class UsersComponent implements OnInit {
  userForm!: FormGroup;
  users: any[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    // ✅ Criação imediata do FormGroup
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.loadUsers();
  }

  loadUsers() {
    this.isLoading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar usuários:', err);
        this.errorMessage = 'Erro ao carregar usuários.';
        this.isLoading = false;
      }
    });
  }

  addUser() {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;
      this.userService.addUser(newUser).subscribe({
        next: user => {
          this.users.push(user);
          this.userForm.reset();
        },
        error: () => (this.errorMessage = 'Erro ao adicionar usuário.')
      });
    }
  }

  deleteUser(id: number) {
    console.log(`Excluir usuário com id: ${id}`);
    this.users = this.users.filter(user => user.id !== id);
  }
}

