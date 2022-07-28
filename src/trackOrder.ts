import { deliveryStatus } from './db'

export const trackOrder = async (codes: string[]) => {
  const response = []
  for (const code of codes) {
    const resp = deliveryStatus.get(code)
    response.push(resp)
  }
  return (await Promise.all([...response])).map(order => order.data)
}