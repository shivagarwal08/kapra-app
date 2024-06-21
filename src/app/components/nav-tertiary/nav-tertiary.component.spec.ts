import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTertiaryComponent } from './nav-tertiary.component';

describe('NavTertiaryComponent', () => {
  let component: NavTertiaryComponent;
  let fixture: ComponentFixture<NavTertiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavTertiaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTertiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
