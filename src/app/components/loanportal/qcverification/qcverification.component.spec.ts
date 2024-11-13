import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcverificationComponent } from './qcverification.component';

describe('QcverificationComponent', () => {
  let component: QcverificationComponent;
  let fixture: ComponentFixture<QcverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QcverificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QcverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
