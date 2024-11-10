import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreationComponent } from './usercreation.component';

describe('UsercreationComponent', () => {
  let component: UsercreationComponent;
  let fixture: ComponentFixture<UsercreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
