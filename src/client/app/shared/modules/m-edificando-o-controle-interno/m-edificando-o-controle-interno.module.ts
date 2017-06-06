// angular
import { NgModule, ModuleWithProviders, Optional, SkipSelf, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

// app
import { Config } from '../../core/index';

// components
import { EStatusEdificacaoComponent,
         EDimensoesComponent,
         ELinkComponent,
         EMapaInterativoComponent,
         ERankingGeralComponent,
         ETop5Component } from './components/index';

// services
import { RankingsService } from './services/rankings.service';
import { IRankings }       from './services/IRankings';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    EStatusEdificacaoComponent,
    EDimensoesComponent,
    ELinkComponent,
    EMapaInterativoComponent,
    ERankingGeralComponent,
    ETop5Component,
  ],
  exports: [
    EStatusEdificacaoComponent,
    EDimensoesComponent,
    ELinkComponent,
    EMapaInterativoComponent,
    ERankingGeralComponent,
    ETop5Component,
  ],
  providers: [
    RankingsService,
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
      providers: [RankingsService]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: MEdificandoOControleInternoModule) {
    if (parentModule) {
      throw new Error('MEdificandoOControleInternoModule already loaded; Import in root module only.');
    }
  }
}
