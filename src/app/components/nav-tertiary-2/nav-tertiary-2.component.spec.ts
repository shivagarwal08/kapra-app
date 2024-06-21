import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTertiary2Component } from './nav-tertiary-2.component';

describe('NavTertiary2Component', () => {
  let component: NavTertiary2Component;
  let fixture: ComponentFixture<NavTertiary2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavTertiary2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTertiary2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
