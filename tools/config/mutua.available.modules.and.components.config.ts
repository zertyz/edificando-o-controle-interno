/** <pre>
 * mutua.available.modules.and.components.config.ts
 * ================================================
 * (created by luiz on Sun, Feb, 5, 2017)
 *
 * This class lists all modules and components available to the instance project to use and should not be bundled nor loaded
 * by the application for it is a buildtime module.
 *
 * Whenever a new module or component is added, this file should be updated. Don't forget to update these files as well:
 *   /package.json
 *   /nativescript/package.json
 *
 * They are activated via configuration in 'mutua.instance-project.config.ts', which should also be updated whenever
 * this file gets a new entry.
 *
 * Script to update /package.json
 *
 * ... and /nativescript/package.json
 *
 * Script to update mutua.instance-project.config.ts
 *
 * ...
 *
 * The exported structure class 'DataManipulation' provides methods used during the building of the project, including methods
 * for generating .ts files to be loaded during runtime.
 *
 * @see mutua.instance-project.config.ts
 * @see mutua.available.modules.and.components.task.ts
 * @author luiz
 */

// compile with: tsc --types tools/manual_typings/**/*.d.ts src/client/app/shared/mutua/mutua.available.modules.and.components.config.ts
// run     with: node src/client/app/shared/mutua/mutua.available.modules.and.components.config.js

// mutua configuration
import { appTheme,
         primeNGTheme,
         MutuaInstanceProjectComponentsActivationConfiguration,
         MutuaInstanceProjectModulesActivationConfiguration,
         MutuaHTMLAppComponentName,
         MutuaMobileAppComponentName } from './mutua.instance-project.config';

// seed
import { ExtendPackages, InjectableDependency } from './seed.config.interfaces';

/** interface for instance projects modules activation */
export interface IInstanceProjectsModuleActivationConfiguration {
  moduleName:    string;
  htmlEnabled:   boolean;
  mobileEnabled: boolean;
}

/** interface for instance projects components activation */
export interface IInstanceProjectsComponentActivationConfiguration {
  componentName: string;
  htmlEnabled:   boolean;
  mobileEnabled: boolean;
}

/** definition for each available module */
interface IMutuaAvailableModuleConfiguration {

  // module loading properties
  ////////////////////////////

  /** when set, specifies that the module returns a property named 'moduleName' */
  moduleName     ?: string;

  /** specifies the source code for this component. If it is a local component, the path should be relative to the path of this file */
  source          : string;

  /** defaults to true and specifies if we should apply a ".forRoot()" call on the module object when bootstrapping it */
  forRoot        ?: boolean;

  /** if set, all the listed strings are considered to be properties to be imported from the module file, and packed together as an array of objects */
  packedModules  ?: string[];

  // module building properties
  /////////////////////////////

  /** the following optional values will be concatenated to the homonymous variables from 'mutua.loading.config.ts'
   *  and are used to govern the bundling of web, desktop and mobile packages */
  npmDependencies     ?: ExtendPackages[];
  webFiles            ?: string[];
  desktopFiles        ?: string[];
  htmlNPMInjections   ?: InjectableDependency[];
  htmlLocalInjections ?: InjectableDependency[];

  // module source options
  ////////////////////////

  /** if set, specifies that this module is a 'node' dependency and that the listed strings are to be placed on 'package.json' */
  packageDefinition ?: string[];

}

/** specifies a set of 'IMutuaAvailableModulesConfiguration' */
interface IMutuaAvailableModulesConfiguration {
  [moduleName: string]: IMutuaAvailableModuleConfiguration;
}

// consider the following for the near future: why components don't have the ability to inject files, depend on npm modules, etc?
/** definition for each available component */
interface IMutuaAvailableComponentConfiguration {

  // component loading properties
  ///////////////////////////////

  /** when set, specifies that the component returns a property named 'componentName' */
  componentName      ?: string;

