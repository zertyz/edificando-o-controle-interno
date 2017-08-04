// angular
import { NgModule, ModuleWithProviders, Optional, SkipSelf, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

// app
import { Config } from '../../../modules/core/index';

// components
import { MPLinkComponent,
         MPMapaInterativoComponent,
         MPSubscribeComponent, MPSubscribeContentComponent } from './components/index';

// services
import { RankingsService } from './services/rankings.service';
import { IRankings }       from './services/IRankings';

// bootstrap?
import { NgbModule,
         NgbDropdown, NgbDropdownModule,
         NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
    MPLinkComponent,
    MPMapaInterativoComponent,
    MPSubscribeComponent, MPSubscribeContentComponent,
  ],
  exports: [
    MPLinkComponent,
    MPMapaInterativoComponent,
    MPSubscribeComponent, MPSubscribeContentComponent,
  ],
  entryComponents: [
    MPSubscribeContentComponent,
  ],
  providers: [
    RankingsService,
    NgbModule,
    NgbDropdown,
    NgbActiveModal,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MPRJModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MPRJModule,
      providers: [RankingsService, NgbModule, NgbDropdown]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: MPRJModule) {
    if (parentModule) {
      throw new Error('MPRJModule already loaded; Import in root module only.');
    }
  }
}
