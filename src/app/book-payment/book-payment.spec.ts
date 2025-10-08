import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPayment } from './book-payment';

describe('BookPayment', () => {
  let component: BookPayment;
  let fixture: ComponentFixture<BookPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
