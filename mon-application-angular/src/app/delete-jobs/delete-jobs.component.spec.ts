import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJobsComponent } from './delete-jobs.component';

describe('DeleteJobsComponent', () => {
  let component: DeleteJobsComponent;
  let fixture: ComponentFixture<DeleteJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteJobsComponent]
    });
    fixture = TestBed.createComponent(DeleteJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
