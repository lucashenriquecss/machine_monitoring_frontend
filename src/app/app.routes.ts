import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './pages/details/profile/profile.component';
import { SignComponent } from './pages/sign/sign.component';
import { MachineComponent } from './pages/details/machine/machine.component';
import { MachinesComponent } from './pages/machines/machines.component';
import { SolicitationsComponent } from './pages/solicitations/solicitations.component';
import { OperatorsComponent } from './pages/operators/operators.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'sign',
        pathMatch: 'full'
    },
    {
        path: 'sign',
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
            { path: 'profile/:id', component: ProfileComponent },
            { path: 'machine/:id', component: MachineComponent },
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
        canActivate: [AuthGuard]
    },

    { path: '**', redirectTo: '/sign' }
];
