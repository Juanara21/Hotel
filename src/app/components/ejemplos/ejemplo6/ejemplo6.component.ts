import { Component, OnInit } from '@angular/core';
import { UsuarioI } from 'src/models/user';
@Component({
  selector: 'app-ejemplo6',
  templateUrl: './ejemplo6.component.html',
  styleUrls: ['./ejemplo6.component.css']
})
export class Ejemplo6Component implements OnInit {
  public  usuario:UsuarioI[] = [

  ];
  ngOnInit(): void {
      this.agregarDatos();
      console.log(this.usuario);
  }
agregarDatos(){
  this.usuario = [
    {
      name: "Mr",
      FechaNac: new Date ("2002-08-19"),
      cargo: "Estudiante",
      salario: 0
  },
  {
    name: "Mr2",
    FechaNac: new Date ("2002-08-19"),
    cargo: "Estudiante",
    salario: 10000
}
  ]
}

}
