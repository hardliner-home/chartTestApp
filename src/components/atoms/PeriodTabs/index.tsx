import { Divider, Grid, Tab, Tabs } from '@mui/material'

// src
import { TabType } from '../../../types'

interface PeriodTabsProps {
  period: number,
  handleChange: (e: EventInit, value: number) => void,
  tabs: TabType[]
}

export default function PeriodTabs({ period, handleChange, tabs }: PeriodTabsProps): JSX.Element {

  return (
    <Grid item xs={12}>
      <Tabs value={period} onChange={handleChange}>
        {tabs.map((slot, index) =>
          <Tab
            key={index}
            label={slot.label}
            sx={{ padding: 0, minWidth: 25, marginRight: 2 }}
          />
        )}
      </Tabs>
      <Divider />
    </Grid>
  )
}
