import { tracking } from './tracking'

const trackingCodes = ['SL123456789BR', 'OU000000000BR'];

const show = async () => {
  console.clear()
  console.table(await tracking(trackingCodes))
}

// setInterval(exibir, 10000)
show()