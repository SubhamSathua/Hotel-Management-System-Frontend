import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { BookRoom } from './book-room/book-room';
import { About } from './about/about';
import { NgModule } from '@angular/core';
import { Register } from './register/register';
import { ErrorPage } from './error/error';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { ReceptionDashboard } from './reception-dashboard/reception-dashboard';
import { CustomerDashboard } from './customer-dashboard/customer-dashboard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'book', component: BookRoom },
  { path: 'about', component: About },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'adminDashboard', component: AdminDashboard },
  { path: 'receptionDashboard', component: ReceptionDashboard },
  { path: 'customerDashboard', component: CustomerDashboard },
  
  { path: '**', component: ErrorPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
