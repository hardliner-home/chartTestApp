import { Grid } from '@mui/material'
import { Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts'

// src
import { DataType, SelectedPeriodType } from '../../../types'
import CustomTooltip from '../../atoms/CustomTooltip'

interface ChartBodyProps {
  data?: DataType,
  onChange: (column: any) => void,
  selectedPeriod: SelectedPeriodType
}

export default function ChartBody({ data, onChange, selectedPeriod }: ChartBodyProps): JSX.Element {

  return (
    <Grid item xs={12}>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data ? data.prices : undefined}
          onMouseMove={activeChartColumn => onChange(activeChartColumn)}
        >
          <YAxis
            hide
            type="number"
            domain={data ? [data.minYAxis, data.maxYAxis] : undefined}
          />
          <Line
            type="monotone"
            dataKey="prices"
            dot={false}
            strokeWidth={2}
            stroke="#1976d2"
          />
          <Tooltip
            content={(props) => <CustomTooltip {...props} selectedPeriod={selectedPeriod} />}
            position={{ y: -15 }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Grid>
  )
}
