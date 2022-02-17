import { useEffect, useMemo, useState } from 'react'
import { AxiosError, AxiosResponse } from 'axios'
import { Grid } from '@mui/material'
import { useDebouncedCallback } from 'use-debounce'

// src
import { axiosClient } from '../../../utils/apiUtils'
import { roundTo2th } from '../../../utils/mathUtils'
import { transferResponseToHuman } from '../../../utils/dataUtils'
import { ChartsResponse, DataType } from '../../../types'
import { currency, projectId, selectionToValueDict } from '../../../constants'

import CurrentPrice from '../../atoms/CurrentPrice'
import PeriodTabs from '../../atoms/PeriodTabs'
import ChartBody from '../../molecules/ChartBody'

export default function ChartPage(): JSX.Element {

  const [data, setData] = useState<DataType>(null)
  const [selectedTimePeriod, setSelectedTimePeriod] = useState<number>(0)
  const [activePrice, setActivePrice] = useState<number>(0)

  // function just to use MUI Tabs without pain
  // Object to keys array to map it
  const timeSlotsArray = useMemo<any>(() => {
    return Object.keys(selectionToValueDict).map((slot: string) => {
      return { label: slot, value: selectionToValueDict[slot as keyof typeof selectionToValueDict] }
    })
  }, [])

  const onSelectionChange = useDebouncedCallback((value) => {
    if (value.isTooltipActive && value.activePayload && value.activePayload.length) {
      setActivePrice(roundTo2th(value.activePayload[0].payload.prices))
    }
  }, 100)

  const setChartPeriod = (event: EventInit, newValue: number) => {
    setSelectedTimePeriod(newValue)
  }

  useEffect(() => {
    let url = `/api/v3/coins/${projectId}/market_chart?vs_currency=${currency}&days=${timeSlotsArray[selectedTimePeriod].value}`

    axiosClient.get(url)
      .then((response: AxiosResponse<ChartsResponse>) => {
        const prices = response.data.prices
        setActivePrice(roundTo2th(prices[prices.length - 1][1]))
        setData(transferResponseToHuman(prices))
      })
      .catch((error: AxiosError) => {
        console.log('error', error)
      })
  }, [selectedTimePeriod, timeSlotsArray])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>

        <Grid container spacing={2}>
          <CurrentPrice activePrice={activePrice} />

          <ChartBody
            data={data}
            onChange={onSelectionChange}
            selectedPeriod={timeSlotsArray[selectedTimePeriod]}
          />

          <PeriodTabs
            tabs={timeSlotsArray}
            period={selectedTimePeriod}
            handleChange={setChartPeriod}
          />
        </Grid>

      </Grid>
    </Grid>
  )
}
