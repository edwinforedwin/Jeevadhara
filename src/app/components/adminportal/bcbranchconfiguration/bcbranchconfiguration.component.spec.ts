import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcbranchconfigurationComponent } from './bcbranchconfiguration.component';

describe('BcbranchconfigurationComponent', () => {
  let component: BcbranchconfigurationComponent;
  let fixture: ComponentFixture<BcbranchconfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcbranchconfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcbranchconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
