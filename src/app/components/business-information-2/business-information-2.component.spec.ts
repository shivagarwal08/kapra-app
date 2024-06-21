import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInformation2Component } from './business-information-2.component';

describe('BusinessInformation2Component', () => {
  let component: BusinessInformation2Component;
  let fixture: ComponentFixture<BusinessInformation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessInformation2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessInformation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
