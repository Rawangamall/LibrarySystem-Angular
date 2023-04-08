import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardappComponent } from './dashboardapp.component';

describe('DashboardappComponent', () => {
  let component: DashboardappComponent;
  let fixture: ComponentFixture<DashboardappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
