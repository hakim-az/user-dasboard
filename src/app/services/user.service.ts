import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  async getUsers(page: number): Promise<any> {
    const response = await fetch(`${this.apiUrl}?page=${page}`);
    return await response.json();
  }

  async getUserById(id: number): Promise<any> {
    const response = await fetch(`${this.apiUrl}/${id}`);
    return await response.json();
  }
}
