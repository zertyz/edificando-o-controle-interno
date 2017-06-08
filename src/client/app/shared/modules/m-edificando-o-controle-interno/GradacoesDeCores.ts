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

  // gradações -- os valores em 'faixas' denotam o limite superior da nota
  private gradacoes:       number = 6;
  private faixas:          number[] = [2,                                   4,                                    6,                                            7.5,                                           9,                                      10];
  private classesCSSCores: string[] = ['notaEmProjeto',                     'notaEmAlicerce',                     'notaConstrucaoIniciada',                     'notaConstrucaoAdiantada',                     'notaEmAcabamento',                     'notaConstruido'];
  private imgsConstrucao:  string[] = ['Predio Estagio 1 - Em Projeto.png', 'Predio Estagio 2 - Em Alicerce.png', 'Predio Estagio 3 - Construção Iniciada.png', 'Predio Estagio 4 - Construção Adiantada.png', 'Predio Estagio 5 - Em Acabamento.png', 'Predio Estagio 6 - Construído.png'];

  /** Retorna a classe CSS para ser usada para colorificar o valor da nota passado */
  public getCSSClass(nota: number): string {
    for (let i: number = 0; i<this.gradacoes; i++) {
      if (nota < this.faixas[i]) {
        return this.classesCSSCores[i];
      }
    }
    return this.classesCSSCores[this.classesCSSCores.length-1];
  }

  /** Retorna a imagem representando o estágio da construção atual */
  public getImagemConstrucao(nota: number): string {
    let img: string = this.imgsConstrucao[this.imgsConstrucao.length-1];
    for (let i: number = 0; i<this.gradacoes; i++) {
      if (nota < this.faixas[i]) {
        img = this.imgsConstrucao[i];
        break;
      }
    }
    return `/assets/img/${img}`;
  }

}
