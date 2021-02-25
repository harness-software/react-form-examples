import { Box, Typography, TextField, Button } from '@material-ui/core'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

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

const ReactHookFormExample: React.FC<Props> = (props: Props) => {
  const { hideCounter = false } = props
  const [results, setResults] = React.useState<FormValues | null>(null)
  render += 1

  const resolver = yupResolver<FormValues>(validationSchema)

  const form = useForm<FormValues>({
    mode: 'onChange',
    defaultValues,
    resolver,
  })

  const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2))
    setResults(values)
  }

  const reset = () => {
    form.reset()
    setResults(null)
  }

  const { register } = form

  return (
    <>
      {!hideCounter && (
        <Typography variant="h2">Render Counter {render}</Typography>
      )}
      <Typography>RHF</Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 4,
        }}
        component="form"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <TextField
          fullWidth
          id="companyName"
          name="companyName"
          label="Company Name"
          variant="filled"
          type="text"
          inputRef={register}
          error={!!form?.errors?.companyName ?? false}
          helperText={form?.errors?.companyName?.message ?? ''}
        />
        <TextField
          fullWidth
          id="name"
          variant="filled"
          name="name"
          label="Name"
          type="text"
          inputRef={register}
          error={!!form?.errors?.name ?? false}
          helperText={form?.errors?.name?.message ?? ''}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          variant="filled"
          label="Email"
          inputRef={register}
          error={!!form?.errors?.email ?? false}
          helperText={form?.errors?.email?.message ?? ''}
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

export default ReactHookFormExample
