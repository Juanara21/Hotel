import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
      items: MenuItem[]=[];

      ngOnInit() {
          this.items = [
              { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
              { label: 'Nuestros Hoteles', icon: 'pi pi-fw pi-file', routerLink: '/detalle' },
              { label: 'Reservar', icon: 'pi pi-fw pi-calendar' , routerLink: '/reservar'},
              { label: 'Registrarse', icon: 'pi pi-fw pi-pencil', routerLink: '/registrar' },
              { label: 'Registra tus Hoteles', icon: 'pi pi-fw pi-cog' , routerLink: '/admin'  },
              { label: 'ejemplo 4', icon: 'pi pi-fw pi-cog' , routerLink: '/ejemplo4'  },
              { label: 'ejemplo 5', icon: 'pi pi-fw pi-cog' , routerLink: '/ejemplo5'  }
          ];
      }
  }

