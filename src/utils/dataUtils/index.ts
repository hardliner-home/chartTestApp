
// src
import { DataType, PricePerTime } from '../../types'

const transferResponseToHuman = (prices: PricePerTime[]) => {
  let max = 0
  let min = prices[0][1]

  const readyToShowPrice = prices.map((array: PricePerTime) => {
    const current = array[1]
    if (current > max) max = current
    if (current < min) min = current
    return { prices: array[1], time: array[0] }
  })

  const mainData: DataType = {
    prices: readyToShowPrice,
    minYAxis: min,
    maxYAxis: max
  }

  return mainData
}

export {
  transferResponseToHuman
}
