import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HomeComponent } from './home-component/home-component';
import { MusicaComponent } from './musica-component/musica-component';
import { CineComponent } from './cine-component/cine-component';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { appRoutingProviders, routing } from './app.routing';
import { MenuComponent } from './menu-component/menu-component';
import { NumeroDobleComponent } from './numero-doble-component/numero-doble-component';
import { MenuTablaMultiplicar } from './menu-tabla-multiplicar/menu-tabla-multiplicar';
import { MultiplicarRandom } from './multiplicar-random/multiplicar-random';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    NotFoundComponent,
    MenuComponent,
    NumeroDobleComponent,
    MenuTablaMultiplicar,
    MultiplicarRandom
  ],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProviders],
  bootstrap: [App],
})
export class AppModule {}
