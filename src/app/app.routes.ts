import { Routes } from '@angular/router';
import { HomepageComponent } from './showcase/homepage/homepage.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { PageNotFoundComponent } from './other/page-not-found/page-not-found.component';
import { snippetsRoutes } from './snippets/snippets.routes';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'signin', component: SignInComponent },
    { path: 'snippets', loadChildren: () => import('./snippets/snippets.routes').then(m => m.snippetsRoutes)},
    { path: '**', component: PageNotFoundComponent }
];
