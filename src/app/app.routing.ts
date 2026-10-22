import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from './home-component/home-component';
import { CineComponent } from './cine-component/cine-component';
import { MusicaComponent } from './musica-component/musica-component';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { NumeroDobleComponent } from './numero-doble-component/numero-doble-component';
import { MenuTablaMultiplicar } from './menu-tabla-multiplicar/menu-tabla-multiplicar';
import { MultiplicarRandom } from './multiplicar-random/multiplicar-random';

//NECESITAMOS UN ARRAY CON LAS RUTAS 
//DIHO ARRAY DEBE SER DE LA CLASE ROUTES

const appRoutes:Routes=[
    {path:"",component:HomeComponent},
    {path:"cine",component:CineComponent},
    {path:"musica",component:MusicaComponent},
    {path:"numero",component:NumeroDobleComponent},
    {path:"numero/:doble",component:NumeroDobleComponent},
    {path:"tabla/:numero",component:MultiplicarRandom},
    {path:"**",component:NotFoundComponent}
    ];

export const appRoutingProviders:any[]=[]
export const routing:ModuleWithProviders<any>=
RouterModule.forRoot(appRoutes);
