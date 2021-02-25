import * as React from 'react'
import Layout from '../components/Layout'
import FormikForm from '../components/FormikForm'

interface Props {}

const FormikDemo: React.FC<Props> = (props: Props) => {
  const {} = props

  return (
    <Layout>
      <FormikForm />
    </Layout>
  )
}

export default FormikDemo
