import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOperationBorrowComponent } from './book-operation-borrow.component';

describe('BookOperationBorrowComponent', () => {
  let component: BookOperationBorrowComponent;
  let fixture: ComponentFixture<BookOperationBorrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookOperationBorrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOperationBorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
