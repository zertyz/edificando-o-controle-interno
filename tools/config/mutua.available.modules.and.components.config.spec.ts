/** <pre>
 * mutua.available.modules.and.components.config.spec.ts
 * =====================================================
 * (created by luiz on Seg, fev, 06, 2017)
 *
 * Tests the methods for manipulating the data structures of 'mutua.available.modules.and.components.config.ts'
 *
 * @see mutua.available.modules.and.components.config.ts
 * @author luiz
 */

// testing framework
import { t } from '../../src/client/app/shared/test/index';

// unit(s) under test
import { DataManipulation } from './mutua.available.modules.and.components.config';

export function main() {
  t.describe('MutuaTech Configuration: mutua.available.modules.and.components.config.spec.ts', () => {

    t.it('Module Referencing for a web/desktop project', () => {
      t.e(DataManipulation.getActivatedModules(true, false).length).toBe(3, `wrong count of modules were enumerated. Maybe you updated 'mutua.instance-project.config.ts' and forgot to update the tests in 'mutua.available.modules.and.components.config.spec.ts'?`);
    });


    t.it('Module Referencing for a mobile project', () => {
      t.e(DataManipulation.getActivatedModules(false, true).length).toBe(1, `wrong count of modules were enumerated. Maybe you updated 'mutua.instance-project.config.ts' and forgot to update the tests in 'mutua.available.modules.and.components.config.spec.ts'?`);
    });

  });
}
