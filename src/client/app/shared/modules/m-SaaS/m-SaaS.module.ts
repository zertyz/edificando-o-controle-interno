// angular
import { NgModule, ModuleWithProviders, Optional, SkipSelf, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

// app
import { Config } from '../../../modules/core/index';

// components
import { MWelcomeComponent,
         MPortfolioComponent,
         MMarkupComponent,
         MAboutComponent,
         MFormComponent,
                                  } from './components/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    MWelcomeComponent,
    MPortfolioComponent,
    MMarkupComponent,
    MAboutComponent,
    MFormComponent,
  ],
  exports: [
    MWelcomeComponent,
    MPortfolioComponent,
    MMarkupComponent,
    MAboutComponent,
    MFormComponent,
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MSaaSModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MSaaSModule,
      providers: []
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: MSaaSModule) {
    if (parentModule) {
      throw new Error('MSaaSModule already loaded; Import in root module only.');
    }
  }
}
