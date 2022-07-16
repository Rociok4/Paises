import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right:5px
    }
    `
  ]
  
})
export class PorRegionComponent  {
  termino: string = '';
  hayError: boolean = false;

  regiones: string []=['EU','EFTA', 'CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];

  regionActiva: string =''

  paises: Country[]=[]

  constructor(private PaisService: PaisService) { }
  

  getClaseCSS(region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn-outline-primary';
  }

  activarRegion(region: string){

    if (region === this.regionActiva) {return; }

    this.regionActiva = region;
    this.paises = []

    this.PaisService.buscarRegion(region).subscribe(paises=> this.paises = paises)

  }

  

}