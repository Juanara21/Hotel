import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-hotel',
  templateUrl: './reserva-hotel.component.html',
  styleUrls: ['./reserva-hotel.component.css']
})
export class ReservaHotelComponent implements OnInit{
  ngOnInit(): void {
    const mostrarNombreYEdad = (nombre: string, edad: number) =>
      `Nombre: ${nombre} Edad: ${edad} años`

    console.log(mostrarNombreYEdad('Miguel', 20));
/*
    const factorial = (num: number): number | string => {
      if (num < 0) {
        return 'Error: el número debe ser positivo';
      } else if (num === 0) {
        return 1;
      } else {
        let resultado = 1;
        for (let i = 1; i <= num; i++) {
          resultado *= i;
        }
        return resultado;
      }
    };
    console.log(factorial(0));
    function taylorE(x: number, n: number): number {
      let result = 0;
      for (let i = 0; i < n; i++) {
        result += Math.pow(x, i) / factorial(i);
      }
      return result;
    }

    function factorial(n: number): number {
      if (n === 0 || n === 1) {
        return 1;
      }
      return n * factorial(n - 1);
    }

    const x = 2;
    const n = 10;
    console.log(`Valor de e^x usando la serie de Taylor con centro en cero: ${taylorE(x, n)}`);
    */
    /*function decToBin(x: number): string {
      if (x === 0) {
        return "0";
      }
      let result = "";
      while (x > 0) {
        result = (x % 2).toString() + result;
        x = Math.floor(x / 2);
      }
      return result;
    }

    const x = parseInt(prompt("Ingrese un número entero: "));
    const binario = decToBin(x);
    console.log(`El número ${x} en binario es: ${binario}`);
    */
  }
}
