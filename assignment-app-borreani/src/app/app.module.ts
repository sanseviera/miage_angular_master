import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button'; 
import { MatDividerModule} from '@angular/material/divider';
import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { NonRenduDirective } from './shared/non-rendu.directive'; 
import { MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule} from '@angular/material/input'; 
import { FormsModule} from '@angular/forms'; 
import { MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatListModule} from '@angular/material/list'; 
import { MatNativeDateModule } from '@angular/material/core';
import { ComposentDetailComponent } from './assignments/composent-detail/composent-detail.component';
import { MatCardModule} from '@angular/material/card';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatGridListModule} from '@angular/material/grid-list'; 
import { MatMenuModule} from '@angular/material/menu'; 
import { MatIconModule} from '@angular/material/icon'; 
import { RouterModule, Routes} from '@angular/router';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { authGuard} from './shared/auth.guard'
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CountComponent } from './count/count.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio'; 
const routes:Routes = [
  { 
    path:'', 
    component:AssignmentsComponent,
  },
  {
    path:'home', 
    component:AssignmentsComponent
  },
  {
    path:'add',
    component:AddAssignmentComponent,
    canActivate: [authGuard]
  },
  {
    path:'assignment/:id', 
    component:ComposentDetailComponent,
    canActivate: [authGuard]
  },
  {
    path:'count',
    component:CountComponent
  },
  {
    path:'assignment/:id/edit', 
    component:EditAssignmentComponent,
    canActivate: [authGuard]
  },
];


@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    NonRenduDirective,
    ComposentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    CountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatSlideToggleModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatRadioModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