  /** specifies the source code for this component. If it is a local component, the path should be relative to the path of this file */
  source          : string;

  /** if specified, means that a route should be included for this component, meaning it has "a(some) page(s)" */
  routes?         : string;

  // component building properties
  ////////////////////////////////

  // components won't be allowed to set any building rules at this time

}

/** specifies a set of 'IMutuaAvailableModulesConfiguration' */
interface IMutuaAvailableComponentsConfiguration {
 [componentName: string]: IMutuaAvailableComponentConfiguration;
}

// changes from mutua.building.config
// webNPMDependencies     --> npmDependencies
// desktopNPMDependencies --> desktopFiles
// webNPMInjections       --> htmlNPMInjections
// webLocalInjections     --> htmlLocalInjections

// this string should be used for desktop fields that should have the same value as the web field
const sameAsWeb: string = '%%SAME_AS_WEB%%';

/** available components */
const MutuaAvailableComponentsConfiguration: IMutuaAvailableComponentsConfiguration = {

  // ng2-admin theme's app component
  NG2AppComponent: {
    source: '../../shared/modules/m-ng2-admin/ng2app.component',
  },

  // app component
  AppComponent: {
    source: '../../components/app.component',
  },
/*
  // home page
  HomeComponent: {
    source: '../../components/home/home.component',
    routes: '../../components/home/home.routes',
  },

  // about page
  AboutComponent: {
    source: '../../components/about/about.component',
    routes: '../../components/about/about.routes',
  },

  // gv-home page
  GvHomeComponent: {
    source: '../../components/pages/gv-home/gv-home.component',
    routes: '../../components/pages/gv-home/gv-home.routes',
  },
*/
  // home page
/*  MPHomeComponent: {
    source: '../../components/pages/mp-home/mp-home.component',
    routes: '../../components/pages/mp-home/mp-home.routes',
  },
*/
  MPEdificandoOControleInternoHomeComponent: {
    source: '../../components/pages/mp-edificando-o-controle-interno-home/mp-edificando-o-controle-interno-home.component',
    routes: '../../components/pages/mp-edificando-o-controle-interno-home/mp-edificando-o-controle-interno-home.routes',
  },

  // fale-com-o-mprj
  MPFaleComOMPRJComponent: {
    source: '../../components/pages/mp-fale-com-o-mprj/mp-fale-com-o-mprj.component',
    routes: '../../components/pages/mp-fale-com-o-mprj/mp-fale-com-o-mprj.routes',
  },

  // informacoes-gerais
  MPInformacoesGeraisComponent: {
    source: '../../components/pages/mp-informacoes-gerais/mp-informacoes-gerais.component',
    routes: '../../components/pages/mp-informacoes-gerais/mp-informacoes-gerais.routes',
  },

  // metodologia
  MPMetodologiaComponent: {
    source: '../../components/pages/mp-metodologia/mp-metodologia.component',
    routes: '../../components/pages/mp-metodologia/mp-metodologia.routes',
  },

  // outros-rankings
  MPOutrosRankingsComponent: {
    source: '../../components/pages/mp-outros-rankings/mp-outros-rankings.component',
    routes: '../../components/pages/mp-outros-rankings/mp-outros-rankings.routes',
  },

  // ranking-completo
  MPRankingCompletoComponent: {
    source: '../../components/pages/mp-ranking-completo/mp-ranking-completo.component',
    routes: '../../components/pages/mp-ranking-completo/mp-ranking-completo.routes',
  },


};

