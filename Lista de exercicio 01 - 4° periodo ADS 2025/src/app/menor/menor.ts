import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-menor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './menor.html',
  styleUrl: './menor.css'
})
export class Menor {
  numero1: number | null = null;
  numero2: number | null = null;
  numero3: number | null = null;
  numero4: number | null = null;
  resultado: number | null=null;

  calMenor(){
    let num1 = Number(this.numero1) || 0 ;
    let num2 = Number(this.numero2) || 0 ;
    let num3 = Number(this.numero3) || 0 ;
    let num4 = Number(this.numero4) || 0 ;

    let menorValor = num1; 
     
    if(num2 <= menorValor){
      menorValor = num2;
    
    }

    if(num3 <= menorValor){
      menorValor = num3;
    }

    if(num4 <= menorValor){
      menorValor = num4;
    }

    this.resultado = menorValor;
  }

}
