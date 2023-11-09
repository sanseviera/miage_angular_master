import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJobsComponent } from './test-jobs.component';

describe('TestJobsComponent', () => {
  let component: TestJobsComponent;
  let fixture: ComponentFixture<TestJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestJobsComponent]
    });
    fixture = TestBed.createComponent(TestJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
