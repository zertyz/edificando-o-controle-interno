/** <pre>
 * IDimension.ts
 * =============
 * (created by luiz on Qua, out, 25, 2017)
 *
 * Estrutura de dados para guardar a relação "nome do campo de uma dimensão" e "título a ser exibido da dimensão".
 *
 * Um array de IDimension's também guarda a ordem em que as dimensões devem ser apresentadas
 *
 * @see RankingConfig.CAMPOS_E_TITULOS_DAS_DIMENSOES
 * @author luiz
 */

export interface IDimension {
  nomeCampo:      string;
  tituloDimensao: string;
}
