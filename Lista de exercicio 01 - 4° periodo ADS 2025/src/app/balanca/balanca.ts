import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-balanca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './balanca.html',
  styleUrl: './balanca.css',
})
export class BalancaComponent {
  valorQuilo: number | null = null;
  produtoQuanti: number | null = null;
  total: string | null = null;

  pesar() {
    let n1 = Number(this.valorQuilo) || 0;
    let n2 = Number(this.produtoQuanti) || 0;
     

     let valorTotal= n1 * n2;
    this.total = valorTotal.toFixed(2);
  }
}
