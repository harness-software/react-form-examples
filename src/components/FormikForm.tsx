import { Formik, useFormik } from 'formik'
import { Box, TextField, Typography } from '@material-ui/core'
import * as React from 'react'
import { Button } from '@material-ui/core'
import * as yup from 'yup'

interface Props {
  hideCounter?: boolean
}

interface FormValues {
  companyName: string
  name: string
  email: string
  role: 'CEO' | 'CTO' | 'CFO' | 'Janitor'
  country: 'Canada' | 'USA'
}

const defaultValues: FormValues = {
  companyName: ``,
  name: ``,
  email: ``,
  role: `Janitor`,
  country: `Canada`,
}

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup.string('Enter your name').required('Name is required'),
})

let render = 0

const FormikForm: React.FC<Props> = (props: Props) => {
  const { hideCounter = false } = props
  const [results, setResults] = React.useState<FormValues | null>(null)

  render += 1
  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
      setResults(values)
    },
  })

  const reset = () => {
    formik.resetForm()
    setResults(null)
  }

  return (
    <>
      {!hideCounter && (
        <Typography variant="h2">Render Counter {render}</Typography>
      )}
      <Typography>Formik</Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 4,
        }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          fullWidth
          id="companyName"
          name="companyName"
          label="Company Name"
          variant="filled"
          type="text"
          value={formik.values.companyName}
          onChange={formik.handleChange}
          error={
            formik.touched.companyName && Boolean(formik.errors.companyName)
          }
          helperText={formik.touched.companyName && formik.errors.companyName}
        />
        <TextField
          fullWidth
          id="name"
          variant="filled"
          name="name"
          label="Name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          variant="filled"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
        <Button color="primary" variant="outlined" fullWidth onClick={reset}>
          Reset
        </Button>
      </Box>
      <Box>
        {!!results && (
          <Typography component="code">
            {JSON.stringify(results, null, 4)}
          </Typography>
        )}
      </Box>
    </>
  )
}

export default FormikForm
