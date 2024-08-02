import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { HeaderComponent } from './components/header/header.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';

const userRoutes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'user/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  declarations: [
    UsersListComponent,
    UserDetailsComponent,
    HeaderComponent,
    UserCardComponent,
    PaginationComponent,
  ],
})
export class UserModule {}
