import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansanctionComponent } from './loansanction.component';

describe('LoansanctionComponent', () => {
  let component: LoansanctionComponent;
  let fixture: ComponentFixture<LoansanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoansanctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
