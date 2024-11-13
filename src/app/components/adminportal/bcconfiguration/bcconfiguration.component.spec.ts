import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcconfigurationComponent } from './bcconfiguration.component';

describe('BcconfigurationComponent', () => {
  let component: BcconfigurationComponent;
  let fixture: ComponentFixture<BcconfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcconfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
