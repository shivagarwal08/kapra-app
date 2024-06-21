import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDark2Component } from './nav-dark-2.component';

describe('NavDark2Component', () => {
  let component: NavDark2Component;
  let fixture: ComponentFixture<NavDark2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavDark2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDark2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
