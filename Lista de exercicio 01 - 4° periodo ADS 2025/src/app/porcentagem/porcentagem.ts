import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-porcentagem',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './porcentagem.html',
  styleUrl: './porcentagem.css'
})
export class Porcentagem {
  saldo: number | null = null;
  percent: string | null = null ;
  saldoTotal: string | null = null;

  porcentagem(){
    let num= Number (this.saldo) ||0;
    let porcentagem = 1/100;

    let valorTotal =  num + (num * porcentagem);
    this.saldoTotal = valorTotal.toFixed(2);
  }
  

}
