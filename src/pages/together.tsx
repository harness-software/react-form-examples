import { Box, Grid, Typography } from '@material-ui/core'
import * as React from 'react'
import Layout from '../components/Layout'
import FormikForm from '../components/FormikForm'
import RHFForm from '../components/RHFForm'

interface Props {}

let render = 0

const Together: React.FC<Props> = (props: Props) => {
  const {} = props

  render += 1

  return (
    <Layout>
      <Typography variant="h2">Global Render {render}</Typography>
      <Grid container spacing={5}>
        <Grid item sm={6}>
          <FormikForm />
        </Grid>
        <Grid item sm={6}>
          <RHFForm />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Together
