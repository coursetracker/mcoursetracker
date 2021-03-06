import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { ListComponent } from './list/list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FontAwesomeModule
  ],
  providers: []
})
export class CoursesModule { }
