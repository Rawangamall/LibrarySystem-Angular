import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAdminEditComponent } from './basic-admin-edit.component';

describe('BasicAdminEditComponent', () => {
  let component: BasicAdminEditComponent;
  let fixture: ComponentFixture<BasicAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAdminEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
