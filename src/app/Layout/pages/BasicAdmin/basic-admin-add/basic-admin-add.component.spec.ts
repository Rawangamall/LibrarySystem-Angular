import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAdminAddComponent } from './basic-admin-add.component';

describe('BasicAdminAddComponent', () => {
  let component: BasicAdminAddComponent;
  let fixture: ComponentFixture<BasicAdminAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAdminAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicAdminAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
