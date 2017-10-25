/** <pre>
 * RankingConfig.ts
 * ================
 * (created by luiz on Qua, out, 25, 2017)
 *
 * Configuração para o módulo m-ranking.
 *
 * Este arquivo deve ser alterado de forma a refletir as perticularidades de cada projeto.
 *
 * @see RelatedClass(es)
 * @author luiz
 */

import { IDimension } from 'model/IDimension';

/** Esta interface modela os dados brutos (em modelo natural), tipicamente oriundos de uma planilha ou backend, que
 *  serão carregados através do JSON especificado por 'CUSTOM_RANKING_DATA_URL'.
 *  Os dados serão convertidos para as estruturas de dados definidas neste módulo nas funções seguintes. */
export interface ICustomRankingData {
  municipio: string;
  // dimensões
  geral:                    number;
  auditoria:                number;
  ouvidoria:                number;
  correicao:                number;
  controladoria:            number;
  estrutura:                number;
  planejamento:             number;
  transparencia:            number;
  auxilioAoControleExterno: number;
  orcamento:                number;
  regulamentacao:           number;
  autonomia:                number;
  concretizacao:            number;
  abrangencia:              number;
  resolutividade:           number;
  iniciativaLouvavel:       number;
  evolucao:                 number;
}

/** Fonte dos dados no formato JSON, em modelo natural, tal como especificado por 'ICustomRankingData' */
export const CUSTOM_RANKING_DATA_URL: string = 'assets/dados/m-ranking/ranking_exemplo.json';

/** Define o nome do campo da estrutura 'ICustomRankingData' que especifica o "Concorrente". Exemplo: municipio */
export const NOME_DO_CAMPO_DO_CONCORRENTE: string = 'municipio';

/** Define o nome do campo da estrutura 'ICustomRankingData' que especifica a dimensão principal. Exemplo: geral */

/** Relação de "nomes de campos" para "títulos" das demais dimensões (excluindo a principal), bem como a ordem de
 *  exibição delas. Em 'nomeCampo' devem ser usados os mesmos nomes de campos definidos na estrutura 'ICustomRankingData'  */
export const CAMPOS_E_TITULOS_DAS_DIMENSOES: IDimension[] = [
  {nomeCampo: 'auditoria',                tituloDimensao: 'Auditoria'},
  {nomeCampo: 'ouvidoria',                tituloDimensao: 'Ouvidoria'},
  {nomeCampo: 'correicao',                tituloDimensao: 'Correição'},
  {nomeCampo: 'controladoria',            tituloDimensao: 'Controladoria'},
  {nomeCampo: 'transparencia',            tituloDimensao: 'Transparência'},
  {nomeCampo: 'auxilioAoControleExterno', tituloDimensao: 'Auxílio ao Controle Externo'},
  {nomeCampo: 'estrutura',                tituloDimensao: 'Estrutura'},
  {nomeCampo: 'abrangencia',              tituloDimensao: 'Abrangência'},
  {nomeCampo: 'autonomia',                tituloDimensao: 'Autonomia'},
  {nomeCampo: 'regulamentacao',           tituloDimensao: 'Regulamentação'},
  {nomeCampo: 'orcamento',                tituloDimensao: 'Orçamento'},
  {nomeCampo: 'planejamento',             tituloDimensao: 'Planejamento'},
  {nomeCampo: 'evolucao',                 tituloDimensao: 'Evolução'},
  {nomeCampo: 'resolutividade',           tituloDimensao: 'Resolutividade'},
  {nomeCampo: 'concretizacao',            tituloDimensao: 'Concretização de Políticas Públicas'},
  {nomeCampo: 'iniciativaLouvavel',       tituloDimensao: 'Iniciativa Louvável'},
];


