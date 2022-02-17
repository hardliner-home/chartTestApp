export type PricePerTime = [
  number, number
]

export type ChartsResponse = {
  market_caps: PricePerTime[],
  prices: PricePerTime[],
  total_volumes: PricePerTime[]
}

export type DataType = {
  prices: {
    time: number,
    prices: number
  }[]
  minYAxis: number,
  maxYAxis: number
} | null

export type TabType = {
  value: number,
  label: string
}

export type SelectedPeriodType = {
  label: string,
  value: string
}
