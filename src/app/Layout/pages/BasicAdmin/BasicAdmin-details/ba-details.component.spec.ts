import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BADetailsComponent } from './ba-details.component';

describe('BADetailsComponent', () => {
  let component: BADetailsComponent;
  let fixture: ComponentFixture<BADetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BADetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BADetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