/** available modules */
const MutuaAvailableModulesConfiguration: IMutuaAvailableModulesConfiguration = {

  // angular 4.x module for animations, required by 'PRIMENG_MODULES'
  BrowserAnimationsModule: {
    source:  '@angular/platform-browser/animations',
    forRoot: false,
  },
/*
  // m-hello-world module
  MHelloWorldModule: {
                      source: '../modules/m-hello-world/m-hello-world.module',
                      htmlLocalInjections: null,
  },
*/
  // m-mprj module
  MPRJModule: {
    source: '../modules/m-mprj/m-mprj.module',
    htmlLocalInjections: null,
  },

  // m-edificando-o-controle-interno module
  MEdificandoOControleInternoModule: {
    source: '../modules/m-edificando-o-controle-interno/m-edificando-o-controle-interno.module',
    htmlLocalInjections: null,
  },

  // m-ng2-admin module
  MNg2AdminModule: {
                    source: '../modules/m-ng2-admin/m-ng2-admin.module',
                    htmlLocalInjections: null,
                    npmDependencies:     [{name: 'fullcalendar',        path: 'node_modules/fullcalendar/dist/fullcalendar.js'},
                                          {name: 'jquery-slimscroll',   path: 'node_modules/jquery-slimscroll/jquery.slimscroll.js'},
                                          {name: 'jquery',              path: 'node_modules/jquery/dist/jquery.js'},
                                          {name: 'moment',              path: 'node_modules/moment/moment.js'},
                                          {name: 'ngx-uploader',        path: 'node_modules/ngx-uploader/bundle/ngx-uploader.umd.js'},
                                          {name: 'ammap3',              path: 'node_modules/ammap3/ammap/ammap.js'},
                                          {name: 'amcharts3',           path: 'node_modules/amcharts3/amcharts/amcharts.js'},
                                          {name: 'chartist',            path: 'node_modules/chartist/dist/chartist.js'},
                                          {name: 'ckeditor',            path: 'node_modules/ckeditor/ckeditor.js'}],
                    packageDefinition: ['@types/fullcalendar',      '2.7.40',
                                        '@types/jquery',            '2.0.41',
                                        '@types/jquery.slimscroll', '1.3.30',   // all those @types are 'devDependencies', as opposed to the ones bellow, which are just 'dependencies'
                                        'ionicons',                 '2.0.1',
                                        'animate.css',              '3.5.2',
                                        'normalize.css',            '7.0.0',
                                        'jquery',                   '3.2.1',
                                        'jquery-slimscroll',        '1.3.8',
                                        'amcharts3',                'github:amcharts/amcharts3',
                                        'ammap3',                   'github:amcharts/ammap3',
                                        'chart.js',                 '1.1.1',
                                        'chartist',                 '0.10.1',
                                        'ckeditor',                 '4.6.2',
                                        'easy-pie-chart',           '2.1.7',
                                        'fullcalendar',             '3.3.1',
                                        'google-maps',              '3.2.1',
                                        'ngx-uploader',             '2.2.5',
                                        'ng2-ckeditor',             '1.1.6',
                                        'ng2-completer',            '1.3.1',
                                        'ng2-smart-table',          '1.0.3',
                                        'ng2-tree',                 '2.0.0-alpha.5',
                                        'roboto-fontface',          '0.7.0'],
  },

  // ng-bootstrap module
  NgbModule: {
              source: '@ng-bootstrap/ng-bootstrap',
              npmDependencies:   [{name: '@ng-bootstrap/ng-bootstrap',      path: 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js'}],
              webFiles:          null,
              htmlNPMInjections: [{src: 'bootstrap/dist/css/bootstrap.css', inject: true}],
              packageDefinition: ['bootstrap',                  '^4.0.0-alpha.6',
                                  '@ng-bootstrap/ng-bootstrap', '^1.0.0-alpha.22'],
  },

  // PrimeNG module (depends on 'BrowserAnimationsModule' module)
  PRIMENG_MODULES: {
                    source: 'primeng/primeng',
                    forRoot: false,
                    packedModules: ['AccordionModule',     'AutoCompleteModule', 'BlockUIModule',     'BreadcrumbModule',    'ButtonModule',
                                    'CalendarModule',      'CarouselModule',     'ChartModule',       'CheckboxModule',      'CodeHighlighterModule',
                                    'ConfirmDialogModule', 'ContextMenuModule',  'DataGridModule',    'DataListModule',      'DataScrollerModule',
                                    'DataTableModule',     'DialogModule',       'DragDropModule',    'DropdownModule',      'EditorModule',
                                    'FieldsetModule',      'FileUploadModule',   'GalleriaModule',    'GMapModule',          'GrowlModule',
                                    'InplaceModule',       'InputMaskModule',    'InputSwitchModule', 'InputTextareaModule', 'InputTextModule',
                                    'LightboxModule',      'ListboxModule',      'MegaMenuModule',    'MenubarModule',       'MenuModule',
                                    'MessagesModule',      'MultiSelectModule',  'OrderListModule',   'OverlayPanelModule',  'PaginatorModule',
                                    'PanelMenuModule',     'PanelModule',        'PasswordModule',    'PickListModule',      'ProgressBarModule',
                                    'RadioButtonModule',   'RatingModule',       'ScheduleModule',    'SelectButtonModule',  'SharedModule',
                                    'SlideMenuModule',     'SliderModule',       'SpinnerModule',     'SplitButtonModule',   'StepsModule',
                                    'TabMenuModule',       'TabViewModule',      'TerminalModule',    'TieredMenuModule',    'ToggleButtonModule',
                                    'ToolbarModule',       'TooltipModule',      'TreeModule',        'TreeTableModule',     'TriStateCheckboxModule'],
                    npmDependencies:   [{name: 'primeng',  path: 'node_modules/primeng'},
                                        {name: 'chart.js', path: 'node_modules/chart.js/dist/Chart.bundle.js'}],
                    webFiles:          ['./node_modules/font-awesome/fonts/**/*'],
                    desktopFiles:      [sameAsWeb],
                    htmlNPMInjections: [{src: 'primeng/resources/primeng.css',                      inject: true},
                                        {src: `primeng/resources/themes/${primeNGTheme}/theme.css`, inject: true},
                                        {src: 'font-awesome/css/font-awesome.css',                  inject: true},
                                        {src: 'chart.js/dist/Chart.bundle.js',                      inject: true}],
                    packageDefinition: ['font-awesome', '^4.7.0',
                                        'primeng',      '^4.0.0-rc.2'],
  },

};

export class DataManipulation {

  /** file manipulation under node.js */
  private static fs: any = require('fs');

  /** Returns an array of files (and also folders, wildcards, etc) to be bundled with the project, when building.
   *  The booleans control if the array should include files for web and/or desktop and the "same entries as for web"
   *  rule is applied for desktop file entries containing the string defined by 'sameAsWeb' constant. */
  public static getActivatedModulesAndComponentsHTMLFiles(includeForWeb: boolean, includeForDesktop: boolean): string[] {
    let files: string[] = [];
    let activatedModules: IMutuaAvailableModuleConfiguration[] = DataManipulation.getActivatedModules(true, false);
    // note: in the near future, do the same for components
    for (let i in activatedModules) {
      let activatedModule: IMutuaAvailableModuleConfiguration = activatedModules[i];
      if (includeForWeb && (activatedModule.webFiles != null)) {
        files.push(...activatedModule.webFiles);
      }
      if (includeForDesktop && (activatedModule.desktopFiles != null)) {
        for (let desktopFile of activatedModule.desktopFiles) {
          if (desktopFile === sameAsWeb) {
            // apply "same entries as for web" rule ...
            files.push(...activatedModule.webFiles);
          } else {
            // ... or include the specifyed file
            files.push(desktopFile);
          }
        }
      }
    }
    return files;
  }

  /** Returns the array of 'InjectableDependency'es for activated modules and components this project have that need to inject npm dependencies */
  public static getActivatedModulesAndComponentsHTMLnpmInjections(): InjectableDependency[] {
    let result: InjectableDependency[] = [];
    let activatedModules: IMutuaAvailableModuleConfiguration[] = DataManipulation.getActivatedModules(true, false);
    // note: in the near future, do the same for components
    for (let i in activatedModules) {
      let activatedModule: IMutuaAvailableModuleConfiguration = activatedModules[i];
      if (activatedModule.htmlNPMInjections != null) {
        result.push(...activatedModule.htmlNPMInjections);
      }
    }
    return result;
  }

  /** Returns the array of 'IjectableDependency'es for activated modules and components this project have that need to inject local files */
  public static getActivatedModulesAndComponentsHTMLLocalInjections(): InjectableDependency[] {
    let result: InjectableDependency[] = [];
    let activatedModules: IMutuaAvailableModuleConfiguration[] = DataManipulation.getActivatedModules(true, false);
    // note: in the near future, do the same for components
    for (let i in activatedModules) {
      let activatedModule: IMutuaAvailableModuleConfiguration = activatedModules[i];
      if (activatedModule.htmlLocalInjections != null) {
        result.push(...activatedModule.htmlLocalInjections);
      }
    }
    return result;
  }

  /** Returns the NPM Dependencies -- array of 'ExtendPackages' for activated modules and components this project have */
  public static getActivatedModulesAndComponentsHTMLnpmDependencies(): ExtendPackages[] {
    let result: ExtendPackages[] = [];
    let activatedModules: IMutuaAvailableModuleConfiguration[] = DataManipulation.getActivatedModules(true, false);
    // note: in the near future, do the same for components
    for (let i in activatedModules) {
      let activatedModule: IMutuaAvailableModuleConfiguration = activatedModules[i];
      if (activatedModule.npmDependencies != null) {
        result.push(...activatedModule.npmDependencies);
      }
    }
    return result;
  }

  /** traverses through 'MutuaAvailableComponentsConfiguration' and 'MutuaAvailableComponentsConfiguration' and build an
   *  array of 'IMutuaAvailableComponentConfiguration' (with the 'componentName' property properly set) respecting the wanted
   *  'html' and 'mobile' enabled flags */
  static getActivatedComponents(htmlEnabled: boolean, mobileEnabled: boolean): IMutuaAvailableComponentConfiguration[] {
    let activatedComponents: IMutuaAvailableComponentConfiguration[] = [];
    let activatedComponent: IInstanceProjectsComponentActivationConfiguration;
    for (activatedComponent of MutuaInstanceProjectComponentsActivationConfiguration) {
      if ( (htmlEnabled && activatedComponent.htmlEnabled) || (mobileEnabled && activatedComponent.mobileEnabled) ) {
        let componentName: string = activatedComponent.componentName;
        let availableComponent: IMutuaAvailableComponentConfiguration = MutuaAvailableComponentsConfiguration[componentName];
        if (availableComponent == null) {
          throw new ReferenceError(`mutua.instance-project.config.ts: cannot find component named '${componentName}'. Is it misspelled or pehephs you've forgotten to declare it on 'mutua.available.modules.and.components.config'?`);
        }
        availableComponent.componentName = componentName;
        activatedComponents.push(availableComponent);
      }
    }
    return activatedComponents;
  }

  /** traverses through 'MutuaInstanceProjectModulesActivationConfiguration' and 'MutuaAvailableModulesConfiguration' and build an
   *  array of 'IMutuaAvailableModuleConfiguration' (with the 'moduleName' property properly set) respecting the wanted
   *  'html' and 'mobile' enabled flags */
  static getActivatedModules(htmlEnabled: boolean, mobileEnabled: boolean): IMutuaAvailableModuleConfiguration[] {
    let activatedModules: IMutuaAvailableModuleConfiguration[] = [];
    let activatedModule: IInstanceProjectsModuleActivationConfiguration;
    for (activatedModule of MutuaInstanceProjectModulesActivationConfiguration) {
      if ( (htmlEnabled && activatedModule.htmlEnabled) || (mobileEnabled && activatedModule.mobileEnabled) ) {
        let moduleName: string = activatedModule.moduleName;
        let availableModule: IMutuaAvailableModuleConfiguration = MutuaAvailableModulesConfiguration[moduleName];
        if (availableModule == null) {
          throw new ReferenceError(`mutua.instance-project.config.ts: cannot find module named '${moduleName}'. Is it misspelled or pehephs you've forgotten to declare it on 'mutua.available.modules.and.components.config'?`);
        }
        availableModule.moduleName = moduleName;
        activatedModules.push(availableModule);
      }
    }
    return activatedModules;
  }


  public static getLoadingConfigLines(htmlEnabled: boolean, mobileEnabled: boolean): string[] {
    var lines: string[] = [
      ...DataManipulation.getActivatedComponentsLoadingLines(DataManipulation.getActivatedComponents(htmlEnabled, mobileEnabled)),
      '',
      ...DataManipulation.getActivatedModulesLoadingLines(DataManipulation.getActivatedModules(htmlEnabled, mobileEnabled)),
    ];
    return lines;
  }

  public static writeFile(filePath: string, lines: string[]) {
    let fileContents: string = '';
    for (let line of lines) {
      fileContents = fileContents.concat(`${line}\n`);
    }
    DataManipulation.fs.writeFile(filePath, fileContents, function (err: any) {
      if (err) {
        let errorMsg: string = `mutua.available.modules.and.components.config.ts: could not write to ${filePath}`;
        console.log(errorMsg);
        throw new Error(errorMsg);
      }
    });
  }

  public static generateSourceFiles(pathToSrc: string) {
    DataManipulation.writeFile(`${pathToSrc}/client/app/shared/mutua/mutua.html.loading.config.ts`, [
      '',
      '/*****************************************************',
      '** AUTOMATICALLY CREATED HTML LOADING CONFIGURATION **',
      '*****************************************************/', '',
      `// Please, do not edit this file. It is automatically generated by 'build.mutua.ts' task on every build with information present in 'mutua.instance-project.config.ts' and 'mutua.available.modules.and.components.config.ts'`, '',
      `// Included by 'web.modules.ts' to load the needed components and modules and make them available to the application`, '',
      ...DataManipulation.getLoadingConfigLines(true, false), '',
      `export const MutuaAppComponent: any = ${MutuaHTMLAppComponentName};`]);

    DataManipulation.writeFile(`${pathToSrc}/client/app/shared/mutua/mutua.mobile.loading.config.ts`, [
      '',
      '/*******************************************************',
      '** AUTOMATICALLY CREATED MOBILE LOADING CONFIGURATION **',
      '*******************************************************/', '',
      `// Please, do not edit this file. It is automatically generated by 'build.mutua.ts' task on every build with information present in 'mutua.instance-project.config.ts' and 'mutua.available.modules.and.components.config.ts'`, '',
      `// Included by 'nativescript/.../components.modules.ts' to load the needed components and modules and make them available to the application`, '',
      ...DataManipulation.getLoadingConfigLines(false, true), '',
      `export const MutuaAppComponent: any = ${MutuaMobileAppComponentName};`,]);

/*
    DataManipulation.writeFile(`${pathToSrc}/client/app/shared/mutua/mutua.theme.config.ts`, [
      '',
      '/!**********************************************',
      '** AUTOMATICALLY CREATED THEME CONFIGURATION **',
      '**********************************************!/', '',
      `// Please, do not edit this file. It is automatically generated by 'build.mutua.ts' task on every build with information present in 'mutua.instance-project.config.ts' and 'mutua.available.modules.and.components.config.ts'`, '',
      `// Included by components and modules to load the correct HTML, TNS and CSS templates for the selected theme`, '',
      `// when using this constant into 'templateUrl' and 'styleUrls' properties of @Component(s), please note the path should point to \`themes/\${appTheme}/components/...\``,
      `export const appTheme: string = '${appTheme}';`]);
*/
  }

  /** Returns all the lines a .ts source file should have to load the provided 'activatedComponents' */
  private static getActivatedComponentsLoadingLines(activatedComponents: IMutuaAvailableComponentConfiguration[]): string[] {

    let lines                  : string[] = [];
    let exportedComponentsArray: string[] = [];

    lines.push(`// components`);
    lines.push(`/////////////`, '');

    for (let i in activatedComponents) {
      let activatedComponent: IMutuaAvailableComponentConfiguration = activatedComponents[i];
      lines.push(`import { ${activatedComponent.componentName} } from '${activatedComponent.source}';`);
      exportedComponentsArray.push(activatedComponent.componentName);
    }

    lines.push('', `export const MutuaExportedComponents: any[] = [${exportedComponentsArray.toString()}];`, '');

    let exportedRoutesArray: string[] = [];

    lines.push(`// routes`);
    lines.push(`/////////`, '');

    for (let i in activatedComponents) {
      let activatedComponent: IMutuaAvailableComponentConfiguration = activatedComponents[i];
      if (activatedComponent.routes != null) {
        let symbolName: string = activatedComponent.componentName.replace('Component', 'Routes');
        lines.push(`import { ${symbolName} } from '${activatedComponent.routes}';`);
        exportedRoutesArray.push(`...${symbolName}`);
      }
    }

    lines.push('', `export const MutuaExportedRoutes: any[] = [${exportedRoutesArray.toString()}];`);

    return lines;
  }

  /** Returns all the lines a .ts source file should have to load the provided 'activatedModules' */
  private static getActivatedModulesLoadingLines(activatedModules: IMutuaAvailableModuleConfiguration[]): string[] {

    let lines               : string[] = [];
    let exportedModulesArray: string[] = [];

    lines.push(`// modules`);
    lines.push(`//////////`, '');

    // apply module loading rules
    for (let i in activatedModules) {
      let activatedModule:IMutuaAvailableModuleConfiguration = activatedModules[i];

      // resolve the optional 'forRoot' property
      let forRoot = ((activatedModule.forRoot != null) && (activatedModule.forRoot == false)) ? false : true;

      lines.push(`// ${activatedModule.moduleName}`);

      // to pack or not to pack
      if (activatedModule.packedModules == null) {
        lines.push(`import { ${activatedModule.moduleName} } from '${activatedModule.source}';`);
        if (forRoot) {
          exportedModulesArray.push(`${activatedModule.moduleName}.forRoot()`);
        } else {
          exportedModulesArray.push(activatedModule.moduleName);
        }
      } else {
        lines.push(`import { ${activatedModule.packedModules.toString()} } from '${activatedModule.source}';`);
        let packedForRootModules = [];
        for (let packedModule of activatedModule.packedModules) {
          if (forRoot) {
            packedForRootModules.push(`${packedModule}.forRoot()`);
          } else {
            packedForRootModules.push(packedModule);
          }
        }
        lines.push(`let ${activatedModule.moduleName}: any[] = [${activatedModule.packedModules.toString()}];`);
        exportedModulesArray.push(`...${activatedModule.moduleName}`);
      }
    }

    lines.push('', `export const MutuaExportedModules: any[] = [${exportedModulesArray.toString()}];`);

    return lines;

  }

};

// write the files (test)
//DataManipulation.generateSourceFiles('src');

// get files to be bundled (test)
// console.log("web:");
// console.log(JSON.stringify(DataManipulation.getActivatedModulesAndComponentsHTMLFiles(true, false), null, 4));
// console.log("desktop:");
// console.log(JSON.stringify(DataManipulation.getActivatedModulesAndComponentsHTMLFiles(false, true)));

// get files to be bundled (test)
// console.log("injections:");
// console.log(JSON.stringify(DataManipulation.getActivatedModulesAndComponentsHTMLnpmInjections(), null, 4));

// get npm dependencies (test)
// console.log("npm dependencies:");
// console.log(JSON.stringify(DataManipulation.getActivatedModulesAndComponentsHTMLnpmInjections(), null, 4));
