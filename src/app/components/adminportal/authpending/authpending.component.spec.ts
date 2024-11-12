import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthpendingComponent } from './authpending.component';

describe('AuthpendingComponent', () => {
  let component: AuthpendingComponent;
  let fixture: ComponentFixture<AuthpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthpendingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
