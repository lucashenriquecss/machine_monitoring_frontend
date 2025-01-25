import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './pages/details/profile/profile.component';
import { SignComponent } from './pages/sign/sign.component';
import { MachineComponent } from './pages/details/machine/machine.component';

export const routes: Routes = [
  
    {
        path: '',
        redirectTo:'sign',
        pathMatch: 'full'
    },
    {
        path:'',
        component: SignComponent
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
            {
                path:'profile',
                component: ProfileComponent,
                title: 'Profile'
            },
            {
                path:'machine',
                component: MachineComponent,
                title: 'Machine'
            }
        ],
    }, 
  
    { path: '**', redirectTo: '/sign' }
];
