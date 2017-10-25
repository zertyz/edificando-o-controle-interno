/** <pre>
 * m-SaaS.module.ts
 * ================
 * (created by luiz on Wed, oct, 25, 2017)
 *
 * This module defines a series of components to be used by SaaS products when building their web, mobile and desktop selling channels.
 *
 * To see the full demonstration of this module, please set your project to use
 * the 'freelancer' theme -- edit 'tools/config/mutua.instance-project.config.ts'.
 *
 * NOTE: by now, using this module in mobile requires changes, since the beta disclaimer and subscribe components do use bootstrap,
 * which cannot be used in mobile.
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
import { SWelcomeComponent,
         SPortfolioComponent,
         SMarkupComponent,
         SAboutComponent,
         SFormComponent,
                                  } from './components/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    SWelcomeComponent,
    SPortfolioComponent,
    SMarkupComponent,
    SAboutComponent,
    SFormComponent,
  ],
  exports: [
    SWelcomeComponent,
    SPortfolioComponent,
    SMarkupComponent,
    SAboutComponent,
    SFormComponent,
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
