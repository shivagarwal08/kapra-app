import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

const slides = [
  {
    img: 'assets/img/icon-quote.png',
    text: 'Check what clients<br />says about us',
    description: ` Loved my recent purchase from Trendy Threads! My dress arrived
  quickly and looked exactly like the picture online. The fit
  was perfect, and the quality seems great.'d definitely
  recommend Trendy Threads for stylish and well-made clothes,
  just be sure to double-check the return policy before
  ordering.`,
    user: ' Miran Sodagolu'
  },
  {
    img: 'assets/img/icon-quote.png',
    text: 'Check what clients<br />says about us',
    description: `  Loved my recent purchase from Trendy Threads! My dress arrived
  quickly and looked exactly like the picture online. The fit
  was perfect, and the quality seems great.'d definitely
  recommend Trendy Threads for stylish and well-made clothes,
  just be sure to double-check the return policy before
  ordering.`,
    user: ' Miran Sodagolu'
  }
];
@Component({
  selector: 'app-feedback-section',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './feedback-section.component.html',
  styleUrl: './feedback-section.component.scss'
})
export class FeedbackSectionComponent {
  slides = slides;
}
