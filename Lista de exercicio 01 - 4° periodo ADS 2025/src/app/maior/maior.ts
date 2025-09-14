import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';



@Component({
  selector: 'app-maior',
  standalone:true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './maior.html',
  styleUrl: './maior.css'
})
export class Maior {
  valor1: number|null = null;
  valor2: number | null = null;
  resultado: number | null = null;

  calcMaior(){
    let numero1 = Number(this.valor1) ||0;
    let numero2 = Number(this.valor2) ||0;

    if(numero1 >= numero2){
      this.resultado = numero1;
    }else{
      this.resultado = numero2
    }
}
  }
  
  
