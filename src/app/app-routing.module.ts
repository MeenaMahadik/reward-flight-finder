import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './theme/demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./theme/layout/app.layout.component";
import { AuthGuard, LoginManagerGuard } from './core/guard';
import { DashboardComponent } from './all-modules/features/pages/dashboard/dashboard.component';
export const routes = [
    // { path: 'auth',canActivateChild: [LoginManagerGuard], loadChildren: () => import('./all-modules/auth/auth.module').then(m => m.AuthModule) },
    // { path: '', canActivateChild: [AuthGuard], loadChildren: () => import('./all-modules/features/features.module').then(m => m.FeaturesModule) },
    
    // // theme related routes
    {
        // path: 'theme', component: AppLayoutComponent,
        path: 'dashboard', component: DashboardComponent
        // children: [
        //     { path: '', loadChildren: () => import('./theme/demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
        //     { path: 'dashboard', loadChildren: () => import('./theme/demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
        //     { path: 'uikit', loadChildren: () => import('./theme/demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
        //     { path: 'utilities', loadChildren: () => import('./theme/demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
        //     { path: 'documentation', loadChildren: () => import('./theme/demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
        //     { path: 'blocks', loadChildren: () => import('./theme/demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
        //     { path: 'pages', loadChildren: () => import('./theme/demo/components/pages/pages.module').then(m => m.PagesModule) }
        // ]
    },
    // { path: 'theme/auth', loadChildren: () => import('./theme/demo/components/auth/auth.module').then(m => m.AuthModule) },
    // { path: 'theme/landing', loadChildren: () => import('./theme/demo/components/landing/landing.module').then(m => m.LandingModule) },
    // { path: 'theme/notfound', component: NotfoundComponent },
    { path: '**', redirectTo: '/theme/notfound' },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
