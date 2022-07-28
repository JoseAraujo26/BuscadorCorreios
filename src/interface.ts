export interface trackOrderRequest {
  objetos: {
    codObjeto: string,
    mensagem?: string,
    dtPrevista?: string,
    eventos?: {
      codigo: string,
      descricao: string,
      dtHrCriado: string,
      tipo: string,
      unidade: {
        endereco: {
          cidade: string,
          uf: string
        },
        tipo: string
      },
      unidadeDestino: {
        endereco: {
          cidade: string,
          uf: string
        },
        tipo: string
      },
      urlIcone: string
    }[],
    modalidade: string,
    tipoPostal?: {
      categoria: string,
      descricao: string,
      sigla: string
    },
    habilitaAutoDeclaracao: boolean,
    permiteEncargoImportacao: boolean,
    habilitaPercorridaCarteiro: boolean,
    bloqueioObjeto: boolean,
    possuiLocker: boolean,
    habilitaLocker: boolean,
    habilitaCrowdshipping?: boolean
  }[],
  quantidade: number,
  resultado: string,
  versao: string
}