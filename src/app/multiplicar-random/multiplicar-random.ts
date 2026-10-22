import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-multiplicar-random',
  standalone: false,
  styleUrl: './multiplicar-random.css',
  templateUrl: './multiplicar-random.html',
})
export class MultiplicarRandom implements OnInit {
  public numero = 0;
  public numerosRandom: number[] = [];
  public filas = Array.from({ length: 10 });

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  public generarNumeroRandom(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

  public ngOnInit(): void {
    this.numerosRandom = Array.from(
      { length: 5 },
      () => this.generarNumeroRandom(),
    );

    this._activatedRoute.paramMap.subscribe((parametros) => {
      const numeroParametro = Number(parametros.get('numero'));

      if (Number.isInteger(numeroParametro)) {
        this.numero = numeroParametro;
      } else {
        this.numero = this.generarNumeroRandom();
      }
    });
  }
}
