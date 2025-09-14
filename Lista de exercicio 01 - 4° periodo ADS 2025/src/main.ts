import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SomaComponent } from './app/soma/soma';
import { TrocoComponent } from './app/troco/troco';
import { CalcMedia } from './app/calc-media/calc-media';
import {BalancaComponent} from './app/balanca/balanca';
import {Porcentagem} from './app/porcentagem/porcentagem';
import {Maior} from './app/maior/maior';
import {Menor}  from './app/menor/menor';
import {Impar} from './app/impar/impar';
import {Produto} from './app/produto/produto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SomaComponent, TrocoComponent, CalcMedia, BalancaComponent,Porcentagem, Maior, Menor, Impar, Produto
  ], 
  template: `
    <app-soma></app-soma>
   <app-troco></app-troco>
  <app-calc-media></app-calc-media>
   <app-balanca></app-balanca>
   <app-porcentagem></app-porcentagem>
   <app-maior></app-maior>
   <app-menor></app-menor>
   <app-impar></app-impar>
   <app-produto></app-produto>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
