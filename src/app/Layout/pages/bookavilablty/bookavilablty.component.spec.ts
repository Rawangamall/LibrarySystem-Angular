import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookavilabltyComponent } from './bookavilablty.component';

describe('BookavilabltyComponent', () => {
  let component: BookavilabltyComponent;
  let fixture: ComponentFixture<BookavilabltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookavilabltyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookavilabltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
