import { Component, OnInit } from '@angular/core';
import { HotelImpl } from 'src/app/models/hotel';




@Component({
  selector: 'app-detalles-hotel',
  templateUrl: './detalles-hotel.component.html',
  styleUrls: ['./detalles-hotel.component.css']
})
export class DetallesHotelComponent {

  constructor() { }

  ngOnInit():  void {

    let hotel1 = new HotelImpl(
      'Hilton Garden Inn Santa Marta',
      5,
      'Carrera 1 #24-17, Santa Marta',
      '+57 5 4362200',
      new Date('2016-01-01'),
      'El Hilton Garden Inn Santa Marta está ubicado en la zona de Bello Horizonte de Santa Marta, a solo 2 km del aeropuerto internacional Simón Bolívar. Ofrece piscina al aire libre y centro de fitness.',
      
     
    );
    
    console.log(`
    Nombre: ${hotel1.nombre}
    Categoría: ${hotel1.categoria} estrellas
    Dirección: ${hotel1.direccion}
    Teléfono: ${hotel1.telefono}
    Fecha de construcción: ${hotel1.fechaConstruccion}
    Descripción: ${hotel1.descripcion}
    

    
  `);
    
}
}

