import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramTopComponent } from './instagram-top.component';

describe('InstagramTopComponent', () => {
  let component: InstagramTopComponent;
  let fixture: ComponentFixture<InstagramTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
