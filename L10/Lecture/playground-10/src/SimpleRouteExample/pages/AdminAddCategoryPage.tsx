import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { Alert, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useMovieCatalogContext } from '../MovieCatalogContext'

export function AdminAddCategoryPage() {
  const { categories, addCategory, openAdminCategories } = useMovieCatalogContext()

  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
        Add Category
      </Typography>

      <Stack
        component="form"
        spacing={2}
        onSubmit={(event) => {
          event.preventDefault()

          const normalized = name.trim()
          if (!normalized) {
            setError('Category name is required.')
            return
          }

          const alreadyExists = categories.some(
            (category) => category.name.toLowerCase() === normalized.toLowerCase(),
          )

          if (alreadyExists) {
            setError('Category already exists.')
            return
          }

          setError(null)
          addCategory(normalized)
          openAdminCategories()
        }}
      >
        <TextField
          label="Category Name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        {error ? <Alert severity="error">{error}</Alert> : null}

        <Button type="submit" variant="contained" startIcon={<AddRoundedIcon />}>
          Save Category
        </Button>
      </Stack>
    </Paper>
  )
}
