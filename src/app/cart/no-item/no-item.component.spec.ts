import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoItemComponent } from './no-item.component';

describe('NoItemComponent', () => {
  let component: NoItemComponent;
  let fixture: ComponentFixture<NoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
