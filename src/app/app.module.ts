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

const appRoutes: Routes = [
  { path:'admin',component:AdministracionHotelComponent},
  { path:'detalle',component:DetallesHotelComponent},
  { path:'registrar',component:RegistrarComponent},
  { path:'reservar',component:ReservaHotelComponent},
  { path:'',component:SectionComponent}

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
    RegistrarComponent
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
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
