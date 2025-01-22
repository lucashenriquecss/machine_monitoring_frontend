import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { MachineComponent } from './pages/machine/machine.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component: LoginComponent
    }, 
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path:'home',
                component: HomeComponent,
                title: 'Home'
            },
            { path: 'machine/:id', component: MachineComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '/login' } 
];