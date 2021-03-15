import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from '../views/sobre/sobre.component';
import { ContatoComponent } from '../views/contato/contato.component';
import { HomeComponent } from '../views/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "sobre", component: SobreComponent },
  { path: "servicos", loadChildren: '../views/servicos/servicos.module#ServicosModule', },
  { path: "contato", component: ContatoComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
