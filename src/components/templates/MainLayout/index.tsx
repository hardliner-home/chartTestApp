import { ReactElement } from 'react'
import { Container } from '@mui/material'

// src
import Header from '../../atoms/Header'

interface MainLayoutProps {
  children: ReactElement
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {

  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <Container sx={{ flexGrow: 1 }}>
        {children}
      </Container>
    </Container>
  )
}
