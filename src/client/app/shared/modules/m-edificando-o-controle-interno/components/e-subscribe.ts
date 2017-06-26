/** <pre>
 * e-subscribe.ts
 * ==============
 * (created by luiz on Qui, jun, 22, 2017)
 *
 * Componente para colher o email do visitante, de modo a subescrevê-lo na mala-direta.
 *
 * Recebe as seguintes propriedades:
 *  municipio:         o município para o qual deve se apresentar o status da edificação do controle interno.
 *                     Pode ser uma string com o nome exato do município, ou um número, com sua posição no array do ranking
 *  dimensao:          o nome do campo de 'IRankings' que deve ser usado para ordenar os valores
 *
 * Exemplo de uso:
 *
 *  <e-status-edificacao municipio="Rio de Janeiro" dimensao="geral"></e-status-edificacao>
 *
 * @see RelatedClass(es)
 * @author luiz
 */

// libs
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, LogService, ILang } from '../../../core/index';
import { Input } from '@angular/core';

import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { ConsoleService } from '../../../core/index';

// services
import { RankingsService } from '../services/rankings.service';
import { IRankings }       from '../services/IRankings';
import { IDadosMunicipio } from '../services/IDadosMunicipio';

// module libs
import { GradacoesDeCores } from '../GradacoesDeCores';


@Component({
  moduleId: module.id,
  selector: 'e-subscribe-content',
  templateUrl: 'e-subscribe.html',
  styleUrls: ['e-subscribe.css']
})
export class ESubscribeContentComponent {

  public subscribed: boolean = false;
  public email:      string  = "";

  constructor(public activeModal: NgbActiveModal,
              private console: ConsoleService) {
    console.log("ESubscribeContentComponent construído");
  }

  subscribe() {
    this.subscribed = true;
  }

}

@Component({
  selector: 'e-subscribe',
  template: `<e-subscribe-content></e-subscribe-content>`,
  styles: [':host {display: none}'],
})
export class ESubscribeComponent implements OnInit {

  constructor(private modalService: NgbModal,
              private console: ConsoleService) {
    console.log("ESubscribeComponent construído");
  }

  ngOnInit() {
    const modalRef = this.modalService.open(ESubscribeContentComponent, {size: 'lg'});
  }

}

