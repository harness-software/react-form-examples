import * as React from 'react'
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Link } from 'gatsby-theme-material-ui'

export default function Index() {
  return (
    // TODO v5: remove once migration to emotion is completed
    <StyledEngineProvider injectFirst>
      <Container maxWidth="sm">
        <Box sx={{ my: 4, display: 'flex', flexFlow: 'column', gap: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Harness Software Form Examples
          </Typography>
          <Link to="/formik" color="secondary">
            Formik Example
          </Link>
          <Link to="/react-hook-form" color="secondary">
            React Hook Form Example
          </Link>
          <Link to="/together" color="secondary">
            Together
          </Link>
        </Box>
      </Container>
    </StyledEngineProvider>
  )
}
