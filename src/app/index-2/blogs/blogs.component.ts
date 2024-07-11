import { Component } from '@angular/core';

const blogs = [
  {
    img: 'assets/img/blog-img-1.png',
    date: {
      day: 30,
      month: 'Apr'
    },
    user: {
      img: 'assets/img/user-2.png',
      name: 'Cody Fisher'
    },
    info: {
      title: 'DESIGN',
      heading: 'In the world of trending design',
      description: 'In the world of user-centric design and discover how thoughtf'
    }

  },
  {
    img: 'assets/img/blog-img-2.png',
    date: {
      day: 30,
      month: 'Apr'
    },
    user: {
      img: 'assets/img/user.jpg',
      name: 'Cody Fisher'
    },
    info: {
      title: 'DESIGN',
      heading: 'Basic Rules of Thumb in Retro',
      description: 'In the world of user-centric design and discover how thoughtf'
    }

  },
  {
    img: 'assets/img/blog-img-3.png',
    date: {
      day: 30,
      month: 'Apr'
    },
    user: {
      img: 'assets/img/user-1.png',
      name: 'Cody Fisher'
    },
    info: {
      title: 'DESIGN',
      heading: '8 Rules of Thumb in UI Design',
      description: 'In the world of user-centric design and discover how thoughtf'
    }

  }
]
@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  blogs = blogs

}
