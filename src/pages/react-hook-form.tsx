import * as React from 'react'
import Layout from '../components/Layout'
import RHFForm from '../components/RHFForm'

interface Props {}

const ReactHookFormExample: React.FC<Props> = (props: Props) => {
  const {} = props

  return (
    <Layout>
      <RHFForm />
    </Layout>
  )
}

export default ReactHookFormExample
