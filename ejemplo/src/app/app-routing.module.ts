import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'principal', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) }, 
{ path: 'foto', loadChildren: () => import('./fotos/fotos.module').then(m => m.FotosModule) },
{ path: 'ventas', loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
