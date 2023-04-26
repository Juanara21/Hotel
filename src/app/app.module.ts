import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SectionComponent } from './components/layout/section/section.component';
import { RouterModule, Routes } from '@angular/router';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { DetallesHotelComponent } from './components/layout/detalles-hotel/detalles-hotel.component';
import { ReservaHotelComponent } from './components/layout/reserva-hotel/reserva-hotel.component';
import { AdministracionHotelComponent } from './components/layout/administracion-hotel/administracion-hotel.component';
import { RegistrarComponent } from './components/layout/registrar/registrar.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselService } from './servicios/carousel/carousel.service';
import { CarouselModule } from 'primeng/carousel';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { Ejemplo4Component } from './components/ejemplos/ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './components/ejemplos/ejemplo5/ejemplo5.component';

const appRoutes: Routes = [
  { path:'admin',component:AdministracionHotelComponent},
  { path:'detalle',component:DetallesHotelComponent},
  { path:'registrar',component:RegistrarComponent},
  { path:'reservar',component:ReservaHotelComponent},
  { path:'',component:SectionComponent},
  { path:'InicioSesion',component:InicioSesionComponent},
  { path:'ejemplo4',component:Ejemplo4Component},
  { path:'ejemplo5',component:Ejemplo5Component}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    DetallesHotelComponent,
    ReservaHotelComponent,
    AdministracionHotelComponent,
    RegistrarComponent,
    InicioSesionComponent,
    Ejemplo4Component,
    Ejemplo5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    RouterModule.forRoot(appRoutes),
    MenuModule,
    BrowserAnimationsModule,
    TabMenuModule,
    ButtonModule,
    PasswordModule,
    FormsModule,
    InputTextModule,
    RadioButtonModule,
    DataViewModule,
    CardModule,
    GalleriaModule,
    CarouselModule



  ],
  providers: [
    CarouselService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
