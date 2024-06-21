import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-no-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './no-item.component.html',
  styleUrl: './no-item.component.scss'
})
export class NoItemComponent {

}
