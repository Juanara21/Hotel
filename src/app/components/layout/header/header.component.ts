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
              { label: 'Home', icon: 'pi pi-fw pi-home' },
              { label: 'Nuestros Hoteles', icon: 'pi pi-fw pi-file' },
              { label: 'Reservar', icon: 'pi pi-fw pi-calendar' },
              { label: 'Registrarse', icon: 'pi pi-fw pi-pencil' },
              { label: 'Administracion', icon: 'pi pi-fw pi-cog' }
          ];
      }
  }

  