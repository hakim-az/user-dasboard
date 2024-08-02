import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  loading = false;
  currentPage = 1;
  totalPages = 1;
  userNotFound = false; // New property

  constructor(private userService: UserService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    await this.loadUsers(this.currentPage);
  }

  async loadUsers(page: number): Promise<void> {
    this.loading = true;
    try {
      const data = await this.userService.getUsers(page);
      this.users = data.data;
      this.filteredUsers = this.users;
      this.totalPages = data.total_pages;
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      this.loading = false;
    }
  }

  async onPageChange(page: number): Promise<void> {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      await this.loadUsers(this.currentPage);
    }
  }

  filterUsers(searchValue: string = ''): void {
    if (searchValue) {
      this.filteredUsers = this.users.filter((user) =>
        user.id.toString().includes(searchValue)
      );
      this.userNotFound = this.filteredUsers.length === 0;
    } else {
      this.filteredUsers = this.users;
      this.userNotFound = false;
    }
  }

  onSearch(searchValue: string): void {
    this.filterUsers(searchValue);
  }

  onUserDetails(id: number): void {
    this.router.navigate(['/user', id]);
  }
}
