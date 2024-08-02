import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user: any;
  @Output() viewDetails = new EventEmitter<number>();

  onViewDetails(): void {
    this.viewDetails.emit(this.user.id);
  }
}
