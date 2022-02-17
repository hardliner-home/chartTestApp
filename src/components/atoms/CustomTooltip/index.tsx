import { TooltipProps } from 'recharts'
import { Box } from '@mui/material'
import moment from 'moment'

// src
import { SelectedPeriodType } from '../../../types'

type CustomTooltipProps = {
  selectedPeriod: SelectedPeriodType
} & TooltipProps<any, any>

export default function CustomTooltip({ active, payload, selectedPeriod }: CustomTooltipProps): JSX.Element | null {
  if (active && payload && payload.length) {

    let format = ''
    switch (selectedPeriod.label) {
      case '1d':
        format = 'h:mm A'
        break
      case '1w':
        format = 'ddd h:mm A'
        break
      case '1m':
        format = 'ddd DD h:mm A'
        break
      case '1y':
      case 'All':
        format = 'MMM DD YYYY'
        break
      default:
        format = 'h:mm A'
        break
    }

    return (
      <Box sx={{ marginLeft: -4.4 }}>
        {moment(payload[0].payload.time).format(format)}
      </Box>
    )
  }
  return null
}
