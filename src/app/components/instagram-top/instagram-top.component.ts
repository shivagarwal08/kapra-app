import { InstagramComponent } from './../instagram/instagram.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-instagram-top',
  standalone: true,
  imports: [
    InstagramComponent
  ],
  templateUrl: './instagram-top.component.html',
  styleUrl: './instagram-top.component.scss'
})
export class InstagramTopComponent {

}
