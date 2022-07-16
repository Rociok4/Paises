import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap, tap} from 'rxjs/operators'
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private ActivatedRoute: ActivatedRoute, private PaisService: PaisService) { }

  ngOnInit(): void {

    this.ActivatedRoute.params
          .pipe (
            switchMap((param)=> this.PaisService.getPaisPorAlpha(param ['id'])),
            tap(console.log)
          )
        
          .subscribe(pais => {
          this.pais=pais[0];
    })
  }

}
