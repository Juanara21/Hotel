
  
 export class HotelImpl  {
    nombre: string;
    categoria: number;
    direccion: string;
    telefono: string;
    fechaConstruccion: Date;
    descripcion: string;
   
  
    constructor(
      nombre: string,
      categoria: number,
      direccion: string,
      telefono: string,
      fechaConstruccion: Date,
      descripcion: string,
  
    ) {
      this.nombre = nombre;
      this.categoria = categoria;
      this.direccion = direccion;
      this.telefono = telefono;
      this.fechaConstruccion = fechaConstruccion;
      this.descripcion = descripcion;
   
    }
  }
  
  