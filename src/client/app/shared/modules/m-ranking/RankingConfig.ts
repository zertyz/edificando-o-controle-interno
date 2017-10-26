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

import { IDimension } from './model/IDimension';

/** Esta interface modela os dados brutos (em modelo natural), tipicamente oriundos de uma planilha ou backend, que
 *  serão carregados através do JSON especificado por 'CUSTOM_RANKING_DATA_URL'.
 *  Os dados são customizáveis mas exigem que se configure os nomes dos campos para:
 *   - concorrente:                                                                   ver 'NOME_DO_CAMPO_DO_CONCORRENTE';
 *   - dimensão principal:                                                            ver 'DIMENSAO_PRINCIPAL';
 *   - titulos das dimensões, nomes dos campos das dimensões e ordem de apresentação: ver 'CAMPOS_E_TITULOS_DAS_DIMENSOES'. */
export interface ICustomRankingData {
  // concorrente
  municipio:                string;
  // dimensão principal
  geral:                    number;
  // dimensões
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
  // obs: formato do registro desta estrutura no arquivo JSON:
  // {municipio:, geral:, auditoria:, ouvidoria:, correicao:, controladoria:, estrutura:, planejamento:, transparencia:, auxilioAoControleExterno:, orcamento:, regulamentacao:, autonomia:, concretizacao:, abrangencia:, resolutividade:, iniciativaLouvavel:}
}

/** Valores default para um registro de 'ICustomRankingData' não encontrado ou não preenchido, de modo a permitir exibição sem quebrar a interface */
export const DEFAULT_CUSTOM_RANKING_DATA: ICustomRankingData = {municipio: 'desconhecido', geral: -1, auditoria: -1, ouvidoria: -1, correicao: -1, controladoria: -1,
                                                                estrutura: -1, evolucao: -1, planejamento: -1, transparencia: -1, auxilioAoControleExterno: -1, orcamento: -1,
                                                                regulamentacao: -1, autonomia: -1, concretizacao: -1, abrangencia: -1, resolutividade: -1, iniciativaLouvavel: -1};

/** Esta interface modela os dados adicionais do concorrente que não estão no Ranking e que são úteis para o componente 'r-status-fase' ao exibir detalhes da fase atual do progresso de cada concorrente.
 *  São carregados por um arquivo JSON retornado pela chamada a 'CONCURRENT_ADDITIONAL_DATA_URL'. */
export interface IConcurrentAdditionalData {
  municipio:                      string;
  populacaoProjetada2016:         string;
  orcamento2015:                  string;
  // obs: formato do registro desta estrutura no arquivo JSON:
  // {municipio:, populacaoProjetada2016:, orcamento2015:}
}

/** Valores default para um registro de 'IConcurrentAdditionalData' não encontrado ou não preenchido, de modo a permitir exibição sem quebrar a interface */
export const DEFAULT_CONCURRENT_ADDITIONAL_DATA: IConcurrentAdditionalData = {municipio: 'desconhecido', populacaoProjetada2016: 'desconhecida', orcamento2015: 'desconhecido'};

/** Fonte dos dados do Ranking, no formato JSON, em modelo natural, tal como especificado por 'ICustomRankingData' */
export const CUSTOM_RANKING_DATA_URL:       string = 'assets/dados/m-ranking/ranking_20170614.json';

/** Fonte de dados adicionais sobre cada um dos candidatos do ranking, em formato JSON, tal como especificado por 'ICandidateAdditionalData' */
export const CONCURRENT_ADDITIONAL_DATA_URL: string = 'assets/dados/m-ranking/orcamento_e_populacao_20170614.json';

/** Define o nome do campo da estrutura 'ICustomRankingData' que especifica o "Concorrente". Exemplo: municipio */
export const NOME_DO_CAMPO_DO_CONCORRENTE: string = 'municipio';

/** Define o nome do campo da estrutura 'ICustomRankingData' que especifica a dimensão principal. Exemplo: geral */
export const DIMENSAO_PRINCIPAL: string           = 'geral';

/** Relação de "nomes de campos" para "títulos" das demais dimensões (excluindo a principal), bem como a ordem de
 *  exibição delas. Em 'nomeCampo' devem ser usados os mesmos nomes de campos definidos na estrutura 'ICustomRankingData'  */
export const CAMPOS_E_TITULOS_DAS_DIMENSOES: IDimension[] = [
  {nomeCampo: 'geral',                    tituloDimensao: 'Geral'},
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


