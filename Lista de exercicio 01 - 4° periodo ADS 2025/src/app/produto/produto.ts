import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-produto',
  imports: [FormsModule, CommonModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css'
})
export class Produto {
    codigo: String | null = null;
    produto: String |null = null;

   
    verificaProd() {
      
      if (this.codigo == '001') {
        this.produto = 'Parafuso';
    
      } else if (this.codigo == '002') {
        this.produto = 'Porca';
    
      
      } else if (this.codigo == '003') {
        this.produto = 'Prego';
    
      } else {
        this.produto = 'Diversos';
      }
    }


}
