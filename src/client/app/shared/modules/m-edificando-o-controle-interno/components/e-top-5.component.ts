/** <pre>
 * e-top-5.component
 * =================
 * (created by luiz on Qui, jun, 01, 2017)
 *
 * Lista as 5 primeiras cidades, em ordem de nota do ranking geral
 *
 *  <e-top-5><e-top-5>
 *
 * @see RelatedClass(es)
 * @author luiz
 */

// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, LogService, ILang } from '../../../core/index';
import { Input } from '@angular/core';

// services
import { RankingsService } from '../services/rankings.service';
import { IRankings }       from '../services/IRankings';

// module libs
import { GradacoesDeCores } from '../GradacoesDeCores';


@Component({
  moduleId: module.id,
  selector: 'e-top-5',
  templateUrl: 'e-top-5.component.html',
  styleUrls: ['e-top-5.component.css']
})
export class ETop5Component {

  public top5Cidades: string[] = ['§vazio§', '§vazio§', '§vazio§', '§vazio§', '§vazio§'];
  public top5Notas:   number[] = [-1, -1, -1, -1, -1];

  public errorMessage: string = null;

  // constroi a estrutura 'top5Cidades'
  constructor(private rankingsService: RankingsService,
              private gradacoes: GradacoesDeCores) {
    rankingsService.fetchRankings().subscribe(response => {
      let rankings: IRankings[] = response.sort( (e1, e2) => e2.geral - e1.geral);
      for (let i = 0; i < this.top5Cidades.length; i++) {
        this.top5Cidades[i] = rankings[i].municipio;
        this.top5Notas[i]   = rankings[i].geral;
      }
    }, error => this.errorMessage = < any > error);
  };

}
