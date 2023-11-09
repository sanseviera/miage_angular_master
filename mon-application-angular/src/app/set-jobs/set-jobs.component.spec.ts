import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetJobsComponent } from './set-jobs.component';

describe('SetJobsComponent', () => {
  let component: SetJobsComponent;
  let fixture: ComponentFixture<SetJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetJobsComponent]
    });
    fixture = TestBed.createComponent(SetJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
