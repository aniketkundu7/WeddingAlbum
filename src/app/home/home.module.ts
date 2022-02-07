import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatTabsModule } from '@angular/material/tabs';
import {ChartModule} from "./chart/chart.module";
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    ChartModule,
    SidebarModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    GalleriaModule,
  ] 
})
export class HomeModule { }
