import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SectionComponent } from './components/layout/section/section.component';

import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { DetallesHotelComponent } from './components/layout/detalles-hotel/detalles-hotel.component';
import { ReservaHotelComponent } from './components/layout/reserva-hotel/reserva-hotel.component';
import { AdministracionHotelComponent } from './components/layout/administracion-hotel/administracion-hotel.component';
import { RegistrarComponent } from './components/layout/registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  
    FooterComponent,
    SectionComponent,
    DetallesHotelComponent,
    ReservaHotelComponent,
    AdministracionHotelComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    MenuModule,
    BrowserAnimationsModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
