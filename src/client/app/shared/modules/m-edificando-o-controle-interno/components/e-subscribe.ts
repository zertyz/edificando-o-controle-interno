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
import { Response, Http } from '@angular/http';
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

interface SubscriptionHttpPostObject {
  nome:     string;
  email:    string;
  mensagem: string;
}

@Component({
  moduleId: module.id,
  selector: 'e-subscribe-content',
  templateUrl: 'e-subscribe.html',
  styleUrls: ['e-subscribe.css']
})
export class ESubscribeContentComponent {

  /* http */
  private httpPostOptions: any             = {headers: {'Content-Type': 'application/json'}};
  //private httpPostUrl: string              = 'http://apps.mprj.mp.br/eci/api/Aux/mailHLP';
  private httpPostUrl: string              = '/eci/api/Aux/mailHLP';  // depende do proxy configurado em 'project.config.ts'
  private subscriptionErrorMessage: string = null;

  public isPosting:  boolean = false;
  public subscribed: boolean = false;
  public email:      string  = "";

  constructor(public activeModal: NgbActiveModal,
              private console: ConsoleService,
              private http: Http) {
    console.log("ESubscribeContentComponent construído");
  }

  subscribe() {
    this.isPosting  = true;
    let postData: SubscriptionHttpPostObject = {
      nome:     'Visitante WEB anônimo',
      email:    this.email,
      mensagem: 'Favor inscrever-me na lista de esperar para a divulgação dos dados definitivos do projeto ECI, v 1.',
    }
    let p: Observable<SubscriptionHttpPostObject> = this.http.post(this.httpPostUrl, postData, this.httpPostOptions)
      .map(this.handleHttpPost)
      .catch(this.handleHttpError);
    p.subscribe(
      postResult => {                                                         this.isPosting = false; this.subscribed = true;},
      error      => {this.subscriptionErrorMessage = <any>error;              this.isPosting = false; this.subscribed = false;}
    );
  }

  public handleHttpPost(res: Response) {
    this.isPosting  = false;
    this.subscribed = true;
    let body = res.json();
    return body.data || {};
  }

  public handleHttpError(error: Response | any) {
    this.isPosting                = false;
    this.subscribed               = false;
    this.subscriptionErrorMessage = (error.message || error);
    return Observable.throw(error.message || error);
  }

}

@Component({
  selector: 'e-subscribe',
  template: `<e-subscribe-content></e-subscribe-content>`,
  styles: [':host {display: none}'],
})
export class ESubscribeComponent implements OnInit {

  static maxModalAutoShow: number = 1;

  constructor(private modalService: NgbModal,
              private console: ConsoleService) {
    console.log("ESubscribeComponent construído");
  }

  ngOnInit() {
    if (ESubscribeComponent.maxModalAutoShow > 0) {
      const modalRef = this.modalService.open(ESubscribeContentComponent, {size: 'lg'});
      ESubscribeComponent.maxModalAutoShow--;
    }
  }

}

