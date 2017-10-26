/** <pre>
 * RegrasDeApresentacao
 * ====================
 * (created by luiz on Qui, jun, 08, 2017)
 *
 * Unifica todas as regras e lógicas de apresentação para os componentes do módulo m-ranking. Por exemplo:
 *  - Controla as classes CSSes que devem ser usadas para se exibir as notas nas cores corretas, com relação ao valor das mesmas
 *  - Controla as classes CSSes referentes a animações, ao se exibir as dimensões (notas das dimensões)
 *
 * 'RegrasDeApresentacao.scss' é a contra-parte desta classe, onde, justamente, residem todas as classes CSSes referidas aqui.
 * Por definição, este arquivo fica em themes/.../css/m-ranking/RegrasDeApresentacao.scss e deve ser incluído pelo 'main.scss'
 *
 * @see RegrasDeApresentacao.scss
 * @author luiz
 */

// angular
import { Injectable } from '@angular/core';

// config
import { CAMPOS_E_TITULOS_DAS_DIMENSOES } from './RankingConfig';

@Injectable()
export class RegrasDeApresentacao {

  // transformações do nome do campo para o título, na ordem em que devem aparecer.
  public listaDeDimensoesETitulos: string[][] = [
    ['geral',                    'Geral'],
    ['auditoria',                'Auditoria'],
    ['ouvidoria',                'Ouvidoria'],
    ['correicao',                'Correição'],
    ['controladoria',            'Controladoria'],
    ['transparencia',            'Transparência'],
    ['auxilioAoControleExterno', 'Auxílio ao Controle Externo'],
    ['estrutura',                'Estrutura'],
    ['abrangencia',              'Abrangência'],
    ['autonomia',                'Autonomia'],
    ['regulamentacao',           'Regulamentação'],
    ['orcamento',                'Orçamento'],
    ['planejamento',             'Planejamento'],
    ['evolucao',                 'Evolução'],
    ['resolutividade',           'Resolutividade'],
    ['concretizacao',            'Concretização de Políticas Públicas'],
    ['iniciativaLouvavel',       'Iniciativa Louvável'],
  ];
  public mapaDeDimensoesParaTitulos: any = {};

  // gradações
  private notaMaxima: number = 10;
  private notaMinima: number = 0;

  // gradações -- os valores em 'faixas' denotam o limite superior da nota
  private gradacoes:       number   = 6;
  private faixas:          number[] = [2,                                   4,                                    6,                                            7.5,                                           9,                                      10];
  private classesCSSCores: string[] = ['notaEmProjeto',                     'notaEmAlicerce',                     'notaConstrucaoIniciada',                     'notaConstrucaoAdiantada',                     'notaEmAcabamento',                     'notaConstruido'];
  private imgsConstrucao:  string[] = ['Predio Estagio 1 - Em Projeto.png', 'Predio Estagio 2 - Em Alicerce.png', 'Predio Estagio 3 - Construção Iniciada.png', 'Predio Estagio 4 - Construção Adiantada.png', 'Predio Estagio 5 - Em Acabamento.png', 'Predio Estagio 6 - Construído.png'];
  private animaConstrucao: string[] = ['bounceInDown', 'fadeInDown', 'flipInY', 'rotateInDownRight', 'rotateInDownLeft', 'zoomInDown'];

  constructor() {
    for (let dimensao of CAMPOS_E_TITULOS_DAS_DIMENSOES) {
      this.mapaDeDimensoesParaTitulos[dimensao.nomeCampo] = dimensao.tituloDimensao;
    }
  }

  /** Retorna a classe CSS para ser usada para colorificar o valor da nota passado */
  public getCSSClass(nota: number): string {
    for (let i: number = 0; i<this.gradacoes; i++) {
      if (nota < this.faixas[i]) {
        return this.classesCSSCores[i];
      }
    }
    return this.classesCSSCores[this.classesCSSCores.length-1];
  }

  /** Faz a mesma coisa que 'getCSSClass(nota), porém adiciona animações baseadas em delay'.
   *  Usada pelo componente 'e-dimensoes' para mostrar várias notas. */
  public getAnimacaoCSSClass(nota: number, delay: number): any {
    let ngClass = {'animated': true, 'bounceIn': true};
    ngClass['anim'+delay]      = true;
    ngClass[this.getCSSClass(nota)] = true;
    return ngClass;
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
    return `./assets/img/${img}`;
  }

  /** Retorna as classes CSS descrevendo a animação (de animate.css) a usar na apresentação do prédio.
   *  Pela forma com que o animate.css é construído, a animação só rodará quando o valor desta função mudar */
  public getAnimacaoImagemConstrucao(nota: number): any {
    let ngClass = {'animated': true};
    let animacao: string = this.animaConstrucao[this.animaConstrucao.length-1];
    for (let i: number = 0; i<this.gradacoes; i++) {
      if (nota < this.faixas[i]) {
        animacao = this.animaConstrucao[i];
        break;
      }
    }
    ngClass[animacao] = true;
    return ngClass;
  }

}
