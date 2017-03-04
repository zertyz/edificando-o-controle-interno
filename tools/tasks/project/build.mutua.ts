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
import Config from '../../config';

import { DataManipulation } from '../../config/mutua.available.modules.and.components.config';

// continue with the traditional gulp task mechanism
export = () => {

  // run the code generation script (mutua. html and mobile .loading.config.ts)
  DataManipulation.generateSourceFiles('src/');     // this script is run having it's current folder set to the project's root, hence, we get to the 'src' directory directly

  let src: string[] = Config.TARGET_DESKTOP ? DataManipulation.getActivatedModulesAndComponentsHTMLFiles(true, false) : DataManipulation.getActivatedModulesAndComponentsHTMLFiles(true, false);

  return gulp.src(src, { base: './' } )
    .pipe(gulp.dest(join(Config.APP_DEST)));
};
