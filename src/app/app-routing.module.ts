import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './pages/table/table.component';
import { AuthRedirectGuard } from './http-interceptor/auth-redirect-interceptor';

const routes: Routes = [
  { path: 'login', component: HomeComponent, canActivate: [AuthRedirectGuard] },
  { path: 'table', component: TableComponent },
  { path: 'persons', component: TableComponent },
  { path: 'families', component: TableComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page by default
  { path: '**', redirectTo: '/login' }, // Handle any other unknown routes and redirect to login page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
