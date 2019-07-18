import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { HomepagePage } from './homepage.page';
import { MenuPageModule } from '../menu/menu.module';
import { MenuPage } from '../menu/menu.page';


const routes: Routes = [
  {
    path: '',
    component: HomepagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MenuPageModule
  ],
  declarations: [HomepagePage]
})
export class HomepagePageModule {}
