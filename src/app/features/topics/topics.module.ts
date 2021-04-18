import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    FontAwesomeModule
  ]
})
export class TopicsModule { }
