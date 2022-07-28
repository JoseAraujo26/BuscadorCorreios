import { createCodeFile, readCodes } from './filesManager';
import { trackOrderRequest } from './interface';
import { trackOrder } from './trackOrder';

export const tracking = async (trackingCodes: string[]) => {
  await createCodeFile()
  const codesRead = await readCodes()
  const codes = codesRead ? codesRead : trackingCodes
  const response = await trackOrder(codes);
  return response.map((subject: trackOrderRequest) => {
    if (!subject.objetos[0].mensagem) {
      return {
        codigo: subject.objetos[0].codObjeto,
        postado: true
      }
    }
    return {
      codigo: subject.objetos[0].codObjeto,
      postado: false
    }
  });
}