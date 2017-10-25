/** <pre>
 * IRankings.ts
 * ============
 * (created by luiz on Ter, jun, 06, 2017)
 *
 * Representa um registro de 'rankings_20170614.json', a saber:
 *  {municipio:, geral:, auditoria:, ouvidoria:, correicao:, controladoria:, estrutura:, planejamento:, transparencia:, auxilioAoControleExterno:, orcamento:, regulamentacao:, autonomia:, concretizacao:, abrangencia:, resolutividade:, iniciativaLouvavel:}
 *
 * @see RelatedClass(es)
 * @author luiz
 */

export interface IRankings {
  municipio: string;
  // dimensões
  geral: number;
  auditoria: number;
  ouvidoria: number;
  correicao: number;
  controladoria: number;
  estrutura: number;
  planejamento: number;
  transparencia: number;
  auxilioAoControleExterno: number;
  orcamento: number;
  regulamentacao: number;
  autonomia: number;
  concretizacao: number;
  abrangencia: number;
  resolutividade: number;
  iniciativaLouvavel: number;
  evolucao: number;
}
