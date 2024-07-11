import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [NgbRatingModule],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.scss'
})
export class StarsComponent implements OnInit {
  @Input() rating: number = 0;
  @Input() labelTxt: string = '';

  ngOnInit() {}
}
