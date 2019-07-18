import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageModule } from '../menu/menu.module';

import { IonicModule } from '@ionic/angular';

import { ChatpagePage } from './chatpage.page';

const routes: Routes = [
  {
    path: '',
    component: ChatpagePage
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
  declarations: [ChatpagePage]
})
export class ChatpagePageModule {}
