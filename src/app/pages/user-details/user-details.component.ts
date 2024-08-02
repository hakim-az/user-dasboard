import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const data = await this.userService.getUserById(id);
    this.user = data.data;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
