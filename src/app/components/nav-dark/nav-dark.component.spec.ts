import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDarkComponent } from './nav-dark.component';

describe('NavDarkComponent', () => {
  let component: NavDarkComponent;
  let fixture: ComponentFixture<NavDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavDarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
