import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  { path: 'login', loadChildren: './component/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './component/register/register.module#RegisterPageModule' },
  { path: 'homepage', loadChildren: './component/homepage/homepage.module#HomepagePageModule' },
  { path: 'chatpage', loadChildren: './component/chatpage/chatpage.module#ChatpagePageModule' },
  { path: 'menu', loadChildren: './component/menu/menu.module#MenuPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
