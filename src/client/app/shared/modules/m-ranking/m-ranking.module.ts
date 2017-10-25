/** <pre>
 * m-ranking.module.ts
 * ===================
 * (created by luiz on Wed, oct, 25, 2017)
 *
 * Este modulo define os componentes para a exibição de um ranking, com gradações de fases e documentações sobre a metodologia utilizada.
 *
 * Foi refatorado do projeto "Edificando o Controle Interno" e precisa de uma rearquitetura para ficar mais modular, especialmente nas
 * definições dos arquivos de dados, interfaces e regras de apresentação (typescript e scss). -- 25/10/17
 *
 * @see RelatedClass(es)
 * @author luiz
 */

// angular
import { NgModule, ModuleWithProviders, Optional, SkipSelf, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

// app
import { Config } from '../../../modules/core/index';

// components
import { EStatusEdificacaoComponent,
         EDimensoesComponent,
         ERankingGeralComponent,
         ETop5Component                } from './components/index';

// services
import { RankingsService } from './services/rankings.service';
import { IRankings }       from './services/IRankings';

// bootstrap?
import { NgbModule,
         NgbDropdown, NgbDropdownModule,
         NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// injectable libs
import { RegrasDeApresentacao } from './RegrasDeApresentacao';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    NgbModule,
    NgbDropdownModule,
  ],
  declarations: [
    EStatusEdificacaoComponent,
    EDimensoesComponent,
    ERankingGeralComponent,
    ETop5Component,
  ],
  exports: [
    EStatusEdificacaoComponent,
    EDimensoesComponent,
    ERankingGeralComponent,
    ETop5Component,
  ],
  entryComponents: [
  ],
  providers: [
    RankingsService,
    RegrasDeApresentacao,
    NgbModule,
    NgbDropdown,
    NgbActiveModal,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MRankingModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MRankingModule,
      providers: [RankingsService, RegrasDeApresentacao, NgbModule, NgbDropdown]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: MRankingModule) {
    if (parentModule) {
      throw new Error('MRankingModule already loaded; Import in root module only.');
    }
  }
}
