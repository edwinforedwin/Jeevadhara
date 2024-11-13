import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanreportsComponent } from './loanreports.component';

describe('LoanreportsComponent', () => {
  let component: LoanreportsComponent;
  let fixture: ComponentFixture<LoanreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanreportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
