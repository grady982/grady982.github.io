import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  onMenuItemClick(item: string): void {
    window.location.href = `/home#${item}`;
  }
}
