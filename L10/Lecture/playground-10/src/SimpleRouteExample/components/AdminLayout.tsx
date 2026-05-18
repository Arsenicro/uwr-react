import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded'
import { Button, Paper, Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import { useMovieCatalogContext } from '../MovieCatalogContext'

type AdminLayoutProps = {
  children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { openAdminCategories, openAdminAddCategory } = useMovieCatalogContext()

  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
          Category Administration
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" onClick={openAdminCategories} startIcon={<CategoryRoundedIcon />}>
            Category List
          </Button>
          <Button
            variant="contained"
            onClick={openAdminAddCategory}
            startIcon={<AddCircleOutlineRoundedIcon />}
          >
            Add Category
          </Button>
        </Stack>
      </Paper>
      {children}
    </Stack>
  )
}
