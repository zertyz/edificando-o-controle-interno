/** <pre>
 * ng2app.component.ts
 * ===================
 * (created by luiz on Qua, mai, 31, 2017)
 *
 * Specialized 'app' component to load ng2-admin's css'es, spinner animation and services
 *
 * @see RelatedClass(es)
 * @author luiz
 */
// any operators needed throughout your application
import '../../../components/operators';

// libs
import { Component, OnInit, ViewContainerRef } from '@angular/core';

// app
import { AnalyticsService }               from '../../../modules/analytics/index';
import { Config, LogService, AppService } from '../../../modules/core/index';
import { GlobalState }                    from './global.state';
import { BaImageLoaderService,
         BaThemePreloader,
         BaThemeSpinner }                 from './services/index';
import { BaThemeConfig }                  from './theme.config';
import { layoutPaths }                    from './theme.constants';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'ng2app.component.html',
  styleUrls: ['ng2app.component.css'],
})
export class NG2AppComponent {

  isMenuCollapsed: boolean = false;

  constructor(
    public analytics: AnalyticsService,
    public log: LogService,
    private appService: AppService,
    private _state: GlobalState,
    private _imageLoader: BaImageLoaderService,
    private _spinner: BaThemeSpinner,
    private viewContainerRef: ViewContainerRef,
    private themeConfig: BaThemeConfig
  ) {

    log.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);

    themeConfig.config();

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

    public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }

}
