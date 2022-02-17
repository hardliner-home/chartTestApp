import { AppBar, Grid, Toolbar, Typography } from '@mui/material'

export default function Header(): JSX.Element {

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between">
          <Typography>Recharts</Typography>
          <Typography>Test app</Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
