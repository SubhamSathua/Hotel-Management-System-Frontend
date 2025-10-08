import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRoomAvailability } from './check-room-availability';

describe('CheckRoomAvailability', () => {
  let component: CheckRoomAvailability;
  let fixture: ComponentFixture<CheckRoomAvailability>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckRoomAvailability]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckRoomAvailability);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
