import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from "@angular/router";
@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})

export class NumeroDobleComponent implements OnInit{
  
public doble!: number;
public numero!: number;

  constructor(private _activatedRoute: ActivatedRoute) { 
    this.doble=0;
    

  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parametros:Params)=>{
      if(parametros['doble'] !=null){
        this.numero=parseInt(parametros['doble']);
        this.doble=this.numero*2;
      }
    });
  }
}
