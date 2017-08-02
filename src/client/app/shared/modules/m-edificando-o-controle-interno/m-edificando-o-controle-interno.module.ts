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
         ELinkComponent,
         EMapaInterativoComponent,
         ERankingGeralComponent,
         ETop5Component,
         ESubscribeComponent, ESubscribeContentComponent } from './components/index';

// services
import { RankingsService } from './services/rankings.service';
import { IRankings }       from './services/IRankings';

// bootstrap?
import { NgbModule,
         NgbDropdown, NgbDropdownModule,
         NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// injectable libs
import { GradacoesDeCores } from './GradacoesDeCores';

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
    ELinkComponent,
    EMapaInterativoComponent,
    ERankingGeralComponent,
    ETop5Component,
    ESubscribeComponent, ESubscribeContentComponent,
  ],
  exports: [
    EStatusEdificacaoComponent,
    EDimensoesComponent,
    ELinkComponent,
    EMapaInterativoComponent,
    ERankingGeralComponent,
    ETop5Component,
    ESubscribeComponent, ESubscribeContentComponent,
  ],
  entryComponents: [
    ESubscribeContentComponent,
  ],
  providers: [
    RankingsService,
    GradacoesDeCores,
    NgbModule,
    NgbDropdown,
    NgbActiveModal,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MEdificandoOControleInternoModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MEdificandoOControleInternoModule,
      providers: [RankingsService, GradacoesDeCores, NgbModule, NgbDropdown]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: MEdificandoOControleInternoModule) {
    if (parentModule) {
      throw new Error('MEdificandoOControleInternoModule already loaded; Import in root module only.');
    }
  }
}
