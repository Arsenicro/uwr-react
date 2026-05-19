import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded'
import { Button, Paper, Stack, Typography } from '@mui/material'
import { Navigate, NavLink, Outlet } from 'react-router'
import { useMovieCatalogContext } from '../MovieCatalogContext'

export function AdminLayout() {
  const { role } = useMovieCatalogContext()

  if (role !== 'admin') {
    return <Navigate to="/" replace state={{ error: 'You do not have permission to access this page.' }} />
  }

  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
          Category Administration
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" startIcon={<CategoryRoundedIcon />} component={NavLink} to="/admin/categories" sx={{ '&.active': { color: 'secondary.main' } }}>
            Category List
          </Button>
          <Button
            variant="contained"
            startIcon={<AddCircleOutlineRoundedIcon />}
            component={NavLink}
            to="/admin/add-category"
            sx={{ '&.active': { color: 'secondary.main' } }}
          >
            Add Category
          </Button>
        </Stack>
      </Paper>
      <Outlet />
    </Stack>
  )
}
