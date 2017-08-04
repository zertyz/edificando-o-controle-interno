/** <pre>
 * e-link.component
 * ================
 * (created by luiz on Qui, jun, 01, 2017)
 *
 * Componente para centralizar todos os links de navegação do projeto
 *
 * Recebe as seguintes propriedades:
 *  href:         a URL para a qual este link deve navegar
 *
 * Exemplo de uso:
 *
 *  <e-link href="/mp-ranking-completo">veja o ranking completo</e-link>
 *
 * @see RelatedClass(es)
 * @author luiz
 */

// libs
import { Component, Injector, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, RouterExtensions, LogService, ILang } from '../../../../modules/core/index';
import { Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'e-link',
  templateUrl: 'e-link.component.html',
  styleUrls: ['e-link.component.css']
})
export class ELinkComponent {

  @Input() href:   string = '§§ MISSING HREF PARAMETER §§';

  constructor(private injector: Injector, public routerext: RouterExtensions) {}

  public gotoHREF() {
    this.routerext.navigate([this.href], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }

}
