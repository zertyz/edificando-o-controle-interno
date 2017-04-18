Theme gathered from the wonderful ng2-admin project -- https://github.com/akveo/ng2-admin

Steps for updating:
1) Clone the repo
2) Test the project to see that everything is fine
3) Copy the ng2-admin's 'src/assets/*' into 'assets'
4) Delete the contents of 'src/client/app/shared/modules/m-ng2-admin' and copy ng2-admin's 'src/app/theme/*' there, observing the following:
   - preserve 'm-ng2-admin.module.ts'
   - change paths like '../../../theme' to '../..'
   - make 'm-ng2-admin.module.ts' match 'nga.module.ts' and delete 'nga.module.ts'. The following may be useful:
     - import { AppTranslationModule } from '../app.translation.module' becomes import { MultilingualModule } from '../../i18n/multilingual.module';
     - remember to maintain the constructor at the end of the file
     - remember to change the exported class 'NgaModule' to 'MNg2AdminModule'