import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-impar',
  imports: [FormsModule,CommonModule],
  templateUrl: './impar.html',
  styleUrl: './impar.css'
})
export class Impar {
  num: number | null = null;
  resultado: string | null = null;

  impar(){
    let num = Number(this.num) || 0 ;

    if( num % 2 !== 0){

    this.resultado = "Impar"

    }else{
      this.resultado = "Par"
    }

  }

}
