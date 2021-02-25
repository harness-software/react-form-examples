import { Box } from '@material-ui/core'
import * as React from 'react'
import { useLocation } from '@reach/router'
import { Button } from 'gatsby-theme-material-ui'
import { ArrowBack } from '@material-ui/icons'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props
  const location = useLocation()

  return (
    <Box
      sx={{
        py: 10,
        display: 'flex',
        flexFlow: 'column',
        gap: 4,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {location.pathname !== '/' && (
        <Button startIcon={<ArrowBack />} to="/">
          Home page
        </Button>
      )}
      {children}
    </Box>
  )
}

export default Layout
