import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  
})

export class PorCapitalComponent implements OnInit {

    termino: string = '';
    hayError: boolean = false;
    paises: Country[] = []

  constructor(private PaisService:PaisService) { }

  buscar(termino: string){
    this.hayError=false;
    this.termino = termino;

    console.log(this.termino);
    this.PaisService.buscarCapital(this.termino)
      .subscribe({
        next: (paises) => {
          console.log(paises);
          this.paises = paises;
        },
        error: (err) => {
          this.hayError = true;
          this.paises= [];
        }
      });
  }



  

  ngOnInit(): void {
  }

}
