import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandashboardComponent } from './loandashboard.component';

describe('LoandashboardComponent', () => {
  let component: LoandashboardComponent;
  let fixture: ComponentFixture<LoandashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoandashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoandashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
