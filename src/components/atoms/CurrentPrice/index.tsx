import { Grid, Typography } from '@mui/material'

interface CurrentPriceProps {
  activePrice: number
}

export default function CurrentPrice({ activePrice }: CurrentPriceProps): JSX.Element {

  return (
    <Grid item xs={12}>
      <Typography variant="h4">Ethereum</Typography>
      <Typography variant="h5">{activePrice}</Typography>
    </Grid>
  )
}
