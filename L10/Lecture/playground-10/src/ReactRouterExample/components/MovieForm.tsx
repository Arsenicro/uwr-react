import SaveRoundedIcon from '@mui/icons-material/SaveRounded'
import { Box, Button, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import type { Category, MovieInput } from '../../types'

type MovieFormProps = {
  title: string
  submitLabel: string
  categories: Category[]
  initialValue?: MovieInput
  onSubmit: (value: MovieInput) => void
}

const defaultMovie: MovieInput = {
  title: '',
  director: '',
  year: new Date().getFullYear(),
  rating: 7,
  categoryIds: [],
  description: '',
}

export function MovieForm({ title, submitLabel, categories, initialValue, onSubmit }: MovieFormProps) {
  const [value, setValue] = useState<MovieInput>(initialValue ?? defaultMovie)

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        {title}
      </Typography>
      <Box
        component="form"
        onSubmit={(event) => {
          event.preventDefault()
          onSubmit(value)
        }}
      >
        <Stack spacing={2}>
          <TextField
            label="Title"
            required
            value={value.title}
            onChange={(event) => setValue((prev) => ({ ...prev, title: event.target.value }))}
          />
          <TextField
            label="Director"
            required
            value={value.director}
            onChange={(event) => setValue((prev) => ({ ...prev, director: event.target.value }))}
          />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              label="Year"
              type="number"
              required
              value={value.year}
              onChange={(event) =>
                setValue((prev) => ({ ...prev, year: Number(event.target.value) || prev.year }))
              }
              fullWidth
            />
            <TextField
              label="Rating"
              type="number"
              slotProps={{ htmlInput: { min: 0, max: 10, step: 0.1 } }}
              required
              value={value.rating}
              onChange={(event) =>
                setValue((prev) => ({ ...prev, rating: Number(event.target.value) || prev.rating }))
              }
              fullWidth
            />
          </Stack>

          <TextField
            select
            label="Categories"
            required
            slotProps={{
              select: {
                multiple: true,
              },
            }}
            value={value.categoryIds}
            onChange={(event) => {
              const next = event.target.value
              setValue((prev) => ({
                ...prev,
                categoryIds: typeof next === 'string' ? next.split(',') : next,
              }))
            }}
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Description"
            multiline
            minRows={4}
            value={value.description}
            onChange={(event) => setValue((prev) => ({ ...prev, description: event.target.value }))}
          />

          <Button type="submit" variant="contained" startIcon={<SaveRoundedIcon />}>
            {submitLabel}
          </Button>
        </Stack>
      </Box>
    </Paper>
  )
}
