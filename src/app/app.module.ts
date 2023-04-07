import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SectionComponent } from './components/layout/section/section.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { MenuModule } from 'primeng/menu';
import { DetallesHotelComponent } from './components/layout/detalles-hotel/detalles-hotel.component';
import { ReservaHotelComponent } from './components/layout/reserva-hotel/reserva-hotel.component';
import { AdministracionHotelComponent } from './components/layout/administracion-hotel/administracion-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    SectionComponent,
    DetallesHotelComponent,
    ReservaHotelComponent,
    AdministracionHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
