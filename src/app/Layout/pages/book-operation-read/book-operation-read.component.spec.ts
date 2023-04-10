import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOperationReadComponent } from './book-operation-read.component';

describe('BookOperationReadComponent', () => {
  let component: BookOperationReadComponent;
  let fixture: ComponentFixture<BookOperationReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookOperationReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOperationReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
