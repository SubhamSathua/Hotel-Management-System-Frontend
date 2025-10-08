import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { BookRoom } from './book-room/book-room';
import { About } from './about/about';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'home', component: Home },
    { path: 'book', component: BookRoom },
    { path: 'about', component: About },
    { path: 'login', component: Login }
];
