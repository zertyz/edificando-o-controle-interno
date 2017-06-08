/** <pre>
 * GradacoesDeCores
 * ================
 * (created by luiz on Qui, jun, 08, 2017)
 *
 * Controla as classes CSSes que devem ser usadas para se exibir as notas nas cores corretas,
 * com relação ao valor das mesmas.
 *
 * Esta classe foi feita para ser utilizada da seguinte maneira:
 *  - As classes definidas na variável 'classesCSS' devem estar disponíveis no componente ou para toda a aplicação
 *  - Os componentes que desejam usar esta funcionalidade, devem incluir esta classe em seu constructor. Nome recomendado da variável injetada: gradacoes
 *  - O HTML deve fazer chamadas do tipo: <h4 [ngClass]="gradacoes.getCSSClass(nota)">{{nota}}</h4>
 *
 * Por padrão, estas classes estão definidas no arquivo 'GradacoesDeCores.scss' dentro de themes/.../css/ e deve ser incluída pelo 'main.scss'
 *
 * @see RelatedClass(es)
 * @author luiz
 */

// angular
import { Injectable } from '@angular/core';

@Injectable()
export class GradacoesDeCores {

  private notaMaxima: number = 10;
  private notaMinima: number = 0;
  private gradacoes:  number = 6;
  private classesCSS: string[] = ['notaEmProjeto', 'notaEmAlicerce', 'notaConstrucaoIniciada', 'notaConstrucaoAdiantada', 'notaEmAcabamento', 'notaConstruido'];

  public getCSSClass(nota: number): string {
    return this.classesCSS[Math.min(this.classesCSS.length-1, Math.floor((nota*this.gradacoes)/(this.notaMaxima-this.notaMinima)))];
  }

}
