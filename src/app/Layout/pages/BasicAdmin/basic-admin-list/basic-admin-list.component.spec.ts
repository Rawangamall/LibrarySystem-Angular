import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAdminListComponent } from './basic-admin-list.component';

describe('BasicAdminListComponent', () => {
  let component: BasicAdminListComponent;
  let fixture: ComponentFixture<BasicAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAdminListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
