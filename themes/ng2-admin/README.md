Theme gathered from the wonderful ng2-admin project -- https://github.com/akveo/ng2-admin

Steps for updating:
1) Clone the repo
2) Test the project to see that everything is fine
3) Copy the ng2-admin's 'src/assets/*' into 'theme/ng2-admin/assets'
4) Delete the contents of 'src/client/app/shared/modules/m-ng2-admin' and copy ng2-admin's 'src/app/theme/*' there, observing the following:
   - preserve 'm-ng2-admin.module.ts'
   - copy also ng-admin's **src/app/global.state.ts** there
   - change paths like '../../../theme' to '../../index' (do it also for all *.service.ts, pipe, directives, ... files down under the directory tree)
   - make 'm-ng2-admin.module.ts' match 'nga.module.ts' and delete 'nga.module.ts'. The following may be useful:
     - import { AppTranslationModule } from '../app.translation.module' becomes import { MultilingualModule } from '../../i18n/multilingual.module';
     - imports to 'components', 'directives', 'pipes', 'services' and 'validators' must all have the **'/index'** suffix
     - all those ***/index** files above have their own includes, which, again, must be also suffixed by **'/index'** as well -- except for **m-ng2-admin/validators/index.ts**
     - do the same for 'm-ng2/admin/index.ts' -- add the **'/index'** suffix to imports who imports directories
     - remember to maintain the constructor at the end of the file
     - remember to change the exported class 'NgaModule' to 'MNg2AdminModule'
     - correct all .ts files who includes scss files using 'style-loader!...'. Delete these imports and include them as **styleUrls: ['xxx.css']** instead
     - import 'GlobalState' and declare it in the PROVIDERS section
5) index.html: preserve '<div id="preloader">' for the startup animation. Other than that, nothing special. The default from angular-seed-advanced-mutuatech may be used.
6) Move 'src/client/app/shared/modules/m-ng2-admin/sass' to 'theme/ng2-admin/scss'
7) Move all .html and .scss from 'src/client/aoo/modules/m-ng2-admin/components/**' to theme/ng2-admin/modules/m-ng2-admin/components/** -- the following one-liner may help: for fp in `find src/client/app/shared/modules/m-ng2-admin/components/ -type d | tail -n +2`; do basename "$fp"; done | while read d; do td=themes/ng2-admin/modules/m-ng2-admin/components/"$d"; mkdir -p "$td"; mv src/client/app/shared/modules/m-ng2-admin/components/$d/*.[sh][ct][sm][sl] "$td"; done
8) Rename all component template files (.html and .css/.scss) to match the convention: they should be in the form: <name>.component.[html|scss]
9) Create 'components/app.component.html' in the theme's folder and grab the contents of 'pages.component.ts'

-- candidates for deletion: theme.scss and initial.scss

--

6) Move **theme.scss** and **initial.scss** to 'themes/ng2-admin/scss'
7) Change lines like **@import 'sass/...** to **@import '...**, from the following files:
   - initial.scss
   - theme.scss

8) Change the paths like "~ionicons/" to "../../../node_modules/ionicons/", from the files:
   - _ionicons.scss
   - _fonts.scss
   - theme.scss (for the ~animate.css)
   - all scss files in theme/ng2-admin/modules/m-ng2-admin/components/**/... -- add an five more of '../' and also correct 'sass' to 'scss'

9) Replace all imports like "saas/" with "scss/" from theme.scss

10) Add **import 'jquery';** to components that complain about not finding it when the project is compiled -- currently, baBackTop.component.ts, baFullCalendar.component.ts, baMenu.component.ts, baSlimScroll.directive.ts

11) The same as above for **AmCharts** (in baAmChart.component.ts)

12) Correct the import of **html templates** by removing the preceding **./** from template names. Do the same for **css styles**

13) Add **moduleId: module.id,** to all **@Component({** declarations

13) Correct any other erros when you build for dev and prod.

## Activating and Using ng2-admin theme and MNg2AdminModule on angular-seed-advanced-mutuatech ##
Simply edit **mutua.instance-project.config.ts** and perform the following two steps:
  - Set the theme:
    ```typescript
    /** theme configuration */
    export const appTheme    : string = 'ng2-admin';     /** One of the directories in 'themes/' */
    ```
  - Enable the needed modules (please, update this):
    ```typescript
    {moduleName: 'MNg2AdminModule',         htmlEnabled: true,  mobileEnabled: false},  // enable this module for HTML if you are using 'ng2-admin' theme
    ```
