import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ComponentFixture } from '@angular/core/testing';
import { AddWorkComponent } from './add-work/add-work.component';
import { AssignmentsComponent } from './assignments/assignments.component';

import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { ComponentDetailComponent } from './assignments/component-detail/component-detail.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { SetJobsComponent } from './set-jobs/set-jobs.component';
import { DeleteJobsComponent } from './delete-jobs/delete-jobs.component';
import { TestJobsComponent } from './test-jobs/test-jobs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddWorkComponent,
    AssignmentsComponent,
    ComponentDetailComponent,
    JobsListComponent,
    SetJobsComponent,
    DeleteJobsComponent,
    TestJobsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,


    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'add-work', component: AddWorkComponent},
      {path: 'jobs-list', component: JobsListComponent},
      {path: 'delete-jobs', component: DeleteJobsComponent},
      {path: 'set-jobs', component: SetJobsComponent},
      {path: 'test-jobs', component: TestJobsComponent},


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
