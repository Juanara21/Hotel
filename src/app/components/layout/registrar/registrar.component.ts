import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{
 
      Sexo: string[]=[];
      value: string[]=[];
      value1: string[]=[];

      selectedCategory: any = null;

    categories: any[] = [
        { name: 'Masculino', key: 'M' },
        { name: 'Femenino', key: 'F' },
        { name: 'Otro', key: 'O' },
        { name: 'Indefinido', key: 'I' }
    ];

    ngOnInit() {
        this.selectedCategory = this.categories[1];
    }
}
  

