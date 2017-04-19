Theme gathered from the wonderful ng2-admin project -- https://github.com/akveo/ng2-admin

Steps for updating:
1) Clone the repo
2) Test the project to see that everything is fine
3) Copy the ng2-admin's 'src/assets/*' into 'theme/ng2-admin/assets'
4) Delete the contents of 'src/client/app/shared/modules/m-ng2-admin' and copy ng2-admin's 'src/app/theme/*' there, observing the following:
   - preserve 'm-ng2-admin.module.ts'
   - change paths like '../../../theme' to '../..'
   - make 'm-ng2-admin.module.ts' match 'nga.module.ts' and delete 'nga.module.ts'. The following may be useful:
     - import { AppTranslationModule } from '../app.translation.module' becomes import { MultilingualModule } from '../../i18n/multilingual.module';
     - remember to maintain the constructor at the end of the file
     - remember to change the exported class 'NgaModule' to 'MNg2AdminModule'
5) index.html: preserve '<div id="preloader">' for the startup animation. Other than that, nothing special. The default from angular-seed-advanced-mutuatech may be used.
6) Move 'src/client/app/shared/modules/m-ng2-admin/sass' to 'theme/ng2-admin/scss'
7) Move all .html and .scss from 'src/client/aoo/modules/m-ng2-admin/components/**' to theme/ng2-admin/modules/m-ng2-admin/components/** -- the following one-liner may help: for fp in `find src/client/app/shared/modules/m-ng2-admin/components/ -type d | tail -n +2`; do basename "$fp"; done | while read d; do td=themes/ng2-admin/modules/m-ng2-admin/components/"$d"; mkdir -p "$td"; mv src/client/app/shared/modules/m-ng2-admin/components/$d/*.[sh][ct][sm][sl] "$td"; done
6) Create 'components/app.component.html' in the theme's folder and grab the contents of 'pages.component.ts'
 