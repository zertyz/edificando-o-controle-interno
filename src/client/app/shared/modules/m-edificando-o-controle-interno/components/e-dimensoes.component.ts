/** <pre>
 * e-dimensoes.component
 * =====================
 * (created by luiz on Qui, jun, 01, 2017)
 *
 * Apresenta a lista dos cards, cada um com sua nota, gráfico e mapa do resultado de uma dimensão específica.
 * ... todos para um município específico.
 *
 * Recebe as seguintes propriedades:
 *  municipio:         o município para o qual se deve apresentar a lista de dimensões
 *  ordenacao:         especifica como se deve ordenar a lista. Pode ter um dos valores: [ 'titulo', 'nota' ]
 *
 * Exemplo de uso:
 *
 *  <e-dimensoes municipio="Rio de Janeiro" ordenacao="titulo"></e-dimensoes>
 *
 * @see RelatedClass(es)
 * @author luiz
 */

// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, LogService, ILang } from '../../../core/index';
import { Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'e-dimensoes',
  templateUrl: 'e-dimensoes.component.html',
  styleUrls: ['e-dimensoes.component.css']
})
export class EDimensoesComponent {

  @Input() municipio:   string = '§§ MUNICIPIO §§';
  @Input() ordenacao:   string = 'titulo';

}
