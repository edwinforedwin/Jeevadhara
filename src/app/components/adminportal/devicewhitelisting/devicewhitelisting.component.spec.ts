import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicewhitelistingComponent } from './devicewhitelisting.component';

describe('DevicewhitelistingComponent', () => {
  let component: DevicewhitelistingComponent;
  let fixture: ComponentFixture<DevicewhitelistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevicewhitelistingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevicewhitelistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
