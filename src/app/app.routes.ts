import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './pages/details/profile/profile.component';
import { SignComponent } from './pages/sign/sign.component';
import { MachineComponent } from './pages/details/machine/machine.component';
import { MachinesComponent } from './pages/machines/machines.component';
import { SolicitationsComponent } from './pages/solicitations/solicitations.component';
import { OperatorsComponent } from './pages/operators/operators.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'sign',
        pathMatch: 'full'
    },
    {
        path: '',
        component: SignComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
                title: 'Home'
            },
            {
                path: 'profile',
                component: ProfileComponent,
                title: 'Profile'
            },
            {
                path: 'machine',
                component: MachineComponent,
                title: 'Machine'
            },
            {
                path: 'machines',
                component: MachinesComponent,
                title: 'Machines'
            },

            {
                path: 'solicitations',
                component: SolicitationsComponent,
                title: 'Solicitations'
            },

            {
                path: 'operators',
                component: OperatorsComponent,
                title: 'Operators'
            }
        ],
    },

    { path: '**', redirectTo: '/sign' }
];
