/** <pre>
 * build.mutua.ts
 * ==============
 * (created by luiz on Tue, Dec, 6, 2016)
 *
 * Applies the Mutua building mechanism to the project:
 *
 * 1) Builds .ts files to load modules on runtime
 * 2) Copies project files to their destinations -- Allowing fonts, images, icons and other theme files to be bundled along with the project.
 *
 * Integrated into the build process by the seed.tasks.json file.
 *
 * @see seed.tasks.json file
 * @author luiz
 */

import * as gulp from 'gulp';
import { relative, join } from 'path';
import BuildConfig from '../../config';

import { Config } from '../../../src/client/app/shared/core/utils/config';
import { DataManipulation } from '../../config/mutua.available.modules.and.components.config';

export = () => {

  // run the code generation script (mutua. html and mobile .loading.config.ts)
  DataManipulation.generateSourceFiles('src/');     // this script is run having it's current folder set to the project's root, hence, we get to the 'src' directory directly

  let src: string[] = [];

  // include components and modules files (font files, for instance)
  if (Config.IS_MOBILE_NATIVE()) {
    //src.push(...DataManipulation.getActivatedModulesAndComponentsMobileFiles());    soon or later this function will have to be implemented...
  } else if (Config.IS_MOBILE_HYBRID()) {
    let errorMsg: string = `build.mutua.ts: don't know how to build to 'MOBILE_HIBRID'... please update this script.`;
    console.log(errorMsg);
    throw new Error(errorMsg);
  } else /* it is for either web or desktop */ {
    src.push(...DataManipulation.getActivatedModulesAndComponentsHTMLFiles(Config.IS_WEB(), Config.IS_DESKTOP()));
  }

  return gulp.src(src, { base: './' } )
    .pipe(gulp.dest(join(BuildConfig.APP_DEST)));
};
