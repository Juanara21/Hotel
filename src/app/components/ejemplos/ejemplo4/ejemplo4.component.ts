import { Component, OnInit } from '@angular/core';
import { UsuarioI } from 'src/models/user';
@Component({
  selector: 'app-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.css']
})
export class Ejemplo4Component {
 /* ngOnInit(): void {
    let user1:UsuarioI = {
      name: "mr",
      FechaNac: new Date ('2002-08-19'),
      cargo: "Estudiante",
      salario: 0,
      mostrarUsuario(){
        console.log(`
        Nombre: ${user1.name}
        FechaNac: ${user1.FechaNac}
        Cargo: ${user1.cargo}
        Salario: ${user1.salario}
        `)
      },
      edad(): number {
          const fechaActual: Date = new Date();
          const diferenciaEnMilisegundos: number = fechaActual.getTime() - user1.FechaNac.getTime();
          const milisegundosEnUnAnio: number = 1000 * 60 * 60 * 24 * 365.25;
          let edad: number = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnAnio);
         return edad;
      },
    }
    user1.name = "Miguel"
    user1.mostrarUsuario()
    console.log(`La edad de ${user1.name} es ${user1.edad()}`);
  }
*/
}
