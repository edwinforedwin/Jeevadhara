import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdataupdationComponent } from './customerdataupdation.component';

describe('CustomerdataupdationComponent', () => {
  let component: CustomerdataupdationComponent;
  let fixture: ComponentFixture<CustomerdataupdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerdataupdationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerdataupdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
